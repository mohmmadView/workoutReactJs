import { useRef } from "react"

export default function NavFixed (){
  var  navRef_1 = useRef(null);
  let  navRef_2 = useRef(null);
  let  navRef_3 = useRef(null);
  let manage = document.querySelector("#managing-state");
  console.log(manage);
 let HandlerNav_1 = (event) => {
  console.log(event.currentTarget.parentElement.parentElement);
    event.currentTarget.parentElement.parentElement.className ="menu  fixed  rounded-box top-12"
  }
  let HandlerNav_2 = (event) => {
       event.currentTarget.parentElement.parentElement.className ="menu  fixed  rounded-box top-0"

  }
  let HandlerNav_3 = () => {
    navRef_3.current.ScrollIntoView({
      behavior: "instant", block: "start"
   })
  }

return(
<div className="   bg-secondary-content overflow-visible    mr-2 ">
        {/* <nav className=" flex flex-col fixed  justify-between   p-6  max-xl:w-6/12 text-xl list-none max-lg:w-4/6 max-md:leading-2 gap-4 text-success  ">
          <li className="flex flex-col" >
             <a className="p-2 text-success ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success" href="#managing-state">1-Managing State</a>
             <a className="p-2 text-base" href="">Reacting to input with state</a>
             <a className="text-base" href="">Choosing the state structure</a>
          </li>
          <li ><a className="p-2 btn btn-warning text-success-content ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success" href="#react-context" ref={navContextRef}>2-React Context</a> </li>
          <li ><a className="p-2 btn btn-warning text-success-content ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success " href="#escape-hatches">3-Escape Hatches</a></li>
          <li ><a className="p-2 btn btn-warning text-success-content ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success  " href="#effects">4-Effects</a></li>
          <li ><a className="p-2 btn btn-warning text-success-content ring-2 ring-secondary hover:ring-2 hover:ring-yellow-200 hover:bg-success  " href="#custom-hooks">5-Custom Hooks</a></li>
        </nav> */}
        <ul className="menu    rounded-box ">
  <li>
    <a onClick={HandlerNav_1 } className="text-primary  active:text-success text-xl" href="#managing-state" >1-Managing State</a>
    <ul className="">
      <li><a>Reacting to input with state</a></li>
      <li><a>Choosing the state structure</a></li>
      <li><a>Sharing state between components</a></li>
      <li><a>Preserving and resetting state</a></li>
      <li><a href="">Extracting state logic into a reducer</a></li>
    </ul>
  </li>
  <li>
    <a onClick={HandlerNav_2} className="text-primary text-xl" href="#react-context">2-React Context</a>
    <ul>
      <li><a>3-Escape Hatches</a></li>
      <li><a>Marketing management</a></li>
      <li><a>Security</a></li>
      <li><a>Consulting</a></li>
    </ul>
  </li>
  <li>
    <a onClick={HandlerNav_3} className="text-primary text-xl " href="#escape-hatches">3-Escape Hatches</a>
    <ul>
      <li><a>UI Kit</a></li>
      <li><a>Wordpress themes</a></li>
      <li><a>Wordpress plugins</a></li>
      <li>
        <a>Open source</a>
        <ul>
          <li><a>Auth management system</a></li>
          <li><a>VScode theme</a></li>
          <li><a>Color picker app</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <a  className="text-primary text-xl " href="#effects">4-Effects</a>
    <ul>
      <li><a>About us</a></li>
      <li><a>Contact us</a></li>
      <li><a>Privacy policy</a></li>
      <li><a>Press kit</a></li>
    </ul>
  </li>
  <li>
    <a href="#custom-hooks">5-Custom Hooks</a>
  </li>
  <a  className="text-primary text-xl " href="#effects">4-Effects</a>
    <ul>
      <li><a>About us</a></li>
      <li><a>Contact us</a></li>
      <li><a>Privacy policy</a></li>
      <li><a>Press kit</a></li>
    </ul>
 
</ul>
        </div>
        )
}