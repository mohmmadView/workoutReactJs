 import AlertClickNumber from './alertClickNumber.jsx';
 import InputFocus from './FocusTheInput.jsx';
 import StopWatch from './stopWatch.jsx';
import WhatWorkUseRef from './whatWorkUseRef.jsx';
import ScrollIntoView from './ScrollIntoView.jsx';
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
<WhatWorkUseRef />
<ScrollIntoView />
    </div>
   );
}