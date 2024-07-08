import Code from '../utils/Prism';
import Highlighter from "react-highlight-words";
import { useEffect, useState } from 'react';
const ReusingLogicWithCustomHooks = () => {
          return (
            <div  className='whitespace-pre-line'>
            <Highlighter 
            highlightClassName='text-secondary bg-base-300 rtl'
            searchWords={["useState","useEffect","React","(","Hooks",")","Hook","state","props","components","Event","component","effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`React comes with several built-in Hooks like useState, useContext, and useEffect. Sometimes, you’ll wish that there was a Hook for some more specific purpose: for example,to fetch data, to keep track of whether the user is online, or to connect to a 
                chat room. You might not find these Hooks in React, but you can create your ownHooks for your application’s needs.`} />
        <div className="divider divider-start text-accent mt-8 divider-secondary ">
        Custom Hooks: Sharing logic between components 
        </div>
        <Highlighter 
            highlightClassName='text-secondary bg-base-300 rtl'
            searchWords={["3-","1-","2-",`.`,`,`,"”",`“`,"Effect","React","(","Effects",")","jsx","state","props","components","Event","component","effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`Imagine you’re developing an app that heavily relies on the network (as most apps do). You want to warn the user if their network connection has accidentally gone off while they were using your app. How would you go about it? It seems like you’ll need two things in your component:
1-A piece of state that tracks whether the network is online.
2-An Effect that subscribes to the global online and offline events, and updates that state.
      This will keep your component synchronized with the network status. You might start with something like this:


`} />

        <Code more={false} code={`
  import { useState, useEffect } from 'react';

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

 `} language={"js"}
          widthIN={"w-full h-auto"} ></Code>
<Highlighter 
            highlightClassName='text-secondary bg-base-300 rtl'
            searchWords={["3-","1-","2-",`.`,`,`,"”",`“`,"Effect","React","(","Effects",")","jsx","state","props","components","Event","component","effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`Try turning your network on and off, and notice how this StatusBar updates in response to your actions.

Now imagine you also want to use the same logic in a different component. You want to implement a Save button that will become disabled and show “Reconnecting…” instead of “Save” while the network is off.

To start, you can copy and paste the isOnline state and the Effect into SaveButton:`} />
  <Code
          more={false}
          code={`
   import { useState, useEffect } from 'react';

export default function SaveButton() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

`}
          language={"js"}
          widthIN={"w-full h-auto"}
        />
      <Highlighter 
            highlightClassName='text-secondary bg-base-300 rtl'
            searchWords={["3-","1-","2-",`.`,`,`,"”",`“`,"Effect","React","(","Effects",")","jsx","state","props","components","Event","component","effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`Verify that, if you turn off the network, the button will change its appearance.

These two components work fine, but the duplication in logic between them is unfortunate. It seems like even though they have different visual appearance, you want to reuse the logic between them.`} />
  
   <div className="divider divider-start text-accent mt-8 divider-secondary ">
 Extracting your own custom Hook from a component 
 </div>
  <Highlighter 
            highlightClassName='text-secondary bg-base-300 rtl'
            searchWords={["3-","1-","2-",`.`,`,`,"Hook",`“`,"Effect","React","(","useEffect",")","jsx","useState","props","components","Event","component","effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`Imagine for a moment that, similar to useState and useEffect, there was a built-in useOnlineStatus Hook. Then both of these components could be simplified and you could remove the duplication between them:`} />
   <Code
              language={"js"}
              widthIN={"w-full h-auto "}
          code={`
  function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}
`}/>
 <Highlighter 
            highlightClassName='text-secondary bg-base-300  rtl'
            searchWords={["3-","1-","2-",`.`,`,`,"Hook",`“`,"Effect","React","(","useEffect",")","jsx","useState","props","useOnlineStatus","Event","component","effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success '
            unhighlightClassName='text-white '
            textToHighlight={`Although there is no such built-in Hook, you can write it yourself. Declare a function called useOnlineStatus and move all the duplicated code into it from the components you wrote earlier:`} />
      <Code
      language={"js"}
              widthIN={"w-full h-auto"}
               code={`
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}
`}/>
      <Highlighter 
            highlightClassName='text-secondary bg-base-300  rtl'
            searchWords={["isOnline"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success '
            unhighlightClassName='text-white '
            textToHighlight={`At the end of the function, return isOnline. This lets your components read that value:`} />
            </div>
          )
        }
      
const ReusingLogicWithCustomHooksFa=()=>{
          return (
            <div  className='whitespace-pre-line rtl'>
               
            <Highlighter 
            highlightClassName='text-secondary bg-base-300 '
            searchWords={[(/([a-zA-Z])\w+/g),("Effect")]}
            autoEscape={false}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`React دارای چندین Hook داخلی مانند useState، useContext و useEffect است. گاهی اوقات، شما آرزو می کنید که ای کاش یک Hook برای اهداف خاص تر وجود داشت: به عنوان مثال، برای واکشی داده ها، پیگیری آنلاین بودن کاربر یا اتصال به یکاتاق گفتگو ممکن است این Hook ها را در React پیدا نکنید، اما می توانید هوک های خود را برای نیازهای برنامه خود ایجاد کنید.
            `} />
 <div className="divider divider-start text-accent mt-8 divider-secondary ">
 Custom Hooks: Sharing logic between components 
 </div>
          <Highlighter 
            highlightClassName='text-secondary bg-base-300 '
            searchWords={[(/([a-zA-Z])\w+/g),("Effect"),"1-","2-"]}
            autoEscape={false}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`تصور کنید در حال توسعه برنامه ای هستید که به شدت به شبکه متکی است (همانطور که اکثر برنامه ها انجام می دهند). می‌خواهید به کاربر هشدار دهید که اتصال شبکه او به طور تصادفی در حین استفاده از برنامه شما قطع شده است. چگونه در مورد آن اقدام می کنید؟ به نظر می رسد که شما به دو چیز در کامپوننت خود نیاز دارید:
1- یک قطعه حالت که آنلاین بودن شبکه را ردیابی می کند.
2-افکتی که در رویدادهای جهانی آنلاین و آفلاین مشترک می شود و آن حالت را به روز می کند.
با این کار جزء شما با وضعیت شبکه همگام می شود. ممکن است با چیزی شبیه به این شروع کنید:`} />
        <Code
          more={false}
          code={`
import { useState, useEffect } from 'react';
export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

            `}
          language={"js"}
          widthIN={"w-full h-auto mt-8"}
        />
          <Highlighter 
            highlightClassName='text-secondary bg-base-300 '
            searchWords={[(/([a-zA-Z])\w+/g),("Effect"),"1-","2-"]}
            autoEscape={false}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`سعی کنید شبکه خود را روشن و خاموش کنید و متوجه شوید که چگونه این نوار وضعیت در پاسخ به اقدامات شما به روز می شود.

حال تصور کنید که می خواهید از همان منطق در کامپوننت دیگری نیز استفاده کنید. می‌خواهید یک دکمه ذخیره را اجرا کنید که غیرفعال می‌شود و در حالی که شبکه خاموش است، به جای «ذخیره»، «Reconnecting…» را نشان می‌دهد.

برای شروع، می توانید حالت isOnline و افکت را در SaveButton کپی و جایگذاری کنید:`} />  
        <Code
          more={false}
          code={`
   import { useState, useEffect } from 'react';

export default function SaveButton() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

`}
          language={"js"}
          widthIN={"w-full h-auto"}
        />
<Highlighter 
            highlightClassName='text-secondary bg-base-300 '
            searchWords={[(/([a-zA-Z])\w+/g),("Effect"),"1-","2-"]}
            autoEscape={false}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`بررسی کنید که اگر شبکه را خاموش کنید، دکمه ظاهر آن تغییر خواهد کرد.

این دو جزء به خوبی کار می کنند، اما تکراری شدن در منطق بین آنها مایه تاسف است. به نظر می رسد با وجود اینکه ظاهر بصری متفاوتی دارند، می خواهید از منطق بین آنها دوباره استفاده کنید.`} />  
    <div className="divider divider-start text-accent mt-8 divider-secondary ">
 Extracting your own custom Hook from a component 
 </div>
 <Highlighter 
            highlightClassName='text-secondary bg-base-300 '
            searchWords={[(/([a-zA-Z])\w+/g),("Effect"),"1-","2-"]}
            autoEscape={false}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`یک لحظه تصور کنید که مشابه useState و useEffect، یک useOnlineStatus Hook داخلی وجود دارد. سپس هر دوی این مؤلفه ها را می توان ساده کرد و می توانید تکرار بین آنها را حذف کنید:`} />  
            <Code
              language={"js"}
              widthIN={"w-full h-auto"}
          code={`
  function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}
`}/>
<Highlighter 
            highlightClassName='text-secondary bg-base-300 '
            searchWords={[(/([a-zA-Z])\w+/g),("Effect"),"1-","2-"]}
            autoEscape={false}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`گرچه چنین هوک داخلی وجود ندارد، اما می توانید خودتان آن را بنویسید. تابعی به نام useOnlineStatus را اعلام کنید و تمام کدهای تکراری را از اجزایی که قبلا نوشتید به آن منتقل کنید:`} /> 
   <Code
              language={"js"}
              widthIN={"w-full h-auto"}
          code={`
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}
`}/>
<Highlighter 
            highlightClassName='text-secondary bg-base-300 '
            searchWords={[(/([a-zA-Z])\w+/g),("Effect"),"1-","2-"]}
            autoEscape={false}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`در پایان تابع، isOnline را برگردانید. این به اجزای شما اجازه می‌دهد آن مقدار را بخوانند:`} /> 
  <HandleTab tabOne="App.js" tabTwo="useOnlineStatus.js" />
            </div>
          )
        }

        function HandleTab({tabOne,tabTwo }){
           let [tab,setTab]=useState(false);
                let stringCode =[`import { useOnlineStatus } from './useOnlineStatus.js';

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

