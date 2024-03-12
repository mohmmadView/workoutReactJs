import { useRef } from "react";
import { flushSync } from 'react-dom';
import { useEffect } from 'react';
import { element } from "prop-types";
export default function WordColorAuto() {
 let wordAllRef = useRef(null);
let TokenList  = [];
   useEffect(() => {
        let ListText = wordAllRef.current.innerHTML;
                console.log(ListText.split(RegExp(["a-zA-Z"])));

   })

return(
    <div ref={wordAllRef} className="wAll" >
       <ul>
       <span>Events (رویدادها)</span> 
        <span className="text-secondary">Escape Hatches </span>مکانیزم هایی هستند که به شما امکان می دهند از State یک مؤلفه به طور موقت خارج شوید. این می تواند در مواقعی مفید باشد که می خواهید به طور موقت State را تغییر دهید بدون اینکه بر State اصلی مؤلفه تأثیر بگذارد. <br /> 
<span> تعریف دیگه از Escape Hatches</span><br />
در برخی موارد، ممکن است لازم باشد از State خارج شوید و به طور مستقیم DOM را دستکاری کنید. برای این کار می توانید از Escape Hatches استفاده کنید.
<h1 className="text-secondary text-3xl p-2">Referencing values with refs</h1> <br />
<p>وقتی می‌خواهید یک مؤلفه اطلاعاتی را «به خاطر بسپارد»، اما نمی‌خواهید این اطلاعات رندرهای جدیدی را ایجاد کند، می‌توانید از یک ref استفاده کنید:</p>
<p style={{direction:"ltr"}} className='p-2  bg-secondary-content'><span className='text-yellow-500'>const</span><span className='text-blue-500'> ref</span> =<span className='text-green-500'> useRef(0)</span>;</p>
<p>مانند حالت، ref ها توسط React بین رندرهای مجدد حفظ می شوند. با این حال، تنظیم وضعیت یک مؤلفه را دوباره ارائه می کند. تغییر یک رف انجام نمی شود! شما می توانید از طریق ویژگی ref.current به مقدار فعلی آن ref دسترسی پیدا کنید.</p>
       
  <li>**زمان اجرا:**</li>
    <ul>
      <li><span className="text-yellow-500">Events</span> (رویدادها) در پاسخ به اقدامات کاربر مانند کلیک، موس‌اور، یا فشردن کلید اجرا می‌شوند.</li>
      <li>Effect ها بعد از رندر یا به‌روزرسانی کامپوننت اجرا می‌شوند، چه کاربری با آن تعامل داشته باشد یا نه.</li>
    </ul>
  <li>**هدف:**</li>
    <ul>
      <li><span className="text-yellow-500">Events</span> (رویدادها) برای مدیریت تعامل کاربر با کامپوننت استفاده می‌شوند.</li>
      <li>Effect ها برای همگام سازی کامپوننت با سیستم های خارجی یا انجام وظایف جانبی مانند محاسبات یا تایمرها استفاده می‌شوند.</li>
    </ul>
  <li>**دامنه:**</li>
    <ul>
      <li><span className="text-yellow-500">Events</span> (رویدادها) به یک کامپوننت خاص محدود می‌شوند.</li>
      <li>Effect ها می‌توانند به DOM، API ها، یا سایر سیستم های خارجی دسترسی داشته باشند.</li>
    </ul>
</ul>
       <button  className="btn btn-primary">color word</button>

    </div>

)


}
