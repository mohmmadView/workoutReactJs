import  Container  from "../utils/container";
import DataText from "./DataText.jsx";
import Title from "../utils/Title";
import ToggleTheme from "./ToggleTheme/App.jsx";
import PassingDataNesting from "./PassingData/index.jsx";
import InputActive from "./inputIsActive/index.jsx";
import CardImport from "../utils/card_Import.jsx";
import CardImportFa from "../utils/card_ImportFa.jsx";
import NoteReducer from "./NoteReducer/index.jsx";
// eslint-disable-next-line react/prop-types
export default function ReactContext({lang}){
    return (
        <div className="bg-secondary-content/30 py-12">
        <Title id="react-context" title="React Context" />
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
      <Container ColorText={"info"} ColorDivider={"success"} title="Example : useEffect">
        <CardImport />
      </Container> ): (
        <Container ColorText={"info"} ColorDivider={"success"} title="مثال : useEffect">
          <CardImportFa />
        </Container>
      )}
      
      <Title title="Reacting to Input with State" />
      <Container ColorText={"info"} ColorDivider={"success"} >
        <InputActive />
      </Container>
      
        </div>
    )
}