import { useEffect, useState } from "react";
import Prism from "prismjs";
import "./../../index.css";
export default function Code() {
  useEffect(() => {
    Prism.highlightAll(Prism.highlight);
  }, []);
  let [overflow, setOverflow] = useState(false);
  function handleClick() {
    if (!overflow) {
      setOverflow(true);
    } else {
      setOverflow(false);
    }
  }
  return (
    <div className={`w-full  ml-2`}>
      <div className="join m-auto w-3/6 flex justify-center  ">
        <a href="#App" className="join-item btn btn-outline  ">
          App.jsx
        </a>
        <a href="#ThemeContext" className="join-item btn btn-outline  ">
          ThemeContext.jsx
        </a>
        <a href="#ThemedComponent" className="join-item btn btn-outline">
        ThemedComponent.jsx
        </a>
      
      </div>
      <div
        className={
          overflow
            ? ``
            : ` h-96 overflow-auto m-3.5` +
              `w-full p-1 m-3 mockup-code text-white rounded-none text-left`
        }>
        {codeTaskApp.map((code, index) => (
          <code
            key={index}
            id={fileName[index]}
            tabIndex={index}
            className="Code">
            <h2 className="flex justify-around text-center text-success p-4 font-bold ">
              {fileName[index] + ".jsx"}
              <svg
                className=" fill-red-100 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  document.body.insertAdjacentHTML(
                    "afterbegin",
                    `
            <div id="alert" role="alert" class="alert alert-success w-1/12 fixed bottom-2 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p>Copy</p>
            </div>
            `,
                  );
                  setTimeout(
                    () => document.querySelector("#alert").remove(),
                    3000,
                  );
                }}
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <path d="M3 3a2 2 0 0 1 2-2h9.982a2 2 0 0 1 1.414.586l4.018 4.018A2 2 0 0 1 21 7.018V21a2 2 0 0 1-2 2H4.75a.75.75 0 0 1 0-1.5H19a.5.5 0 0 0 .5-.5V8.5h-4a2 2 0 0 1-2-2v-4H5a.5.5 0 0 0-.5.5v6.25a.75.75 0 0 1-1.5 0Zm12-.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0-.146-.336l-4.018-4.018A.5.5 0 0 0 15 2.5Z"></path>
                <path d="M4.53 12.24a.75.75 0 0 1-.039 1.06l-2.639 2.45 2.64 2.45a.75.75 0 1 1-1.022 1.1l-3.23-3a.75.75 0 0 1 0-1.1l3.23-3a.75.75 0 0 1 1.06.04Zm3.979 1.06a.75.75 0 1 1 1.02-1.1l3.231 3a.75.75 0 0 1 0 1.1l-3.23 3a.75.75 0 1 1-1.021-1.1l2.639-2.45-2.64-2.45Z"></path>
              </svg>
            </h2>
            <pre>
              <code className={`language-${"js"}`}>{code}</code>
            </pre>
          </code>
        ))}
      </div>
      <button
        className="w-[100%]  btn  btn-warning rounded-t"
        onClick={handleClick}>
        more
      </button>
    </div>
  );
}
let fileName = ["App", "ThemeContext", "ThemedComponent"];
let codeTaskApp = [
  `
  import  { useState } from "react";
  import ThemedComponent from "./ThemedComponent";
  import { ThemeProvider } from "./ThemeContext";
  import Code from "./../utils/Prism";
  import StringCode from "./../codeString/AllCodeString";
  /**
   * Render the App component.
   *
   * @return {JSX.Element} The rendered App component.
   */
  
  const App = () => {
    let [codeTheme, setCodeTheme] = useState(6);
  
    return (
      <ThemeProvider>
        <div>
          <h1 className="text-3xl font-bold underline text-center p-4 text-warning">
            App Theme Context
          </h1>
          <ThemedComponent />
        </div>
        <div className="flex justify-between">
          <button
            className="w-1/3 btn btn-primary btn-circle"
            onClick={() => {
              setCodeTheme((codeTheme = 6));
            }}>
            App.jsx
          </button>
          <button
            className="w-1/3 btn btn-primary btn-circle"
            onClick={() => {
              setCodeTheme((codeTheme = 7));
            }}>
            ThemeContext.jsx
          </button>
          <button
            className="w-1/3 btn btn-primary btn-circle"
            onClick={() => {
              setCodeTheme((codeTheme = 8));
            }}>
            ThemedComponent.jsx
          </button>
        </div>
        <Code widthIN={"w-full"} language={"js"} code={StringCode[codeTheme]} />
      </ThemeProvider>
    );
  };
  
  export default App; `,
  `
  import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
/**
 * Creates a theme provider component that wraps the provided children components.
 *
 * @param {Object} props - The props object containing the children component.
 * @param {ReactNode} props.children - The children component to be wrapped.
 * @return {JSX.Element} - The theme provider component.
 */
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("success");
  /**
   * Toggles the theme between "success" and "secondary".
   *
   * @return {void} No return value.
   */
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "success" ? "secondary" : "success"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
/**
 * Returns the current theme from the ThemeContext.
 *
 * @return {Theme} The current theme object.
 */
const useTheme = () => {
  return useContext(ThemeContext);
};
export { ThemeProvider, useTheme };
   `,
  `
 import { useTheme } from "./ThemeContext";
/**
 * Renders a themed component.
 *
 * @return {JSX.Element} The JSX element representing the themed component.
 */
const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={w-2/3 m-auto p-2 
    {theme === "success" ? "bg-success-content" : "bg-secondary-content"}
    {theme === "success" ? "text-success" : "text-secondary"}}>
      <h2 className="text-center text-lime-600">Themed Component</h2>
      <p className="text-center p-4">
        Current Theme:
        <span className="font-bold text-red-600 p-2">{theme} </span>{" "}
      </p>
      <div className="flex justify-center p-4">
        <button className="btn btn-secondary " onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemedComponent;

   `,
];
