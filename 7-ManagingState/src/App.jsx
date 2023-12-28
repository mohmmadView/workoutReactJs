import Container from './utils/container'
import Title from "./utils/Title";
import Example from "./utils/Example";
import CityQiuz from "./1-CityQiuz";
import CityQuiz2 from "./2-CityQiuz";
import FullName from "./3-fullName";
import Panel from './4-Panel';
import ChatList from "./5-ChatList";
import Note from "./6-note";
import NoteReducer from "./6-Note-reducer/index";
import PassingDataNesting  from './7-PassingData/index.jsx';
import "./App.css";
import "./index.css";
import SetContext from './utils/secContext.jsx';
import DataText from './TasksContext.jsx'
export default function App() {
  console.log(DataText[0].text_2);
  return (
    <div className="w-full">
      <Title title="Managing State" />
      <Container Title={"Intermediate"} ><SetContext>{DataText[0].Intermediate()}</SetContext></Container>
      <Container  Title={"مدیریت وضعیت"}><SetContext>{DataText[1].ManagingState()}</SetContext></Container>
      <Example exampleNumber={1} exampleName={"Example State"} />
      <Container Title={"Reacting to input with state"}>
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
        </p></Container>
      <Container
        Title="واکنش به ورودی با استفاده از state"
        Direction="rtl"><p style={{ direction: "rtl" }}>
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
        </p></Container>
     
      <CityQiuz />
      <CityQuiz2 /> 
      {/* <ScrollY /> */}
      <Container Title={"Choosing the state structure"} >Structuring <span>state</span> well can make a difference between a component that
          is pleasant to modify and debug, and one that is a constant source of
          bugs. The most important principle is that <span>state</span> shouldn’t contain
          redundant or duplicated information. If there’s unnecessary <span>state</span>,
          it’s easy to forget to update it, and introduce bugs! Structuring
          <span>state</span> well can make a difference between a component that is pleasant
          to modify and debug, and one that is a constant source of bugs. The
          most important principle is that <span>state</span> shouldn’t contain redundant or
          duplicated information. If there’s unnecessary <span>state</span>, it’s easy to
          forget to update it, and introduce bugs!`</Container>
        <Container Direction={"rtl"} Title={"Choosing the state structure"} >
        <p className="rtl" style={{ direction: "rtl" }}>
          در زیر، یک فرم آزمون به کمک React ساخته شده است. توجه داشته باشید که
          از متغیر وضعیت <span>(status)</span> برای تعیین اینکه آیا دکمه ارسال
          فعال یا غیرفعال باشد و آیا پیام موفقیت را نشان دهد یا خیر، استفاده شده
          است ساختاردهی مناسب برای وضعیت (state) می‌تواند تفاوتی بین یک
          کامپوننتی که اصلاح و اشکال‌زدایی آسان است و یک کامپوننتی که منبع دائمی
          از باگ‌هاست، ایجاد کند. اصل مهم‌ترین این است که وضعیت باید شامل
          اطلاعات اضافی یا تکراری نباشد. اگر وضعیت غیرضروری باشد، آسان است که
          فراموش شود که آن را به‌روز کنیم و باگ‌ها را وارد کنیم! ساختاردهی مناسب
          برای وضعیت می‌تواند تفاوتی بین یک کامپوننتی که اصلاح و اشکال‌زدایی
          آسان است و یک کامپوننتی که منبع دائمی از باگ‌هاست، ایجاد کند. اصل
          مهم‌ترین این است که وضعیت باید شامل اطلاعات اضافی یا تکراری نباشد. اگر
          وضعیت غیرضروری باشد، آسان است که فراموش شود که آن را به‌روز کنیم و
          باگ‌ها را وارد کنیم!
        </p></Container>
     
      <FullName />
    
      <Container  Title={"Sharing state between components"}> Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their 
      closest common parent, and then pass it down to them via props. This is known as <span className='font-bold'>lifting state up</span>, and it’s one of the most common things you will do writing React code.
      In this example, only one panel should be active at a time. To achieve this, instead of keeping the active state inside each individual panel,
       the parent component holds the state and specifies the props for its children
    </Container>
    <Container Title={"Sharing state between components"}  Direction={"rtl"} >
      گاهی اوقات، ممکن است بخواهید وضعیت دو جزء <span>React</span> همیشه با هم تغییر کند. برای انجام این کار، باید وضعیت را از هر دو جزء حذف کنید،
       آن را به والد مشترک آنها منتقل کنید و سپس از طریق <span>props</span> به آنها منتقل کنید. این روش به نام "بالا بردن وضعیت" <span>(lifting state up)</span> شناخته می‌شود و یکی از رایج‌ترین روش‌های نوشتن کد <span>React</span> است.
در این مثال، فقط یک پانل باید در یک زمان فعال باشد. برای دستیابی به این هدف، به جای ذخیره وضعیت فعال در هر پانل جداگانه، جزء والد وضعیت را نگه می‌دارد و <span>props</span> را برای فرزندان خود مشخص می‌کند.
به عبارت دیگر، در این مثال، تنها یک پانل در یک زمان می‌تواند برجسته باشد. برای اطمینان از این موضوع، وضعیت فعال در جزء والد <span>(App)</span> ذخیره می‌شود و از طریق <span>prop</span> <span>isActive</span> به اجزای فرزند <span>(Panel)</span> منتقل می‌شود. این <span>prop</span> به اجزای <span>Panel</span> اطلاع می‌دهد که آیا باید به عنوان پانل فعال یا غیرفعال نمایش داده شوند.
این روشی مؤثر برای اشتراک‌گذاری وضعیت بین اجزای <span>React</span> است زیرا باعث می‌شود کد شما ماژولارتر و نگهداری آن آسان‌تر شود. با انتقال وضعیت به والد مشترک، از تکرار کد و ایجاد پیچیدگی در ساختار برنامه جلوگیری می‌کنید.
     </Container>
    <Panel />
    <Container Title="Preserving and resetting state " >
      When you re-render a component, React needs to decide which parts of the tree to keep (and update), and which parts to discard or re-create from scratch. In most cases, React’s automatic behavior works well enough. By default, React preserves the parts of the tree that “match up” with the previously rendered component tree.
However, sometimes this is not what you want. In this chat app, typing a message and then switching the recipient does not reset the input. This can make the user accidentally send a message to the wrong person:
      </Container>
     <ChatList />
     <Container Title="Extracting state logic into a reducer " >
Components with many state updates spread across many event handlers can get overwhelming. For these cases, you can 
consolidate all the state update logic outside your component in a single function, called “reducer”. Your event handlers become 
concise because they only specify the user “actions”. At the bottom of the file, the reducer function specifies how the state should update in response to each action!
</Container>
         <Container Direction={"rtl"} Title="Extracting state logic into a reducer " >
 کامپوننت‌هایی که به‌روزرسانی‌های حالت زیادی در بسیاری از کنترل‌کننده‌های رویداد پخش شده‌اند، می‌توانند بسیار زیاد شوند. برای این موارد، می‌توانید تمام منطق به‌روزرسانی حالت خارج از مؤلفه خود را در یک تابع به نام «کاهش‌کننده» ادغام کنید. کنترل‌کننده‌های رویداد شما مختصر می‌شوند زیرا آنها فقط «اقدامات» کاربر را مشخص می‌کنند. در پایین فایل، تابع کاهنده مشخص می کند که وضعیت چگونه باید در پاسخ به هر عمل به روز شود!
 </Container>
            <Note note={"test"} />
   <Container Title="Passing data deeply with context  " Children={<p>
    Usually, you will pass information from a parent component to a child component via props. But passing props can become inconvenient if you need to pass some prop through many components, or if many components need the same information. Context lets the parent component make some information available to any component in the tree below it—no matter how deep it is—without passing it explicitly through props.

Here, the Heading component determines its heading level by “asking” the closest Section for its level. Each Section tracks its own level by asking the parent Section and adding one to it. Every Section provides information to all components below it without passing props—it does that through context.
     </p>} />


     <PassingDataNesting />
     <Container Direction={"rtl"} Title="Passing data deeply with context  ">
      در <span>React، <span>reducer</span></span>ها مسئول مدیریت <span>state</span> اپلیکیشن هستند. آنها با دریافت <span>state</span> فعلی و یک <span>action، state</span> جدید را محاسبه می‌کنند. <span>contextها</span> نیز ابزاری برای اشتراک‌گذاری <span>state</span> بین <span>components</span> هستند.
       برای مقیاس‌پذیری اپلیکیشن‌های <span>React</span> با <span>reducerها</span> و <span>contextها،</span> می‌توان از تکنیک‌های زیر استفاده کرد:
           استفاده از <span>reducer</span> های مجزا برای بخش‌های مختلف اپلیکیشن: این کار باعث می‌شود که <span>reducer</span> ها کوچکتر و مدیریت آنها آسان‌تر شود.
           استفاده از contextها برای اشتراک‌گذاری state بین reducerها: این کار باعث می‌شود که reducerها از هم مستقل‌تر شوند و بتوان آنها را به راحتی در بخش‌های مختلف اپلیکیشن استفاده کرد.
           استفاده از کتابخانه‌های third-party برای مدیریت reducerها: این کتابخانه‌ها می‌توانند به مقیاس‌پذیری اپلیکیشن کمک کنند.
       در ادامه، به توضیح هر یک از این تکنیک‌ها می‌پردازیم:
       استفاده از reducerهای مجزا برای بخش‌های مختلف اپلیکیشن
       در اپلیکیشن‌های بزرگ، state می‌تواند بسیار پیچیده شود. در این حالت، می‌توان از reducerهای مجزا برای بخش‌های مختلف اپلیکیشن استفاده کرد. به عنوان مثال، می‌توان یک <span>reducer</span> برای <span>state</span> مربوط به کاربران، یک <span>reducer</span> برای <span>state</span> مربوط به محصولات و یک <span>reducer</span> برای <span>state</span> مربوط به سفارشات استفاده کرد.
       این کار باعث می‌شود که reducerها کوچکتر و مدیریت آنها آسان‌تر شود. همچنین، باعث می‌شود که reducerها از هم مستقل‌تر شوند و بتوان آنها را به راحتی در بخش‌های مختلف اپلیکیشن استفاده کرد.
       استفاده از contextها برای اشتراک‌گذاری <span>state</span> بین reducerها
       contextها ابزاری برای اشتراک‌گذاری <span>state</span> بین components هستند. می‌توان از contextها برای اشتراک‌گذاری <span>state</span> بین reducerها نیز استفاده کرد.
       برای این کار، باید یک context ایجاد کرد و <span>state</span> مورد نظر را در آن قرار داد. سپس، می‌توان از این context در reducerها استفاده کرد.
       این کار باعث می‌شود که reducerها از هم مستقل‌تر شوند و بتوان آنها را به راحتی در بخش‌های مختلف اپلیکیشن استفاده کرد.
       استفاده از کتابخانه‌های third-party برای مدیریت reducerها
       کتابخانه‌های third-party مختلفی برای مدیریت reducerها وجود دارند. این کتابخانه‌ها می‌توانند به مقیاس‌پذیری اپلیکیشن کمک کنند.
       برخی از این کتابخانه‌ها عبارتند از:  <br />
           Redux: Redux یکی از محبوب‌ترین کتابخانه‌های مدیریت reducerها است.
           Redux Toolkit: Redux Toolkit یک کتابخانه‌ی Redux است که ابزارهای مختلفی برای مدیریت reducerها ارائه می‌دهد.
           Reselect: Reselect یک کتابخانه‌ی Redux است که برای انتخاب بخشی از <span>state</span> استفاده می‌شود.<br />
       در نهایت، باید توجه داشت که انتخاب تکنیک مناسب برای مقیاس‌پذیری اپلیکیشن به عوامل مختلفی بستگی دارد. این عوامل عبارتند از:
           ساختار اپلیکیشن
           حجم <span>state</span> اپلیکیشن
           نیازهای عملکردی اپلیکیشن
       

           </Container>
   

     <NoteReducer />
    </div>
  )
       }

     

    