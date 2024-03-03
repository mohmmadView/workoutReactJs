 import { useRef , useState} from 'react';
export default function EscapeHatches(lang) {
  let ref = useRef(0);
 let [startTimer, setStartTimer] = useState(null);
 let [now,setNow]=useState(null);
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
 }
 let secondsPassed = 0 ;
 if(now != null && startTimer !=null){
  secondsPassed = (now - startTimer) / 1000;
 }
   function handleClick() {
     ref.current = ref.current + 1;
     alert('You clicked ' + ref.current + ' times!');
   }
 
   return (
    <div className='flex flex-col items-center'>
       <div className="divider divider-accent">Alert click number </div>
     <button className='btn btn-square btn-primary w-24' onClick={handleClick}>
       Click me!
     </button>
     <div className="divider divider-info">stopWatch</div>
       <h1>Time passed:<span className='text-error font-bold'> {secondsPassed.toFixed(3)}</span></h1>
     <div className='flex gap-4 p-4'>
        <button className='btn btn-circle btn-success w-24' onClick={handleStart}>
          Start
        </button>
         <button className='btn btn-circle btn-warning w-24' onClick={handlerStop}>
          Stop
        </button>
     </div>
     {lang.lang?(<p>When a piece of information is used for rendering, keep it in state. When a piece of information is only needed by event handlers and changing it doesn’t require a re-render, 
      using a ref may be more efficient.</p>):
      (<p style={{direction:"rtl"}}>هنگامی که یک قطعه از اطلاعات برای رندر استفاده می شود، آن را در حالت نگه دارید. هنگامی که یک قطعه اطلاعات فقط توسط مدیریت event handler نیاز است و تغییر آن نیازی به رندر مجدد ندارد، استفاده از یک مرجع ممکن است کارآمدتر باشد.</p>)
        }
       <div className="divider divider-secondary max-md:text-sm">Differences between refs and state</div>
        {lang.lang?(<p>Perhaps you’re thinking refs seem less “strict” than state—you can mutate them instead of always having to use a state setting function, for instance. But in most cases, you’ll want to use state. Refs are an “escape hatch” you won’t need often. Here’s how state and refs compare:
.</p>):
      (<p style={{direction:"rtl"}}>شاید فکر می‌کنید که ref‌ها کمتر «سخت‌تر» از حالت به نظر می‌رسند—به‌عنوان مثال، می‌توانید به جای اینکه همیشه از یک تابع تنظیم حالت استفاده کنید، آنها را تغییر دهید. اما در بیشتر موارد، شما می خواهید از حالت استفاده کنید. Ref ها یک "دریچه فرار" هستند که اغلب به آنها نیاز ندارید. در اینجا نحوه مقایسه وضعیت و ref ها آمده است:</p>)
        }
    </div>
   );
}