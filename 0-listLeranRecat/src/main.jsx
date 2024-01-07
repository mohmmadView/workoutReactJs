import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import "./index.css";
import IndexLesson from "./IndexLesson ";
import Example from "./Example";
import Dialog from "./MyModal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <IndexLesson />
    <Dialog />
    <Example />
  </React.StrictMode>,
);
