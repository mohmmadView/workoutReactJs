import Container from "./utils/container";
import Title from "./utils/Title";
import Example from "./utils/Example";
import CityQiuz from "./1-CityQiuz";
import CityQuiz2 from "./2-CityQiuz";
import FullName from "./3-fullName";
import Panel from "./4-Panel";
import ChatList from "./5-ChatList";
import NoteReducer from "./6-Note-reducer/index";
import PassingDataNesting from "./7-PassingData/index.jsx";
import ToggleTheme from "./8-ToggleTheme/App.jsx";
import InputActive from "./9-inputIsActive/index.jsx";
import "./App.css";
import "./index.css";
import DataText from "./TasksContext.jsx";
import CardImport from "./utils/card_Import.jsx";
import imgReactContext from "./assets/Screenshot-2024-01-02-124809.png";
import { useState } from "react";
export default function App() {
  let [lang, setLang] = useState(true);

  return (
    <div className="w-full">
      <Title title="Managing State" />
      <button
        className="btn btn-outline  mx-2"
        onClick={() => {
          setLang(false);
        }}>
        fa
      </button>
      <button
        className="btn btn-outline  mx-2"
        onClick={() => {
          setLang(true);
        }}>
        En
      </button>
      {lang ? (
        <Container Title={"Managing State"}>
          {DataText[0].Intermediate()}
        </Container>
      ) : (
        <Container Title={"مدیریت وضعیت"}>
          {DataText[1].ManagingState()}
        </Container>
      )}

      <Example exampleNumber={1} exampleName={"Example State"} />

      {lang ? (
        <Container Title={"Reacting to input with state"}>
          {DataText[2].Reactingtoinput()}{" "}
        </Container>
      ) : (
        <Container Title="واکنش به ورودی با استفاده از state" Direction="rtl">
          {DataText[3].ReactingToInputFa()}
        </Container>
      )}

      <CityQiuz />
      <CityQuiz2 />
      {lang ? (
        <Container Title={"Choosing the state structure"}>
          {DataText[4].ChoosingTheState()}
        </Container>
      ) : (
        <Container Direction={"rtl"} Title={"   انتخاب ساختار  state"}>
          {DataText[5].ChoosingTheStateFa()}
        </Container>
      )}
      <FullName />
      {lang ? (
        <Container Title={"Sharing state between components"}>
          {DataText[6].SharingState()}
        </Container>
      ) : (
        <Container Title={"Sharing state between components"} Direction={"rtl"}>
          {DataText[7].SharingStateFa()}
        </Container>
      )}
      <Panel />
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
        <Container Direction={"rtl"} Title="استخراج منطق stage در یک کاهنده ">
          {DataText[11].ExtractingStateLogicFa()}
        </Container>
      )}
      <Title title="React Context" />
      {lang ? (
        <Container Title="What is React Context ?">
          {DataText[14].WhatIsReactContext()}
        </Container>
      ) : (
        <Container Direction={"rtl"} Title="چیست؟ React Context ">
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
          Direction={"rtl"}
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
        <Container Direction={"rtl"} Title="Passing data deeply with context  ">
          {" "}
          {DataText[13].PassingDataDeeplyWithContextFa()}
        </Container>
      )}
      <PassingDataNesting />
      <NoteReducer />
      <Container>
        <CardImport />
      </Container>
      <Title title="Reacting to Input with State" />
      <Container>
        <InputActive />
      </Container>
    </div>
  );
}
