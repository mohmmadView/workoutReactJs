import { useState } from "react";
import logoReactXs from "../assets/react-logo-xs.png";
import Prism from "prismjs";
import PrismGe from "../utils/Prism";
import "./BtnChangeClick.css";

const code = `
const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there"
  ]
];

export default function BtnChangeClick(){

    const [activeContentIndex, setActiveContentIndex] = useState(0);

    return (
        <div className="flex">
      <div className="w-1/2">
        <header>
          <img src={logoReactXs} alt="React logo" />
          <div>
            <h1>React.js</h1>
            <p>i.e., using the React library for rendering the UI</p>
          </div>
        </header>
  
        <div id="tabs">
          <menu>
            <button
              className={activeC            ontentIndex === 0 ? "active" : ""}
              onClick={() => setActiveContentIndex(0)}
            >
              Why React?
            </button>
            <button
              className={activeContentIndex === 1 ? "active" : ""}
              onClick={() => setActiveContentIndex(1)}
            >
              Core Features
            </button>
            <button
              className={activeContentIndex === 2 ? "active" : ""}
              onClick={() => setActiveContentIndex(2)}
            >
              Related Resources ede
            </button>
            <button
              className={activeContentIndex === 3 ? "active" : ""}
              onClick={() => setActiveContentIndex(3)}
            >
              React vs JS
            </button>
          </menu>
          <div id="tab-content">
            <ul>
              {content[activeContentIndex].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
         <div className="w-1/2 mt-4 p-5 mx-32 mockup-code overflow-scroll bg-violet-300 text-primary-content">
<code>
    <PrismGe code={this.code} language="javascript" ></PrismGe>
</code>

</div>
      </div>
    </div>
    );
  };
`;
const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
];
/**
 * Renders a button that changes the active content index.
 *
 * @return {JSX.Element} The JSX element representing the button.
 */
export default function BtnChangeClick() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className="flex h-96 m-4 mx-8">
      <div className="w-1/2">
        <header>
          <img src={logoReactXs} alt="React logo" />
          <div>
            <h1>React.js</h1>
            <p>i.e., using the React library for rendering the UI</p>
          </div>
        </header>
        <div id="tabs">
          <menu>
            <button
              className={activeContentIndex === 0 ? "active" : ""}
              onClick={() => setActiveContentIndex(0)}
            >
              Why React?
            </button>
            <button
              className={activeContentIndex === 1 ? "active" : ""}
              onClick={() => setActiveContentIndex(1)}
            >
              Core Features
            </button>
            <button
              className={activeContentIndex === 2 ? "active" : ""}
              onClick={() => setActiveContentIndex(2)}
            >
              Related Resources ede
            </button>
            <button
              className={activeContentIndex === 3 ? "active" : ""}
              onClick={() => setActiveContentIndex(3)}
            >
              React vs JS
            </button>
          </menu>
          <div id="tab-content">
            <ul>
              {content[activeContentIndex].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/2 mt-4 p-5 mx-8 mockup-code overflow-scroll bg-violet-300 text-primary-content">
        <code>
          <PrismGe code={code} language="javascript"></PrismGe>
        </code>
      </div>
    </div>
  );
}