export default function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}
`,`import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}

          `]
          function HabdleSetTab(){
            setTab(1)
          }
          function HandleSetTab2(){
            setTab(0)
          }
          useEffect(() => {
            let setBtnCode = document.getElementById('setBtnCode');
            let setBtnCode2 = document.getElementById('setBtnCode2');
            setBtnCode.addEventListener('click',HabdleSetTab)
            setBtnCode2.addEventListener('click',HandleSetTab2)
            return () => {
              setBtnCode.removeEventListener('click',HabdleSetTab)
              setBtnCode2.removeEventListener('click',HandleSetTab2)
            }
   
            
          })
       
         return (
          <div id='con'>
          <Tab one={tabOne} two={tabTwo} />
           {tab? <Code language={'js'} widthIN={'w-full h-auto'} code={stringCode[0]} /> : <Code language={'js'} widthIN={'w-full h-auto'} code={stringCode[1]} /> }
          </div>
         )
          function Tab({one,two }){
         
          return (
            <>
            <div className='flex justify-end bg-stone-900'>
            <button id='setBtnCode'  className='btn btn-outline btn-sm btn-primary'>{one}</button>
            <button id='setBtnCode2'  className='btn btn-outline btn-sm btn-primary'>{two}</button>
            </div>
            <div>
            </div>
            </>
          )
        }
      }
const YouMightNotNeedEffect = () => {
          return (
            <div className='whitespace-pre-line'>
            <Highlighter 
            highlightClassName='text-secondary bg-base-300 rtl'
            searchWords={["3-","1-","2-",`.`,`,`,"”",`“`,"Effect","React","(","Effects",")","jsx","state","props","components","Event","component","effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`
            You Might Not Need an Effect (YMNE) in React
            YMNE stands for "You Might Not Need an Effect" and it means that you might not need to use useEffect in your React component.
            Misusing useEffect can lead to more complex, slower, and error-prone code. That's why it's important to check if there's a simpler solution to your problem before using useEffect.
            When to use YMNE
            Here are some cases where you might not need useEffect:
            
            When you want to know when state changes or to send information to the server: In these cases, you can use State Hooks like useState or Context API.
            When you want to load data from an external API: You can use State Hooks like useState or libraries like react-query or SWR.
            When you want to create a subscription to an external resource: You can use State Hooks like useState or libraries like useEffect or useRef.
            Alternatives to YMNE
            
            Here are some alternatives to useEffect:
            
            State Hooks: useState and useReducer are good for managing the internal state of your component.
            Context API: Good for sharing state between different parts of your application.
            Libraries: There are various libraries like react-query, SWR, and useRef that can be used to perform specific tasks without needing useEffect.
          `} />
<h1 className="text-2xl text-primary font-bold">Example : </h1>
<Code code={`
function MyComponent(props) {
  const [count, setCount] = useState(props.initialCount);

  useEffect(() => {
    setCount(props.initialCount);
  }, [props.initialCount]);

  return <div>{count}</div>;
}
`} language={'js'} more={false} widthIN={'w-full'} />
           <Highlighter 
            highlightClassName='text-secondary bg-base-300 rtl'
            searchWords={["useEffect","React","(","Effects",")","jsx","State Hook","count","useState","props","components","Event","component","effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`In this example, we can use the useState State Hook to update count based on props.initialCount without needing useEffect: `} />  
            <Code code={`
