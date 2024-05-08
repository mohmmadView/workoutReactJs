import Highlighter from "react-highlight-words";

const  Intermediate= () => {
      return (
        <Highlighter
         searchWords={["state","props","debug","Event","component","effect","bugs!","React","children","components"]}
            highlightClassName="  bg-base-300 font-bold"
            unhighlightClassName="text-white"
            textToHighlight="
          As your application grows, it helps to be more intentional about how
          your state is organized and how the data flows between your components.
           Redundant or duplicate state is a common source of bugs. 
           In this chapter, you’ll learn how to structure your state
          well, how to keep your state
          update logic maintainable, and how to share state
          between distant components.,Children"
      /> 
      ) 
    }
  
  
  const  ManagingState= () => {
      return (
        <div className="rtl" style={{ direction: "rtl" }}>
          هرچقدر برنامه شما بزرگتر می‌شود، بهتر است که در مورد نحوه سازماندهی و
          چگونگی جریان داده
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>
          بین کامپوننت‌های شما دقت بیشتری داشته باشید. وضعیت
          <span className="text-primary underline underline-offset-4  decoration-wavy font-bold">
            state
          </span>
          تکراری یا تکراری منبعی رایج برای باگ‌هاست. در این فصل، یاد می‌گیرید که
          چگونه وضعیت
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>
          خود را به خوبی سازماندهی کنید، چگونه منطق به‌روزرسانی وضعیت
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>
          خود را قابل دفاع نگه دارید و چگونه وضعیت
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>
          را بین کامپوننت‌های دوردست به اشتراک بگذارید
          <br />
          ((
          <span className="text-accent  ">
            برنامه نویسی فرانت، مدیریت وضعیت یکی از چالش های اصلی است. در برنامه
            های بزرگ و پیچیده، حفظ وضعیت در طول زمان می تواند دشوار باشد. این
            امر می تواند منجر به مشکلاتی مانند خطاها، عملکرد ضعیف و پیچیدگی کد
            شود.
          </span>
          )) <br />
          <span className="text-success">
            <p className="text-primary font-bold text-2xl p-2">
              {" "}
              مفهوم مدیریت وضعیت:
            </p>
            در برنامه‌نویسی، وضعیت (State) به داده‌ها یا وضعیت فعلی یک برنامه یا
            کامپوننت اشاره دارد. مدیریت وضعیت به معنای کنترل و به‌روزرسانی
            اطلاعات و وضعیت داخلی برنامه است تا برنامه بتواند به درستی با
            ورودی‌ها و رویدادها برخورد کند و تغییرات مورد نیاز را اعمال کند.
            <p className="text-secondary font-bold text-3xl">
              اهمیت مدیریت وضعیت:
            </p>
            <br />
            <p className="text-2xl font-bold p-2 text-primary">
              پایداری و قابلیت تعمیر:
            </p>
            مدیریت وضعیت کمک می‌کند تا برنامه پایدارتر باشد و به راحتی قابل
            تعمیر باشد. با داشتن کنترل بر وضعیت داخلی، خطاها را می‌توان سریع‌تر
            شناسایی و رفع کرد.
            <p className="text-2xl font-bold text-primary p-2">
              {" "}
              تداول داده بهینه:
            </p>
            اطلاعات برنامه به صورت موقت در وضعیت نگهداری می‌شوند و تغییرات مورد
            نیاز در اینجا اعمال می‌شوند. این کار به بهینه‌تر کردن مدیریت داده‌ها
            کمک می‌کند.
            <p className="text-2xl font-bold text-primary p-2">
              {" "}
              پاسخگویی به رویدادها:
            </p>
            مدیریت وضعیت به برنامه این امکان را می‌دهد که به درستی به رویدادها و
            تغییرات در وضعیت پاسخ دهد. این امر به بهترین نحو امکان پذیر استفاده
            از برنامه را فراهم می‌کند.
          </span>
        </div>
      );
    }
  
  
 const   ReactingToInput= () => {
      return (
  <Highlighter
         searchWords={["initial state","success state","typing state","props","debug","Event","component","effect","bugs!","React","children","components"]}
            highlightClassName="  bg-base-300 font-bold"
            unhighlightClassName="text-white"
            textToHighlight="
            With React, you won’t modify
            the UI from code directly. For example, you won’t write commands like
            “disable the button”, “enable the button”, “show the success message”,
            etc. Instead, you will describe the UI you want to see for the
            different visual states of your component
           (“initial state”, “typing state”, “success state”), and
            then trigger the state changes in response to user input.
            This is similar to how designers think about UI. Here is a quiz form
            built using React. Note how it uses the status state
            variable to determine whether to enable or disable the submit button,
            and whether to show the success message instead."
      /> 
        
      );
    }

  
   const  ReactingToInputFa = () => {
      return (
          <Highlighter
         searchWords={["state","props","debug","Event","component","effect","bugs!","React","children","components"]}
            highlightClassName="  bg-base-300 font-bold"
            unhighlightClassName="text-white"
            textToHighlight="
          با React، شما از کد به صورت
          مستقیم تغییرات را در رابط کاربری اعمال نخواهید کرد. به عنوان مثال،
          دستوراتی مانند دکمه را غیرفعال کن، دکمه را فعال کن، پیام موفقیت را
          نشان بده و غیره را نخواهید نوشت. به جای اینکه دستورات مستقیم بنویسید،
          شما توصیف خواهید کرد که رابط کاربری مورد نظر خود را برای وضعیت‌های
          مختلف دیداری کامپوننت خود
         (وضعیت اولیه، وضعیت تایپ کردن، وضعیت موفقیت) و سپس
          تغییرات وضعیت را در پاسخ به ورودی کاربر فراخوانی خواهید کرد. این مشابه
          به این است که طراحان به رابط کاربری فکر می‌کنند. در زیر، یک فرم آزمون
          به کمک React ساخته شده است. توجه داشته باشید که از متغیر وضعیت
          (status) برای تعیین اینکه آیا دکمه ارسال فعال یا غیرفعال
          باشد و آیا پیام موفقیت را نشان دهد یا خیر، استفاده شده است
          "
      /> 
       
      );
    }

    
