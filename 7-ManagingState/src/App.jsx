import Container from "./utils/container";
import Title from "./utils/Title";
import Example from "./utils/Example";
import ManagingState from './1-Managing_State/index.jsx'
import ChatList from "./5-ChatList";
import NoteReducer from "./6-Note-reducer/index";
import PassingDataNesting from "./7-PassingData/index.jsx";
import ToggleTheme from "./8-ToggleTheme/App.jsx";
import InputActive from "./9-inputIsActive/index.jsx";
import EscapeHatches from "./10-Escape_Hatches/index.jsx";
import Effects from "./11-Effects/index.jsx";
import "./App.css";
import "./index.css";
import DataText from "./TasksContext.jsx";
import CardImport from "./utils/card_Import.jsx";
import CardImportFa from "./utils/card_ImportFa.jsx";
import imgReactContext from "./assets/Screenshot-2024-01-02-124809.png";
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
      {lang ? (
        <Container Title="Preserving and resetting state ">
          {DataText[8].PreservingAndResetting()}
        </Container>
      ) : (
        <Container Title="state حفظ و تنظیم مجدد ">
          {DataText[9].PreservingAndResettingFa()}
        </Container>
      )}
      <ChatList />
      {lang ? (
        <Container Title="Extracting state logic into a reducer ">
          {DataText[10].ExtractingStateLogic()}
        </Container>
      ) : (
        <Container  Title="استخراج منطق stage در یک کاهنده ">
          {DataText[11].ExtractingStateLogicFa()}
        </Container>
      )}
      <Title title="React Context" />
      {lang ? (
        <Container Title="What is React Context ?">
          {DataText[14].WhatIsReactContext()}
        </Container>
      ) : (
        <Container  Title="چیست؟ React Context ">
          {DataText[15].WhatIsReactContextFa()}
        </Container>
      )}
      {lang ? (
        <Container Title="How is React Context Different from Prop Threading?">
          {DataText[16].ReactContextDifferent()}
          <img
            src={imgReactContext}
            className="w-full h-full mt-4"
            alt="React Context"
          />
        </Container>
      ) : (
        <Container
          
          Title="React Context چه تفاوتی با Prop Threading دارد؟">
          {DataText[17].ReactContextDifferentFa()}
          <img
            src={imgReactContext}
            className="w-full h-full mt-4"
            alt="React Context"
          />
        </Container>
      )}
      <Container Title="Toggle Theme">
        <ToggleTheme />
      </Container>
      {lang ? (
        <Container Title="Passing data deeply with context ">
          {DataText[12].PassingDataDeeplyWithContext()}
        </Container>
      ) : (
        <Container  Title="Passing data deeply with context  ">
          {" "}
          {DataText[13].PassingDataDeeplyWithContextFa()}
        </Container>
      )}
      <PassingDataNesting />
      <NoteReducer />
      {lang ? (
      <Container>
        <CardImport />
      </Container> ): (
        <Container>
          <CardImportFa />
        </Container>
      )}
      
      <Title title="Reacting to Input with State" />
      <Container>
        <InputActive />
      </Container>
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
   
    </div>
  );
}
