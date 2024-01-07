import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function Recipe({ drinkers }) {
    return (
      <ol>
        <li>Boil {drinkers} cups of water.</li>
        <li>
          Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
        </li>
        <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
      </ol>
    );
  }
  function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
  }
  return (
    <main className="">
      <div className="flex justify-center">
        <h1 className="inline-block  text-5xl font-bold  underline p-4 border mt-3 border-yellow-800 text-yellow-600 ">
          {" "}
          jsx{" "}
        </h1>
      </div>
      <h1 className=" text-3xl font-bold underline p-4 text-center mt-3 ">
        What is a Jsx{" "}
        <span className="text-green-500 text-5xl font-mono font-extrabold">
          {" "}
          ?
        </span>
      </h1>
      <section className="flex justify-center">
        <div className="w-3/4  bg-slate-700 p-8 border ">
          <p className="text-justify mb-6">
            JSX stands for JavaScript XML. It allows writing HTML in JavaScript
            and converts the HTML tags into React elements.
            <br />{" "}
            <span className="text-yellow-600 font-bold text-2xl">
              {" "}
              JSX{" "}
            </span> ({" "}
            <span className="text-xl text-green-400">
              {" "}
              JavaScript Extension
            </span>{" "}
            )<br />
            is a React extension which allows writing JavaScript code that looks
            like HTML. In other words, JSX is an HTML-like syntax used by React
            that extends ECMAScript so that HTML-like syntax can co-exist with
            JavaScript/React code. The syntax is used by preprocessors (i.e.,
            transpilers like babel) to transform HTML-like syntax into standard
            JavaScript objects that a JavaScript engine will parse.
          </p>

          <ul className="list-disc pb-6 pl-6  text-green-400">
            <li className=" ">JSX stands for JavaScript XML.</li>
            <li className=" ">JSX allows us to write HTML in React.</li>
            <li className=" ">
              JSX makes it easier to write and add HTML in React.
            </li>
          </ul>
          <h1 className="text-2xl p-4 text-white">JSX file :</h1>
          <div className="mockup-code">
            <pre data-prefix="$">
              <code className="">
                <span className="text-purple-400">const</span> element{" "}
                <span className=" ">=</span>{" "}
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>h1
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token plain-text">Hello, world!</span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>h1
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token punctuation">;</span>
              </code>
            </pre>
            <pre data-prefix="$" className="">
              <span className="token keyword text-purple-400">const</span> root{" "}
              <span className="token operator">=</span> ReactDOM
              <span className="token punctuation">.</span>
              <span className="token function">createRoot</span>
              <span className="token punctuation">(</span>document
              <span className="token punctuation">.</span>
              <span className="token function">getElementById</span>
              <span className="token punctuation">(</span>
              <span className="token string">'root'</span>
              <span className="token punctuation">)</span>
              <span className="token punctuation">)</span>
              <span className="token punctuation">;</span>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>
                root<span className="token punctuation">.</span>
                <span className="token function">render</span>
                <span className="token punctuation">(</span>myElement
                <span className="token punctuation">)</span>
                <span className="token punctuation">;</span>
              </code>
            </pre>
          </div>

          <h1 className="text-2xl p-4 text-white">Corresponding Output :</h1>
          <div className="mockup-code">
            <pre data-prefix="">
              <span>
                React.<span className="text-yellow-500">createElement(</span>
                <span className="text-green-500">"div"</span>
                <span>,&nbsp;</span>
                <span className="text-red-600">null</span>
                <span>,&nbsp;</span>
                <span className="text-green-500">"Hello&nbsp;JavaTpoint"</span>
                <span>);&nbsp;&nbsp;</span>
              </span>
            </pre>
          </div>
          <p className="mt-5">
            The above line creates a react element and passing three arguments
            inside where the first is the name of the element which is div,
            second is the attributes passed in the div tag, and last is the
            content you pass which is the "Hello JavaTpoint."
          </p>
        </div>
        <section>
          <h1>Spiced Chai Recipe</h1>
          <h2>For two</h2>
          <Recipe drinkers={2} />
          <h2>For a gathering</h2>
          <Recipe drinkers={4} />
        </section>
        <Cup guest={1} />
        <Cup guest={2} />
        <Cup guest={3} />
      </section>
    </main>
  );
}

export default App;
