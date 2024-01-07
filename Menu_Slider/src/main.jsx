import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./Header";
import "./index.css";
import Center from "./center";
function DarkModeTheme() {
  const [DarkMode, setDarkMode] = useState(false);
  const HandleDarkMode = () => setDarkMode((Mode) => !Mode);
  return (
    <>
      <div></div>
    </>
  );
}
export default DarkModeTheme;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeTheme />
    <Header />
    <Center />

    <App />
  </React.StrictMode>,
);
