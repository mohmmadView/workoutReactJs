import Container from "./utils/container";
import Title from "./utils/Title";
import ManagingState from './1-Managing_State/index.jsx';
import ReactContext from "./2-ReactContext/index.jsx";
import EscapeHatches from "./3-Escape_Hatches/index.jsx";
import Effects from "./4-Effects/index.jsx";
import "./App.css";
import "./index.css";
import DataText from "./TasksContext.jsx";
import { useState ,useRef } from "react";
export default function App() {
  let [lang, setLang] = useState(true);
  let ReactContextRef = useRef(0);

  return (
    <div className="w-full">
        <div className="flex justify-center ">
            <nav className="flex fixed py-4 justify-between   w-2/6 list-none  bg-success-content text-success">
          <li ><a className="p-4 mb-10 hover:bg-black" href="#managing-state">Managing State</a></li>
          {console.log(ReactContextRef)}
          <li ><a className="p-4 hover:bg-black" href="#react-context" ref={ReactContextRef}>React Context</a> </li>
          <li><a className="p-4 hover:bg-black " href="#escape-hatches">3-Escape Hatches</a></li>
          <li><a className="p-4 hover:bg-black  " href="#effects">4-Effects</a></li>
        </nav>
        </div>
      <Title  id="managing-state" title="Managing State" />
      <div className="z-50 flex flex-col gap-2 p-2  fixed top-5 right-5 bg-primary-content ring-8 ring-primary  ring-offset-2 rounded-xl ">
        <button
          className={` btn btn-circle btn-outline mx-2 font-bold ${lang?`btn-primary `:`btn-success btn-active`}`}
          onClick={() => {
            setLang(false);
          }}>
          fa
        </button>
        <button
          className={` btn btn-circle btn-outline mx-2 font-bold ${lang?` btn-active btn-success`:`btn-primary`}`}
          onClick={() => {
            setLang(true);
          }}>
          En
        </button>
      </div>
      <ManagingState lang={lang} />
     <ReactContext lang={lang} />
      
     
        <EscapeHatches lang={lang} />
      <Title id="effects" title="Effects" />
        <Effects lang={lang} />
        <Container title={2} ColorDivider={23}></Container>
        <Container></Container>
        <Container></Container>
   
    </div>
  );
}
