import React, { useState } from "react";
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
          }}
        >
          App.jsx
        </button>
        <button
          className="w-1/3 btn btn-primary btn-circle"
          onClick={() => {
            setCodeTheme((codeTheme = 7));
          }}
        >
          ThemeContext.jsx
        </button>
        <button
          className="w-1/3 btn btn-primary btn-circle"
          onClick={() => {
            setCodeTheme((codeTheme = 8));
          }}
        >
          ThemedComponent.jsx
        </button>
      </div>
      <Code widthIN={"w-full"} language={"js"} code={StringCode[codeTheme]} />
    </ThemeProvider>
  );
};

export default App;
