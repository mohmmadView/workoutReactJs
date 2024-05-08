// import DataText from '../TasksContext';
import Container from '../utils/container';
import SynchronizingWithEffects from './Synchronizing-With-Effects';
import HowToWriteAnEffect  from './HowToWriteAnEffect'
import './textfor.css'
// import './hightLight.css'

export default function Effects(lang) {
    return (
<div>
    <Container ColorText={'text-primary'}  ColorDivider={'warning shadow-warning text-pink-200 '} Title={"Synchronizing With Effects"}>
    <SynchronizingWithEffects lang={lang.lang}/>
    </Container>     
   <Container ColorText={'text-primary'}  ColorDivider={'warning shadow-warning text-pink-200'} Title={"How to write an Effect"}>
       <HowToWriteAnEffect lang={lang.lang}/>  
   </Container>
</div>
    )
}