function MyComponent(props) {
  const [count, setCount] = useState(props.initialCount);

  return <div>{count}</div>;
}
`} language={'js'} more={false} widthIN={'w-full h-auto'} />
<div className="divider divider-start text-accent mt-8 divider-secondary  text">
      <span className='text-primary text-2xl'>
          How to remove unnecessary Effects 
      </span>
 </div>
<Highlighter 
 highlightClassName='text-secondary bg-base-300 whitespace-pre-line'
            searchWords={["*","useEffect","React","(","Effects",")","jsx","State Hook","count","useState","props","components","Event","component","effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`
* You don’t need Effects to transform data for rendering. For example,let’s say you want to filter a list before displaying it. You might feel tempted to write an Effect that updates a state variable when the list changes. However, this is inefficient. When you update the state, React will first call your component functions to calculate what should be on the screen. Then React will “commit” these changes to the DOM, updating the screen. Then React will run your Effects. If your Effect also immediately updates the state, this restarts the whole process from scratch! To avoid the unnecessary render passes, transform all the data at the top level of your components. That code will automatically re-run whenever your props or state change.

* You don’t need Effects to handle user events. For example, let’s say you want to send an /api/buy POST request and show a notification when the user buys a product. In the Buy button click event handler, you know exactly what happened. By the time an Effect runs, you don’t know what the user did (for example, which button was clicked). This is why you’ll usually handle user events in the corresponding event handlers.

