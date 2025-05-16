import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <video
      autoPlay
      muted
      loop
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
    >
      <source src="/earth.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <App />
  </StrictMode>
);
