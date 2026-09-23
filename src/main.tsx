import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { mountStaticShellOverlay } from "./lib/staticShell";

// Must run before render: React replaces the static content of #root.
mountStaticShellOverlay();

createRoot(document.getElementById("root")!).render(<App />);
