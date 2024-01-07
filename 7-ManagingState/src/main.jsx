import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="w-11/12 flex m-auto">
      <App />
    </main>
    <SpeedInsights />
  </React.StrictMode>,
);
