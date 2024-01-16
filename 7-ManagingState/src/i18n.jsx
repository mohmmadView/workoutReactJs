import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";


i18n
    .use(LanguageDetector)
    // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(initReactI18next)
    // pass the i18n instance to react-i18next.
   // init i18next 
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations..
           description: {
            part1:`
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
            
            `,
            part2: 'Learn React',
            part3: function(){ return(<div> Intermediate <a className="text-red">Love</a> </div> )}
          }
        }
      },
      fa: {
        translation: {
          description: {
            part1:`<p style={{ direction: "rtl" }}>
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
            باشد و آیا پیام موفقیت را نشان دهد یا خیر، استفاده شده است</p>`,
            part2: 'درس ریکت',
            part3: 'مدیریت وضعیت<a class="text-red">عشق</a>'
          }
        }
      }
    }
  });

export default i18n;
