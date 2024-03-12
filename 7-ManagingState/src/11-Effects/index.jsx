import DataText from '../TasksContext'
export default function Effects(lang) {

    return (
<div>
    
            {lang.lang?(
            <div className="">
                 {DataText[20].Effect()}
            </div>):(
               <>
                    
                    {DataText[21].EffectFa()}
               </>
            )}

        <div className="divider text-primary divider-info">What are Effects and how are they different from events?</div>
            
<div dir='rtl' className="prose max-w-none">

<h2>Effect در React چگونه کار می کند؟</h2>

<p>
  **Effect** در React، یک تابع است که به شما امکان می‌دهد کدهایی را بعد از رندر یا به‌روزرسانی کامپوننت اجرا کنید. این کد می‌تواند شامل موارد زیر باشد:
</p>

<ul>
  <li>**دستکاری DOM:** مانند تغییر متن، اضافه یا حذف عناصر، و اعمال استایل</li>
  <li>**برقراری ارتباط با API:** مانند دریافت داده از یک سرور یا ارسال داده به یک پایگاه داده</li>
  <li>**انجام محاسبات:** مانند مرتب کردن لیست یا فیلتر کردن داده ها</li>
  <li>**تنظیم تایمر:** مانند اجرای یک تابع بعد از گذشت زمان مشخص</li>
</ul>

<h3>تفاوت Effect با <span class="text-yellow-500">Events</span> (رویدادها):</h3>

<ul>
  <li>**زمان اجرا:**</li>
    <ul>
      <li><span class="text-yellow-500">Events</span> (رویدادها) در پاسخ به اقدامات کاربر مانند کلیک، موس‌اور، یا فشردن کلید اجرا می‌شوند.</li>
      <li>Effect ها بعد از رندر یا به‌روزرسانی کامپوننت اجرا می‌شوند، چه کاربری با آن تعامل داشته باشد یا نه.</li>
    </ul>
  <li>**هدف:**</li>
    <ul>
      <li><span class="text-yellow-500">Events</span> (رویدادها) برای مدیریت تعامل کاربر با کامپوننت استفاده می‌شوند.</li>
      <li>Effect ها برای همگام سازی کامپوننت با سیستم های خارجی یا انجام وظایف جانبی مانند محاسبات یا تایمرها استفاده می‌شوند.</li>
    </ul>
  <li>**دامنه:**</li>
    <ul>
      <li><span class="text-yellow-500">Events</span> (رویدادها) به یک کامپوننت خاص محدود می‌شوند.</li>
      <li>Effect ها می‌توانند به DOM، API ها، یا سایر سیستم های خارجی دسترسی داشته باشند.</li>
    </ul>
</ul>

<h3>مثال:</h3>

<p>فرض کنید می‌خواهید یک کامپوننت شمارنده داشته باشید که هر ثانیه به روز می‌شود.</p>

**با استفاده از <span class="text-yellow-500">Events</span> (رویدادها):**

* می‌توانید از یک رویداد `setInterval` برای افزایش شمارنده هر ثانیه استفاده کنید.
* مشکل این روش این است که اگر کاربر از تب خارج شود یا کامپوننت پنهان شود، شمارنده همچنان به افزایش خود ادامه می‌دهد.

**با استفاده از Effect:**

* می‌توانید از یک Effect برای افزایش شمارنده هر ثانیه استفاده کنید.
* Effect فقط زمانی اجرا می‌شود که کامپوننت قابل مشاهده باشد.
* اگر کاربر از تب خارج شود یا کامپوننت پنهان شود، Effect متوقف می‌شود.

**در اینجا یک مثال از کد برای استفاده از Effect برای افزایش شمارنده هر ثانیه آورده شده است:**
<br />
<span className='flex  justify-end'>
    <code dir='ltr' style={{ direction: "ltr" }} className=' whitespace-pre-line '>
        {`
        function Counter() {
          const [count, setCount] = useState(0);
        
          useEffect(() => {
            const interval = setInterval(() => {
              setCount(prevCount => prevCount + 1);
            }, 1000);
        
            return () => clearInterval(interval);
          }, []);
        
          return (
            <div>
              <h1>Count: {count}</h1>
            </div>
          );
        }
        
        `}
    </code>
</span>
</div>
</div>
    )
}