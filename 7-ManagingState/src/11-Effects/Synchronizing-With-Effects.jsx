import { useEffect, useState } from 'react';
import DataText from '../TasksContext'
import Code from  '../utils/Prism'
export default function SynchronizingWithEffects(lang){
  function Counter() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className='p-8 bg-black border border-yellow-500 ring ring-red-500 self-center'>
        <h1 className='self-center'>Count: <span className='text-red-500'>{count}</span></h1>
      </div>
    );
  }
    return (
<div>

            {lang.lang?(
            <div className="">
                 {DataText[20].Effect()}
            </div>):(
               <>
                    
                    {DataText[21].EffectFa()}
               </>
            )}

<div className="divider divider-start text-accent mt-8 divider-secondary">What are Effects and how are they different from events?</div>
{lang.lang?(
    <>
     {DataText[22].SynchronizingWithEffects()}
     </>
):(
<>
        {DataText[23].SynchronizingWithEffectsFa()}  
</>
)   }    


<br />

<div className="divider divider-start  text-success divider-warning">example Effect</div>
<span className='flex justify-around'>
    <Counter />
    <Code fileName={"example Effect"} language={'js'} 
       code ={`import { useEffect, useState } from 'react';
  function Counter() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div>
        <h1>Count: {count}</h1>
      </div>
    );
  }
        
        `} />
      
    
</span>

</div>
    )
}
