import { createContext, createElement } from "react"
import { createRoot } from "react-dom/client"
import React from 'react';
import imgRoadMap from "./Screenshot_20230419_183009.png"
import { BeakerIcon,AcademicCapIcon,ArchiveBoxIcon,ArrowTrendingDownIcon } from '@heroicons/react/24/outline'

function RoadMap(){

return(
<div>
<img className="w-full h-full" src={imgRoadMap}/>
<a href="https://roadmap.sh/react">RoadMap.sh</a>

</div>

)

}

function Lesson(props){


    return(
     
      <section className="font-serif">
      <div className="flex h-5">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
</svg>
 <BeakerIcon className="w-5" />
<AcademicCapIcon />
<ArchiveBoxIcon />
<ArrowTrendingDownIcon />


</div>
      <button className="bg-yellow-900 text-white  w-full mb-2" onClick={(event)=>{ console.log(event.currentTarget.nextElementSibling.classList.toggle("hidden")) }}>
      <h1  className='pb-4 bg-stone-900/70 inline-block px-8 border rounded-xl '>{props.subject}</h1>
      </button>
        <pre id="title" className="  text-white font-bold hidden text-lg bg-gray-600/90 p-6 m-2"><code className="text-right">{props.title}</code></pre> 
</section>
    )


  }
    function IndexLesson(props){
             
    return(
      <div id="indexReact" className="w-full m-5 ">
      <RoadMap />
         <h1 className=""></h1>
          <Lesson title="1.install node 2-terminal in visCode type  npm create vite  "
            subject="0-create React"
        />
       <h1 className=""></h1>
        <Lesson title="This funny tag syntax is neither a string nor HTML.
        It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
        JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started." 
            subject="1-jsx"
        />
<Lesson subject="2-components" title="Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
Function and Class Components The simplest way to define a component is to write a JavaScript function:
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
"
/>
<Lesson subject="3-Props" title="This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
You can also use an ES6 class to define a component:
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
"/>
<Lesson subject="4-State"  title="در React برای ساختن کامپوننت های قابل reuse (استفاده مجدد)از class و function استفاده می شه خصوصیت state یک خصوصیت خاص است؛ از این جهت که اگر تغییری در آن ایجاد شود react تمام DOM را دوباره render می کند. state خاص است تو پروژه های React ای قطعا به دفعات زیاد از state استفاده می کنیم حالا چه از setState در کلاس یا useState در function. این مقاله هدفش گوشزد کردن نکاتی در خصوص بروز رسانی state هست که رعایت کردنش واقعا اهمیت داره 
نکته: هیچ وقت state رو بصورت مستقیم update نکنید حتما از setState و یا useState استفاده کنید.

this.state.firstName = Ali //اشتباه

this.setState({firstName:Ali}) //صحیح

"/>
</div>
    )
  
    }
    export default IndexLesson    