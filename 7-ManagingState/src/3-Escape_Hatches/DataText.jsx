 import Code from "../utils/Prism"
     const  EscapeHatches=()=>{
        return (
          <>
           Some of your components may need to control and synchronize with systems outside of React. For example, you might need to focus an input using the browser API, play and pause a video player implemented without React, or connect and listen to messages from a remote server. In this chapter, you’ll learn the escape hatches that let you “step outside” React and connect to external systems. Most of your application logic and data flow should not rely on these features
<h1 className="divider divider-start pt-4 text-accent text-2xl divider-success max-md:text-sm"> Referencing values with refs </h1> <br />
<p>When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref:</p><br />
<div className='p-2  bg-secondary-content'><span className='text-yellow-500'>const</span><span className='text-blue-500'> ref</span> =<span className='text-green-500'> useRef(0)</span>;</div>
<p className='m-2'>Like state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not! You can access the current value of that ref through the ref.current property.</p>
          <span className='m-2'>  <Code widthIN={"w-full"} fileName={"example"} code={`
import { useRef } from 'react';
export default function AlertClickNumber() {
let ref = useRef(0);
  
function handleClick() {
   ref.current = ref.current + 1; 
   alert('You clicked ' + ref.current + ' times!');
 }
 return (
  <>
 <div className="divider text-primary divider-accent">Alert click number </div>
   <p>ref.current is {ref.current}</p> // not changed ref.current is 0 not in render
   <button className='btn btn-square btn-primary w-24' onClick={handleClick}>
     Click me!
   </button>
   </>
   )
 }
 
        `} language={"js"}></Code></span>
        <p>A ref is like a secret pocket of your component that React doesn’t track. For example, you can use refs to store timeout IDs, DOM elements, and other objects that don’t impact the component’s rendering output.</p>
            </>
        );
      }


  const  EscapeHatchesFa=()=>{
      return (
    
        <div style={{direction: "rtl"}}>    
     <span className="text-secondary">Escape Hatches </span>     ر برخی از اجزای شما ممکن است نیاز به کنترل و همگام سازی با سیستم های خارج از React داشته باشند. برای مثال، ممکن است لازم باشد یک ورودی را با استفاده از API مرورگر متمرکز کنید، پخش‌کننده ویدیویی را که بدون React اجرا شده است، پخش و متوقف کنید، یا پیام‌های یک سرور راه دور را متصل کنید و به آنها گوش دهید. در این فصل، دریچه‌های فرار را یاد می‌گیرید که به شما اجازه می‌دهند «بیرون بروید» React و به سیستم‌های خارجی متصل شوید. بیشتر منطق برنامه و جریان داده شما نباید به این ویژگی ها متکی باشد.
     <br />
<span className="text-secondary">Escape Hatches </span>مکانیزم هایی هستند که به شما امکان می دهند از State یک مؤلفه به طور موقت خارج شوید. این می تواند در مواقعی مفید باشد که می خواهید به طور موقت State را تغییر دهید بدون اینکه بر State اصلی مؤلفه تأثیر بگذارد. <br /> 
<span> تعریف دیگه از Escape Hatches</span><br />
در برخی موارد، ممکن است لازم باشد از State خارج شوید و به طور مستقیم DOM را دستکاری کنید. برای این کار می توانید از Escape Hatches استفاده کنید.
<h1 className="text-secondary text-3xl p-2">Referencing values with refs</h1> <br />
<p>وقتی می‌خواهید یک مؤلفه اطلاعاتی را «به خاطر بسپارد»، اما نمی‌خواهید این اطلاعات رندرهای جدیدی را ایجاد کند، می‌توانید از یک ref استفاده کنید:</p>
<div style={{direction:"ltr"}} className='p-2  bg-secondary-content'><span className='text-yellow-500'>const</span><span className='text-blue-500'> ref</span> =<span className='text-green-500'> useRef(0)</span>;</div>
<p>مانند حالت، ref ها توسط React بین رندرهای مجدد حفظ می شوند. با این حال، تنظیم وضعیت یک مؤلفه را دوباره ارائه می کند. تغییر یک رف انجام نمی شود! شما می توانید از طریق ویژگی ref.current به مقدار فعلی آن ref دسترسی پیدا کنید.</p>
<div style={{direction:"ltr"}} >
  
  <Code fileName={"example"} widthIN={"w-full"} code={`
 import { useRef } from 'react';
 export default function AlertClickNumber() {
     let ref = useRef(0);
  
    function handleClick() {
      ref.current = ref.current + 1; 
      alert('You clicked ' + ref.current + ' times!');
    }
    return (
     <>
        <div className="divider text-primary divider-accent">Alert click number </div>
        <p>ref.current is {ref.current}</p> // not changed ref.current is 0 not in render
      <button className='btn btn-square btn-primary w-24' onClick={handleClick}>
        Click me!
      </button>
      </>
      )
 }
   
          `} language={"js"}></Code>
          
</div>
        <br />
        <p>یک ref مانند یک جیب مخفی از مؤلفه شما است که React آن را ردیابی نمی کند. برای مثال، می‌توانید از refs timeout IDs, DOM elements و سایر اشیایی که بر خروجی رندر مؤلفه تأثیر نمی‌گذارند استفاده کنید.</p>
        </div>
      );
   };
  const DifferencesBetweenRefsAndState =()=>{
    return (
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
        <td>Mutable—you can modfirstify and update current’s value outside of the rendering process.Brice Swyre</td>
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
       };
       const DifferencesBetweenRefsAndStateFa =()=>{
return (
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
const WhenToUseRefs =()=>{
  return (
       <div>
     <p>Typically, you will use a ref when your component needs to “step outside” React and communicate with external APIs—often a browser API that won’t impact the appearance of the component. Here are a few of these rare situations:</p>
     <ul className='list-inside p-4 text-success bg-success-content list-disc'>
       <li>Storing timeout IDs</li>
       <li>Storing and manipulating DOM elements, which we cover on the next page</li>
       <li>Storing timeout IDsStoring other objects that aren’t necessary to calculate the JSX.</li>
        <p>If your component needs to store some value, but it doesn’t impact the rendering logic, choose refs.</p>
     </ul>
     </div>)
};
const WhenToUseRefsFa =()=>{
  return (
        <div style={{direction:"rtl"}}>
      <p >به طور معمول، زمانی که مؤلفه شما نیاز به «بیرون رفتن» React و برقراری ارتباط با APIهای خارجی دارد، از یک ref استفاده می‌کنید - اغلب یک API مرورگر است که بر ظاهر مؤلفه تأثیر نمی‌گذارد. در اینجا چند مورد از این موقعیت های نادر آورده شده است:</p>
        <ul className='list-inside p-4 text-success bg-success-content list-disc'>
       <li>ذخیره سازی timeout IDs</li>
       <li>ذخیره سازی و دستکاری DOM elements </li>
       <li>ذخیره اشیاء دیگر که برای محاسبه JSX ضروری نیستند..</li>
        <p>اگر مؤلفه شما نیاز به ذخیره مقداری دارد، اما بر منطق رندر تأثیر نمی گذارد، refs را انتخاب کنید.</p>
     </ul>
     </div>
  )}
  const RecapDomWithRefs =()=>{
    return (
             <div>
<div><span>1- </span>Refs are an escape hatch to hold onto values that aren’t used for rendering. You won’t need them often.</div>
<div><span>2- </span>A ref is a plain JavaScript object with a single property called current, which you can read or set.</div>
<div><span>3- </span>You can ask React to give you a ref by calling the useRef Hook.</div>
<div><span>4- </span>Like state, refs let you retain information between re-renders of a component.</div>
<div><span>5- </span>Unlike state, setting the ref’s current value does not trigger a re-render.</div>
<div><span>6- </span>Don’t read or write ref.current during rendering. This makes your component hard to predict.</div>
</div>
)}
const RecapDomWithRefsFa =()=>{

    return(
      <div dir='rtl'>
<div><span>1.</span>Refs یک راه فرار برای نگه‌داری مقادیری است که برای رندر (نمایش) استفاده نمی‌شوند.</div>
<div><span>2.</span>شما به طور معمول به آن‌ها نیاز زیادی پیدا نخواهید کرد.</div>
<div><span>3.</span>یک Ref یک شیء ساده جاوااسکریپت با تنها یک ویژگی به نام `current` است.</div>
<div><span>4.</span>شما می‌توانید مقدار این ویژگی را بخوانید یا آن را تنظیم کنید.</div>
<div><span>5.</span>شما می‌توانید با فراخوانی قلاب `useRef` از React بخواهید که یک Ref به شما بدهد.</div>
<div><span>6.</span>مانند State، Ref به شما اجازه می‌دهد اطلاعات را بین رندرهای مجدد یک کامپوننت حفظ کنید.</div>
<div><span>7.</span>برخلاف State، تنظیم مقدار جاری Ref باعث راه‌اندازی مجدد رندر (بازنمایش) نمی‌شود.</div>
<div><span>8.</span> خواندن یا نوشتن مقدار `ref.current` در طول رندر خودداری کنید. این کار باعث می‌شود پیش‌بینی رفتار کامپوننت شما دشوار شود.</div>
  </div>
    )
}
  export default{
    EscapeHatches,
    EscapeHatchesFa,
    DifferencesBetweenRefsAndState,
    DifferencesBetweenRefsAndStateFa,
    WhenToUseRefs,
    WhenToUseRefsFa,
    RecapDomWithRefs,
    RecapDomWithRefsFa,
}