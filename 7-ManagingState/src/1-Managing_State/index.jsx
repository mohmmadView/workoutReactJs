import Container from "../utils/container";
import DataText from "./DataText";
import Example from "../utils/Example";
import CityQuiz from './1-CityQiuz'
import CityQuiz_2 from './2-CityQiuz'
export default function ManagingState(lang) {



    return(
        <>
        {lang.lang ? (
        <Container  Title={"Managing State"}>
        {DataText[0].Intermediate()}
        </Container>
      ) : (
        <Container Title={"مدیریت وضعیت"}>
          {DataText[1].ManagingState()}
        </Container>
      )}

      <Example exampleNumber={1} exampleName={"Example State"} />

      {lang.lang ? (
        <Container Title={"Reacting to input with state"}>
          {DataText[2].Reactingtoinput()}
        </Container>
      ) : (
        <Container Title="واکنش به ورودی با استفاده از state" >
          {DataText[3].ReactingToInputFa()}
        </Container>
      )}
         <CityQuiz />
         <CityQuiz_2 />
          {lang ? (
        <Container Title={"Choosing the state structure"}>
          {DataText[4].ChoosingTheState()}
        </Container>
      ) : (
        <Container  Title={"   انتخاب ساختار  state"}>
          {DataText[5].ChoosingTheStateFa()}
        </Container>
      )}
        </>
    )
}