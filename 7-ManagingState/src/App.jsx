import Container from "./utils/container";
import Title from "./utils/Title";
import LangBtn from "./utils/components/lang-btn";
import NavFixed from "./utils/components/nav-fixed";
import ManagingState from './1-Managing_State/index.jsx';
import ReactContext from "./2-ReactContext/index.jsx";
import EscapeHatches from "./3-Escape_Hatches/index.jsx";
import Effects from "./4-Effects/index.jsx";
import CustomHooks from "./5-CustomHooks/index.jsx";
import "./App.css";
import "./index.css";
// import DataText from "./TasksContext.jsx";
import { useState  } from "react";
export default function App() {
  let [lang, setLang] = useState(true);

  return (
    <div className="w-full">
        <NavFixed  /> 
      <Title  id="managing-state" title="Managing State" />
       <LangBtn setLang={setLang} lang={lang} />
      <ManagingState lang={lang} />
     <ReactContext lang={lang} />
      
     
        <EscapeHatches lang={lang} />
      <Title id="effects" title="Effects" />
        <Effects lang={lang} />
        <Title id="custom-hooks" title="Custom Hooks" />
         <CustomHooks/>
        <Container title={2} ColorDivider={23}></Container>
        <Container></Container>
        <Container></Container>
   
    </div>
  );
}
