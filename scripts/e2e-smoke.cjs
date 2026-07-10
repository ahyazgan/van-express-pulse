// End-to-end smoke test — drives the real app in a headless browser.
// Requires the dev server running (npm run dev, http://localhost:8080).
// Run: npm run test:e2e
//
// Verifies: page renders, MapLibre map draws, mode toggle works, and the quote
// shows the right currency (₺ for Yurt İçi, € for Avrupa) with no console errors.

const { chromium } = require("playwright");

const BASE = process.env.E2E_URL || "http://localhost:8080";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 420, height: 900 } });
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));

  const fail = (msg) => { console.error("❌ " + msg); process.exitCode = 1; };

  await page.goto(BASE, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(2500);

  if ((await page.locator("#root").innerHTML()).length < 200) fail("app did not render");
  if ((await page.locator("canvas.maplibregl-canvas").count()) === 0) fail("map canvas missing");

  try { await page.getByRole("button", { name: "Kabul Et" }).click({ timeout: 3000 }); } catch {}
  await page.waitForTimeout(300);

  const sheet = page.locator(".bottom-sheet");

  // Domestic → TRY
  await sheet.getByRole("button", { name: "Yurt İçi" }).click();
  await page.waitForTimeout(400);
  await page.getByPlaceholder("Nereye?").fill("Ankara");
  await page.waitForTimeout(600);
  await sheet.getByRole("button", { name: "Fiyat Al" }).click();
  await page.waitForTimeout(900);
  const dom = (await page.locator('[role="dialog"]').last().innerText()).replace(/\s+/g, " ");
  console.log("Yurt içi (İst→Ankara):", dom.match(/Tahmini Navlun ([^F]+)/)?.[1]?.trim() || dom.slice(0, 120));
  if (!dom.includes("₺") || dom.includes("€")) fail("domestic quote should be in ₺");
  await page.keyboard.press("Escape");
  await page.waitForTimeout(600);

  // Europe → EUR
  await sheet.getByRole("button", { name: "Avrupa" }).click();
  await page.waitForTimeout(400);
  await page.getByPlaceholder("Nereye?").fill("Berlin");
  await page.waitForTimeout(600);
  await sheet.getByRole("button", { name: "Fiyat Al" }).click();
  await page.waitForTimeout(900);
  const eu = (await page.locator('[role="dialog"]').last().innerText()).replace(/\s+/g, " ");
  console.log("Avrupa (İst→Berlin):", eu.match(/Tahmini Navlun ([^F]+)/)?.[1]?.trim() || eu.slice(0, 120));
  if (!eu.includes("€") || eu.includes("₺")) fail("europe quote should be in €");

  if (errors.length) { console.error("Console errors:", errors.slice(0, 12)); fail("console errors present"); }

  await browser.close();
  if (!process.exitCode) console.log("✅ E2E smoke passed");
})().catch((e) => { console.error("SCRIPT FAIL:", e.message); process.exit(1); });
