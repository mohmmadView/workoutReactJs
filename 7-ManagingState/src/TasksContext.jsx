const DataText = [
  {
    Intermediate: () => {
      return (
        <p>
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
        </p>
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
        </p>
      );
    },
  },
  {
    ChoosingTheStateFa: () => {
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
    SharingState: () => {
      return (
        <p>
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
          گاهی اوقات، ممکن است بخواهید وضعیت دو جزء <span>React</span> همیشه با
          هم تغییر کند. برای انجام این کار، باید وضعیت را از هر دو جزء حذف کنید،
          آن را به والد مشترک آنها منتقل کنید و سپس از طریق <span>props</span>{" "}
          به آنها منتقل کنید. این روش به نام "بالا بردن وضعیت"{" "}
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
    ExtractingStateLogic: () => {
      return (
        <p>
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
        <>
          کامپوننت‌هایی که به‌روزرسانی‌های حالت زیادی در بسیاری از
          کنترل‌کننده‌های رویداد پخش شده‌اند، می‌توانند بسیار زیاد شوند. برای
          این موارد، می‌توانید تمام منطق به‌روزرسانی حالت خارج از مؤلفه خود را
          در یک تابع به نام «کاهش‌کننده» ادغام کنید. کنترل‌کننده‌های رویداد شما
          مختصر می‌شوند زیرا آنها فقط «اقدامات» کاربر را مشخص می‌کنند. در پایین
          فایل، تابع کاهنده مشخص می کند که وضعیت چگونه باید در پاسخ به هر عمل به
          روز شود!
        </>
      );
    },
  },
  {
    PassingDataDeeplyWithContext: () => {
      return (
        <>
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
        </>
      );
    },
  },
  {
    PassingDataDeeplyWithContextFa: () => {
      return (
        <p className="rtl" style={{ direction: "rtl" }}>
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
];

export default DataText;
