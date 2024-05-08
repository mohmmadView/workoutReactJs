import Container from "../utils/container";

import DataText from "./DataText";
import Example from "../utils/Example";
import CityQuiz from './1-CityQiuz'
import CityQuiz_2 from './2-CityQiuz'
import FullName_3 from "./3-fullName";
import Panel_4 from "./4-Panel";
import ChatList_5 from "./5-ChatList";
import Container2 from '../utils/components/Container/index'
// eslint-disable-next-line react/prop-types
export default function ManagingState({lang}) {
    return(
        <div className="bg-success-content/35 py-11">
        {lang ? (
        <Container ColorText={'primary'}  ColorDivider={'secondary'} Title={"Managing State"}>
        {DataText.Intermediate()}
        </Container>
      ) : (
        <Container ColorText={'primary'}  ColorDivider={'secondary'} Title={"مدیریت وضعیت"}>
         {DataText.ManagingState()}
        </Container>
      )}
      <Example exampleNumber={1} exampleName={"Example State"} />
      {lang ? (
        <Container ColorText={'info'} ColorDivider={'success'} Title={"Reacting to input with state"}>
          {DataText.ReactingToInput()}
        </Container>
      ) : (
        <Container  ColorText={'info'} ColorDivider={'success'} Title="واکنش به ورودی با استفاده از state" >
          {DataText.ReactingToInputFa()}
        </Container>
      )}
         <CityQuiz />
         <CityQuiz_2 />
          {lang ? (
        <Container ColorText={'secondary'} ColorDivider={"accent"} Title={"Choosing the state structure"}>
          {DataText.ChoosingTheState()}
        </Container>
      ) : (
        <Container  ColorText={'secondary'} ColorDivider={'accent'} Title={" state  انتخاب ساختار  "}>
          {DataText.ChoosingTheStateFa()}
        </Container>
      )}
       {lang ? (
        <Container ColorDivider={"info"} ColorText={"accent"} Title={"Sharing state between components"}>
          {DataText.SharingState()}
        </Container>
      ) : (
        <Container  ColorDivider={"info"} ColorText={"accent"}  Title={"به اشتراک گذاری  state بین کامپوننت ها"} >
          {DataText.SharingStateFa()}
        </Container>
      )}
      <FullName_3 /> 
      <Panel_4 />
       {lang ? (
        <Container ColorDivider={"success"} ColorText={"primary"} Title="Preserving and resetting state ">
          {DataText.PreservingAndResetting()}
          <ChatList_5 />
          {DataText.PreservingAndResetting_2()}
        </Container>
      ) : (
        <Container ColorDivider={"success"} ColorText={"primary"} Title="state حفظ و تنظیم مجدد ">
          {DataText.PreservingAndResettingFa()}
          <ChatList_5 />
           {DataText.PreservingAndResettingFa_2()}

        </Container>
      )}
      {lang? (
        <Container Title="Extracting state logic into a reducer ">
          {DataText.ExtractingStateLogic()}
        </Container>
      ) : (
        <Container  Title="Extracting state logic into a reducer">
          {DataText.ExtractingStateLogicFa()}
        </Container>
      )}
     
        </div>
    )
}
//neutral