import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NavFixed from "./utils/components/nav-fixed";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <div className="container flex m-auto ">
     <NavFixed />
      <main className="w-10/12">
        <App />
      </main>
   </div>
    <SpeedInsights />
  </React.StrictMode>,
);
