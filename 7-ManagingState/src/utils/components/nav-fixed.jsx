import { useRef } from "react"

export default function NavFixed (){
  let  navContextRef = useRef(0)
return(
<div className="flex justify-center my-2 mb-8 z-50">
        <nav className="flex fixed  justify-between   p-6 w-5/12 max-xl:w-6/12 text-xl list-none max-lg:w-4/6 max-md:leading-2  bg-secondary-content text-success  ">
          <li ><a className="p-2 btn btn-warning text-success-content ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success" href="#managing-state">1-Managing State</a></li>
          <li ><a className="p-2 btn btn-warning text-success-content ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success" href="#react-context" ref={navContextRef}>2-React Context</a> </li>
          <li ><a className="p-2 btn btn-warning text-success-content ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success " href="#escape-hatches">3-Escape Hatches</a></li>
          <li ><a className="p-2 btn btn-warning text-success-content ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success  " href="#effects">4-Effects</a></li>
          <li ><a className="p-2 btn btn-warning text-success-content ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success  " href="#custom-hooks">5-Custom Hooks</a></li>
        </nav>
        </div>
        )
}