const  ChoosingTheState= () => {
      return (
        <>
            <Highlighter 
            searchWords={["state","props","debug","Event","component","effect","bugs!"]}
            highlightClassName=" bg-base-300 font-bold"
            unhighlightClassName="text-white"
            textToHighlight="
          Structuring state well can make a difference between a component that
          is pleasant to modify and debug, and one that is a constant source of
          bugs. The most important principle is that state shouldn’t contain
          redundant or duplicated information. If there’s unnecessary state,
          it’s easy to forget to update it, and introduce bugs!" />
      <h1 className="text-secondary text-3xl divider divider-start divider-accent p-4">Types of structure state</h1><br />
       <p style={{ direction: "ltr" }} className="text-blue-400 "> <h1 className="p-2 text-2xl text-primary">1.State Single :</h1><br />
       <code>
       1- <span className="text-yellow-500">const</span> [x, setX]          = <span className="text-green-500">useState(0);</span>   <br />
       2- <span className="text-yellow-500">const</span>  [value, setValue] = <span className="text-green-500"> useState("");</span> <br />
       3- <span className="text-yellow-500">const</span>  [bol, setBol]     = <span className="text-green-500">useState(false);</span><br />
       </code>
        </p>
         <p style={{ direction: "ltr" }} className="text-blue-400 "> <h1 className="p-2 text-2xl text-primary">2.State multiple :</h1><br />
       <code>
       1- <span className="text-yellow-500">const</span>[position, setPosition]= <span className="text-green-500">useState({ `{x:0,y:0}` });</span>   <br />
       2- <span className="text-yellow-500">const</span> <span className="text-red-500"> initialItems </span>   = <span className="text-green-500">[ <br />
  {`{ title: 'pretzels',       id: 0 }`},<br />
  {`{ title: 'crispy seaweed', id: 1 }`},<br />
  {`{ title: 'granola bar',    id: 2 }`},<br />
];;</span> <br />
       <span className="text-yellow-500">const</span>  [items, setItems]        = <span className="text-green-500">useState(<span className="text-red-500">initialItems</span>);</span><br />
       </code>
        </p>
        </>
      );
    }
  const  ChoosingTheStateFa= () => {
      return (
        <div className="" style={{ direction: "rtl" }}>
       اهمیت ساختاردهی مناسب وضعیت <span>(state)</span> در  <span className="text-blue-500"> React </span>   
        می‌تواند تفاوتی بین یک کامپوننتی که که بدونی مشکلی قابل تغییر و اشکال‌زدایی است 
      و یک کامپوننتی که منبع ثابتی از باگ‌هاست، ایجاد کند 
       برای اینکه بتوانیم ساختار با کارای  بهتر  و باگی کمتر به وجود بیاد باید در ساختار کد  هایمان از ۵ نکته پیروی کنیم :
<p className="text-secondary text-3xl divider divider-start divider-accent p-4 ">
          ساختاردهی مناسب <span>(state) </span>وضعیت <br />
         </p>  <br />
         در <span className="text-blue-500"> React </span> ، مهم است که وضعیت کامپوننت به نحوی طراحی شود که حاوی اطلاعات ضروری باشد 
         و اطلاعات تکراری یا اضافی حذف شوند. این کار باعث ساده‌تر شدن فرآیند توسعه، اشکال‌زدایی و نگهداری می‌شود. <br />
  <span className="text-primary py-4 my-5">
         1 پیشگیری از اطلاعات تکراری: <br />
         </span> <br />
         هر اطلاعاتی که به صورت تکراری در وضعیت قرار دارد، ممکن است منجر به فراموش کردن به‌روزرسانی‌ها شود
         . بنابراین، اهمیت دارد که فقط اطلاعات ضروری را در وضعیت نگه داریم و از تکرار آن‌ها پرهیز کنیم. <br />
         <span className="text-primary">
          2 تأثیر بر رندرینگ: <br />
         </span> <br />
هر تغییر در وضعیت منجر به رندر مجدد کامپوننت می‌شود. بنابراین، اگر وضعیت     
به درستی مدیریت نشود، ممکن است رندرهای زیادی انجام شود که این موضوع به بهبود کارایی کد نقض می‌شود. <br />
         <span className="text-primary">
         3 مهارت‌های مدیریت وضعیت<span>(state) </span>وضعیت: <br />
         </span> <br />
         مدیریت وضعیت یک مهارت مهم در <span className="text-blue-500">React</span> است. استفاده از مفاهیمی مانند 
        <span> lifting state up</span> برای به‌اشتراک‌گذاری وضعیت بین کامپوننت‌ها و 
        <span> useEffect </span>برای کنترل جریان عمر کامپوننت‌ها کمک می‌کند. <br />
         <span className="text-primary">
         4 اهمیت به‌روزرسانی دقیق: <br />
         </span> <br />
         در <span className="text-blue-500">React،</span> مهم است که وضعیت کامپوننت به نحوی طراحی شود که حاوی اطلاعات ضروری باشد 
         و اطلاعات تکراری یا اضافی حذف شوند. این کار باعث ساده‌تر شدن فرآیند توسعه، اشکال‌زدایی و نگهداری می‌شود. <br />
        <h1 className="text-secondary text-3xl p-4">انواع ساختار  state</h1>
       <p style={{ direction: "ltr" }} className="text-blue-400 "> <h1 className="p-2 text-2xl text-primary">1.State Single :</h1><br />
       <code>
      1- <span className="text-yellow-500">const</span> [x, setX]          = <span className="text-green-500">useState(0);</span>   <br />
      2- <span className="text-yellow-500">const</span>  [value, setValue] = <span className="text-green-500"> useState("");</span> <br />
      3- <span className="text-yellow-500">const</span>  [bol, setBol]     = <span className="text-green-500">useState(false);</span><br />
       </code>
        </p>
         <p style={{ direction: "ltr" }} className="text-blue-400 "> <h1 className="p-2 text-2xl text-primary">2.State multiple :</h1><br />
       <code>
        <h1 className="px-6 pb-2 text-xl font-bold text-secondary">1. state object :</h1>
          <span className="text-yellow-500">const</span>[position, setPosition]= <span className="text-green-500">useState({ `{x:0,y:0}` });</span>   <br />
        <h1 className="px-6 py-2 font-bold text-xl text-secondary">2. state Array :</h1>
          <span className="text-yellow-500">const</span> <span className="text-red-500"> initialItems </span>   = <span className="text-green-500">[ <br />
  {`{ title: 'pretzels',       id: 0 }`},<br />
  {`{ title: 'crispy seaweed', id: 1 }`},<br />
  {`{ title: 'granola bar',    id: 2 }`},<br />
];;</span> <br />
       <span className="text-yellow-500">const</span>  [items, setItems]        = <span className="text-green-500">useState(<span className="text-red-500">initialItems</span>);</span><br />
        <h1 className="px-6 pb-2 text-xl font-bold text-secondary">3. state nested object :</h1>
       <span className="text-yellow-500">const</span> <span className="text-red-500"> [person, setPerson] </span>   = <span className="text-green-500">useState({`{`} <br />
          {`{ title: 'pretzels',       id: 0 }`},<br />
          {`{ title: 'crispy seaweed', id: 1 }`},<br />
          {`{ title: 'granola bar',    id: 2 }`},<br />
          {`}`});</span> <br />
       </code>
        </p>
      </div>
      );
    }
   const SharingState= () => {
      return (
        <Highlighter
          searchWords={["state","props","debug","Event","component","effect","bugs!","React","children","components"]}
            highlightClassName="text-secondary  bg-base-300 font-bold"
            unhighlightClassName="text-white"
            textToHighlight="
          Sometimes, you want the state of two components to always change
          together. To do it, remove state from both of them, move it to their
          closest common parent, and then pass it down to them via props. This
          is known as lifting state up, and
          it’s one of the most common things you will do writing React code. In
          this example, only one panel should be active at a time. To achieve
          this, instead of keeping the active state inside each individual
          panel, the parent component holds the state and specifies the props
          for its children
        " />
      )
    }
 
  const  SharingStateFa= () => {
      return (
         <Highlighter
          searchWords={["App","Panel","prop","state","props","debug","(lifting state up)","Event","component","effect","bugs!","React","children","components"]}
            highlightClassName="text-secondary  bg-base-300 font-bold"
            unhighlightClassName="text-white"
            textToHighlight="
            گاهی اوقات، ممکن است بخواهید state دو جزء React همیشه با
            هم تغییر کند. برای انجام این کار، باید state را از هر دو جزء حذف کنید،
            آن را به والد مشترک آنها منتقل کنید و سپس از طریق props
            به آنها منتقل کنید. این روش به نام بالا بردن وضعیت
            (lifting state up) شناخته می‌شود و یکی از رایج‌ترین
            روش‌های نوشتن کد React است. در این مثال، فقط یک پانل باید
            در یک زمان فعال باشد. برای دستیابی به این هدف، به جای ذخیره وضعیت فعال
            در هر پانل جداگانه، جزء والد وضعیت را نگه می‌دارد و props
            را برای فرزندان خود مشخص می‌کند. به عبارت دیگر، در این مثال، تنها یک
            پانل در یک زمان می‌تواند برجسته باشد. برای اطمینان از این موضوع، وضعیت
            فعال در جزء والد (App) ذخیره می‌شود و از طریق
            prop isActive به اجزای فرزند
            (Panel) منتقل می‌شود. این prop به اجزای
            Panel اطلاع می‌دهد که آیا باید به عنوان پانل فعال یا
            غیرفعال نمایش داده شوند. این روشی مؤثر برای اشتراک‌گذاری وضعیت بین
            اجزای React است زیرا باعث می‌شود کد شما ماژولارتر و
            نگهداری آن آسان‌تر شود. با انتقال وضعیت به والد مشترک، از تکرار کد و "/>
      );
    }
  const  PreservingAndResetting=() => {
      return (
          <Highlighter
           searchWords={["state","props","debug","Event","component","effect","React","children","components","match up","re-render"]}
            highlightClassName="text-secondary  bg-base-300 font-bold"
            unhighlightClassName="text-white"
            textToHighlight="
          When you re-render a component, React needs to decide which parts of
          the tree to keep (and update), and which parts to discard or re-create
          from scratch. In most cases, React’s automatic behavior works well
          enough. By default, React preserves the parts of the tree that “match
          up” with the previously rendered component tree. However, sometimes
          this is not what you want. In this chat app, typing a message and then
          switching the recipient does not reset the input. This can make the
          user accidentally send a message to the wrong person:"
       />
      );
    }
  const  PreservingAndResetting_2=()=>{
      return (
        <Highlighter
         searchWords={["state","props","debug","Event","component","effect","<Chat key={email} />.","React","children","components","match up","re-render"]}
            highlightClassName="text-secondary  bg-base-300 font-bold"
            unhighlightClassName="text-white"
        textToHighlight="
        React lets you override the default behavior, and force a component to reset its state
         by passing it a different key, like <Chat key={email} />. This tells React that if 
         the recipient is different, it should be considered a different Chat component that
          needs to be re-created from scratch with the new data (and UI like inputs). 
          Now switching between the recipients resets the input field—even though you 
          render the same component."
          />
      )
    }
 
 const   PreservingAndResettingFa= () => {
      return (
            <Highlighter highlightStyle={{direction: "rtl"} }
           searchWords={["state","props","debug","Event","component","effect","کامپوننت","React","children","(و به‌روزرسانی کند)","match up","re-render"]}
            highlightClassName="text-secondary  bg-base-300 font-bold"
            unhighlightClassName="text-white"
            textToHighlight="
          وقتی یک کامپوننت را دوباره رندر می‌کنید، React باید تصمیم بگیرد که
          کدام قسمت‌های درخت را نگه دارد (و به‌روزرسانی کند)، و کدام قسمت‌ها را
          دور انداخته یا از ابتدا دوباره ایجاد کند. در بیشتر موارد، رفتار خودکار
          React به اندازه کافی خوب عمل می کند. به‌طور پیش‌فرض، React بخش‌هایی از
          درخت را حفظ می‌کند که با درخت مؤلفه‌ای که قبلاً رندر شده است، مطابقت
          دارند. با این حال، گاهی اوقات این چیزی نیست که شما می خواهید. در این
          برنامه چت، تایپ یک پیام و سپس تغییر گیرنده، ورودی را بازنشانی نمی کند.
          این می تواند باعث شود کاربر به طور تصادفی پیامی را به شخص اشتباهی
          ارسال کند:
          " />
      )
    }
    const  PreservingAndResettingFa_2= () => {
      return (
            <Highlighter highlightStyle={{direction: "rtl"} }
           searchWords={["state","props","debug","Event","component","effect","کامپوننت","React","children","<Chat key={email} />","match up","re-render"]}
            highlightClassName="text-secondary  bg-base-300 font-bold"
            unhighlightClassName="text-white"
            textToHighlight="
              React به شما امکان می‌دهد رفتار پیش‌فرض را نادیده بگیرید و یک مؤلفه را با دادن کلید دیگری مانند <Chat key={email} /> مجبور کنید وضعیت خود را بازنشانی کند. این به React می‌گوید که اگر گیرنده متفاوت است، باید به عنوان یک مؤلفه Chat متفاوت در نظر گرفته شود که باید از ابتدا با داده‌های جدید (و ورودی‌هایی مانند رابط کاربری) دوباره ایجاد شود. اکنون جابه‌جایی بین گیرندگان، فیلد ورودی را بازنشانی می‌کند - حتی اگر همان مؤلفه را ارائه کنید.
          " />
      );
    }
 
 const   ExtractingStateLogic=() => {
      return (
          <Highlighter 
          searchWords={["state","props","debug","Event","component","effect","کامپوننت","React","children","reducer","match u","re-render"]}
              highlightClassName="text-secondary  bg-base-300 font-bold"p
              unhighlightClassName="text-white"
              textToHighlight={`
            A reducer is a function that consolidates state update logic outside your component. Instead of directly setting state in various event handlers, you can move that logic into a single function called a "reducer". This function specifies how the state should update in response to each action. This makes your code more readable and easier to maintain.
          `}/>
          
        );
    }
   const ExtractingStateLogicFa=()=> {
      return(
    <Highlighter highlightStyle={{ direction: "rtl" }}
      searchWords={["state", "Event", "component", "کامپوننت", "React", "reducer"]}
      highlightClassName="text-secondary  bg-base-300 font-bold"
      unhighlightClassName="text-white"
      textToHighlight={`
کاهنده(reducer) تابعی(component) است که منطق(state) به روز رسانی حالت را در خارج از مؤلفه شما یکپارچه می کند. به جای تنظیم مستقیم حالت در کنترل کننده های رویداد(event) مختلف، می توانید آن منطق(state) را به یک تابع(component) منتقل کنید. این باعث می‌شود کد شما خواناتر و نگهداری راحت‌تر شود.    `} />
      )
}
export default{Intermediate,ManagingState,ReactingToInput,ReactingToInputFa,ChoosingTheState,ChoosingTheStateFa,SharingState,SharingStateFa,PreservingAndResetting,PreservingAndResettingFa,PreservingAndResetting_2,PreservingAndResettingFa_2,ExtractingStateLogic,ExtractingStateLogicFa} 