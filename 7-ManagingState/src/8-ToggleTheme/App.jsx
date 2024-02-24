import  { useState } from "react";
import ThemedComponent from "./ThemedComponent";
import { ThemeProvider } from "./ThemeContext";
import Code from "./Code";
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
      <Code className='mt-4' widthIN={"w-full"} language={"js"}  />
    </ThemeProvider>
  );
};

export default App;
