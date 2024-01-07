import { createContext, createElement } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import imgRoadMap from "./Screenshot_20230419_183009.png";
import imgVirtualDom from "../../3-Virtual DOM/virtualDOM_Limoonad_OP.png";
import {
  BeakerIcon,
  AcademicCapIcon,
  ArchiveBoxIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

function RoadMap() {
  return (
    <div>
      <img className="w-full h-full" src={imgRoadMap} />
      <a href="https://roadmap.sh/react">RoadMap.sh</a>
    </div>
  );
}

function Lesson(props) {
  let isTrue = false;
  let a = null;
  a = imgVirtualDom;

  return (
    <section className="font-serif">
      <div className="flex h-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
          />
        </svg>
        <BeakerIcon className="w-5" />
        <AcademicCapIcon />
        <ArchiveBoxIcon />
        <ArrowTrendingDownIcon />
      </div>
      <button
        className="bg-yellow-900 text-white border border-white w-full "
        onClick={(event) => {
          event.currentTarget.nextElementSibling.classList.toggle("hidden");
        }}
      >
        <h1 className="pb-4 bg-stone-900/70 inline-block px-8 border rounded-xl ">
          {props.subject}
        </h1>
      </button>
      <div className="hidden">
        <pre
          id="title"
          className=" w-auto h-auto  text-white font-bold  text-lg bg-gray-600/90 p-6 "
        >
          {props.title}
        </pre>
        <pre className="border-4 border-t-yellow-700 bg-stone-800 text-gray-300 pb-2 pt-2">
          {props.code}

          <img className="w-2/3 mx-auto m-3" src={props.image} alt="" />
        </pre>
      </div>
    </section>
  );
}
function IndexLesson(props) {
  return (
    <div id="indexReact" className="w-full m-5 ">
      <RoadMap />
      <h1 className=""></h1>
      <Lesson
        title="1.install node 2-terminal in visCode type  npm create vite  "
        subject="0-create React"
      />
      <h1 className=""></h1>
      <Lesson
        title="This funny tag syntax is neither a string nor HTML.
        It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
        JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started."
        subject="1-jsx"
      />
      <Lesson
        subject="2-components"
        title="Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
Function and Class Components The simplest way to define a component is to write a JavaScript function:"
        code="
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

This function is a valid React component because it accepts a single “props”
 (which stands for properties) object argument with data and returns a React element.
  We call such components “function components” because they are literally JavaScript functions.
  
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
"
      />
      <Lesson
        subject="3-Virtual Dom in React"
        image={imgVirtualDom}
        title="React uses the virtual DOM as a strategy to compute minimal DOM operations when re-rendering the UI. It is not in rivalry with or faster than the real DOM. The virtual DOM provides a mechanism that abstracts manual DOM manipulations away from the developer,"
      />
      <Lesson
        subject="4-Props"
        title="This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions."
        code=" function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
You can also use an ES6 class to define a component:
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
"
      />

      <Lesson
        subject="5-State"
        title="
 در ریکت یک شی جاوا اسکریپت است که داده‌های پویای یک کامپوننت را ذخیره می‌کند State


State در ریکت برای ایجاد رابط‌های کاربری تعاملی و پویای استفاده می‌شود. به عنوان مثال، می‌توان از State برای ذخیره مقدار یک کنترل ورودی استفاده کرد تا وقتی کاربر مقدار کنترل را تغییر دهد، رابط کاربری به‌روز شود.

State در ریکت به صورت محلی در هر کامپوننت ذخیره می‌شود. به عبارت دیگر، هر کامپوننت State خاص خود را دارد که از سایر کامپوننت‌ها جدا است.
"
      />
    </div>
  );
}
export default IndexLesson;
