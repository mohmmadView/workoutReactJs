import Code from './utils/Prism'
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
      <h1 className="text-secondary text-3xl p-4">Types of structure state</h1><br />
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
    WhatIsReactContext: () => {
      return (
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
        <p >
          In prop threading, data is passed down from the parent component to
          the child component. If a child of that component needs the same prop,
          it is passed down until the required component gets the data. While
          simple, it can become complex when traversing deeply nested
          structures, and this results in prop drilling. In contrast, React
          Context allows data to be passed from the parent component to any
          nested component that requires it, simplifying the process.
        </p>
      );
    },
  },
  {
    ReactContextDifferentFa: () => {
      return (
        <p style={{direction: "rtl"}}>
          در prop threading، داده ها از مولفه والد به جزء فرزند منتقل می شود.
          اگر فرزند آن مؤلفه به همان پایه نیاز داشته باشد، تا زمانی که مؤلفه
          مورد نیاز داده را دریافت کند، ارسال می شود. در حالی که ساده است، می
          تواند در هنگام عبور از ساختارهای تو در تو پیچیده شود و این منجر به
          حفاری پایه می شود. در مقابل، React Context اجازه می‌دهد تا داده‌ها را
          از مؤلفه والد به هر مؤلفه تودرتویی که به آن نیاز دارد منتقل شود و
          فرآیند را ساده‌تر کند..
        </p>
      );
    },
  },
  {
      EscapeHatches:()=>{
        return (
          <p style={{direction:"ltr"}}>
           Some of your components may need to control and synchronize with systems outside of React. For example, you might need to focus an input using the browser API, play and pause a video player implemented without React, or connect and listen to messages from a remote server. In this chapter, you’ll learn the escape hatches that let you “step outside” React and connect to external systems. Most of your application logic and data flow should not rely on these features
<h1 className="text-secondary text-3xl p-2"> Referencing values with refs </h1> <br />
<p>When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref:</p><br />
<p className='p-2  bg-secondary-content'><span className='text-yellow-500'>const</span><span className='text-blue-500'> ref</span> =<span className='text-green-500'> useRef(0)</span>;</p>
<p className='m-2'>Like state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not! You can access the current value of that ref through the ref.current property.</p>
          <span className='m-2'>  <Code widthIN={"w-full"} fileName={"example"} code={`
 import { useRef } from 'react';

 export default function Counter() {
   let ref = useRef(0);
 
   function handleClick() {
     ref.current = ref.current + 1;
     alert('You clicked ' + ref.current + ' times!');
   }
 
   return (
     <button onClick={handleClick}>
       Click me!
     </button>
   );
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
     <span className="text-secondary">Escape Hatches </span>    ر برخی از اجزای شما ممکن است نیاز به کنترل و همگام سازی با سیستم های خارج از React داشته باشند. برای مثال، ممکن است لازم باشد یک ورودی را با استفاده از API مرورگر متمرکز کنید، پخش‌کننده ویدیویی را که بدون React اجرا شده است، پخش و متوقف کنید، یا پیام‌های یک سرور راه دور را متصل کنید و به آنها گوش دهید. در این فصل، دریچه‌های فرار را یاد می‌گیرید که به شما اجازه می‌دهند «بیرون بروید» React و به سیستم‌های خارجی متصل شوید. بیشتر منطق برنامه و جریان داده شما نباید به این ویژگی ها متکی باشد.<br />
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
  
   export default function Counter() {
     let ref = useRef(0);
   
     function handleClick() {
       ref.current = ref.current + 1;
       alert('You clicked ' + ref.current + ' times!');
     }
   
     return (
       <button onClick={handleClick}>
         Click me!
       </button>
     );
   }
   
          `} language={"js"}></Code>
          
</div>
        <br />
        <p>یک ref مانند یک جیب مخفی از مؤلفه شما است که React آن را ردیابی نمی کند. برای مثال، می‌توانید از refs timeout IDs, DOM elements و سایر اشیایی که بر خروجی رندر مؤلفه تأثیر نمی‌گذارند استفاده کنید.</p>
        </p>
      );
   }
  }
];

export default DataText;
