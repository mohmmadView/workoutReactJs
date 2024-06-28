import Code from '../utils/Prism';
import Highlighter from "react-highlight-words";
import { useEffect, useRef } from 'react';
const HowToWriteAnEffectText = () => {
   let refColor = useRef(null);
        useEffect(() => {
        })
          return (
            <div ref={refColor} className='whitespace-pre-line'>
            <Highlighter 
            highlightClassName='text-secondary bg-base-300 rtl'
            searchWords={["3-","1-","2-",`.`,`,`,"”",`“`,"Effect","React","(","Effects",")","jsx","state","props","components","Event","component","effect"]}
            autoEscape={true}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`To write an Effect, follow these three steps:

   1- Declare an Effect. By default, your Effect will run after every render.

   2- Specify the Effect dependencies. Most Effects should only re-run when needed rather than after every render. For example, a fade-in animation should only trigger when a component appears. Connecting and disconnecting to a chat room should only happen when the component appears and disappears, or when the chat room changes. You will learn how to control this by specifying dependencies.

   3- Add cleanup if needed. Some Effects need to specify how to stop, undo, or clean up whatever they were doing. For example, “connect” needs “disconnect”, “subscribe” needs “unsubscribe”, and “fetch” needs either “cancel” or “ignore”. You will learn how to do this by returning a cleanup function.

Let’s look at each of these steps in detail.
          `} />

        <div className="divider divider-start text-accent mt-8 divider-secondary ">
          Step 1: Declare an Effect
        </div>
        <p className="p-4 ">
          To declare an <span className="text-red-500">Effect</span> in your{" "}
          <span>component</span>
        </p>
        <Code
          more={false}
          code={"import { useEffect } from 'react'; "}
          language={"js"}
          widthIN={"w-full h-auto"}
        />
        <p className="p-4 ">
          Then, call it at the top level of your <span>component</span> and put
          some code inside your <span className="text-red-500">Effect</span>:
        </p>
        <p className="p-4 ">
          Use <span className="text-green-500">useEffect</span> within your
          functional <span> component</span>:
        </p>
        <Code
          more={false}
          code={`function MyComponent() {
  // ...

  useEffect(() => {
    // Your effect code here
  }, [/* dependency array */]);

  // ...

  return (
    // JSX for your component
  );
}
`}
          language={"js"}
          widthIN={"w-full h-auto"}
        />

        <div className="divider divider-start text-accent mt-8 divider-secondary ">
          Step 2: Specify Effect Dependencies (Optional):
        </div>
        <p className="p-4">The second argument to <span className="text-green-500">useEffect</span> is an optional dependency array.</p>
        <p className="p-4">By default, the effect runs after every render. This can be inefficient if the effect doesn't need to update every time.</p>
        <p className="p-4">To control when the effect re-runs, include the props, state variables, or other values that the effect relies on in the dependency array. When one of these values changes, the effect will trigger again:</p>
        <Code more={false} code={`
  useEffect(() => {
  // Effect that depends on count
  }, [count]); // Dependency array includes count
 `} language={"js"}
          widthIN={"w-full h-auto"} ></Code>
          <p className="p-4">If the effect doesn't depend on any values and only needs to run once (similar to componentDidMount in class components), use an empty dependency array ([]):</p>

        <div className="divider divider-start text-accent mt-8 divider-secondary ">
          Step 3: Add Cleanup Logic (Optional):
        </div>
        <p>If your effect performs actions that require cleanup (subscriptions, timers), you can return a function from inside the effect. This cleanup function will be called when the component unmounts or before the effect runs again if dependencies change. This prevents memory leaks and ensures resources are properly released:</p>
        <Code more={false} code={`
useEffect(() => {
  const subscription = someApi.subscribe(/* ... */);

  return () => subscription.unsubscribe(); // Cleanup function
}, []); // Empty dependency array: runs only once

 `} language={"js"}
          widthIN={"w-full h-auto"} ></Code>
          <p className='p-4'>Complete Example with Data Fetching and Cleanup:</p>
           <Code more={true} code={`
import { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();

    // Cleanup function to avoid memory leaks when unmounting
    return () => {
      // Any cleanup logic here, e.g., canceling subscriptions
    };
  }, []); // Empty dependency array: fetch data only once on initial render

  // ...

  return (
    <div>
      {data ? (
        <p>Fetched data: {JSON.stringify(data)}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

 `} language={"js"}
          widthIN={"w-full h-82"} ></Code>
          
            </div>
          )
        }
