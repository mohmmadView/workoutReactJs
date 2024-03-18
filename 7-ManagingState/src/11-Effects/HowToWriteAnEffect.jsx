import DataText from "../TasksContext"
import Code from "../utils/Prism"
export default function HowToWriteAnEffect (lang) {

    return (
        <div className="my-12">
 {lang.lang?( <>
    {DataText[24].HowToWriteAnEffect()}
  </>):(
<>
{DataText[25].HowToWriteAnEffectFa()}
</>
  )}

<div className="divider divider-start text-accent mt-8 divider-secondary ">Step 1: Declare an Effect</div>
<p className="p-4 ">
  To declare an <span  className="text-red-500">Effect</span> in your <span>component</span> 
</p>
<Code more={false} code={"import { useEffect } from 'react'; "} language={"js"} widthIN={"w-full h-auto"} />
<p className="p-4 ">Then, call it at the top level of your <span>component</span> and put some code inside your <span className="text-red-500">Effect</span>:</p>
        </div>
    )
}