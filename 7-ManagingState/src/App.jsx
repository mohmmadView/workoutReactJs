import Container from "./utils/container";
import Title from "./utils/Title";
import Example from "./utils/Example";
import CityQiuz from "./1-CityQiuz";
import CityQuiz2 from "./2-CityQiuz";
import FullName from "./3-fullName";
import Panel from "./4-Panel";
import ChatList from "./5-ChatList";
import Note from "./6-note";
import NoteReducer from "./6-Note-reducer/index";
import PassingDataNesting from "./7-PassingData/index.jsx";
import "./App.css";
import "./index.css";
import DataText from "./TasksContext.jsx";
import CardImport from './utils/card_Import.jsx'
export default function App() {
  console.log(DataText[0].text_2);
  return (
    <div className="w-full">
      <Title title="Managing State" />
      <Container Title={"Intermediate"}>{DataText[0].Intermediate()}</Container>
      <Container Title={"مدیریت وضعیت"}>
        {DataText[1].ManagingState()}
      </Container>
      <Example exampleNumber={1} exampleName={"Example State"} />
      <Container Title={"Reacting to input with state"}>
        {DataText[2].Reactingtoinput()}
      </Container>
      <Container Title="واکنش به ورودی با استفاده از state" Direction="rtl">
        <p style={{ direction: "rtl" }}>{DataText[3].ReactingToInputFa()}</p>
      </Container>
      <CityQiuz />
      <CityQuiz2 />
      {/* <ScrollY /> */}
      <Container Title={"Choosing the state structure"}>
        {DataText[4].ChoosingTheState()}
      </Container>
      <Container Direction={"rtl"} Title={"Choosing the state structure"}>
        <p className="rtl" style={{ direction: "rtl" }}>
          {DataText[5].ChoosingTheStateFa()}
        </p>
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
      <Note note={"test"} />
      <Container Title="Passing data deeply with context  ">
        {DataText[11].PassingDataDeeplyWithContext()}
      </Container>
      <PassingDataNesting />
      <Container Direction={"rtl"} Title="Passing data deeply with context  ">
        {DataText[12].PassingDataDeeplyWithContextFa()}
      </Container>
      <NoteReducer />
      <Container >
      <CardImport />
      </Container>
    </div>
  );
}
