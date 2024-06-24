// import DataText from '../TasksContext';
import Container from '../utils/container';
import SynchronizingWithEffects from './Synchronizing-With-Effects';
import HowToWriteAnEffect  from './HowToWriteAnEffect'
import YouMightNotNeedEffect from './YouMightNotNeedEffect'; 
import './textfor.css'
// import './hightLight.css'

export default function Effects(lang) {
    return (
<div>
    <Container ColorText={'success'}  ColorDivider={'warning  text-pink-200 '} Title={`Synchronizing With Effects`}>
    <SynchronizingWithEffects lang={lang.lang}/>
    </Container>     
   <Container ColorText={'primary'}  ColorDivider={'success  text-primary'} Title={"How to write an Effect"}>
       <HowToWriteAnEffect lang={lang.lang}/>  
   </Container>
   <Container ColorText={'secondary'}  ColorDivider={'primary shadow-success'} Title={"You Might Not Need an Effect"}>
       <YouMightNotNeedEffect lang={lang.lang}/>
   </Container>
  
</div>
    )
}