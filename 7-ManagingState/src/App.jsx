import { useState } from "react";
import Container from './utils/container'
import Title from "./utils/Title";
import Example from "./utils/Example";
import CityQiuz from "./1-CityQiuz";
import CityQuiz2 from "./2-CityQiuz";
import FullName from "./3-fullName";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="w-full">
      <Title title="Managing State" />
      <Container Title={"Intermediate"}
       Children={<p>As your application grows, it helps to be more intentional about how your state is organized and how the 
       data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, 
       you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.</p>} />
      <Container Title={"Managing State"} 
      Children={<p>
          As your application grows, it helps to be more intentional about how
          your{" "}
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>{" "}
          is organized and how the data flows between your components. Redundant
          or duplicate{" "}
          <span className="text-primary underline underline-offset-4  decoration-double font-bold ">
            state
          </span>{" "}
          is a common source of bugs. In this chapter, you’ll learn how to
          structure your{" "}
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            {" "}
            state{" "}
          </span>{" "}
          well, how to keep your{" "}
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>{" "}
          update logic maintainable, and how to share{" "}
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>{" "}
          between distant components.
        </p>}/>
      <Container  Title={"مدیریت وضعیت"}
       Children={   <p className="rtl" style={{ direction: "rtl" }}>
          هرچقدر برنامه شما بزرگتر می‌شود، بهتر است که در مورد نحوه سازماندهی و
          چگونگی جریان داده{" "}
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>{" "}
          بین کامپوننت‌های شما دقت بیشتری داشته باشید. وضعیت{" "}
          <span className="text-primary underline underline-offset-4  decoration-wavy font-bold">
            state
          </span>{" "}
          تکراری یا تکراری منبعی رایج برای باگ‌هاست. در این فصل، یاد می‌گیرید که
          چگونه وضعیت{" "}
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>{" "}
          خود را به خوبی سازماندهی کنید، چگونه منطق به‌روزرسانی وضعیت{" "}
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>{" "}
          خود را قابل دفاع نگه دارید و چگونه وضعیت{" "}
          <span className="text-primary underline underline-offset-4  decoration-double font-bold">
            state
          </span>{" "}
          را بین کامپوننت‌های دوردست به اشتراک بگذارید
        </p>} />
      <Example exampleNumber={1} exampleName={"Example State"} />
      <Container Title={"Reacting to input with state"}
      Children={<p>
          With <span className="text-blue-400">React</span>, you won’t modify
          the UI from code directly. For example, you won’t write commands like
          “disable the button”, “enable the button”, “show the success message”,
          etc. Instead, you will describe the UI you want to see for the
          different visual states of your component{" "}
          <span>(“initial state”, “typing state”, “success state”),</span> and
          then trigger the state changes in response to user input. This is
          similar to how designers think about UI. Here is a quiz form built
          using React. Note how it uses the status state variable to determine
          whether to enable or disable the submit button, and whether to show
          the success message instead.{" "}
        </p>} />
      <Container
        Title=" واکنش به ورودی با حالت"
        Direction="rtl"
        Children={<p style={{ direction: "rtl" }}>
          با <span className="text-blue-400">React</span>، شما از کد به صورت
          مستقیم تغییرات را در رابط کاربری اعمال نخواهید کرد. به عنوان مثال،
          دستوراتی مانند "دکمه را غیرفعال کن"، "دکمه را فعال کن"، "پیام موفقیت
          را نشان بده" و غیره را نخواهید نوشت. به جای اینکه دستورات مستقیم
          بنویسید، شما توصیف خواهید کرد که رابط کاربری مورد نظر خود را برای
          وضعیت‌های مختلف دیداری کامپوننت خود{" "}
          <span>("وضعیت اولیه"، "وضعیت تایپ کردن"، "وضعیت موفقیت") </span>و سپس
          تغییرات وضعیت را در پاسخ به ورودی کاربر فراخوانی خواهید کرد. این مشابه
          به این است که طراحان به رابط کاربری فکر می‌کنند. در زیر، یک فرم آزمون
          به کمک React ساخته شده است. توجه داشته باشید که از متغیر وضعیت{" "}
          <span>(status)</span> برای تعیین اینکه آیا دکمه ارسال فعال یا غیرفعال
          باشد و آیا پیام موفقیت را نشان دهد یا خیر، استفاده شده است{" "}
        </p>}
      />
     
      <CityQiuz />
      <CityQuiz2 />
      <Container Title={"Choosing the state structure"} 
      Children={ `Structuring state well can make a difference between a component that
          is pleasant to modify and debug, and one that is a constant source of
          bugs. The most important principle is that state shouldn’t contain
          redundant or duplicated information. If there’s unnecessary state,
          it’s easy to forget to update it, and introduce bugs! Structuring
          state well can make a difference between a component that is pleasant
          to modify and debug, and one that is a constant source of bugs. The
          most important principle is that state shouldn’t contain redundant or
          duplicated information. If there’s unnecessary state, it’s easy to
          forget to update it, and introduce bugs!`} />
        <Container Direction={"rtl"} Title={"Choosing the state structure"} Children={ <p className="rtl" style={{ direction: "rtl" }}>
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
        </p>}  />
     
      <FullName />
    
    {/*   <Container  Direction="rtl" Title={"واکنش به ورودی با حالت"} Content={"سیبسدر زیر، یک فرم آزمون به کمک React ساخته شده است. توجه داشته باشید که از متغیر وضعیت (status) برای تعیین اینکه آیا دکمه ارسال فعال یا غیرفعال باشد و آیا پیام موفقیت را نشان دهد یا خیر، استفاده شده است ساختاردهی مناسب برای وضعیت (state) می‌تواند تفاوتی بین یک کامپوننتی که اصلاح و اشکال‌زدایی آسان است و یک کامپوننتی که منبع دائمی از باگ‌هاست، ایجاد کند. اصل مهم‌ترین این است که وضعیت باید شامل اطلاعات اضافی یا تکراری نباشد. اگر وضعیت غیرضروری باشد، آسان است که فراموش شود که آن را به‌روز کنیم و باگ‌ها را وارد کنیم! ساختاردهی مناسب برای وضعیت می‌تواند تفاوتی بین یک کامپوننتی که اصلاح و اشکال‌زدایی آسان است و یک کامپوننتی که منبع دائمی از باگ‌هاست، ایجاد کند. اصل مهم‌ترین این است که وضعیت باید شامل اطلاعات اضافی یا تکراری نباشد. اگر وضعیت غیرضروری باشد، آسان است که فراموش شود که آن را به‌روز کنیم و باگ‌ها را وارد کنیم!یل سیببیب  سییبس"} ></Container> */}
    </div>
  );
}

export default App;