* You do need Effects to synchronize with external systems. For example, you can write an Effect that keeps a jQuery widget synchronized with the React state. You can also fetch data with Effects: for example, you can synchronize the search results with the current search query. Keep in mind that modern frameworks provide more efficient built-in data fetching mechanisms than writing Effects directly in your components.
  To help you gain the right intuition, let’s look at some common concrete examples!`} />  
              </div>
               )
               
            }
 const YouMightNotNeedEffectFa = () => {
          return (
            <div className="whitespace-pre-line rtl ">
                <Highlighter 
            highlightClassName='text-secondary bg-base-300 rtl'
            searchWords={["useRef","useReducer","useEffect","React","(","Effects",")","jsx","useState","props","components","Event","component","effect","YMNE","Context API","Hooks","State","libraries","You Might Not Need an Effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={` 
YMNE مخفف "You Might Not Need an Effect" است و به این معنی است که شما ممکن است نیازی به استفاده از useEffect در کامپوننت React خود نداشته باشید.

استفاده نادرست از useEffect می تواند منجر به کد پیچیده تر، کندتر و مستعد خطا شود. به همین دلیل، مهم است که قبل از استفاده از useEffect، بررسی کنید که آیا راه حل ساده تری برای مشکل شما وجود دارد یا خیر.

چه زمانی باید از YMNE استفاده کرد؟

در اینجا چند مورد وجود دارد که نشان می دهد شما ممکن است نیازی به useEffect نداشته باشید:

