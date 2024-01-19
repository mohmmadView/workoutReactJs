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
      escapeValue: true, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations..
           description: {
            part1:`
              <p>
    
        </p>
            
            `,
          }
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
          }
        }
      }
    }
  );

export default i18n;
