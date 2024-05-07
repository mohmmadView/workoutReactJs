import  Container  from "../utils/container";
import DataText from "./DataText.jsx";
import Title from "../utils/Title";
import imgReactContext from "../assets/Screenshot-2024-01-02-124809.png";
import ToggleTheme from "./ToggleTheme/App.jsx";
import PassingDataNesting from "./PassingData/index.jsx";
import InputActive from "./inputIsActive/index.jsx";
import CardImport from "../utils/card_Import.jsx";
import CardImportFa from "../utils/card_ImportFa.jsx";
import NoteReducer from "./NoteReducer/index.jsx";
export default function ReactContext({lang}){
    console.log(DataText);
    return (
        <>
        <Title title="React Context" />
      {lang ? (
        
        <Container Title="What is React Context ?">
          {DataText.WhatIsReactContext()}
        </Container>
      ) : (
        <Container  Title="چیست؟ React Context ">
          {DataText.WhatIsReactContextFa()}
        </Container>
      )}
      {lang ? (
        <Container Title="How is React Context Different from Prop Threading?">
          {DataText.ReactContextDifferent()}
        </Container>
      ) : (
        <Container
          Title="React Context چه تفاوتی با Prop Threading دارد؟">
          {DataText.ReactContextDifferentFa()}
        </Container>
      )}
      <Container Title="Toggle Theme">
        <ToggleTheme />
      </Container>
      {lang ? (
        <Container Title="Passing data deeply with context ">
          {DataText.PassingDataDeeplyWithContext()}
        </Container>
      ) : (
        <Container  Title="Passing data deeply with context  ">
          {DataText.PassingDataDeeplyWithContextFa()}
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
      <Container ColorText={"info"} ColorDivider={"success"} >
        <InputActive />
      </Container>
      
        </>
    )
}