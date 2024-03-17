import { useState } from "react";
import Prism from "../utils/Prism";
import CodePanel from "../codeString/AllCodeString";
function ContainerPanel({ men, and }) {
  let [active, setActive] = useState(0);

  return (
    <div className="  w-11/12 mx-auto my-12 bg-base-300 p-10 text-xl shadow-md shadow-info/50 hover:shadow-info">
      <div className="flex flex-col ">
        <div className=" m-4">
          <Panel
            itemColors="text-accent bg-accent-content"
            Title="About React"
            isActive={0}
            onShow={() => setActive(0)}
            childern={
              "React is a popular JavaScript library for building user interfaces (UIs). It is based on a component-based architecture and virtual DOM. React is declarative, efficient, and popular."
            }
          />
          <Panel
            itemColors="text-info bg-info-content"
            Title="How React Works"
            isActive={1}
            onShow={() => setActive(1)}
            childern={
              "Here is a shorter version of my previous explanation of how React works: React is a UI library based on a virtual DOM. It uses components and declarative updates to make UI development efficient and modular"
            }
          />
          <Panel
            itemColors={"text-error bg-error-content"}
            Title="Is it good to learn react ?"
            isActive={2}
            onShow={() => setActive(2)}
            childern={
              "Learning React can be a valuable investment for aspiring web developers. is a popular JavaScript library for building user interfaces, backed by a strong community and employed by renowned companies like Facebook, Netflix, and Airbnb. React's component-based architecture, virtual DOM, and declarative updates make it efficient, modular, and well-suited for complex UI development. To embark on your React learning journey, I recommend exploring official documentation, online courses, or tutorials like Freecodecamp, YouTube videos, or MDN Web Docs."
            }
          />
          <Panel
            itemColors={"text-warning bg-warning-content"}
            Title="Where to start to learn react"
            isActive={3}
            onShow={() => setActive(3)}
            childern={
              " To learn React, you can start with official documentation, online courses, or tutorials. FreeCodeCamp, Egghead.io, and Codecademy offer free courses. YouTube videos also provide great learning opportunities. MDN Web Docs is a comprehensive resource for specific React topics.Begin with the basics like components, props, and state. Practice by building small projects. Seek help if you encounter difficulties. With dedication, you can master React development."
            }
          />
          <p className="pt-4  text-success"></p>
        </div>
        {men}
        {and}
        <Prism
          widthIN="w-full "
          language="js"
          code={CodePanel[3]}
          fileName={"4-Panel.jsx"}
        />
      </div>
    </div>
  );
  function Panel({ Title, childern, isActive, onShow, itemColors }) {
    return (
      <div className={`w-full p-4 border border-warning  ${itemColors}`}>
        <span className="">{Title}</span>
        <p className="pt-4 ">{isActive === active ? childern : ""}</p>
        <button className="btn btn-primary mt-4" onClick={onShow}>
          Show
        </button>
      </div>
    );
  }
}
export default ContainerPanel;
