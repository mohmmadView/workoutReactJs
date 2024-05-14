export default function NavFixed (contextRef){
return(
<div className="flex justify-center ">
            <nav className="flex fixed py-4 justify-between   w-full list-none max-:md:w-4/6 max-md:leading-2  bg-success-content text-success  max-h-5">
          <li className="p-4"  ><a className="p-1  hover:bg-black" href="#managing-state">1-Managing State</a></li>
          <li className="p-4" ><a className="p-4 hover:bg-black" href="#react-context" ref={contextRef}>2-React Context</a> </li>
          <li className="p-4"><a className="p-4 hover:bg-black " href="#escape-hatches">3-Escape Hatches</a></li>
          <li className="p-4"><a className="p-4 hover:bg-black  " href="#effects">4-Effects</a></li>
        </nav>
        </div>
        )
}