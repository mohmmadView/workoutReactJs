import Highlighter from "react-highlight-words";
let DataText= [
    {

  Intermediate: () => {
      return (
        <>
          As your application grows, it helps to be more intentional about how
          your
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>
          is organized and how the data flows between your components. Redundant
          or duplicate
          <span className="text-primary underline underline-offset-4  decoration-double font-bold ">
            state
          </span>
          is a common source of bugs. In this chapter, you’ll learn how to
          structure your
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>
          well, how to keep your
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>
          update logic maintainable, and how to share
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>
          between distant components.,Children
        </>
      );
    },
  },
  {
    ManagingState: () => {
      return (
        <p className="rtl" style={{ direction: "rtl" }}>
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
        </p>
      );
    },
  },
  {
    Reactingtoinput: () => {
      return (
        <p>
          With <span className="text-blue-400">React</span>, you won’t modify
          the UI from code directly. For example, you won’t write commands like
          “disable the button”, “enable the button”, “show the success message”,
          etc. Instead, you will describe the UI you want to see for the
          different visual states of your component
          <span>(“initial state”, “typing state”, “success state”),</span> and
          then trigger the <span>state</span> changes in response to user input.
          This is similar to how designers think about UI. Here is a quiz form
          built using React. Note how it uses the status <span>state</span>{" "}
          variable to determine whether to enable or disable the submit button,
          and whether to show the success message instead.
        </p>
      );
    },
  },
  {
    ReactingToInputFa: () => {
      return (
        <p style={{ direction: "rtl" }}>
          با <span className="text-blue-400">React</span>، شما از کد به صورت
          مستقیم تغییرات را در رابط کاربری اعمال نخواهید کرد. به عنوان مثال،
          دستوراتی مانند دکمه را غیرفعال کن، دکمه را فعال کن، پیام موفقیت را
          نشان بده و غیره را نخواهید نوشت. به جای اینکه دستورات مستقیم بنویسید،
          شما توصیف خواهید کرد که رابط کاربری مورد نظر خود را برای وضعیت‌های
          مختلف دیداری کامپوننت خود
          <span>(وضعیت اولیه، وضعیت تایپ کردن، وضعیت موفقیت) </span>و سپس
          تغییرات وضعیت را در پاسخ به ورودی کاربر فراخوانی خواهید کرد. این مشابه
          به این است که طراحان به رابط کاربری فکر می‌کنند. در زیر، یک فرم آزمون
          به کمک React ساخته شده است. توجه داشته باشید که از متغیر وضعیت
          <span>(status)</span> برای تعیین اینکه آیا دکمه ارسال فعال یا غیرفعال
          باشد و آیا پیام موفقیت را نشان دهد یا خیر، استفاده شده است
        </p>
      );
    },
  }
,
    {
    ChoosingTheState: () => {
      return (
        <p>
            <Highlighter 
            searchWords={["state","props","debug","Event","component","effect","bugs!"]}
            highlightClassName="text-secondary  bg-base-300 font-bold"
            unhighlightClassName="text-yellow-200"
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
        </p>
      );
    },
  },
  {
    ChoosingTheStateFa: () => {
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
    },
  },
  {
    SharingState: () => {
      return (
        <Highlighter
          searchWords={["state","props","debug","Event","component","effect","bugs!","React","children","components"]}
            highlightClassName="text-secondary  bg-base-300 font-bold"
            unhighlightClassName="text-yellow-200"
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
  },
  {
    SharingStateFa: () => {
      return (
        <p style={{ direction: "rtl" }}>
          گاهی اوقات، ممکن است بخواهید <span className="font-bold text-primary">state</span> دو جزء <span>React</span> همیشه با
          هم تغییر کند. برای انجام این کار، باید <span className="font-bold text-primary">state</span> را از هر دو جزء حذف کنید،
          آن را به والد مشترک آنها منتقل کنید و سپس از طریق <span>props</span>{" "}
          به آنها منتقل کنید. این روش به نام بالا بردن وضعیت"{" "}
          <span>(lifting state up)</span> شناخته می‌شود و یکی از رایج‌ترین
          روش‌های نوشتن کد <span>React</span> است. در این مثال، فقط یک پانل باید
          در یک زمان فعال باشد. برای دستیابی به این هدف، به جای ذخیره وضعیت فعال
          در هر پانل جداگانه، جزء والد وضعیت را نگه می‌دارد و <span>props</span>{" "}
          را برای فرزندان خود مشخص می‌کند. به عبارت دیگر، در این مثال، تنها یک
          پانل در یک زمان می‌تواند برجسته باشد. برای اطمینان از این موضوع، وضعیت
          فعال در جزء والد <span>(App)</span> ذخیره می‌شود و از طریق{" "}
          <span>prop</span> <span>isActive</span> به اجزای فرزند{" "}
          <span>(Panel)</span> منتقل می‌شود. این <span>prop</span> به اجزای{" "}
          <span>Panel</span> اطلاع می‌دهد که آیا باید به عنوان پانل فعال یا
          غیرفعال نمایش داده شوند. این روشی مؤثر برای اشتراک‌گذاری وضعیت بین
          اجزای <span>React</span> است زیرا باعث می‌شود کد شما ماژولارتر و
          نگهداری آن آسان‌تر شود. با انتقال وضعیت به والد مشترک، از تکرار کد و
          ایجاد پیچیدگی در ساختار برنامه جلوگیری می‌کنید.
        </p>
      );
    },
  }
]
export default DataText 