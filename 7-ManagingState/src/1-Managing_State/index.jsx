import Container from "../utils/container";
import DataText from "./DataText";
import Example from "../utils/Example";
import CityQuiz from './1-CityQiuz'
import CityQuiz_2 from './2-CityQiuz'
import FullName_3 from "./3-fullName";
import Panel_4 from "./4-Panel";
import ChatList_5 from "./5-ChatList";
export default function ManagingState(lang) {



    return(
        <>
        {lang.lang ? (
        <Container ColorText={'text-primary'}  ColorDivider={'error shadow-error/50 hover:shadow-error text-pink-200'} Title={"Managing State"}>
        {DataText[0].Intermediate()}
        </Container>
      ) : (
        <Container ColorText={'text-primary'}  ColorDivider={'error shadow-error/50 hover:shadow-error text-pink-200'} Title={"مدیریت وضعیت"}>
          {DataText[1].ManagingState()}
        </Container>
      )}

      <Example exampleNumber={1} exampleName={"Example State"} />

      {lang.lang ? (
        <Container ColorText={'text-green-400'} ColorDivider={'success shadow-success/50 hover:shadow-success  text-green-200'} Title={"Reacting to input with state"}>
          {DataText[2].ReactingToInput()}
        </Container>
      ) : (
        <Container  ColorText={'text-green-400'} ColorDivider={'success shadow-success/50 hover:shadow-success  text-green-200'} Title="واکنش به ورودی با استفاده از state" >
          {DataText[3].ReactingToInputFa()}
        </Container>
      )}
         <CityQuiz />
         <CityQuiz_2 />
          {lang.lang ? (
        <Container ColorText={'text-accent'} ColorDivider={"secondary shadow-warning/50 hover:shadow-warning "} Title={"Choosing the state structure"}>
          {DataText[4].ChoosingTheState()}
        </Container>
      ) : (
        <Container  ColorText={'text-accent'} ColorDivider={'secondary shadow-warning/50 hover:shadow-warning '} Title={" state  انتخاب ساختار  "}>
          {DataText[5].ChoosingTheStateFa()}
        </Container>
      )}
       {lang.lang ? (
        <Container ColorDivider={"accent shadow-accent/50 hover:shadow-accent text-purple-100"} ColorText={"text-info "} Title={"Sharing state between components"}>
          {DataText[6].SharingState()}
        </Container>
      ) : (
        <Container  ColorDivider={"accent shadow-accent/50 hover:shadow-accent text-purple-100"} ColorText={"text-info "}  Title={"به اشتراک گذاری  state بین کامپوننت ها"} >
          {DataText[7].SharingStateFa()}
        </Container>
      )}
      <FullName_3 /> 
      <Panel_4 />
       {lang.lang ? (
        <Container ColorDivider={"secondary shadow-error/50 hover:shadow-error text-purple-100"} Title="Preserving and resetting state ">
          {DataText[8].PreservingAndResetting()}
          <ChatList_5 />
          {DataText[8].PreservingAndResetting_2()}
        </Container>
      ) : (
        <Container ColorDivider={"secondary shadow-error/50 hover:shadow-error text-purple-100"} Title="Preserving and resetting state " Title="state حفظ و تنظیم مجدد ">
          {DataText[9].PreservingAndResettingFa()}
          <ChatList_5 />
           {DataText[9].PreservingAndResettingFa_2()}

        </Container>
      )}
      
        </>
    )
}
//neutral