import Container from "./utils/container";
import Title from "./utils/Title";
import ManagingState from './1-Managing_State/index.jsx';
import ReactContext from "./2-ReactContext/index.jsx";
import EscapeHatches from "./10-Escape_Hatches/index.jsx";
import Effects from "./11-Effects/index.jsx";
import "./App.css";
import "./index.css";
import DataText from "./TasksContext.jsx";
import { useState } from "react";
export default function App() {
  let [lang, setLang] = useState(true);

  return (
    <div className="w-full">
      <Title title="Managing State" />
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
      
  
      <Title title="Escape Hatches" />
      
      <Container Title="Example of Escape Hatches">
           {lang ? (
      <>
          {DataText[18].EscapeHatches()}
        </>
      ) : (
      <>
            {DataText[19].EscapeHatchesFa()}
          
      </>
        
      )}
        <EscapeHatches lang={lang} />
      </Container>
      <Title title="Effects" />
        <Effects lang={lang} />
        <Container title={2} ColorDivider={23}></Container>
        <Container></Container>
        <Container></Container>
   
    </div>
  );
}
