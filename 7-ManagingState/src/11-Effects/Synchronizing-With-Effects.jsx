import DataText from '../TasksContext'
export default function SynchronizingWithEffects(lang){

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

<div className="divider text-primary divider-info">What are Effects and how are they different from events?</div>
{lang.lang?(
    <>
     {DataText[22].SynchronizingWithEffects()}
     </>
):(
<>
    
        {DataText[23].SynchronizingWithEffectsFa()}
    
</>
)   }    
<div dir='rtl' className="prose max-w-none">

<br />
<span className='flex  justify-end'>
    <code dir='ltr' style={{ direction: "ltr" }} className=' whitespace-pre-line '>
        {`
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
        
        `}
    </code>
</span>
</div>
</div>
    )
}
