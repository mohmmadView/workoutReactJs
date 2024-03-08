import { useState ,useRef} from "react";

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
<p dir="rtl">
    وقتی از Ref در ری اکت استفاده می کنیم، این Ref در دو مرحله از رندر (render) آپدیت می شود:<br/>
<span> مرحله محاسبه (render): </span>    در این مرحله ری اکت کامپوننت های شما را صدا می زند تا بفهمد چه چیزی باید روی صفحه نمایش داده شود.
<span> <br /> مرحله اعمال تغییرات (commit): </span>     در این مرحله ری اکت تغییرات را روی DOM اعمال می کند.
    به طور کلی، شما نمی خواهید در مرحله محاسبه (render) به Ref ها دسترسی پیدا کنید. این مورد برای Ref هایی که گره های DOM (DOM nodes) را نگه می دارند نیز صدق می کند. در اولین رندر، گره های DOM هنوز ساخته نشده اند، بنابراین ref.current مقدار null خواهد داشت. همچنین در هنگام رندر به روز رسانی ها، گره های DOM هنوز به روز نشده اند. بنابراین برای خواندن آنها خیلی زود است.
    
    ری اکت مقدار ref.current را در مرحله اعمال تغییرات (commit) تنظیم می کند. قبل از به روز رسانی DOM، ری اکت مقادیر ref.current تحت تاثیر را روی null تنظیم می کند. پس از به روز رسانی DOM، ری اکت بلافاصله آنها را روی گره های DOM مربوطه تنظیم می کند.
    
    معمولا شما از رویدادهای مدیریت کننده (event handlers) به Ref ها دسترسی پیدا می کنید. اگر می خواهید کاری با یک Ref انجام دهید، اما رویداد خاصی برای انجام آن وجود ندارد، ممکن است به Effect نیاز داشته باشید. ما در صفحات بعدی در مورد Effect ها بحث خواهیم کرد.
                
</p></div>
            }
        
        <div className="divider divider-start  divider-success text-purple-500">example</div>
        <div className="flex gap-3">
            <input value={text} onChange={(e)=>setText(e.target.value)} className="input input-primary w-full"  />
            <button onClick={handleClick} className="w-24 btn btn-primary btn-circle" type="button">Add Todo</button>
        </div>
<ul ref={listRef} className="w-6/12 mt-5 table-column">
    {todos.map(todo => <li  key={todo.id}>{todo.text}</li>)}
</ul>
        </>
    )

}
let nextId = 0;
let initialTodos = [];
for(let i = 0; i < 20; i++){
    initialTodos.push({id:nextId++,text:`Todo ${i}`});
}