هنگامی که می خواهید از تغییر وضعیت یا ارسال اطلاعات به سرور مطلع شوید: در این موارد، می توانید از State Hooks مانند useState یا Context API استفاده کنید.
هنگامی که می خواهید داده ها را از یک API خارجی بارگیری کنید: می توانید از State Hooks مانند useState یا libraries مانند react-query یا SWR استفاده کنید.
هنگامی که می خواهید یک اشتراک به یک منبع خارجی ایجاد کنید: می توانید از State Hooks مانند useState یا libraries مانند useEffect یا useRef استفاده کنید.

در اینجا چند جایگزین برای useEffect آورده شده است:

State Hooks: useState و useReducer برای مدیریت وضعیت داخلی کامپوننت شما مناسب هستند.
Context API: برای به اشتراک گذاری وضعیت بین اجزای مختلف برنامه شما مناسب است.
libraries: کتابخانه های مختلفی مانند react-query، SWR و useRef وجود دارند که می توانند برای انجام وظایف خاص بدون نیاز به useEffect استفاده شوند.
          `} />
<h1 className="text-2xl text-primary font-bold">مثال : </h1>
<Code code={`
function MyComponent(props) {
  const [count, setCount] = useState(props.initialCount);
  useEffect(() => {
    setCount(props.initialCount);
  }, [props.initialCount]);
  return <div>{count}</div>;
}
`} language={'js'} more={false} widthIN={'w-full'} />
<Highlighter 
 highlightClassName='text-secondary bg-base-300 rtl'
            searchWords={["useEffect","React","(","Effects",")","jsx","State Hook","count","useState","props","components","Event","component","effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`در این مثال، می توانیم از State Hook useState برای به روز رسانی count بر اساس props.initialCount بدون نیاز به useEffect استفاده کنیم: 
          `} />  
                 <Code code={`
function MyComponent(props) {
  const [count, setCount] = useState(props.initialCount);
  return <div>{count}</div>;
}
`} language={'js'} more={false} widthIN={'w-full h-auto'} />
          <Highlighter  
            highlightClassName='whitespace-pre-line  bg-base-100'  
            searchWords={["useEffect","React","(","Effects",")","jsx","State Hook","count","useState","props","components","Event","component","effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`در این مثال، می توانیم از State Hook useState برای به روز رسانی count بر اساس props.initialCount بدون نیاز به useEffect استفاده کنیم: 
          `} />  
          <Code code={`
function MyComponent(props) {
  const [count, setCount] = useState(props.initialCount);
  return <div>{count}</div>;
}
`} language={'js'} more={false} widthIN={'w-full h-auto'} />
        <div className="divider divider-start text-accent mt-8 divider-secondary ">
            <span className="text-2xl text-primary font-bold">حذف Effect های غیرضروری</span>
        </div> 
        <Highlighter
         highlightClassName=' whitespace-pre-line  bg-base-100'
         searchWords={["useEffect","React","(","Effects",")","jsx","State Hook","count","useState","props","components","Event","component","effect","state","hook","prop","ESLint"]}
         autoEscape={true}
         activeIndex={4}
         activeClassName='text-success'
         unhighlightClassName='text-white'
         textToHighlight={`
        نحوه حذف Effect های غیرضروری در React:
        در اینجا چند قدم برای حذف Effect های غیرضروری در کد React شما آورده شده است:

1. Effect های غیرضروری را شناسایی کنید:

کد خود را بررسی کنید: به طور دستی کامپوننت های خود را بررسی کنید و به دنبال مکان هایی باشید که از useEffect استفاده می کنید. از خود بپرسید:
آیا این Effect فقط بر اساس تغییرات props یا state، وضعیت را به روز می کند؟ State hook ها مانند useState می توانند به طور مستقیم این کار را انجام دهند.
آیا این Effect در حال دریافت اطلاعات یا اشتراک در یک منبع خارجی است؟ استفاده از کتابخانه هایی مانند react-query یا SWR برای دریافت اطلاعات یا useState با منطق مناسب برای اشتراک ها را در نظر بگیرید.
به دنبال هشدارهای linter باشید: برخی از linter ها مانند ESLint با قانون react-hooks/exhaustive-deps می توانند در مورد وابستگی های احتمالی گمشده در تماس های useEffect شما به شما هشدار دهند. با این حال، این هشدارها قابل سرکوب هستند، بنابراین بررسی دستی همچنان مهم است.
2. Effect های غیرضروری را حذف کنید:

