// import  prism  from 'prismjs';
import Code from './utils/Prism';
import Highlighter from "react-highlight-words";
import { useEffect, useRef } from 'react';
// import Effects from './4-Effects';

import imgReactContext from "./assets/Screenshot-2024-01-02-124809.png";
const DataText = [
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
  },
  {
    ChoosingTheState: () => {
      return (
        <p>
          Structuring state well can make a difference between a component that
          is pleasant to modify and debug, and one that is a constant source of
          bugs. The most important principle is that state shouldn’t contain
          redundant or duplicated information. If there’s unnecessary state,
          it’s easy to forget to update it, and introduce bugs!
      <h1 className="text-secondary divider divider-start text-3xl p-4">Types of structure state</h1><br />
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
        <p className="rtl" style={{ direction: "rtl" }}>
       اهمیت ساختاردهی مناسب وضعیت <span>(state)</span> در  <span className="text-blue-500"> React </span>   
        می‌تواند تفاوتی بین یک کامپوننتی که که بدونی مشکلی قابل تغییر و اشکال‌زدایی است 
      و یک کامپوننتی که منبع ثابتی از باگ‌هاست، ایجاد کند 
       برای اینکه بتوانیم ساختار با کارای  بهتر  و باگی کمتر به وجود بیاد باید در ساختار کد  هایمان از ۵ نکته پیروی کنیم : <br />
<span className="text-primary">
         ۱ ساختاردهی مناسب <span>(state) </span>وضعیت: <br />
         </span> 
         در <span className="text-blue-500"> React </span> ، مهم است که وضعیت کامپوننت به نحوی طراحی شود که حاوی اطلاعات ضروری باشد 
         و اطلاعات تکراری یا اضافی حذف شوند. این کار باعث ساده‌تر شدن فرآیند توسعه، اشکال‌زدایی و نگهداری می‌شود. <br />
  <span className="text-primary">
         ۲ پیشگیری از اطلاعات تکراری: <br />
         </span> 
         هر اطلاعاتی که به صورت تکراری در وضعیت قرار دارد، ممکن است منجر به فراموش کردن به‌روزرسانی‌ها شود
         . بنابراین، اهمیت دارد که فقط اطلاعات ضروری را در وضعیت نگه داریم و از تکرار آن‌ها پرهیز کنیم. <br />
         <span className="text-primary">
          ۳ تأثیر بر رندرینگ: <br />
         </span> 
هر تغییر در وضعیت منجر به رندر مجدد کامپوننت می‌شود. بنابراین، اگر وضعیت     
به درستی مدیریت نشود، ممکن است رندرهای زیادی انجام شود که این موضوع به بهبود کارایی کد نقض می‌شود. <br />
         <span className="text-primary">
         ۴ مهارت‌های مدیریت وضعیت<span>(state) </span>وضعیت: <br />
         </span> 
         مدیریت وضعیت یک مهارت مهم در <span className="text-blue-500">React</span> است. استفاده از مفاهیمی مانند 
        <span> lifting state up</span> برای به‌اشتراک‌گذاری وضعیت بین کامپوننت‌ها و 
        <span> useEffect </span>برای کنترل جریان عمر کامپوننت‌ها کمک می‌کند. <br />
         <span className="text-primary">
         5 اهمیت به‌روزرسانی دقیق: <br />
         </span> 
         در <span className="text-blue-500">React،</span> مهم است که وضعیت کامپوننت به نحوی طراحی شود که حاوی اطلاعات ضروری باشد 
         و اطلاعات تکراری یا اضافی حذف شوند. این کار باعث ساده‌تر شدن فرآیند توسعه، اشکال‌زدایی و نگهداری می‌شود. <br />
        <h1 className="text-secondary text-3xl p-4">انواع ساختار  state</h1><br />
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
      </p>
      );
    },
  },
  {
    SharingState: () => {
      return (
        <p style={{ direction: "ltr" }}>
          Sometimes, you want the state of two components to always change
          together. To do it, remove state from both of them, move it to their
          closest common parent, and then pass it down to them via props. This
          is known as <span className="font-bold">lifting state up</span>, and
          it’s one of the most common things you will do writing React code. In
          this example, only one panel should be active at a time. To achieve
          this, instead of keeping the active state inside each individual
          panel, the parent component holds the state and specifies the props
          for its children
        </p>
      );
    },
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
  },
  {
    PreservingAndResetting: () => {
      return (
        <p>
          When you re-render a component, React needs to decide which parts of
          the tree to keep (and update), and which parts to discard or re-create
          from scratch. In most cases, React’s automatic behavior works well
          enough. By default, React preserves the parts of the tree that “match
          up” with the previously rendered component tree. However, sometimes
          this is not what you want. In this chat app, typing a message and then
          switching the recipient does not reset the input. This can make the
          user accidentally send a message to the wrong person:
        </p>
      );
    },
  },
  {
    PreservingAndResettingFa: () => {
      return (
        <p style={{direction: "rtl"} }>
          وقتی یک کامپوننت را دوباره رندر می‌کنید، React باید تصمیم بگیرد که
          کدام قسمت‌های درخت را نگه دارد (و به‌روزرسانی کند)، و کدام قسمت‌ها را
          دور انداخته یا از ابتدا دوباره ایجاد کند. در بیشتر موارد، رفتار خودکار
          React به اندازه کافی خوب عمل می کند. به‌طور پیش‌فرض، React بخش‌هایی از
          درخت را حفظ می‌کند که با درخت مؤلفه‌ای که قبلاً رندر شده است، مطابقت
          دارند. با این حال، گاهی اوقات این چیزی نیست که شما می خواهید. در این
          برنامه چت، تایپ یک پیام و سپس تغییر گیرنده، ورودی را بازنشانی نمی کند.
          این می تواند باعث شود کاربر به طور تصادفی پیامی را به شخص اشتباهی
          ارسال کند:
        </p>
      );
    },
  },
  {
    ExtractingStateLogic: () => {
      return (
        <p style={{direction: "rtl"}}>
          Components with many state updates spread across many event handlers
          can get overwhelming. For these cases, you can consolidate all the
          state update logic outside your component in a single function, called
          “reducer”. Your event handlers become concise because they only
          specify the user “actions”. At the bottom of the file, the reducer
          function specifies how the state should update in response to each
          action!
        </p>
      );
    },
  },
  {
    ExtractingStateLogicFa: () => {
      return (
        <p style={{direction: "rtl"}}>
          کامپوننت‌هایی که به‌روزرسانی‌های حالت زیادی در بسیاری از
          کنترل‌کننده‌های رویداد پخش شده‌اند، می‌توانند بسیار زیاد شوند. برای
          این موارد، می‌توانید تمام منطق به‌روزرسانی حالت خارج از مؤلفه خود را
          در یک تابع به نام «کاهش‌کننده» ادغام کنید. کنترل‌کننده‌های رویداد شما
          مختصر می‌شوند زیرا آنها فقط «اقدامات» کاربر را مشخص می‌کنند. در پایین
          فایل، تابع کاهنده مشخص می کند که وضعیت چگونه باید در پاسخ به هر عمل به
          روز شود!
        </p>
      );
    },
  },
  {
    PassingDataDeeplyWithContext: () => {
      return (
        <p >
          Usually, you will pass information from a parent component to a child
          component via props. But passing props can become inconvenient if you
          need to pass some prop through many components, or if many components
          need the same information. Context lets the parent component make some
          information available to any component in the tree below it—no matter
          how deep it is—without passing it explicitly through props. Here, the
          Heading component determines its heading level by “asking” the closest
          Section for its level. Each Section tracks its own level by asking the
          parent Section and adding one to it. Every Section provides
          information to all components below it without passing props—it does
          that through context.
        </p>
      );
    },
  },
  {
    PassingDataDeeplyWithContextFa: () => {
      return (
        <p  style={{ direction: "rtl" }}>
          در{" "}
          <span>
            React، <span>reducer</span>
          </span>
          ها مسئول مدیریت <span>state</span> اپلیکیشن هستند. آنها با دریافت{" "}
          <span>state</span> فعلی و یک <span>action، state</span> جدید را محاسبه
          می‌کنند. <span>contextها</span> نیز ابزاری برای اشتراک‌گذاری{" "}
          <span>state</span> بین <span>components</span> هستند. برای مقیاس‌پذیری
          اپلیکیشن‌های <span>React</span> با <span>reducerها</span> و{" "}
          <span>contextها،</span> می‌توان از تکنیک‌های زیر استفاده کرد: استفاده
          از <span>reducer</span> های مجزا برای بخش‌های مختلف اپلیکیشن: این کار
          باعث می‌شود که <span>reducer</span> ها کوچکتر و مدیریت آنها آسان‌تر
          شود. استفاده از contextها برای اشتراک‌گذاری state بین reducerها: این
          کار باعث می‌شود که reducerها از هم مستقل‌تر شوند و بتوان آنها را به
          راحتی در بخش‌های مختلف اپلیکیشن استفاده کرد. استفاده از کتابخانه‌های
          third-party برای مدیریت reducerها: این کتابخانه‌ها می‌توانند به
          مقیاس‌پذیری اپلیکیشن کمک کنند. در ادامه، به توضیح هر یک از این
          تکنیک‌ها می‌پردازیم: استفاده از reducerهای مجزا برای بخش‌های مختلف
          اپلیکیشن در اپلیکیشن‌های بزرگ، state می‌تواند بسیار پیچیده شود. در این
          حالت، می‌توان از reducerهای مجزا برای بخش‌های مختلف اپلیکیشن استفاده
          کرد. به عنوان مثال، می‌توان یک <span>reducer</span> برای{" "}
          <span>state</span> مربوط به کاربران، یک <span>reducer</span> برای{" "}
          <span>state</span> مربوط به محصولات و یک <span>reducer</span> برای{" "}
          <span>state</span> مربوط به سفارشات استفاده کرد. این کار باعث می‌شود
          که reducerها کوچکتر و مدیریت آنها آسان‌تر شود. همچنین، باعث می‌شود که
          reducerها از هم مستقل‌تر شوند و بتوان آنها را به راحتی در بخش‌های
          مختلف اپلیکیشن استفاده کرد. استفاده از contextها برای اشتراک‌گذاری{" "}
          <span>state</span> بین reducerها contextها ابزاری برای اشتراک‌گذاری{" "}
          <span>state</span> بین components هستند. می‌توان از contextها برای
          اشتراک‌گذاری <span>state</span> بین reducerها نیز استفاده کرد. برای
          این کار، باید یک context ایجاد کرد و <span>state</span> مورد نظر را در
          آن قرار داد. سپس، می‌توان از این context در reducerها استفاده کرد. این
          کار باعث می‌شود که reducerها از هم مستقل‌تر شوند و بتوان آنها را به
          راحتی در بخش‌های مختلف اپلیکیشن استفاده کرد. استفاده از کتابخانه‌های
          third-party برای مدیریت reducerها کتابخانه‌های third-party مختلفی برای
          مدیریت reducerها وجود دارند. این کتابخانه‌ها می‌توانند به مقیاس‌پذیری
          اپلیکیشن کمک کنند. برخی از این کتابخانه‌ها عبارتند از: <br />
          Redux: Redux یکی از محبوب‌ترین کتابخانه‌های مدیریت reducerها است.
          Redux Toolkit: Redux Toolkit یک کتابخانه‌ی Redux است که ابزارهای
          مختلفی برای مدیریت reducerها ارائه می‌دهد. Reselect: Reselect یک
          کتابخانه‌ی Redux است که برای انتخاب بخشی از <span>state</span> استفاده
          می‌شود.
          <br />
          در نهایت، باید توجه داشت که انتخاب تکنیک مناسب برای مقیاس‌پذیری
          اپلیکیشن به عوامل مختلفی بستگی دارد. این عوامل عبارتند از: ساختار
          اپلیکیشن حجم <span>state</span> اپلیکیشن نیازهای عملکردی اپلیکیشن
        </p>
      );
    },
  },
  {
    WhatIsReactContext: () => { return (
        <p >
          React Context provides us a way to pass data down through the
          component tree to where we need it without having to manually pass
          props at every single level. It acts as a global storage space for all
          your components in your project.
        </p>
      );
     
    },
  },
  {
    WhatIsReactContextFa: () => {
      return (
        <p style={{direction: "rtl"}}>
          React Context راهی را در اختیار ما قرار می دهد تا داده ها را از طریق
          درخت کامپوننت به جایی که به آن نیاز داریم منتقل کنیم، بدون اینکه نیازی
          به ارسال دستی props در هر سطح باشد. این به عنوان یک فضای ذخیره سازی
          جهانی برای تمام اجزای شما در پروژه شما عمل می کند.
        </p>
      );
    },
  },
  {
    ReactContextDifferent: () => {
      return (
      <>
          <p >
            In prop threading, data is passed down from the parent component to
            the child component. If a child of that component needs the same prop,
            it is passed down until the required component gets the data. While
            simple, it can become complex when traversing deeply nested
            structures, and this results in prop drilling. In contrast, React
            Context allows data to be passed from the parent component to any
            nested component that requires it, simplifying the process.
          </p>
           <img
            src={imgReactContext}
            className="w-full h-full mt-4"
            alt="React Context"
          />
      </>
      );
    },
  },
  {
    ReactContextDifferentFa: () => {
      return (
        <>
          <p style={{direction: "rtl"}}>
            در prop threading، داده ها از مولفه والد به جزء فرزند منتقل می شود.
            اگر فرزند آن مؤلفه به همان پایه نیاز داشته باشد، تا زمانی که مؤلفه
            مورد نیاز داده را دریافت کند، ارسال می شود. در حالی که ساده است، می
            تواند در هنگام عبور از ساختارهای تو در تو پیچیده شود و این منجر به
            حفاری پایه می شود. در مقابل، React Context اجازه می‌دهد تا داده‌ها را
            از مؤلفه والد به هر مؤلفه تودرتویی که به آن نیاز دارد منتقل شود و
            فرآیند را ساده‌تر کند..
          </p>
           <img
            src={imgReactContext}
            className="w-full h-full mt-4"
            alt="React Context"
          />
        </>
      );
    },
  },
  {
      EscapeHatches:()=>{
        return (
          <p >
           Some of your components may need to control and synchronize with systems outside of React. For example, you might need to focus an input using the browser API, play and pause a video player implemented without React, or connect and listen to messages from a remote server. In this chapter, you’ll learn the escape hatches that let you “step outside” React and connect to external systems. Most of your application logic and data flow should not rely on these features
<h1 className="divider divider-start pt-4 text-accent text-2xl divider-success max-md:text-sm"> Referencing values with refs </h1> <br />
<p>When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref:</p><br />
<p className='p-2  bg-secondary-content'><span className='text-yellow-500'>const</span><span className='text-blue-500'> ref</span> =<span className='text-green-500'> useRef(0)</span>;</p>
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
            </p>
        );
      }
   },{

    EscapeHatchesFa:()=>{
      return (
    
        <p style={{direction: "rtl"}}>
           

     <span className="text-secondary">Escape Hatches </span>     ر برخی از اجزای شما ممکن است نیاز به کنترل و همگام سازی با سیستم های خارج از React داشته باشند. برای مثال، ممکن است لازم باشد یک ورودی را با استفاده از API مرورگر متمرکز کنید، پخش‌کننده ویدیویی را که بدون React اجرا شده است، پخش و متوقف کنید، یا پیام‌های یک سرور راه دور را متصل کنید و به آنها گوش دهید. در این فصل، دریچه‌های فرار را یاد می‌گیرید که به شما اجازه می‌دهند «بیرون بروید» React و به سیستم‌های خارجی متصل شوید. بیشتر منطق برنامه و جریان داده شما نباید به این ویژگی ها متکی باشد.
     <br />
<span className="text-secondary">Escape Hatches </span>مکانیزم هایی هستند که به شما امکان می دهند از State یک مؤلفه به طور موقت خارج شوید. این می تواند در مواقعی مفید باشد که می خواهید به طور موقت State را تغییر دهید بدون اینکه بر State اصلی مؤلفه تأثیر بگذارد. <br /> 
<span> تعریف دیگه از Escape Hatches</span><br />
در برخی موارد، ممکن است لازم باشد از State خارج شوید و به طور مستقیم DOM را دستکاری کنید. برای این کار می توانید از Escape Hatches استفاده کنید.
<h1 className="text-secondary text-3xl p-2">Referencing values with refs</h1> <br />
<p>وقتی می‌خواهید یک مؤلفه اطلاعاتی را «به خاطر بسپارد»، اما نمی‌خواهید این اطلاعات رندرهای جدیدی را ایجاد کند، می‌توانید از یک ref استفاده کنید:</p>
<p style={{direction:"ltr"}} className='p-2  bg-secondary-content'><span className='text-yellow-500'>const</span><span className='text-blue-500'> ref</span> =<span className='text-green-500'> useRef(0)</span>;</p>
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
        </p>
      );
   }
  },{
    Effect:()=>{

      return (
        <p className='p-4'>
          
           <Highlighter 
            highlightClassName='text-secondary bg-base-300'
            searchWords={["Effects","React","non-React","(",")","jsx","state","props","components","Event","component","effect"]}
            autoEscape={true}
            unhighlightClassName='text-yellow-100'
            textToHighlight={`Some components need to synchronize with external systems. For example, you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen. Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.`} />
        </p>
        )
        }
      },{
        EffectFa:()=>{
          return(
          <p className='text-yellow-100' dir='rtl'>
          برخی از کامپوننت ها نیاز به همگام سازی با سیستم های خارجی دارند. برای مثال، ممکن است بخواهید یک کامپوننت غیر <span className='text-blue-500 font-bold'>React</span> را بر اساس <span className='text-success font-bold'>state</span> ری اکت کنترل کنید، یک اتصال سرور راه اندازی کنید، یا زمانی که یک کامپوننت روی صفحه ظاهر می شود، یک لاگ آنالیز ارسال کنید.

<span className='text-primary font-bold'>Effect</span> به شما این امکان را می دهد که بعد از رندر، کدهایی را اجرا کنید تا بتوانید کامپوننت خود را با سیستمی خارج از <span className='text-blue-500 font-bold'>React</span> همگام سازی کنید.
          </p>)
        }
      },{
        SynchronizingWithEffects:()=>{
        
          return(
            <div dir='ltr' className='whitespace-pre-line'>
                
            <Highlighter 
            highlightClassName='text-yellow-500 bg-base-300'
            searchWords={["Effects","React","(",")","jsx","state","props","components","Event","component","effect"]}
            autoEscape={true}
            unhighlightClassName='text-white'
            textToHighlight={`
 Before getting to Effects, you need to be familiar with two types of logic inside React components:

    Rendering code (introduced in Describing the UI) lives at the top level of your component. 
    This is where you take the props and state, transform them, and return the JSX you want to see on the screen. Rendering code must be pure. Like a math formula, it should only calculate the result, but not do anything else.

    Event handlers (introduced in Adding Interactivity) are nested functions inside your components that do things rather than just calculate them. An event handler might update an input field, submit an HTTP POST request to buy a product, or navigate the user to another screen. Event handlers contain “side effects” (they change the program’s state) caused by a specific user action (for example, a button click or typing).

Sometimes this isn’t enough. Consider a ChatRoom component that must connect to the chat server whenever it’s visible on the screen. Connecting to a server is not a pure calculation (it’s a side effect) so it can’t happen during rendering. However, there is no single particular event like a click that causes ChatRoom to be displayed.

Effects let you specify side effects that are caused by rendering itself, rather than by a particular event. Sending a message in the chat is an event because it is directly caused by the user clicking a specific button. However, setting up a server connection is an Effect because it should happen no matter which interaction caused the component to appear. Effects run at the end of a commit after the screen updates. This is a good time to synchronize the React components with some external system (like network or a third-party library).
            `} />
            </div>
            )
            }
      },{
        SynchronizingWithEffectsFa:()=>{
        
          return(
            <div dir='rtl' className='whitespace-pre-line'>
                
            <Highlighter 
            highlightClassName='text-info bg-base-300 rtl'
            searchWords={[(/([a-zA-Z])\w+/g)]}
            autoEscape={false}
            unhighlightClassName='text-white'
            textToHighlight={`
       Effect در React چگونه کار می کند؟

Effect در React، یک تابع است که به شما امکان می‌دهد کدهایی را بعد از رندر یا به‌روزرسانی کامپوننت اجرا کنید. این کد می‌تواند شامل موارد زیر باشد:

    دستکاری DOM: مانند تغییر متن، اضافه یا حذف عناصر، و اعمال استایل
    برقراری ارتباط با API: مانند دریافت داده از یک سرور یا ارسال داده به یک پایگاه داده
    انجام محاسبات: مانند مرتب کردن لیست یا فیلتر کردن داده ها
    تنظیم تایمر: مانند اجرای یک تابع بعد از گذشت زمان مشخص

تفاوت Effect با Events (رویدادها):

    زمان اجرا:
        Events (رویدادها) در پاسخ به اقدامات کاربر مانند کلیک، موس‌اور، یا فشردن کلید اجرا می‌شوند.
        Effect ها بعد از رندر یا به‌روزرسانی کامپوننت اجرا می‌شوند، چه کاربری با آن تعامل داشته باشد یا نه.
    هدف:
        Events (رویدادها) برای مدیریت تعامل کاربر با کامپوننت استفاده می‌شوند.
        Effect ها برای همگام سازی کامپوننت با سیستم های خارجی یا انجام وظایف جانبی مانند محاسبات یا تایمرها استفاده می‌شوند.
    دامنه:
        Events (رویدادها) به یک کامپوننت خاص محدود می‌شوند.
        Effect ها می‌توانند به DOM، API ها، یا سایر سیستم های خارجی دسترسی داشته باشند.

مثال:

فرض کنید می‌خواهید یک کامپوننت شمارنده داشته باشید که هر ثانیه به روز می‌شود.
با استفاده از Events (رویدادها): 
 می‌توانید از یک رویداد setInterval برای افزایش شمارنده هر ثانیه استفاده کنید.  مشکل این روش این است که اگر کاربر از تب خارج شود یا کامپوننت پنهان شود، شمارنده همچنان به افزایش خود ادامه می‌دهد.
  با استفاده از Effect: 
  می‌توانید از یک Effect برای افزایش شمارنده هر ثانیه استفاده کنید.  Effect فقط زمانی اجرا می‌شود که کامپوننت قابل مشاهده باشد.  اگر کاربر از تب خارج شود یا کامپوننت پنهان شود، Effect متوقف می‌شود. در اینجا یک مثال از کد برای استفاده از Effect برای افزایش شمارنده هر ثانیه آورده شده است:
            `} />
            </div>
          )

        }
      },{
        HowToWriteAnEffect:()=>{
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
      },{ HowToWriteAnEffectFa:()=>{

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
        }},
        {YouMightNotNeedEffect : () => {
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
            
      }, {YouMightNotNeedEffectFa : () => {
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
            
      },
  }
    
];

export default DataText;