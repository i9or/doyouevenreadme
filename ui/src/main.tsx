import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { App } from "./App.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Can't find root element to mount the application");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
