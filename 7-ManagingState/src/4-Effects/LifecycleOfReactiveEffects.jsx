import DataText from './DataText';
import Code from '../utils/Prism';
export default function LifecycleOfReactiveEffects(lang){

    return (
        <div>
            {lang.lang ? (
                <>{DataText.LifecycleOfReactiveEffects()}</>
            ) : (
                <>{DataText.LifecycleOfReactiveEffectsFa()}</>
            )}
             <Code more={false} widthIN="w-full h-auto"  language={"js"} code={`
const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId]);
  // ...
}`} />
{lang.lang ? (
                <p className='my-4'>Your Effect’s body specifies how to start synchronizing:</p>
            ) : (
                <p className='my-4 rtl'>بدنه <span>Effect</span> شما نحوه شروع همگام سازی را مشخص می کند:</p>
            )}
                   <Code more={false} widthIN="w-full h-auto"  language={"js"} code={`
const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  // ...
}`} />
{lang.lang ? (
                <p className='my-4'>The cleanup function returned by your Effect specifies how to stop synchronizing:

</p>
            ) : (
                <p className='my-4 rtl'>تابع پاکسازی که توسط افکت شما برگردانده شده است نحوه توقف همگام سازی را مشخص می کند:</p>
            )}
                   <Code more={false} widthIN="w-full h-auto"  language={"js"} code={`
 return () => {
      connection.disconnect();
    };
}`} />
{lang.lang ? (
                <p className='my-4'>Intuitively, you might think that React would start synchronizing when your component mounts and stop synchronizing when your component unmounts. However, this is not the end of the story! Sometimes, it may also be necessary to start and stop synchronizing multiple times while the component remains mounted.

                Let’s look at why this is necessary, when it happens, and how you can control this behavior.
                
                </p>
            ) : (
                <p className='my-4 rtl'>
به طور شهودی، ممکن است فکر کنید که React زمانی که کامپوننت شما نصب می‌شود شروع به همگام‌سازی می‌کند و زمانی که کامپوننت شما جدا می‌شود، همگام‌سازی را متوقف می‌کند. با این حال، این پایان ماجرا نیست! گاهی اوقات، ممکن است لازم باشد چندین بار همگام سازی را شروع یا متوقف کنید، در حالی که قطعه همچنان نصب شده است.  بیایید بررسی کنیم که چرا این امر ضروری است، چه زمانی اتفاق می افتد، و چگونه می توانید این رفتار را کنترل کنید.

                </p>
            )}
        </div>
    )
 }