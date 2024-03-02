import { useEffect } from "react";
import Prism from "prismjs";
export default function CardImport() {
  useEffect(() => {
    Prism.highlightAll(Prism.highlight);
  }, []);
  const createContext = [
    {
      id: 1,
      name: "createContext",
      code: `
    (alias) function createContext<T>(defaultValue: T): Context<T>
    `,
      about: ` defaultValue: مقداری که می‌خواهید در زمانی که هیچ ارائه‌دهنده زمینه منطبقی در درخت بالای مؤلفه‌ای که متن را می‌خواند وجود ندارد، داشته باشد. اگر مقدار پیش فرض معناداری ندارید، null را مشخص کنید. مقدار پیش‌فرض به‌عنوان «آخرین راه حل» در نظر گرفته می‌شود. ثابت است و هرگز در طول زمان تغییر نمی کند.`,
    },
    {
      id: 2,
      name: "useTasksDispatch",
      code: `
    (alias) function useTasksDispatch(): null
    import useTasksDispatch
    `,
      about: ` ارائه دهنده متن در درخت بالای مؤلفه ای که متن را می خواند. اگر مقدار پیش فرض معناداری ندارید، null را مشخص کنید. مقدار پیش‌فرض به‌عنوان «آخرین راه حل» در نظر گرفته می‌شود. ثابت است و هرگز در طول زمان تغییر نمی کند. `,
    },
    {
      id: 3,
      name: "useReducer",
      code: `
  (alias) function useReducer<R extends ReducerWithoutAction<any>, I>(reducer: R, initializerArg: I, initializer: (arg: I) => ReducerStateWithoutAction<R>): [ReducerStateWithoutAction<R>, DispatchWithoutAction] (+4 overloads)
    `,
      about: `ارائه دهنده متن در درخت بالای مؤلفه ای که متن را می خواند. اگر مقدار پیش فرض معناداری ندارید، null را مشخص کنید. مقدار پیش‌فرض به‌عنوان «آخرین راه حل» در نظر گرفته می‌شود. ثابت است و هرگز در طول زمان تغییر نمی کند.import useReducer
جایگزینی برای useState.
وقتی منطق حالت پیچیده ای دارید که شامل چندین مقدار فرعی است، useReducer معمولاً به useState ترجیح داده می شود. همچنین به شما امکان می‌دهد عملکرد اجزایی را که به‌روزرسانی‌های عمیق را راه‌اندازی می‌کنند، بهینه کنید، زیرا می‌توانید به‌جای تماس‌های برگشتی، ارسال را پایین بیاورید.  `,
    },
    {
      id: 4,
      name: "useContext",
      code: `
    (alias) function useContext<T>(context: Context<T>): T

    `,
      about: ` ارائه دهنده متن در درخت بالای مؤلفه ای که متن را می خواند. اگر مقدار پیش فرض معناداری ندارید، null را مشخص کنید. مقدار پیش‌فرض به‌عنوان «آخرین راه حل» در نظر گرفته می‌شود. ثابت است و هرگز در طول زمان تغییر نمی کند.import useReducer
جایگزینی برای useState.
وقتی منطق حالت پیچیده ای دارید که شامل چندین مقدار فرعی است، useReducer معمولاً به useState ترجیح داده می شود. همچنین به شما این امکان را می‌دهد تا عملکرد اجزایی را که به‌روزرسانی‌های عمیق را راه‌اندازی می‌کنند، بهینه کنید، زیرا می‌توانید به‌جای تماس‌های برگشتی، ارسال را پایین بیاورید. یک شی زمینه (مقدار بازگشتی از React.createContext) را می‌پذیرد و مقدار متن فعلی را برمی‌گرداند، همانطور که توسط نزدیک‌ترین ارائه‌دهنده زمینه برای ارائه شده است. زمینه داده شده

`,
    },
    {
      id: 5,
      name: "useReducer",
      code: `
  (alias) function useReducer<R extends ReducerWithoutAction<any>, I>(reducer: R, initializerArg: I, initializer: (arg: I) => ReducerStateWithoutAction<R>): [ReducerStateWithoutAction<R>, DispatchWithoutAction] (+4 overloads)
    `,
      about: ` ارائه دهنده متن در درخت بالای مؤلفه ای که متن را می خواند. اگر مقدار پیش فرض معناداری ندارید، null را مشخص کنید. مقدار پیش‌فرض به‌عنوان «آخرین راه حل» در نظر گرفته می‌شود. ثابت است و هرگز در طول زمان تغییر نمی کند.import useReducer
جایگزینی برای useState.
وقتی منطق حالت پیچیده ای دارید که شامل چندین مقدار فرعی است، useReducer معمولاً به useState ترجیح داده می شود. همچنین به شما امکان می‌دهد عملکرد اجزایی را که به‌روزرسانی‌های عمیق را راه‌اندازی می‌کنند، بهینه کنید، زیرا می‌توانید به‌جای تماس‌های برگشتی، ارسال را پایین بیاورید. .`,
    },
    {
      id: 6,
      name: "useEffect",
      code: `
      (alias) useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void
      
      `,
      about: `
      تابعی را می پذیرد که حاوی کد ضروری و احتمالاً مؤثر باشد.
      @param effect - تابع ضروری است که می تواند یک تابع پاکسازی را برگرداند
      @param deps - در صورت وجود، افکت تنها در صورتی فعال می شود که مقادیر موجود در لیست تغییر کنند.
      نسخه @ — 16.8.0
      `,
    },{
      id:7,
      name:"useRef",
      code:`
     (alias) function useRef<T>(initialValue: T): MutableRefObject<T> (+2 overloads)
      `,
      about:`
      useRef یک شی ref قابل تغییر را برمی گرداند که ویژگی .current آن به آرگومان ارسال شده (initialValue) مقداردهی اولیه می شود. شیء برگشتی برای تمام طول عمر جزء باقی می ماند.
      توجه داشته باشید که useRef() برای مواردی بیشتر از ویژگی ref مفید است. این برای حفظ هر مقدار قابل تغییر در اطراف مشابه نحوه استفاده از فیلدهای نمونه در کلاس ها مفید است.
      نسخه @ — 16.8.0
      `
    }
  ];
  return (
    <>
      {createContext.map(item => (
        <div
          key={item.id}
          className="collapse collapse-arrow bg-secondary-content">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <div className="badge badge-warning text-center badge-lg text-2xl">
              {item.name}
            </div>
          </div>
          <div className="collapse-content flex flex-col">
            <code className={`language-${"js"} bg-black`}>{`
           ${item.code}
            `}</code>
            <p style={{direction:"rtl"}} className="p-2 m-2 border border-primary bg-primary-content">{item.about}</p>
          </div>
        </div>
      ))}
    </>
  );
}
