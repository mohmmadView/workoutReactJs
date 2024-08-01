import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import "./index.css";
import IndexLesson from "./IndexLesson ";
import Example from "./Example";
import Dialog from "./MyModal";
import Roadmap from './CustomRoadMap/index'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Header /> */}
    <Roadmap />
    <IndexLesson />
    <Dialog />
    <Example />
  </React.StrictMode>,
);
