import DataText from '../TasksContext';
import SynchronizingWithEffects from './Synchronizing-With-Effects';
import HowToWriteAnEffect  from './HowToWriteAnEffect'
// import './hightLight.css'

export default function Effects(lang) {

    return (
<div>
    <SynchronizingWithEffects lang={lang.lang}/>
   <HowToWriteAnEffect lang={lang.lang}/>           
</div>
    )
}