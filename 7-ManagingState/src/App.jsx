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
import "./App.css";
import "./index.css";
import DataText from "./TasksContext.jsx";
import CardImport from "./utils/card_Import.jsx";
import imgReactContext from "./assets/Screenshot-2024-01-02-124809.png";
import { useTranslation, Trans } from 'react-i18next';

const langs = {
  en : { nativeName: 'English' },
  fa  : { nativeName: 'فارسی' }
}
export default function App() {
  const [t,i18n] = useTranslation();
  return (
    <div className="w-full">
      <Title title="Managing State" />
      <Container Title={"Intermediate"}>{DataText[0].Intermediate()}</Container>
      <Container Title={"مدیریت وضعیت"}>{DataText[1].ManagingState()}
      </Container>
        <section>
          {Object.keys(langs).map((lang)=>(
            <button key={lang} className="btn btn-primary" type="submit" 
            onClick={() => i18n.changeLanguage(lang)}> 
              {langs[lang].nativeName}
            </button>
          ))}
        </section>
        <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
        </Trans>
        {t('description.part2')}
      <Example exampleNumber={1} exampleName={"Example State"} />
      <Container Title={"Reacting to input with state"}>{DataText[2].Reactingtoinput()} </Container>
      <Container Title="واکنش به ورودی با استفاده از state" Direction="rtl">
        {DataText[3].ReactingToInputFa()}
        </Container>
      
      <CityQiuz />
      <CityQuiz2 />
      <Container Title={"Choosing the state structure"}>
        {DataText[4].ChoosingTheState()}
      </Container>
      <Container Direction={"rtl"} Title={"Choosing the state structure"}>
          {DataText[5].ChoosingTheStateFa()}
      </Container>
      <FullName />
      <Container Title={"Sharing state between components"}>
        {DataText[6].SharingState()}
      </Container>
      <Container Title={"Sharing state between components"} Direction={"rtl"}>
        {DataText[7].SharingStateFa()}
      </Container>
      <Panel />
      <Container Title="Preserving and resetting state ">
        {DataText[8].PreservingAndResetting()}
      </Container>
      <ChatList />
      <Container Title="Extracting state logic into a reducer ">
        {DataText[9].ExtractingStateLogic()}
      </Container>
      <Container
        Direction={"rtl"}
        Title="Extracting state logic into a reducer "
      >
        {DataText[10].ExtractingStateLogicFa()}
      </Container>
      <Title title="React Context" />
      <Container Title="What is React Context?">
        {DataText[13].WhatIsReactContext()}
      </Container>
      <Container Title="How is React Context Different from Prop Threading?">
        {DataText[14].ReactContextDifferent()}
        <img
          src={imgReactContext}
          className="w-full h-full mt-4"
          alt="React Context"
        />
      </Container>
      <Container Title="Toggle Theme">
        <ToggleTheme />
      </Container>
      <Container Title="Passing data deeply with context  ">
        {DataText[11].PassingDataDeeplyWithContext()}
      </Container>
      <PassingDataNesting />
      <Container Direction={"rtl"} Title="Passing data deeply with context  ">
        {DataText[12].PassingDataDeeplyWithContextFa()}
      </Container>
      <NoteReducer />
      <Container>
        <CardImport />
      </Container>
      <Title title="Reacting to Input with State" />
      <Container>

      </Container>
    </div>
  );
}
