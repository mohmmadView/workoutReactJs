import viteLogo from "/vite.svg";
import reactLogo from './../assets/react.svg'
import HeaderRoadmap from './RoadMap_React_Devloper.svg'
import Arrow from '../assets/Arrow.svg'
import Place from '../assets/place.svg'
import BubblePointer from '../assets/Bubble-Pointer--Streamline-Beveled-Scribbles.svg'
import ArrowDot from '../assets/Arrow-Dashed-Line-Head-Straight-Long--Streamline-Beveled-Scribbles.svg'
export default function  Index() {

    return(
        <div className="w-full flex flex-col gap-4 justify-center">
       {/* <img src={HeaderRoadmap} alt="" className="" /> */}
       <h1 className="text-5xl  text-blue-400 font-['Cascadia']">React</h1>
       <div className=" flex justify-center  gap-6" >
        <h2 className="text-4xl text-red-500 font-['Cascadia']">RoadMap</h2>
        <img src={reactLogo} alt="" className="w-20   " />
        <h2  className="text-4xl text-green-500 font-['Virgil']">Developer</h2>
       </div>
      <div className="flex relative "> 
         <img src={Arrow} alt="" className="w-8 m-auto pr-2" />
      <img src={ArrowDot} alt="" className="w-36 absolute right-[29%] top-[30%]  max-lg:right-[20%] max-md:right-[15%]" />

      </div>
           <img src={Place} className="group w-52 m-auto   hover:w-64"  />
       {/* <div className=" flex   ">
                <div className="group relative  w-full">
                    <img  src={BubblePointer} alt="" className="w-44 absolute hidden right-1/4 bottom-full pr-2 group-hover:block" />
    
             
                </div>
            
       </div> */}
        </div>
    )
    
};
