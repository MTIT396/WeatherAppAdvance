import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TempProvider from "./contexts/TempContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TempProvider>
      <App />
    </TempProvider>
  </StrictMode>
);
