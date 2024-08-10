import Arrow from '../assets/Arrow.svg'
import PlaceCus from '../assets/svgviewer-react-output.jsx'
export default function cliTools() {
    return (
        
        <div className="group/cli m-auto">
            <img src={Arrow} alt="" className="w-8 h-28 m-auto pr-2 " />

            <PlaceCus className={"w-44 self-center font-bold fill-yellow-500 "} text={`Cli TOOLS`} />
            <div   alt="" className="w-full font-bold h-auto p-4  justify-center  hidden  group-hover/cli:block" >
            <a href="https://vitejs.dev" className="text-lg font-bold text-orange-400">Vite</a> <br/>
            <a href="https://react.dev" className="text-lg font-bold text-blue-400">Create React app</a>
         </div>
    </div>
    )
};
