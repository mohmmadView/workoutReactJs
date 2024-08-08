import reactLogo from './../assets/react.svg'
export default function Header(){

    return (
<>
<h1 className="text-5xl  text-blue-400 font-['Cascadia']">React</h1>
       <div className=" flex justify-center  gap-6" >
        <h2 className="text-4xl text-red-500 font-['Cascadia']">RoadMap</h2>
        <img src={reactLogo} alt="" className="w-20   " />
        <h2  className="text-4xl text-green-500 font-['Virgil']">Developer</h2>
       </div>
</>


    )
}