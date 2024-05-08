import { useState ,useRef} from "react";
import Code from '../utils/Prism'

export default function WhenReactAttachesTheRef(lang) {
let listRef = useRef(null);
let [todos,setTodo]=useState(initialTodos)
let [text,setText]=useState("");

function handleClick(){
    const newTodo = { id:nextId++,text:text};
      setText('');
    setTodo([...todos,newTodo]);
    listRef.current.lastChild.scrollIntoView({
        behavior: "smooth",
        block:`nearest`
    });
}

    return(
        <>
        <div className="divider  divider-error text-blue-500">When React attaches the ref </div>
            {lang.lang?(
            <p className="">
<span>React updates in two phases:</span><br/>
<span>Render:</span> React figures out what to show on screen.<br/>
<span>Commit:</span> React applies changes to the DOM.<br/>
<span>Don't access refs during rendering:</span><br/>
DOM nodes not created yet in first render.
DOM nodes not updated yet in updates.<br/>
<span>React sets ref.current during commit:</span><br/>
Sets affected refs to null before updating DOM.
Sets refs to corresponding DOM nodes after updating DOM.
Usually access refs from event handlers.
Effects can be used if there is no event to do something with a ref.<br/>
<span>Things to remember about refs:</span><br/>
<span>Mutable:</span> can change value after creation.<br/>
<span>Not stable:</span> identity can change between renders.<br/>
<span>Not props:</span> don't pass refs as props to other components.</p>
            ):
            <div >
  <div dir="rtl" className="prose max-w-none">
  <p>
        هنگامی که از <span className="text-blue-500">Ref</span> در <span className="text-blue-500">React</span> استفاده می کنیم، این <span className="text-green-500">Ref</span> در دو مرحله از رندر (<span>render)</span> آپدیت می شود:
      </p>

      <ul className="list-disc pl-4">
        <li>
           <span className="text-yellow-500">مرحله محاسبه (render):</span> در این مرحله <span className="text-blue-500">React</span> کامپوننت های شما را صدا می زند تا بفهمد چه چیزی باید روی صفحه نمایش داده شود.
        </li>
        <li>
         <span className="text-yellow-500">مرحله اعمال تغییرات(commit):</span> در این مرحله <span className="text-blue-500">React</span> تغییرات را روی <span className="text-red-500">DOM</span> اعمال می کند.
        </li>
      </ul>

      <p>
        به طور کلی، شما نمی خواهید در مرحله محاسبه <span className="text-pink-500">(render)</span> به <span className="text-green-500">Ref</span> ها دسترسی پیدا کنید. این مورد برای <span className="text-green-500">Ref</span> هایی که گره های <span className="text-red-500">DOM</span> (DOM nodes) را نگه می دارند نیز صدق می کند.
      </p>

      <ul className="list-disc pl-4">
        <li>
          در اولین رندر، گره های <span className="text-red-500">DOM</span> هنوز ساخته نشده اند، بنابراین <span className="text-green-500">ref.current</span> مقدار <span className="text-purple-500">null</span> خواهد داشت.
        </li>
        <li>
          همچنین در هنگام رندر به روز رسانی ها، گره های <span className="text-red-500">DOM</span> هنوز به روز نشده اند. بنابراین برای خواندن آنها خیلی زود است.
        </li>
      </ul>

      <p>
        <span className="text-blue-500">React</span> مقدار <span className="text-green-500">ref.current</span> را در مرحله اعمال تغییرات <span className="text-pink-500">(commit)</span> تنظیم می کند.
      </p>

      <ul className="list-disc pl-4">
        <li>
          قبل از به روز رسانی <span className="text-red-500">DOM</span>، <span className="text-blue-500">React</span> مقادیر <span className="text-green-500">ref.current</span> تحت تاثیر را روی <span className="text-purple-500">null</span> تنظیم می کند.
        </li>
        <li>
          پس از به روز رسانی <span className="text-red-500">DOM</span>، <span className="text-blue-500">React</span> بلافاصله آنها را روی گره های <span className="text-red-500">DOM</span> مربوطه تنظیم می کند.
        </li>
      </ul>

      <p>
        معمولا شما از رویدادهای مدیریت کننده (event handlers) به <span className="text-green-500">Ref</span> ها دسترسی پیدا می کنید.
      </p>

      <p>
        اگر می خواهید کاری با یک <span className="text-green-500">Ref</span> انجام دهید، اما رویداد خاصی برای انجام آن وجود ندارد، ممکن است به <span>Effect</span> نیاز داشته باشید. ما در صفحات بعدی در مورد <span >Effect</span> ها بحث خواهیم کرد.
      </p>
    </div>
    <br />
  


</div>
            }
        
        <div className="divider divider-start  divider-success text-purple-500">example</div>
        {lang.lang?(
            <div>
                <p>Consider code like this, which adds a new todo and scrolls the screen down to the last child of the list. Notice how, for some reason, it always scrolls to the todo that was just before the last added one:</p><br />
            </div>
        ):(
            <div dir="rtl">
<p>کدی مانند این را در نظر بگیرید، که یک تودو به لیست اضافه میکند  و صفحه را تا آخرین تودو لیست به سمت پایین اسکرول می‌کند. </p>
<br />
            </div>
        )}
        <div className="flex gap-3">
            <input value={text} onChange={(e)=>setText(e.target.value)} className="input input-primary w-full"  />
            <button onClick={handleClick} className="w-24 btn btn-primary btn-circle" type="button">Add Todo</button>
        </div>
<ul ref={listRef} className="w-6/12 mt-5 table-column">
    {todos.map(todo => <li  key={todo.id}>{todo.text}</li>)}
</ul>
{lang.lang?(
<div>
    <p className="p-4"><span className="text-red-500">Note : </span>it always scrolls to the todo that was just before the last added one:</p>
   
</div>):(
    <div dir="rtl" className="p-4">
        <p><span className="text-red-500">توجه : </span> بعد از اضافه شدن تودو پیمایش اسکرول به یکی مانده به اخری از تودو لیست اسکرول میکند</p>
        
    </div>
)}
<Code widthIN={"w-full "} fileName={"Ref ScrollView todoList"} language={'js'} code={
  `import { useState ,useRef} from "react";
export default function WhenReactAttachesTheRef(lang) {
let listRef = useRef(null);
let [todos,setTodo]=useState(initialTodos)
let [text,setText]=useState("");
function handleClick(){
    const newTodo = { id:nextId++,text:text};
      setText('');
    setTodo([...todos,newTodo]);
    listRef.current.lastChild.scrollIntoView({
        behavior: "smooth",
        block:'nearest'
    });
}
    return(
     <div className="w-11/12 mx-auto my-12 bg-base-300 p-10 text-xl">
        <div className="flex gap-3">
              <input value={text} onChange={(e)=>setText(e.target.value)} className="input input-primary w-full"  />
              <button onClick={handleClick} className="w-24 btn btn-primary btn-circle" type="button">Add Todo</button>
          </div>
        <ul ref={listRef} className="w-6/12 mt-5 table-column">
      {todos.map(todo => <li  key={todo.id}>{todo.text}</li>)}
        </ul>
     </div>
      )
    }`} />

        <div className="divider divider-start  divider-primary text-orange-200 font-bold">flushSync</div>
        {lang.lang?(
        <p>  This will instruct <span className="font-bold text-blue-500">React</span> to <span>update</span> the DOM synchronously right after the code wrapped in <span className="font-bold text-orange-400 ">flushSync</span> executes. As a result, the last todo will already be in the DOM by the time you try to scroll to it:</p>
        ):(
          <p dir="rtl">این کار باعث می شود <span className="font-bold text-blue-500">React</span>  بلافاصله بعد از اجرای کد داخل <span className="font-bold text-orange-400 ">flushSync</span>  به صورت همزمان DOM را به روز رسانی کند. در نتیجه، آخرین کار به جا اضافه شده در زمان تلاش برای اسکرول کردن به آن، قبلا در DOM وجود خواهد داشت.

</p>
        )}
    <div className="m-4">
    <Code widthIN={"w-full"} language={"js"} fileName={"Ref ScrollView"} code={
      `import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
    function TodoList() {
  const listRef = useRef(null);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(
    initialTodos
  );
  function handleAdd() {
    const newTodo = { id: nextId++, text: text };
    flushSync(() => {
      setText('');
      setTodos([ ...todos, newTodo]);      
    });
    listRef.current.lastChild.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }
  return (
    <>
      <button onClick={handleAdd}>
        Add
      </button>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <ul ref={listRef}>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}`} />
    </div>
        </>
    )

}
let nextId = 0;
let initialTodos = [];
for(let i = 0; i < 20; i++){
    initialTodos.push({id:nextId++,text:`Todo ${i}`});
}