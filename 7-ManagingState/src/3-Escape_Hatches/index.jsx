 import AlertClickNumber from './alertClickNumber.jsx';
 import InputFocus from './FocusTheInput.jsx';
 import StopWatch from './stopWatch.jsx';
import WhatWorkUseRef from './whatWorkUseRef.jsx';
import ScrollIntoView from './ScrollIntoView.jsx';
import Title from '../utils/Title.jsx'
import Container from '../utils/Container';
import DataText from './DataText.jsx';
import WhenReactAttachesTheRef from './ٌWhenReactAttachesTheRef.jsx';
export default function EscapeHatches({lang}) {
   return (
    
    <div className=' bg-primary-content/35 py-12'>
<Title id={"escape-hatches"} title="Escape Hatches" />
      
     
           {lang ? (
             <Container Title="Example of Escape Hatches">
          {DataText.EscapeHatches()}
             </Container>
      ) : (
      <Container Title="مثال Escape Hatches">
            {DataText.EscapeHatchesFa()}
          
      </Container>
      )}
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
        
     {lang?(
      <Container Title="When to use refs" ColorText={"secondary"} ColorDivider={"primary"}>
      {DataText.WhenToUseRefs()}
      </Container>
     ):(
      <Container Title="مراحل استفاده از ref" ColorText={"secondary"} ColorDivider={"primary"}>
      {DataText.WhenToUseRefsFa()}
      </Container>
     )}
     <Container Title="Manipulating the DOM with refs" ColorText={"success"} ColorDivider={"info"}>
<InputFocus lang={lang} />
 </Container>
<Container Title={"Example: Scrolling to an element"}>
  <ScrollIntoView />
</Container>
<Container Title="What work with refs" ColorText={"primary"} ColorDivider={"secondary"}>
<WhatWorkUseRef />
</Container>
<Container Title="When React attaches the ref" ColorText={"secondary"} ColorDivider={"success"}>
<WhenReactAttachesTheRef lang={lang} />
</Container>
{lang?(
 <Container Title={"Recap: DOM with refs"}>
  {DataText.RecapDomWithRefs()}
 </Container>
):(
<Container Title={"Recap: DOM with refs"}>
  {DataText.RecapDomWithRefsFa()}
</Container>
)}
    </div>
   );
}