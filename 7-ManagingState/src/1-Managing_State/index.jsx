import Container from "../utils/container";
import DataText from "./DataText";
import Example from "../utils/Example";
import CityQuiz from './1-CityQiuz'
import CityQuiz_2 from './2-CityQiuz'

export default function ManagingState(lang) {



    return(
        <>
        {lang.lang ? (
        <Container ColorText={'text-primary'}  ColorDivider={'error shadow-error text-pink-200'} Title={"Managing State"}>
        {DataText[0].Intermediate()}
        </Container>
      ) : (
        <Container ColorText={'text-primary'}  ColorDivider={'error shadow-error text-pink-200'} Title={"مدیریت وضعیت"}>
          {DataText[1].ManagingState()}
        </Container>
      )}

      <Example exampleNumber={1} exampleName={"Example State"} />

      {lang.lang ? (
        <Container ColorText={'text-green-400'} ColorDivider={'success shadow-success  text-green-200'} Title={"Reacting to input with state"}>
          {DataText[2].Reactingtoinput()}
        </Container>
      ) : (
        <Container  ColorText={'text-green-400'} ColorDivider={'success shadow-success  text-green-200'} Title="واکنش به ورودی با استفاده از state" >
          {DataText[3].ReactingToInputFa()}
        </Container>
      )}
         <CityQuiz />
         <CityQuiz_2 />
          {lang.lang ? (
        <Container ColorText={'text-accent'} ColorDivider={"secondary shadow-secondary "} Title={"Choosing the state structure"}>
          {DataText[4].ChoosingTheState()}
        </Container>
      ) : (
        <Container  ColorText={'text-accent'} ColorDivider={'secondary shadow-secondary '} Title={" state  انتخاب ساختار  "}>
          {DataText[5].ChoosingTheStateFa()}
        </Container>
      )}
       {lang.lang ? (
        <Container ColorDivider={"accent shadow-accent text-purple-100"} ColorText={"text-info "} Title={"Sharing state between components"}>
          {DataText[6].SharingState()}
        </Container>
      ) : (
        <Container  ColorDivider={"accent shadow-accent text-purple-100"} ColorText={"text-info "}  Title={"به اشتراک گذاری  state بین کامپوننت ها"} >
          {DataText[7].SharingStateFa()}
        </Container>
      )}
        </>
    )
}
//neutral