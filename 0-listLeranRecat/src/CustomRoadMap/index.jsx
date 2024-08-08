import viteLogo from "/vite.svg";

import HeaderRoadmap from './RoadMap_React_Devloper.svg'
import Arrow from '../assets/Arrow.svg'
import Place from '../assets/place.svg'
import BubblePointer from '../assets/Bubble-Pointer--Streamline-Beveled-Scribbles.svg'
import ArrowDot from '../assets/Arrow-Dashed-Line-Head-Straight-Long--Streamline-Beveled-Scribbles.svg'
import PlaceCus from '../assets/svgviewer-react-output.jsx'
import Header from "./Header.jsx";

export default function  Index() {

    return(
        <div className="w-full flex flex-col gap-4 justify-center">
       <Header />
      <div className="flex  "> 
         <img src={Arrow} alt="" className="w-8 h-32 m-auto pr-2 " />
     
      </div>
            <div className="flex  ">
                  <div className="group/cli m-auto">
                      <PlaceCus className={"w-52 self-center font-bold fill-yellow-500 "} text={`Cli TOOLS`} />
                      <div   alt="" className="w-full font-bold h-auto p-4  justify-center  hidden  group-hover/cli:block" >
                        <a href="https://vitejs.dev" className="text-lg font-bold text-orange-400">Vite</a> <br/>
                        <a href="https://react.dev" className="text-lg font-bold text-blue-400">Create React app</a>
                       </div>
                  </div>
            </div>
             <div className="grid grid-cols-3  align-middle"> <img  alt="" className=" m-auto " />
             <img src={Arrow} alt="" className=" m-auto " />
             <img  alt="" className="  " />
             
             </div>
             
             <div className="flex  relative"> 
  <div className="group/Components m-auto ">
    
                   <PlaceCus className={"w-52   font-bold fill-yellow-500 "} text={`Components`} />
                <div   alt="" className="w-1/2 bg-slate-500 absolute font-bold h-auto hidden p-4 left-1/4 top-24 m-auto group-hover/Components:block" >
                     <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
Function and Class Components The simplest way to define a component is to write a JavaScript function: </p>
                   
                  </div>
    </div>
     <img src={ArrowDot} alt="" className="w-32 h-24 bottom-auto absolute left-[65%]  " />
              
       </div>
       </div>
    )}