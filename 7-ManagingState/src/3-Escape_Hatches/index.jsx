 import AlertClickNumber from './alertClickNumber.jsx';
 import InputFocus from './FocusTheInput.jsx';
 import StopWatch from './stopWatch.jsx';
import WhatWorkUseRef from './whatWorkUseRef.jsx';
import ScrollIntoView from './ScrollIntoView.jsx';
import Title from '../utils/Title.jsx'
import Container from '../utils/container.jsx';
import DataText from './DataText.jsx';
import WhenReactAttachesTheRef from './ٌWhenReactAttachesTheRef.jsx';
export default function EscapeHatches({lang}) {

 
  
  
   return (
    
    <div className=' bg-primary-content/35'>
<Title id={"escape-hatches"} title="Escape Hatches" />
      
      <Container Title="Example of Escape Hatches">
           {lang ? (
      <>
          {DataText.EscapeHatches()}
        </>
      ) : (
      <>
            {DataText.EscapeHatchesFa()}
          
      </>
        
      )}
      </Container>
      <Container ColorText={'info'} ColorDivider={'success'} Title="Alert Click Number" >
     <AlertClickNumber/>
     </Container>
     <Container ColorText={'secondary'} ColorDivider={'primary'} Title="StopWatch">
    <StopWatch lang={lang}/> 
     </Container>
        {lang?(
<Container ColorText={'primary'} ColorDivider={'success'} Title="Differences between refs and state">
        {DataText.DifferencesBetweenRefsAndState()}
</Container>):
      (
        <Container ColorText={'primary'} ColorDivider={'success'} Title= "ref و state مقایسه بین">
      {DataText.DifferencesBetweenRefsAndStateFa()}
      </Container>
      )
        }
        
     <div className="divider text-white divider-success">When to use refs </div>
     {lang?(
      <Container>
      {DataText.WhenToUseRefs()}
      </Container>
     ):(
      DataText.WhenToUseRefsFa()
     )}
     <div  className="divider  divider-primary text-red-700">Manipulating the DOM with refs </div>
<InputFocus lang={lang} />
<div className="divider divider-start text-info divider-info">Example:<p className='under text-primary'> Scrolling to an element</p> </div>
<ScrollIntoView />
<WhatWorkUseRef />
<WhenReactAttachesTheRef lang={lang} />
<div className="divider divider-content text-info divider-info">Recap:<p className='under text-primary'>DOM with Refs </p> </div>
{lang?(
  <div>
<p className=""><span>1- </span>Refs are an escape hatch to hold onto values that aren’t used for rendering. You won’t need them often.</p>
<p className=""><span>2- </span>A ref is a plain JavaScript object with a single property called current, which you can read or set.</p>
<p className=""><span>3- </span>You can ask React to give you a ref by calling the useRef Hook.</p>
<p className=""><span>4- </span>Like state, refs let you retain information between re-renders of a component.</p>
<p className=""><span>5- </span>Unlike state, setting the ref’s current value does not trigger a re-render.</p>
<p className=""><span>6- </span>Don’t read or write ref.current during rendering. This makes your component hard to predict.</p>
</div>
):(
  <div dir='rtl'>
<p ><span>1.</span>Refs یک راه فرار برای نگه‌داری مقادیری است که برای رندر (نمایش) استفاده نمی‌شوند.</p>
<p ><span>2.</span>شما به طور معمول به آن‌ها نیاز زیادی پیدا نخواهید کرد.</p>
<p ><span>3.</span>یک Ref یک شیء ساده جاوااسکریپت با تنها یک ویژگی به نام `current` است.</p>
<p ><span>4.</span>شما می‌توانید مقدار این ویژگی را بخوانید یا آن را تنظیم کنید.</p>
<p ><span>5.</span>شما می‌توانید با فراخوانی قلاب `useRef` از React بخواهید که یک Ref به شما بدهد.</p>
<p ><span>6.</span>مانند State، Ref به شما اجازه می‌دهد اطلاعات را بین رندرهای مجدد یک کامپوننت حفظ کنید.</p>
<p ><span>7.</span>برخلاف State، تنظیم مقدار جاری Ref باعث راه‌اندازی مجدد رندر (بازنمایش) نمی‌شود.</p>
<p ><span>8.</span> خواندن یا نوشتن مقدار `ref.current` در طول رندر خودداری کنید. این کار باعث می‌شود پیش‌بینی رفتار کامپوننت شما دشوار شود.</p>

  </div>
)}
    </div>
   );
}