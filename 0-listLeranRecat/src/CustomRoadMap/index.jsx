import viteLogo from "/vite.svg";

import HeaderRoadmap from './RoadMap_React_Devloper.svg'
import Arrow from '../assets/Arrow.svg'
import Place from '../assets/place.svg'
import BubblePointer from '../assets/Bubble-Pointer--Streamline-Beveled-Scribbles.svg'
import ArrowDot from '../assets/Arrow-Pointy-Back-Zigzag--Streamline-Beveled-Scribbles.svg'
import PlaceCus from '../assets/svgviewer-react-output.jsx'
import Header from "./Header.jsx";
import CliTools from "./cliTools.jsx";
import Components from "./Components.jsx";
export default function  Index() {

    return(
        <div className="w-full flex flex-col gap-4 justify-center">
         <Header />
      <div className="flex  "> 
         <CliTools />     
      </div>
       <div className="grid grid-cols-3 grid-rows-3  align-middle"> 
          <Components />     
         </div>
              
       </div>
    )}