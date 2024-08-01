import viteLogo from "/vite.svg";
import reactLogo from './../assets/react.svg'
import HeaderRoadmap from './RoadMap_React_Devloper.svg'
import Arrow from './Arrow.svg'
import Place from './place.svg'
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
        <img src={Arrow} alt="" className="w-8 m-auto pr-2 " />
        <div className="relative"><span className="absolute half">test</span><img src={Place} alt="" className="w-58 m-auto " /></div>
        </div>
    )
    
};
