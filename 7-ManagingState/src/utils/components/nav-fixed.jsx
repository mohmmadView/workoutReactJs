import { useRef } from "react"

export default function NavFixed (){
  let  navContextRef = useRef(0)
return(
<div className="flex   justify-start w-2/12 mt-48   py-16 mb-8 z-50">
        <nav className=" flex flex-col fixed  justify-between   p-6  max-xl:w-6/12 text-xl list-none max-lg:w-4/6 max-md:leading-2 gap-4 text-success  ">
          <li className="flex flex-col" ><a className="p-2 btn btn-warning text-success-content ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success" href="#managing-state">1-Managing State</a>
                 <a className="p-2 text-base" href="">Reacting to input with state</a>
                 <a className="text-base" href="">Choosing the state structure</a>
          </li>
          <li ><a className="p-2 btn btn-warning text-success-content ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success" href="#react-context" ref={navContextRef}>2-React Context</a> </li>
          <li ><a className="p-2 btn btn-warning text-success-content ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success " href="#escape-hatches">3-Escape Hatches</a></li>
          <li ><a className="p-2 btn btn-warning text-success-content ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success  " href="#effects">4-Effects</a></li>
          <li ><a className="p-2 btn btn-warning text-success-content ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success  " href="#custom-hooks">5-Custom Hooks</a></li>
        </nav>
        </div>
        )
}