import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import("aos").then((AOS) => AOS.init({ duration: 800, once: true }));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