const HowToWriteAnEffectTextFa=()=>{

          return (
            <div  className='whitespace-pre-line rtl'>
                
            <Highlighter 
            highlightClassName='text-secondary bg-base-300 '
            searchWords={[(/([a-zA-Z])\w+/g),("Effect")]}
            autoEscape={false}
            activeIndex={4}
            activeClassName='text-success'
            unhighlightClassName='text-white'
            textToHighlight={`
            برای نوشتن یک Effect، این سه مرحله را دنبال کنید:

            ۱. اعلام یک Effect: به طور پیش فرض، Effect شما بعد از هر بار رندر شدن اجرا خواهد شد.
            
            ۲. مشخص کردن وابستگی های Effect: اکثر Effect ها باید فقط در صورت نیاز و نه بعد از هر بار رندر شدن، دوباره اجرا شوند. به عنوان مثال، یک انیمیشن محو شدن (fade-in) فقط باید زمانی که یک کامپوننت ظاهر می شود، اجرا شود. اتصال و قطع اتصال به یک چت روم نیز فقط باید زمانی که کامپوننت ظاهر و ناپدید می شود یا زمانی که چت روم تغییر می کند، اتفاق بیفتد. شما با مشخص کردن وابستگی ها یاد خواهید گرفت که این را کنترل کنید.
            
            ۳. در صورت نیاز پاکسازی اضافه کنید: برخی Effect ها نیاز دارند مشخص کنند که چگونه هر کاری را که انجام می دهند متوقف، خنثی یا پاکسازی کنند. به عنوان مثال، "connect" نیاز به "disconnect" دارد، "subscribe" نیاز به "unsubscribe" دارد و "fetch" نیاز به "cancel" یا "ignore" دارد. شما با برگرداندن یک تابع پاکسازی، نحوه انجام این کار را یاد خواهید گرفت
            `} />
 <div className="divider divider-start text-accent mt-8 divider-secondary ">
          Step 1: اعلام Effect
        </div>
        <p className="p-4 ">
          فراخوانی <span className="text-red-500">Effect</span> در {" "}
          
        </p>
        <Code
          more={false}
          code={"import { useEffect } from 'react'; "}
          language={"js"}
          widthIN={"w-full h-auto"}
        />
        <p className="p-4 ">
          استفاده از <span className="text-green-500">useEffect</span> در  <span>component</span> 
          :
        </p>
        <Code
          more={false}
          code={`
   function MyComponent() {
  // ...

  useEffect(() => {
    // کد Effect شما در اینجا
  }, [/* آرایه وابستگی */]);

  // ...

  return (
    // JSX برای کامپوننت شما
  );
}

`}
          language={"js"}
          widthIN={"w-full h-auto"}
        />

        <div className="divider divider-start text-accent mt-8 divider-secondary ">
          Step 2: وابستگی های Effect را مشخص کنید (اختیاری):
        </div>
        <p className="p-4">
آرگومان دوم <span className='text-green-500'>useEffect</span> یک آرایه وابستگی اختیاری است.
</p>
        <p className="p-4">اگر یک آرایه خالی <span className='text-purple-500'>([])</span> ارائه دهید، <span className='text-red-500'>Effect</span> فقط یک بار پس از رندر اولیه اجرا می شود (مشابه componentDidMount در کامپوننت های کلاس).</p>
        <p className="p-4">هر  گونه <span className='text-orange-500'>prop،</span> متغیر حالت یا مقادیر دیگری که <span className='text-red-500'>Effect</span> به آنها وابسته است را در آرایه وابستگی قرار دهید. هنگامی که یکی از این مقادیر تغییر می کند، <span className='text-red-500'>Effect</span> دوباره اجرا می شود:</p>
        <Code more={false} code={`
  useEffect(() => {
  // Effect that depends on count
  }, [count]); // Dependency array includes count
 `} language={"js"}
          widthIN={"w-full h-auto"} ></Code>
          <p className="p-4">اگر <span className='text-red-500'>Effect</span> به هیچ مقداری وابسته نیست و فقط باید یک بار اجرا شود (مشابه <span>componentDidMount</span> در کامپوننت های کلاس)، از یک آرایه وابستگی خالی <span className='text-purple-500'>([])</span> استفاده کنید:</p>
             <Code more={false} code={`
 useEffect(() => {
  // Effect که فقط در رندر اولیه اجرا می شود
}, []);
 `} language={"js"}
          widthIN={"w-full h-auto"} ></Code> 
          <div className="divider divider-start text-accent mt-8 divider-secondary ">
          Step 3: منطق پاکسازی را اضافه کنید (اختیاری):
        </div>
        <p>
    اگر <span className='text-red-500'>Effect</span> شما اقداماتی را انجام می دهد که به پاکسازی نیاز دارند (اشتراک ها، تایمرها)، می توانید یک تابع را از داخل <span className='text-red-500'>Effect</span> برگردانید. این تابع پاکسازی زمانی فراخوانی می شود که کامپوننت جدا شود یا قبل از اینکه <span className='text-red-500'>Effect</span> دوباره اجرا شود اگر وابستگی ها تغییر کند. این از نشت حافظه جلوگیری می کند و تضمین می کند که منابع به درستی آزاد می شوند:
        </p>
          <Code more={false} code={`
useEffect(() => {
  const subscription = someApi.subscribe(/* ... */);
  return () => subscription.unsubscribe(); // تابع پاکسازی
}, []); // آرایه وابستگی خالی: فقط یک بار اجرا می شود
 `} language={"js"}
          widthIN={"w-full h-auto "} ></Code>
          <p className="p-4">مثال کامل با دریافت داده و پاکسازی:</p>
             <Code more={true} code={`
 import { useEffect, useState } from 'react';
function MyComponent() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
    // تابع پاکسازی برای جلوگیری از نشت حافظه هنگام جدا شدن
    return () => {
      // هر گونه منطق پاکسازی در اینجا، مانند لغو اشتراک ها
    };
  }, []); // آرایه وابستگی خالی: فقط یک بار در رندر اولیه داده ها را دریافت کنید
  // ...
  return (
    <div>
      {data ? (
        <p>داده های دریافت شده: {JSON.stringify(data)}</p>
      ) : (
        <p>در حال بارگیری داده ها...</p>
      )}
    </div>
  );
}
 `} language={"js"}
          widthIN={"w-full h-82"} ></Code> 
            </div>
          )
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
         textToHighlight='چرخه حیات افکت‌ها با کامپوننت‌ها متفاوت است. کامپوننت‌ها می‌توانند لोड (mount) شوند، به‌روزرسانی (update) شوند، یا حذف (unmount) شوند. یک Effect (اثر) تنها می‌تواند دو کار انجام دهد:

شروع همگام‌سازی چیزی: این کار می‌تواند شامل مواردی مانند اتصال به یک API، راه‌اندازی یک تایمر یا تنظیم یک اشتراک باشد.
توقف همگام‌سازی چیزی: این کار می‌تواند شامل مواردی مانند قطع اتصال از یک API، پاکسازی یک تایمر یا لغو یک اشتراک باشد.
این چرخه می‌تواند چندین بار اتفاق بیفتد، به ویژه اگر Effect شما به props (ویژگی‌های) و state (وضعیت) که در طول زمان تغییر می‌کنند وابسته باشد. ریکت یک قانون linter (ابزار بررسی کد) ارائه می‌دهد تا بررسی کند که وابستگی‌های Effect خود را به درستی مشخص کرده‌اید. این کار باعث می‌شود Effect شما با آخرین props و state همگام‌سازی شود.'
         />
            <div className="divider divider-start text-accent mt-8 divider-secondary ">
            <span className="text-xl text-primary font-bold">ٍچرخه حیاط Effect</span>
            </div>
              <Highlighter 
                highlightClassName=' whitespace-pre-line  bg-base-100'
         searchWords={['update','mount',"unmount","useEffect","React","(","Effects",")","jsx","State Hook","count","useState","props","components","Event","component","effect","state","hook","prop","ESLint"]}
         autoEscape={true}
         activeIndex={4}
         activeClassName='text-success'
         unhighlightClassName='text-white' 
         textToHighlight='هر مؤلفه React چرخه حیات یکسانی را طی می کند: یک مؤلفه زمانی که به صفحه اضافه می شود سوار می شود. یک مؤلفه معمولاً در پاسخ به یک تعامل زمانی که موارد یا وضعیت جدیدی دریافت می کند، به روز می شود. هنگامی که یک جزء از صفحه نمایش حذف می شود، نصب می شود. این یک راه خوب برای فکر کردن در مورد کامپوننت ها است، اما نه در مورد افکت ها. در عوض، سعی کنید در مورد هر افکت مستقل از چرخه عمر اجزای خود فکر کنید. یک افکت نحوه همگام سازی یک سیستم خارجی را با شرایط و وضعیت فعلی توضیح می دهد. همانطور که کد شما تغییر می کند، همگام سازی باید بیشتر یا کمتر انجام شود.'
         />
            </div>
        )
    }
         export default  {
            HowToWriteAnEffectText ,
            HowToWriteAnEffectTextFa ,
            YouMightNotNeedEffect ,
            YouMightNotNeedEffectFa ,
            YouMightNotNeedEffectExample ,
            LifecycleOfReactiveEffects ,
            LifecycleOfReactiveEffectsFa ,
        }