
import imgReactContext from "../assets/Screenshot-2024-01-02-124809.png";
import Highlighter from "react-highlight-words";
const WhatIsReactContext = () => {
     return (
        <Highlighter
        searchWords={["React Context","React","Context","props","component"]} 
         highlightClassName="  bg-base-300 font-bold"
         unhighlightClassName="text-white"
         textToHighlight=" React Context provides us a way to pass data down through the
          component tree to where we need it without having to manually pass
          props at every single level. It acts as a global storage space for all
          your components in your project."
        />
      );
};
const WhatIsReactContextFa = () => { 
    return (
        <div style={{direction: "rtl"}}>
             <Highlighter
             style={{direction: "rtl"}}
            searchWords={["React Context","React","Context","props","component","کامپوننت"]} 
             highlightClassName="  bg-base-300 font-bold"
             unhighlightClassName="text-white"
             textToHighlight=" React Context راهی را در اختیار ما قرار می دهد تا داده ها را از طریق
             درخت کامپوننت به جایی که به آن نیاز داریم منتقل کنیم، بدون اینکه نیازی
             به ارسال دستی props در هر سطح باشد. این به عنوان یک فضای ذخیره سازی
             جهانی برای تمام اجزای شما در پروژه شما عمل می کند."
            />
        </div>
      );
};
const ReactContextDifferent = () => {
 return (
      <>
             <Highlighter
             style={{direction: "rtl"}}
            searchWords={["React Context","React","Context","prop","props","component","کامپوننت"]} 
             highlightClassName="  bg-base-300 font-bold"
             unhighlightClassName="text-white"
             textToHighlight="
            In prop threading, data is passed down from the parent component to
            the child component. If a child of that component needs the same prop,
            it is passed down until the required component gets the data. While
            simple, it can become complex when traversing deeply nested
            structures, and this results in prop drilling. In contrast, React
            Context allows data to be passed from the parent component to any
            nested component that requires it, simplifying the process."/>

           <img
            src={imgReactContext}
            className="w-full h-full mt-4"
            alt="React Context"
          />
      </>
      )};
const ReactContextDifferentFa = () => {
    return (
          <div style={{direction: "rtl"}}>

             <Highlighter
             style={{direction: "rtl"}}
            searchWords={["React Context","React","Context","prop","props","component","کامپوننت","threading"]} 
             highlightClassName="  bg-base-300 font-bold"
             unhighlightClassName="text-white"
             textToHighlight="
            در prop threading، داده ها از مولفه والد به جزء فرزند منتقل می شود.
            اگر فرزند آن مؤلفه به همان پایه نیاز داشته باشد، تا زمانی که مؤلفه
            مورد نیاز داده را دریافت کند، ارسال می شود. در حالی که ساده است، می
            تواند در هنگام عبور از ساختارهای تو در تو پیچیده شود و این منجر به
            حفاری پایه می شود. در مقابل، React Context اجازه می‌دهد تا داده‌ها را
            از مؤلفه والد به هر مؤلفه تودرتویی که به آن نیاز دارد منتقل شود و
            فرآیند را ساده‌تر کند.."/>
             <img
            src={imgReactContext}
            className="w-full h-full mt-4"
            alt="React Context"
          />
          </div>
          
      );
};
const PassingDataDeeplyWithContext = () => {
     return (
             <Highlighter
            searchWords={["React Context","React","Context","prop","props","component","کامپوننت"]} 
             highlightClassName="  bg-base-300 font-bold"
             unhighlightClassName="text-white"
             textToHighlight="
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
          that through context."/>
        
      );
    
};
const PassingDataDeeplyWithContextFa = () => {
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
};
export default {
    WhatIsReactContext,
    WhatIsReactContextFa,
    ReactContextDifferent,
    ReactContextDifferentFa,
    PassingDataDeeplyWithContext,
    PassingDataDeeplyWithContextFa
}