 import AlertClickNumber from './alertClickNumber.jsx';
 import InputFocus from './FocusTheInput.jsx';
 import StopWatch from './stopWatch.jsx';
import WhatWorkUseRef from './whatWorkUseRef.jsx';
import ScrollIntoView from './ScrollIntoView.jsx';
import WhenReactAttachesTheRef from './ٌWhenReactAttachesTheRef.jsx';
export default function EscapeHatches(lang) {

 
  
  
   return (
    <div className='flex flex-col items-center'>
     <AlertClickNumber/>
    <StopWatch lang={lang.lang}/> 
     
       <div className="divider text-primary divider-secondary max-md:text-sm">Differences between refs and state</div>
        {lang.lang?(
        <div>
          <p>Perhaps you’re thinking refs seem less “strict” than state—you can mutate them instead of always having to use a state setting function, for instance. But in most cases, you’ll want to use state. Refs are an “escape hatch” you won’t need often. Here’s how state and refs compare:
  .</p>
  <div className="overflow-x-auto">
  <table className="table bg-primary-content mt-4 text-primary table-lg max-md:table-xs gap-0">
    <thead>
      <tr className=' text-secondary'>
        <th>Refs</th>
        <th>State</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{`useRef(initialValue) returns { current: initialValue }`}</td>
        <td>useState(initialValue) returns the current value of a state variable and a state setter function ( [value, setValue])</td>
      </tr>
      <tr>
        <td>Doesn’t trigger re-render when you change it.</td>
        <td>Triggers re-render when you change it.</td>
      </tr>
      <tr>
        <td>Mutable—you can modify and update current’s value outside of the rendering process.Brice Swyre</td>
        <td>Tax Accountant”Immutable”—you must use the state setting function to modify state variables to queue a re-render.</td>
      </tr> 
        <tr>
        <td>You shouldn’t read (or write) the current value during rendering.</td>
        <td>You can read state at any time. However, each render has its own snapshot of state which does not change.</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
):
      (
<div>
  
        <p style={{direction:"rtl"}}>شاید فکر می‌کنید که ref‌ها کمتر «سخت‌تر» از حالت به نظر می‌رسند—به‌عنوان مثال، می‌توانید به جای اینکه همیشه از یک تابع تنظیم حالت استفاده کنید، آنها را تغییر دهید. اما در بیشتر موارد، شما می خواهید از حالت استفاده کنید. Ref ها یک دریچه فرار هستند که اغلب به آنها نیاز ندارید. در اینجا نحوه مقایسه وضعیت و ref ها آمده است:</p>
        <div className="overflow-x-auto">
  <table className="table bg-primary-content mt-4 text-primary table-lg max-md:table-xs gap-0">
    <thead>
      <tr className=' text-secondary'>
        <th>Refs</th>
        <th>State</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{`useRef(initialValue) returns { current: initialValue }`}</td>
        <td>useState(initialValue) returns the current value of a state variable and a state setter function ( [value, setValue])</td>
      </tr>
      <tr>
        <td>Doesn’t trigger re-render when you change it.</td>
        <td>Triggers re-render when you change it.</td>
      </tr>
      <tr>
        <td>Mutable—you can modify and update current’s value outside of the rendering process.Brice Swyre</td>
        <td>Tax Accountant”Immutable”—you must use the state setting function to modify state variables to queue a re-render.</td>
      </tr> 
        <tr>
        <td>You shouldn’t read (or write) the current value during rendering.</td>
        <td>You can read state at any time. However, each render has its own snapshot of state which does not change.</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
      )
        }
        
     <div className="divider text-white divider-success">When to use refs </div>
     {lang.lang?(
        <div>
     <p>Typically, you will use a ref when your component needs to “step outside” React and communicate with external APIs—often a browser API that won’t impact the appearance of the component. Here are a few of these rare situations:</p>
     <ul className='list-inside p-4 text-success bg-success-content list-disc'>
       <li>Storing timeout IDs</li>
       <li>Storing and manipulating DOM elements, which we cover on the next page</li>
       <li>Storing timeout IDsStoring other objects that aren’t necessary to calculate the JSX.</li>
        <p>If your component needs to store some value, but it doesn’t impact the rendering logic, choose refs.</p>
     </ul>
     </div>):(<div style={{direction:"rtl"}}>
      <p >به طور معمول، زمانی که مؤلفه شما نیاز به «بیرون رفتن» React و برقراری ارتباط با APIهای خارجی دارد، از یک ref استفاده می‌کنید - اغلب یک API مرورگر است که بر ظاهر مؤلفه تأثیر نمی‌گذارد. در اینجا چند مورد از این موقعیت های نادر آورده شده است:</p>
        <ul className='list-inside p-4 text-success bg-success-content list-disc'>
       <li>ذخیره سازی timeout IDs</li>
       <li>ذخیره سازی و دستکاری DOM elements </li>
       <li>ذخیره اشیاء دیگر که برای محاسبه JSX ضروری نیستند..</li>
        <p>اگر مؤلفه شما نیاز به ذخیره مقداری دارد، اما بر منطق رندر تأثیر نمی گذارد، refs را انتخاب کنید.</p>
     </ul>
     </div>)}
     <div className="divider  divider-primary text-red-700">Manipulating the DOM with refs </div>
  
<InputFocus lang={lang.lang} />
<div className="divider divider-start text-info divider-info">Example:<p className='under text-primary'> Scrolling to an element</p> </div>
<ScrollIntoView />
<WhatWorkUseRef />
<WhenReactAttachesTheRef lang={lang.lang} />
<div className="divider divider-content text-info divider-info">Recap:<p className='under text-primary'>DOM with Refs </p> </div>
{lang.lang?(
  <>
<p className=""><span>1- </span>Refs are an escape hatch to hold onto values that aren’t used for rendering. You won’t need them often.</p>
<p className=""><span>2- </span>A ref is a plain JavaScript object with a single property called current, which you can read or set.</p>
<p className=""><span>3- </span>You can ask React to give you a ref by calling the useRef Hook.</p>
<p className=""><span>4- </span>Like state, refs let you retain information between re-renders of a component.</p>
<p className=""><span>5- </span>Unlike state, setting the ref’s current value does not trigger a re-render.</p>
<p className=""><span>6- </span>Don’t read or write ref.current during rendering. This makes your component hard to predict.</p>
</>
):(
  <div dir='rtl'>
<p ><span>1.</span> Refs یک راه فرار برای نگه‌داری مقادیری است که برای رندر (نمایش) استفاده نمی‌شوند.</p>
<p ><span>2.</span>شما به طور معمول به آن‌ها نیاز زیادی پیدا نخواهید کرد.</p>
<p ><span>3.</span>یک Ref یک شیء ساده جاوااسکریپت با تنها یک ویژگی به نام `current` است.</p>
<p ><span>4.</span>شما می‌توانید مقدار این ویژگی را بخوانید یا آن را تنظیم کنید.</p>
<p ><span>5.</span>شما می‌توانید با فراخوانی قلاب `useRef` از React بخواهید که یک Ref به شما بدهد.</p>
<p ><span>6.</span>مانند State، Ref به شما اجازه می‌دهد اطلاعات را بین رندرهای مجدد یک کامپوننت حفظ کنید.</p>
<p ><span>7.</span>برخلاف State، تنظیم مقدار جاری Ref باعث راه‌اندازی مجدد رندر (بازنمایش) نمی‌شود.</p>
<p ><span>8.</span> خواندن یا نوشتن مقدار `ref.current` در طول رندر خودداری کنید. این کار باعث می‌شود پیش‌بینی رفتار کامپوننت شما دشوار شود.</p>

  </div>
)}
    </div>
   );
}