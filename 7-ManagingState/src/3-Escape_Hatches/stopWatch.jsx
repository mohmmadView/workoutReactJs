import { useRef, useState } from 'react';
export default function StopWatch(lang){
    let [startTimer, setStartTimer] = useState(null);
    let [now,setNow]=useState(null);
    let [bol,setBol]=useState(false); 
    let intervalRef = useRef(null);
    function handleStart(){
     setStartTimer(Date.now());
     setNow(Date.now());
     clearInterval(intervalRef.current);
     intervalRef.current = setInterval(()=>{
       setNow(Date.now())
     },10)
    }
    function handlerStop(){
     clearInterval(intervalRef.current);
     setBol(false);
    }
 let secondsPassed = 0 ;
 if(now != null && startTimer !=null){
  secondsPassed = (now - startTimer) / 1000;
 }
  function handlerContinue(){
     setNow(Date.now())
if(!bol){
  clearInterval(intervalRef.current);
    intervalRef.current = setInterval(()=>{
        setNow(Date.now());
    },10);
   }
}
return(
   <div className='flex flex-col items-center gap-3'>
         <div className='bg-secondary-content p-4 border-2 border-secondary ring-2 ring-primary-content '>
             <h1 className='text-center'>Time passed:<span className='text-error font-bold'> {secondsPassed.toFixed(3)}</span></h1>
           <div className='flex gap-4 p-4'>
              <button className='btn btn-circle btn-success w-24' onClick={handleStart}>
                Start
              </button>
               <button className='btn btn-circle btn-warning w-24' onClick={handlerStop}>
                Stop
              </button> 
              <button className='btn btn-circle btn-success w-24' onClick={handlerContinue}>
              continues
              </button>
           </div>
         </div>
         {lang.lang?(<p>When a piece of information is used for rendering, keep it in state. When a piece of information is only needed by event handlers and changing it doesn’t require a re-render, 
      using a ref may be more efficient.</p>):
      (<p style={{direction:"rtl"}}>هنگامی که یک قطعه از اطلاعات برای رندر استفاده می شود، آن را در حالت نگه دارید. هنگامی که یک قطعه اطلاعات فقط توسط مدیریت event handler نیاز است و تغییر آن نیازی به رندر مجدد ندارد، استفاده از یک مرجع ممکن است کارآمدتر باشد.</p>)
        }
   </div>
)
}