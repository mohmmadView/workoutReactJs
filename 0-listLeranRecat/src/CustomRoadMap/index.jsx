import viteLogo from "/vite.svg";
import reactLogo from './../assets/react.svg'
import HeaderRoadmap from './RoadMap_React_Devloper.svg'
import Arrow from '../assets/Arrow.svg'
import Place from '../assets/place.svg'
import BubblePointer from '../assets/Bubble-Pointer--Streamline-Beveled-Scribbles.svg'
import ArrowDot from '../assets/Arrow-Dashed-Line-Head-Straight-Long--Streamline-Beveled-Scribbles.svg'
import PlaceCus from '../assets/svgviewer-react-output.jsx'
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
      <div className="flex  "> 
         <img src={Arrow} alt="" className="w-8 h-32 m-auto pr-2 " />
      {/* <img src={ArrowDot} alt="" className="w-32 absolute right-[26%] top-[40%] rotate-12 max-lg:right-[20%] max-md:right-[15%]" /> */}
  {/* <PlacCus className='w-48 absolute right-0 flex ' text={`Vite`}/> */}
      </div>
            <div className="flex flex-col  ">
                  <div className="group/cli m-auto">
                      <PlaceCus className={"w-52 self-center font-bold fill-yellow-500 "} text={`Cli TOOLS`} />
                      <div   alt="" className="w-full font-bold h-auto p-4  justify-center  hidden  group-hover/cli:block" >
                        <a href="https://vitejs.dev" className="text-lg font-bold text-orange-400">Vite</a> <br/>
                        <a href="https://react.dev" className="text-lg font-bold text-blue-400">Create React app</a>
                       </div>
                  </div>
            </div>
              <img src={Arrow} alt="" className="w-8 h-32 m-auto pr-2 " />
             <div className="flex justify-center"> 
  <div >
    
                   <PlaceCus className={"w-52  ml-8 font-bold fill-yellow-500 "} text={`Components`} />
                   
  </div>
                 <img src={ArrowDot} alt="" className="w-32 ml-8 rotate-45" />
               
               </div>
       </div>
    )}