import DataText from "../TasksContext"

export default function YouMightNotNeedEffect(lang) { 
    
    return <div>{lang.lang ? DataText[26].YouMightNotNeedEffect(): DataText[27].YouMightNotNeedEffectFa()}</div>;
 } // (first) => {second}