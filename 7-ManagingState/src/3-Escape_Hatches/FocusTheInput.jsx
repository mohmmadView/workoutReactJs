import {useRef} from 'react';
import Code from '../utils/Prism'
export default function FocusInInput(lang){
    const inputRef = useRef(null);
    function handleClick(){
        inputRef.current.focus();
    }
    return(
    <>
{lang.lang?(
    <p className='bg-primary-content/20 p-4'>React automatically updates the DOM to match your render output, so your components won’t often need to manipulate it. However, sometimes you might need access to the DOM elements managed by React—for example, to focus a node, scroll to it, or measure its size and position. There is no built-in way to do those things in React, so you will need a ref to the DOM node. For example, clicking the button will focus the input using a ref:</p>
 ):
      (
        <p  className='bg-primary-content/20 p-4' style={{direction:"rtl"}}>
  React به‌ طور خودکار DOM را به‌روزرسانی می‌کند تا با خروجی رندر شما مطابقت داشته باشد، بنابراین اجزای شما اغلب نیازی به دستکاری آن ندارند. با این حال، گاهی اوقات ممکن است نیاز به دسترسی به عناصر DOM مدیریت شده توسط React داشته باشید - برای مثال، برای تمرکز بر یک گره، اسکرول روی آن، یا اندازه گیری اندازه و موقعیت آن. هیچ راهی داخلی برای انجام این کارها در React وجود ندارد، بنابراین به یک رفر به گره DOM نیاز خواهید داشت. به عنوان مثال، با کلیک بر روی دکمه، ورودی با استفاده از یک ref متمرکز می شود:
        </p> 
              )
        }
<div className="mb-4 divider divider-start divider-secondary"><p className='text-secondary'>Example:</p><p className='text-primary'>input Focus</p></div>
            <div className='flex gap-4 border border-success rounded-lg p-4 bg-secondary-content'>
              <label htmlFor="InputFocus">Input Focus</label>
              <input id='InputFocus' title='input-Focus' placeholder='Input Focus' className="input input-secondary" ref={inputRef} />
              <button onClick={handleClick} className="w-24 btn btn-secondary btn-circle" type="button">Focus the input</button>
            </div>
 <Code fileName={"example"} widthIN={"w-full"} code={`
import { useRef } from 'react';
export default function FocusInInput() {
const inputRef = useRef(null); //Declare inputRef with the useRef Hook.

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} /> //Pass it as <input ref={inputRef}>. 
      //This tells React to put this <input>’s DOM node into inputRef.current.
      <button onClick={handleClick}> //In the handleClick function, read the input DOM node from inputRef.current and call focus() on it with inputRef.current.focus().
        Focus the input
      </button>
    </>
  );
    }
            `} language={"js"}></Code><br />
           
            
   </>
    )
}