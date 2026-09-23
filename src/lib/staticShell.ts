/**
 * Keeps the static home hero (index.html, #ss-home) on screen while the app
 * loads, so a slow phone sees logo, prices and a WhatsApp button instead of
 * a spinner on a blank page.
 *
 * React wipes #root when it mounts, so before that we copy the hero into a
 * fixed overlay; the home page removes it once its own UI has painted.
 *
 * Only on "/": the service worker answers every URL with index.html, so other
 * routes can carry #ss-home too, and nothing on them would dismiss it.
 */
const OVERLAY_ID = "ss-overlay";
// If the home page never mounts (script error, offline), still get out of the
// way eventually. The overlay stays useful until then: its links work.
const SAFETY_TIMEOUT_MS = 15000;

let dismissed = false;

export const mountStaticShellOverlay = () => {
  if (window.location.pathname !== "/") return;
  const hero = document.querySelector("#ss-home .ss-hero");
  if (!hero) return;
  const overlay = document.createElement("div");
  overlay.id = OVERLAY_ID;
  const wrap = document.createElement("div");
  wrap.className = "ss";
  wrap.appendChild(hero.cloneNode(true));
  overlay.appendChild(wrap);
  document.body.appendChild(overlay);
  window.setTimeout(dismissStaticShell, SAFETY_TIMEOUT_MS);
};

export const dismissStaticShell = () => {
  if (dismissed) return;
  const overlay = document.getElementById(OVERLAY_ID);
  if (!overlay) return;
  dismissed = true;
  overlay.classList.add("ss-out");
  window.setTimeout(() => overlay.remove(), 400);
};
