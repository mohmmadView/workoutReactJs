
const DataText = [{'Intermediate':()=>{
    return(
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
    )
}},
{ 'ManagingState':()=>{
    return(
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
        ((<span className="text-accent  ">
           برنامه نویسی فرانت، مدیریت وضعیت یکی از چالش های اصلی است. در برنامه های بزرگ و پیچیده، حفظ وضعیت در طول زمان می تواند دشوار باشد. این امر می تواند منجر به مشکلاتی مانند خطاها، عملکرد ضعیف و پیچیدگی کد شود.
        </span>)) <br />
        <span className="text-success">
         <p className="text-primary font-bold text-2xl p-2"> مفهوم مدیریت وضعیت:</p>

در برنامه‌نویسی، وضعیت  (State) به داده‌ها یا وضعیت فعلی یک برنامه یا کامپوننت اشاره دارد. مدیریت وضعیت به معنای کنترل و به‌روزرسانی اطلاعات و وضعیت داخلی برنامه است تا برنامه بتواند به درستی با ورودی‌ها و رویدادها برخورد کند و تغییرات مورد نیاز را اعمال کند.
<p className="text-secondary font-bold text-3xl">اهمیت مدیریت وضعیت:</p>
<br />
  <p className="text-2xl font-bold p-2 text-primary">پایداری و قابلیت تعمیر:</p> 
 
  مدیریت وضعیت کمک می‌کند تا برنامه پایدارتر باشد و به راحتی قابل تعمیر باشد. با داشتن کنترل بر وضعیت داخلی، خطاها را می‌توان سریع‌تر شناسایی و رفع کرد.

<p className="text-2xl font-bold text-primary p-2">  تداول داده بهینه:</p>

  اطلاعات برنامه به صورت موقت در وضعیت نگهداری می‌شوند و تغییرات مورد نیاز در اینجا اعمال می‌شوند. این کار به بهینه‌تر کردن مدیریت داده‌ها کمک می‌کند.

 <p className="text-2xl font-bold text-primary p-2"> پاسخگویی به رویدادها:</p>
  مدیریت وضعیت به برنامه این امکان را می‌دهد که به درستی به رویدادها و تغییرات در وضعیت پاسخ دهد. این امر به بهترین نحو امکان پذیر استفاده از برنامه را فراهم می‌کند.
        </span>
      </p>
    )
}
},
{'Reactingtoinput':()=>{
    return(
        <p>
          With <span className="text-blue-400">React</span>, you won’t modify
          the UI from code directly. For example, you won’t write commands like
          “disable the button”, “enable the button”, “show the success message”,
          etc. Instead, you will describe the UI you want to see for the
          different visual states of your component
          <span>(“initial state”, “typing state”, “success state”),</span> and
          then trigger the <span>state</span> changes in response to user input. This is
          similar to how designers think about UI. Here is a quiz form built
          using React. Note how it uses the status <span>state</span> variable to determine
          whether to enable or disable the submit button, and whether to show
          the success message instead.
        </p>
    )
}},
{ 'ReactingToInputFa':()=>{
    return(
        <p style={{ direction: "rtl" }}>
        با <span className="text-blue-400">React</span>، شما از کد به صورت
        مستقیم تغییرات را در رابط کاربری اعمال نخواهید کرد. به عنوان مثال،
        دستوراتی مانند دکمه را غیرفعال کن، دکمه را فعال کن، پیام موفقیت
        را نشان بده و غیره را نخواهید نوشت. به جای اینکه دستورات مستقیم
        بنویسید، شما توصیف خواهید کرد که رابط کاربری مورد نظر خود را برای
        وضعیت‌های مختلف دیداری کامپوننت خود
        <span>(وضعیت اولیه، وضعیت تایپ کردن، وضعیت موفقیت) </span>و سپس
        تغییرات وضعیت را در پاسخ به ورودی کاربر فراخوانی خواهید کرد. این مشابه
        به این است که طراحان به رابط کاربری فکر می‌کنند. در زیر، یک فرم آزمون
        به کمک React ساخته شده است. توجه داشته باشید که از متغیر وضعیت
        <span>(status)</span> برای تعیین اینکه آیا دکمه ارسال فعال یا غیرفعال
        باشد و آیا پیام موفقیت را نشان دهد یا خیر، استفاده شده است
      </p>
    )
}
},
{'ChoosingTheState':()=>{
    return(
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
    )
}},
{ 'ChoosingTheStateFa':()=>{
    return(
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
        ((<span className="text-accent  ">
           برنامه نویسی فرانت، مدیریت وضعیت یکی از چالش های اصلی است. در برنامه های بزرگ و پیچیده، حفظ وضعیت در طول زمان می تواند دشوار باشد. این امر می تواند منجر به مشکلاتی مانند خطاها، عملکرد ضعیف و پیچیدگی کد شود.
        </span>)) <br />
        <span className="text-success">
         <p className="text-primary font-bold text-2xl p-2"> مفهوم مدیریت وضعیت:</p>

در برنامه‌نویسی، وضعیت  (State) به داده‌ها یا وضعیت فعلی یک برنامه یا کامپوننت اشاره دارد. مدیریت وضعیت به معنای کنترل و به‌روزرسانی اطلاعات و وضعیت داخلی برنامه است تا برنامه بتواند به درستی با ورودی‌ها و رویدادها برخورد کند و تغییرات مورد نیاز را اعمال کند.
<p className="text-secondary font-bold text-3xl">اهمیت مدیریت وضعیت:</p>
<br />
  <p className="text-2xl font-bold p-2 text-primary">پایداری و قابلیت تعمیر:</p> 
 
  مدیریت وضعیت کمک می‌کند تا برنامه پایدارتر باشد و به راحتی قابل تعمیر باشد. با داشتن کنترل بر وضعیت داخلی، خطاها را می‌توان سریع‌تر شناسایی و رفع کرد.

<p className="text-2xl font-bold text-primary p-2">  تداول داده بهینه:</p>

  اطلاعات برنامه به صورت موقت در وضعیت نگهداری می‌شوند و تغییرات مورد نیاز در اینجا اعمال می‌شوند. این کار به بهینه‌تر کردن مدیریت داده‌ها کمک می‌کند.

 <p className="text-2xl font-bold text-primary p-2"> پاسخگویی به رویدادها:</p>
  مدیریت وضعیت به برنامه این امکان را می‌دهد که به درستی به رویدادها و تغییرات در وضعیت پاسخ دهد. این امر به بهترین نحو امکان پذیر استفاده از برنامه را فراهم می‌کند.
        </span>
      </p>
    )
}
},
{'SharingState':()=>{
    return(
      <p> 
       Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their 
      closest common parent, and then pass it down to them via props. This is known as <span className='font-bold'>lifting state up</span>, and it’s one of the most common things you will do writing React code.
      In this example, only one panel should be active at a time. To achieve this, instead of keeping the active state inside each individual panel,
       the parent component holds the state and specifies the props for its children
       </p>
    )
}},
{ 'SharingStateFa':()=>{
    return(
        <p style={{ direction: "rtl" }}>
         گاهی اوقات، ممکن است بخواهید وضعیت دو جزء <span>React</span> همیشه با هم تغییر کند. برای انجام این کار، باید وضعیت را از هر دو جزء حذف کنید،
       آن را به والد مشترک آنها منتقل کنید و سپس از طریق <span>props</span> به آنها منتقل کنید. این روش به نام "بالا بردن وضعیت" <span>(lifting state up)</span> شناخته می‌شود و یکی از رایج‌ترین روش‌های نوشتن کد <span>React</span> است.
در این مثال، فقط یک پانل باید در یک زمان فعال باشد. برای دستیابی به این هدف، به جای ذخیره وضعیت فعال در هر پانل جداگانه، جزء والد وضعیت را نگه می‌دارد و <span>props</span> را برای فرزندان خود مشخص می‌کند.
به عبارت دیگر، در این مثال، تنها یک پانل در یک زمان می‌تواند برجسته باشد. برای اطمینان از این موضوع، وضعیت فعال در جزء والد <span>(App)</span> ذخیره می‌شود و از طریق <span>prop</span> <span>isActive</span> به اجزای فرزند <span>(Panel)</span> منتقل می‌شود. این <span>prop</span> به اجزای <span>Panel</span> اطلاع می‌دهد که آیا باید به عنوان پانل فعال یا غیرفعال نمایش داده شوند.
این روشی مؤثر برای اشتراک‌گذاری وضعیت بین اجزای <span>React</span> است زیرا باعث می‌شود کد شما ماژولارتر و نگهداری آن آسان‌تر شود. با انتقال وضعیت به والد مشترک، از تکرار کد و ایجاد پیچیدگی در ساختار برنامه جلوگیری می‌کنید.

      </p>
    )
}
},
]

export default DataText