پس از شناسایی یک Effect غیرضروری، hook useEffect و کد درون آن را حذف کنید.
اگر Effect در حال به روز رسانی وضعیت بر اساس props یا state بود، کامپوننت خود را برای به روز رسانی مستقیم وضعیت با استفاده از مقدار prop جدید یا مقدار state به روز شده اصلاح کنید.
اگر Effect در حال دریافت اطلاعات یا اشتراک بود، استفاده از روش های جایگزین ذکر شده در مرحله 1 را در نظر بگیرید.
3. برای حفظ قابلیت نگهداری بازسازی کنید:

با حذف Effect ها، مطمئن شوید که کد شما واضح و آسان برای درک باقی می ماند. در نظر بگیرید که منطق پیچیده را به توابع جداگانه یا hook های سفارشی تقسیم کنید.
نکات اضافی:

از سادگی شروع کنید: هنگام برخورد با یک مشکل جدید، ابتدا فکر کنید که آیا راهی برای حل آن بدون useEffect وجود دارد یا خیر. State hook ها و Context API ممکن است برای بسیاری از موارد کافی باشد.
ترکیب را ترجیح دهید: منطق پیچیده را به اجزای کوچکتر قابل استفاده مجدد یا hook های سفارشی تقسیم کنید. این می تواند به شناسایی و حذف Effect های غیرضروری در واحدهای کوچکتر کد کمک کند.
به طور کامل تست کنید: پس از حذف Effect، مطمئن شوید که کامپوننت شما همچنان طبق انتظار رفتار می کند. تست های واحد می توانند در اینجا مفید باشند.
با دنبال کردن این مراحل و در نظر گرفتن اصل YMNE (You Might Not Need an Effect)، می توانید کد React تمیزتر، کارآمدتر و آسان تر برای نگهداری بنویسید.
`} />
        </div>
 
          )
            
      }
      const YouMightNotNeedEffectExample = () => {
        return (
  <>
    <h1 className="text-red-500 text-2xl m-4">Example :</h1>
         <Code widthIN="w-full"  language={"js"} code={`
  function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let ignore = false;
    fetchResults(query, page).then(json => {
      if (!ignore) {
        setResults(json);
      }
    });
    return () => {
      ignore = true;
    };
  }, [query, page]);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}
            `}  />
<h1 className="text-red-500 text-2xl m-4"> Remove effect</h1>
  <Code widthIN="w-full"  language={"js"} code={`
 function SearchResults({ query }) {
  const [page, setPage] = useState(1);
  const params = new URLSearchParams({ query, page });
  const results = useData(/api/search?params});

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}
function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}
            `}  />
  </>
        )
    }
    const LifecycleOfReactiveEffects = () => {
        return (
            <div className='whitespace-pre-line'>
                <Highlighter 
                highlightClassName=' whitespace-pre-line  bg-base-100'
         searchWords={["mount","React","update","Effects","unmount","jsx","State Hook","count","useState","props","components","Event","component","effect","state","hook","prop","ESLint"]}
         autoEscape={true}
         activeIndex={4}
         activeClassName='text-success'
         unhighlightClassName='text-white'
         textToHighlight={`Effects have a different lifecycle from components. Components may mount, update, or unmount. An Effect can only do two things: to start synchronizing something, and later to stop synchronizing it. This cycle can happen multiple times if your Effect depends on props and state that change over time. React provides a linter rule to check that you’ve specified your Effect’s dependencies correctly. This keeps your Effect synchronized to the latest props and state.`} />
            <h1 className=''></h1>
             <div className="divider divider-start text-accent mt-8 divider-secondary ">
            <span className="text-xl text-primary font-bold">The lifecycle of an Effect</span>
        </div> 
          <Highlighter 
                highlightClassName=' whitespace-pre-line  bg-base-100'
         searchWords={["mounts","React","updates","Effects","unmounts","jsx","State Hook","count","useState","props","components","Event","component","effect","state","hook","prop","ESLint"]}
         autoEscape={true}
         activeIndex={4}
         activeClassName='text-success'
         unhighlightClassName='text-white'
         textToHighlight={`
         Every React component goes through the same lifecycle:

