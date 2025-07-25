import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "tailwindcss";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>
);
