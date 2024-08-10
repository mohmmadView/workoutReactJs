import viteLogo from "/vite.svg";

import HeaderRoadmap from './RoadMap_React_Devloper.svg'
import Arrow from '../assets/Arrow.svg'
import Place from '../assets/place.svg'
import BubblePointer from '../assets/Bubble-Pointer--Streamline-Beveled-Scribbles.svg'
import ArrowDot from '../assets/Arrow-Pointy-Back-Zigzag--Streamline-Beveled-Scribbles.svg'
import PlaceCus from '../assets/svgviewer-react-output.jsx'
import Header from "./Header.jsx";
import CliTools from "./cliTools.jsx";

export default function  Index() {

    return(
        <div className="w-full flex flex-col gap-4 justify-center">
       <Header />
      <div className="flex  "> 
        <CliTools />     
      </div>
            {/* <div className="flex  ">
                 
            </div> */}
             <div className="grid grid-cols-3 grid-rows-2  align-middle"> 
                <div></div>
                 <div className="relative"> 
                      {/* <div className="w-1/3"></div>  */}
                     <img src={Arrow} alt="" className="h-28  m-auto" />
                     {/* <img src={ArrowDot} alt="" className=" h-24  w-36 absolute top-10 -right-14" /> */}
                     <svg className="h-24 w-36 fill-white lg:h-36 lg:w-48 lg:top lg:-right-14 absolute top-16  -right-14" viewBox="0 0 102 102" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
 <g class="layer">
  <title>Layer 1</title>
  <path  clip-rule="evenodd" d="m91.35,7.17c-2.11,1.21 -14.93,4.1 -18.54,4.19c-3.78,0.08 -3.69,0.46 0.78,4.62c3.64,3.35 3.61,2.71 0.09,7.53c-6.35,8.69 -25.79,38.18 -26.28,37.31c-0.03,-0.03 -6.9,-17.9 -6.9,-17.93c-2.31,-6.3 -7.85,3.43 -11.06,8.05c-3.9,5.66 -12.76,18.25 -15.82,22.44c-3.29,4.54 -9.19,13.46 -9.94,15.08c-4.07,8.72 2.08,5.54 3.38,4.27c24.23,-24.06 26.05,-26.05 26.16,-25.93c0.06,0.06 6.41,18.31 7.19,20.24c2,5.02 5.12,4.79 7.66,0.72c5.83,-9.35 40.57,-59.89 40.71,-59.86c0.15,0.03 1.71,1.24 3.5,2.69c3.78,3.06 8.95,6 8.11,1.24c-0.89,-5.05 -0.75,-2.34 -4.1,-22.03c-0.81,-4.42 -4.85,-2.69 -4.94,-2.63zm2.75,17.9c0.77,3.67 0.75,3.93 -0.38,2.86c-3.75,-3.52 -9.85,-5.98 -8.92,-3.58c0.08,0.23 0.4,1.53 0.03,2.02c0,0 -40.43,57.9 -40.58,57.9c-0.08,0 -0.89,-2.28 -1.81,-5.11c-6.62,-20.13 -7.45,-20.62 -18.25,-10.14c-3.32,3.24 -5.92,5.69 -5.81,5.49c0.12,-0.2 13.43,-18.74 15.42,-21.63c1.99,-2.89 3.7,-5.26 3.78,-5.26c0.32,0 5.12,13.6 6.56,17.5c0.92,2.52 4.82,2.61 5.31,2c0.49,-0.61 25.67,-36.94 32,-46.32c0.89,-1.3 1.41,-2.02 -0.52,-2.89c-1.79,-0.81 -4.8,-3.72 -3.96,-3.9c4.59,-0.89 14.21,-3.2 15.02,-3.32c0.29,-0.06 1.41,11.06 2.11,14.38z"  fill-rule="evenodd" id="svg_1" stroke="#8638e0"/>
 </g>
</svg>
                 </div>
                   {/* <PlaceCus className={"w-5/6 text-sm  font-bold fill-yellow-500  mx-auto"} text={`Components`} /> */}
                   <ul className="menu row-span-2 text-white ml-10 bg-yellow-400 rounded-box w-5/6 gap-2">
                   <h1 className="text-center  text-black  font-bold text-2xl">Functional Components</h1>
                     <li className="border rounded-md bg-red-600"><a className="text-white">JSX</a></li>
                     <li className="border rounded-md bg-blue-600"> <a className="text-white" >Props vs State</a></li>
                     <li className="border rounded-md bg-green-600"> <a className="text-white">Conditional Rendering</a></li>
                  </ul>
           
            <div></div>
  <div className="group/Components m-auto  ">
    
                   <PlaceCus className={"w-44   font-bold fill-yellow-500 "} text={`Components`} />
                <div   alt="" className="w-1/2 bg-slate-500 absolute font-bold h-auto  p-4 left-1/4  hidden m-auto group-hover/Components:block" >
                     <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
Function and Class Components The simplest way to define a component is to write a JavaScript function: </p>
                   
                  </div>
    </div>
    </div>
              
       </div>
    )}