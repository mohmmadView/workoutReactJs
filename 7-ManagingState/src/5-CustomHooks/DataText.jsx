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
            highlightClassName='text-secondary bg-base-300  '
            searchWords={["isOnline"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success '
            unhighlightClassName='text-white '
            textToHighlight={`At the end of the function, return isOnline. This lets your components read that value:`} />
             <HandleTab tabOne="App.js" tabTwo="useOnlineStatus.js" />
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
const customHooks2 = () => {
          return (
            <div className='whitespace-pre-line'>
            <Highlighter 
            highlightClassName='text-secondary bg-base-300 rtl'
            searchWords={["3-","1-","2-",`.`,`,`,"”",`“`,"Effect","React","(","Effects",")","jsx","state","props","components","Events","component","effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`
            Verify that switching the network on and off updates both components. Now your components don't have as much repetitive logic. More importantly, the code inside them describes what they want to do (use the online status!) rather than how to do it (by subscribing to the browser events). When you extract logic into custom Hooks, you can hide the gnarly details of how you deal with some external system or a browser API. The code of your components expresses your intent, not the implementation.
          `} />
<div className="divider divider-start text-accent mt-8 divider-secondary  text">
      <span className='text-primary text-2xl'>
         Hook names always start with use 
      </span>
 </div>
           <Highlighter 
            highlightClassName='text-secondary bg-base-300 rtl'
            searchWords={["useEffect","React","(","Effects",")","jsx","State Hook","count","useState","props","components","Event","component","effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`
React applications are built from components. Components are built from Hooks, whether built-in or custom. You’ll likely often use custom Hooks created by others, but occasionally you might write one yourself!

You must follow these naming conventions:

React component names must start with a capital letter, like StatusBar and SaveButton. React components also need to return something that React knows how to display, like a piece of JSX.
Hook names must start with use followed by a capital letter, like useState (built-in) or useOnlineStatus (custom, like earlier on the page). Hooks may return arbitrary values.
This convention guarantees that you can always look at a component and know where its state, Effects, and other React features might “hide”. For example, if you see a getColor() function call inside your component, you can be sure that it can’t possibly contain React state inside because its name doesn’t start with use. However, a function call like useOnlineStatus() will most likely contain calls to other Hooks inside!
`}  />
              </div>
               )
               
            }
 const customHooks2Fa = () => {
          return (
            <div className="whitespace-pre-line rtl ">
                <Highlighter 
            highlightClassName='text-secondary bg-base-300 rtl'
            searchWords={["API","Hook","(","Effects",")","jsx","useState","props","components","Event","component"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={` 
بررسی کنید که روشن و خاموش کردن شبکه هر دو مؤلفه را به روز می کند. حالا اجزای شما آنقدرها هم منطق تکراری ندارند. مهمتر از آن، کد داخل آنها به جای نحوه انجام آن (با اشتراک در رویدادهای مرورگر) آنچه را که می خواهند انجام دهند (از وضعیت آنلاین استفاده کنید!) توضیح می دهد. هنگامی که منطق را در Hook های سفارشی استخراج می کنید، می توانید جزئیات دقیق نحوه برخورد با برخی از سیستم های خارجی یا API مرورگر را پنهان کنید. کد اجزای شما بیانگر قصد شماست، نه اجرای آن.
          `} />
<div className="divider divider-start text-accent mt-8 divider-secondary  text">
      <span className='text-primary text-2xl'>
         Hook names always start with use 
      </span>
 </div>          
          <Highlighter  
            highlightClassName='whitespace-pre-line  bg-base-100'  
            searchWords={[(/([a-zA-Z])\w+/g),"Effect"]}
            autoEscape={false}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={` برنامه های React از کامپوننت ها ساخته می شوند. کامپوننت ها از Hooks ساخته می شوند، چه داخلی و چه سفارشی. احتمالاً اغلب از قلاب‌های سفارشی ایجاد شده توسط دیگران استفاده می‌کنید، اما گاهی اوقات ممکن است خودتان یکی بنویسید!

شما باید این قراردادهای نامگذاری را دنبال کنید:

نام اجزای React باید با یک حرف بزرگ شروع شود، مانند StatusBar و SaveButton. کامپوننت‌های React نیز باید چیزی را برگردانند که React می‌داند چگونه نمایش دهد، مانند یک قطعه JSX.
نام قلاب ها باید با استفاده و به دنبال آن یک حرف بزرگ شروع شود، مانند useState (توکار) یا useOnlineStatus (سفارشی، مانند قبل در صفحه). هوک ها ممکن است مقادیر دلخواه را برگردانند.
این قرارداد تضمین می‌کند که همیشه می‌توانید به یک مؤلفه نگاه کنید و بدانید که وضعیت، افکت‌ها و سایر ویژگی‌های React در کجا ممکن است پنهان شوند. برای مثال، اگر یک تابع getColor() را در داخل کامپوننت خود مشاهده کردید، می‌توانید مطمئن باشید که احتمالاً نمی‌تواند حاوی وضعیت React در داخل باشد زیرا نام آن با استفاده شروع نمی‌شود. با این حال، یک فراخوانی تابعی مانند useOnlineStatus() به احتمال زیاد شامل تماس‌هایی با سایر Hook‌های داخل آن خواهد بود!
          `} />  
        </div>
 
          )
            
      }
    const  PassingReactiveValuesBetweenHooks = () => { 

      return(
      <Highlighter 
      highlightClassName='whitespace-pre-line  bg-base-100'
      searchWords={["Hooks","component"]}
      unhighlightClassName='text-white'
      textToHighlight='
      The code inside your custom Hooks will re-run during every re-render of your component. This is why, like components, custom Hooks need to be pure. Think of custom Hooks’ code as part of your component’s body!

      Because custom Hooks re-render together with your component, they always receive the latest props and state. To see what this means, consider this chat room example. Change the server URL or the chat room:
      '
      >
      
      </Highlighter>)
    }
    const PassingReactiveValuesBetweenHooksFa = () => {

      return(
       <Highlighter 
                highlightClassName=' whitespace-pre-line  bg-base-100'
         searchWords={['update','mount',"unmount","useEffect","React","(","Effects",")","jsx","State Hook","count","useState","props","components","Event","component","effect","state","hook","prop","ESLint"]}
         autoEscape={true}
         activeIndex={4}
         activeClassName='text-success'
         unhighlightClassName='text-white' 
         textToHighlight='
         کد داخل Hooks سفارشی شما در طول هر رندر مجدد جزء شما دوباره اجرا می شود. به همین دلیل است که قلاب های سفارشی مانند اجزاء باید خالص باشند. به کد Hooks سفارشی به عنوان بخشی از بدنه جزء خود فکر کنید! از آنجایی که هوک‌های سفارشی به همراه کامپوننت شما دوباره رندر می‌شوند، همیشه آخرین موارد و حالت‌ها را دریافت می‌کنند. برای اینکه بفهمید این به چه معناست، این نمونه اتاق گفتگو را در نظر بگیرید. آدرس سرور یا اتاق چت را تغییر دهید:'

         />
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
            customHooks2 ,
            customHooks2Fa ,
            PassingReactiveValuesBetweenHooks ,
            LifecycleOfReactiveEffects ,
            LifecycleOfReactiveEffectsFa ,
            PassingReactiveValuesBetweenHooksFa
        }