import Container from "../utils/container";
import DataText from "./DataText";
import Example from "../utils/Example";
import CityQuiz from './1-CityQiuz'
import CityQuiz_2 from './2-CityQiuz'

export default function ManagingState(lang) {



    return(
        <>
        {lang.lang ? (
        <Container ColorText={'text-primary'}  ColorDivider={'error'} Title={"Managing State"}>
        {DataText[0].Intermediate()}
        </Container>
      ) : (
        <Container ColorText={'text-primary'}  ColorDivider={'error'} Title={"مدیریت وضعیت"}>
          {DataText[1].ManagingState()}
        </Container>
      )}

      <Example exampleNumber={1} exampleName={"Example State"} />

      {lang.lang ? (
        <Container ColorText={'text-green-400'} ColorDivider={'success'} Title={"Reacting to input with state"}>
          {DataText[2].Reactingtoinput()}
        </Container>
      ) : (
        <Container  ColorText={'text-green-400'} ColorDivider={'warning text-green-100'} Title="واکنش به ورودی با استفاده از state" >
          {DataText[3].ReactingToInputFa()}
        </Container>
      )}
         <CityQuiz />
         <CityQuiz_2 />
          {lang.lang ? (
        <Container ColorText={'text-error'} ColorDivider={"secondary"} Title={"Choosing the state structure"}>
          {DataText[4].ChoosingTheState()}
        </Container>
      ) : (
        <Container  ColorText={'text-info'} ColorDivider={'accent text-blue-200'} Title={" state  انتخاب ساختار  "}>
          {DataText[5].ChoosingTheStateFa()}
        </Container>
      )}
       {lang.lang ? (
        <Container ColorDivider={"success"} ColorText={"text-success "} Title={"Sharing state between components"}>
          {DataText[6].SharingState()}
        </Container>
      ) : (
        <Container  ColorDivider={"success "} ColorText={"text-success "}  Title={"به اشتراک گذاری  state بین کامپوننت ها"} >
          {DataText[7].SharingStateFa()}
        </Container>
      )}
        </>
    )
}
//neutral