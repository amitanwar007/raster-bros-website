import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

try {
  createRoot(container).render(<App />);
} catch (error) {
  console.error("Failed to render app:", error);
  container.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100vh; color: white; font-family: system-ui;">
    <div style="text-align: center;">
      <h1>Failed to load app</h1>
      <p>Please refresh the page</p>
    </div>
  </div>`;
}

// Register service worker for offline support and caching
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((error) => {
    console.log('Service Worker registration failed:', error);
  });
}
