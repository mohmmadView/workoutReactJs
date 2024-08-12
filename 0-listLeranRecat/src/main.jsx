import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import "./index.css";
import Navbar from "./Navbar";
import IndexLesson from "./IndexLesson ";
import Example from "./Example";
import Dialog from "./MyModal";
import Roadmap from './CustomRoadMap/index'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Header /> */}
    <Navbar  /> 
    <Roadmap />
    <IndexLesson />
    <Dialog />
    <Example />
  </React.StrictMode>,
);
