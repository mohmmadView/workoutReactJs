// import DataText from '../TasksContext';
import Container from '../utils/Container';
import SynchronizingWithEffects from './Synchronizing-With-Effects';
import HowToWriteAnEffect  from './HowToWriteAnEffect/HowToWriteAnEffect'
import LifecycleOfReactiveEffects from './LifecycleOfReactiveEffects';
import DotMove from './DotMove/index';
import './textfor.css'
// import './hightLight.css'

export default function Effects(lang) {
    return (
<div className='bg-info-content/35 py-12'>
    <Container ColorText={'success'}  ColorDivider={'warning  text-pink-200 '} Title={`Synchronizing With Effects`}>
    <SynchronizingWithEffects lang={lang.lang}/>
    </Container>     
   <Container ColorText={'primary'}  ColorDivider={'success  text-primary'} Title={"How to write an Effect"}>
       <HowToWriteAnEffect lang={lang.lang}/>  
   </Container>
   <Container ColorText={'info'}  ColorDivider={'accent shadow-primary'} Title={"Lifecycle of Reactive Effects"}> 
      <LifecycleOfReactiveEffects lang={lang.lang} />
    </Container>
     <DotMove />  
</div>
    )
}