A component mounts when it’s added to the screen.
A component updates when it receives new props or state, usually in response to an interaction.
A component unmounts when it’s removed from the screen.

         
         It’s a good way to think about components, but not about Effects. Instead, try to think about each Effect independently from your component’s lifecycle. An Effect describes how to synchronize an external system to the current props and state. As your code changes, synchronization will need to happen more or less often.
         
         To illustrate this point, consider this Effect connecting your component to a chat server:


         `} />
        

         
            </div>
        )
    }
    const LifecycleOfReactiveEffectsFa = () => {
        return (
            <div className='whitespace-pre-line rtl'>
                <Highlighter 
                highlightClassName=' whitespace-pre-line  bg-base-100'
         searchWords={['update','mount',"unmount","useEffect","React","(","Effects",")","jsx","State Hook","count","useState","props","components","Event","component","effect","state","hook","prop","ESLint"]}
         autoEscape={true}
         activeIndex={4}
         activeClassName='text-success'
         unhighlightClassName='text-white' 
         textToHighlight='چرخه حیات افکت‌ها با کامپوننت‌ها متفاوت است.
          کامپوننت‌ها می‌توانند لोड (mount) شوند، به‌روزرسانی (update) شوند، یا حذف (unmount) شوند. یک Effect (اثر) تنها می‌تواند دو کار انجام دهد:

شروع همگام‌سازی چیزی: این کار می‌تواند شامل مواردی مانند اتصال به یک API، راه‌اندازی یک تایمر یا تنظیم یک اشتراک باشد.
توقف همگام‌سازی چیزی: این کار می‌تواند شامل مواردی مانند قطع اتصال از یک API، پاکسازی یک تایمر یا لغو یک اشتراک باشد.
این چرخه می‌تواند چندین بار اتفاق بیفتد، به ویژه اگر Effect شما به props (ویژگی‌های) و state (وضعیت) که در طول زمان تغییر می‌کنند وابسته باشد. ریکت یک قانون linter (ابزار بررسی کد) ارائه می‌دهد تا بررسی کند که وابستگی‌های Effect خود را به درستی مشخص کرده‌اید. این کار باعث می‌شود Effect شما با آخرین props و state همگام‌سازی شود.'
         />
            <div className="divider divider-start text-accent mt-8 divider-secondary ">
            <span className="text-xl text-primary font-bold">ٍچرخه حیاط Effect</span>
            </div>
              <Highlighter 
                highlightClassName=' whitespace-pre-line rtl  bg-base-100'
         searchWords={['update','mount',"unmount","useEffect","React","(","Effects",")","jsx","State Hook","count","useState","props","components","Event","component","effect","state","hook","prop","ESLint"]}
         autoEscape={true}
         activeIndex={4}
         activeClassName='text-success'
         unhighlightClassName='text-white' 
         textToHighlight={`
            هر مؤلفه React چرخه حیات یکسانی را طی می کند: 
         یک مؤلفه زمانی که به صفحه اضافه می شود سوار می شود.
          یک مؤلفه معمولاً در پاسخ به یک تعامل زمانی که موارد یا وضعیت جدیدی دریافت می کند، به روز می شود. 
          هنگامی که یک جزء از صفحه نمایش حذف می شود، نصب می شود.

           این یک راه خوب برای فکر کردن در مورد کامپوننت ها است، اما نه در مورد افکت ها.در عوض، سعی کنید در مورد هر افکت مستقل از چرخه عمر اجزای خود فکر کنید. یک افکت نحوه همگام سازی یک سیستم خارجی را با شرایط و وضعیت فعلی توضیح می دهد.  همانطور که کد شما تغییر می کند، همگام سازی باید بیشتر یا کمتر انجام شود  .`}
         />
            </div>
        )
    }
         export default  {
          ReusingLogicWithCustomHooks ,
            ReusingLogicWithCustomHooksFa ,
            YouMightNotNeedEffect ,
            YouMightNotNeedEffectFa ,
            YouMightNotNeedEffectExample ,
            LifecycleOfReactiveEffects ,
            LifecycleOfReactiveEffectsFa ,
        }