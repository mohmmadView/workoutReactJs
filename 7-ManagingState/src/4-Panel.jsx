import { useState } from "react"
import Prism from "./utils/Prism";
export default function Panel() {
    let CodePanel = `
import { useState } from "react"
import Prism from "./utils/Prism";
export default function Panel() {
let [active,setActive]=useState(false);
    return (
        <div className="w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl">
        <div className="flex">
          <div className="w-1/3 m-4">
              <div onClick={()=>
              setActive(!active)} className="w-full p-2 text-primary bg-primary-content">
                <span className="">About React</span>
                    <p  className="pt-4 text-secondary">{active ? "" : "React is a popular JavaScript library for building user interfaces (UIs). It is based on a component-based architecture and virtual DOM. React is declarative, efficient, and popular."}</p>
              </div>
              <div onClick={()=>setActive(!active)} className="w-full p-2 text-success bg-success-content">
                <span className="text-success ">How React Works</span>
                  <p  className="pt-4 text-white">{active ? "Here is a shorter version of my previous explanation of how React works: React is a UI library based on a virtual DOM. It uses components and declarative updates to make UI development efficient and modular." : ""}</p>
              </div>
              <p  className="pt-4 text-success"></p>
          </div>
          <Prism language="js" />
        </div>
      </div>
    )
}
    `
let [active,setActive]=useState(false);

    return (
        <div className="w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl">
        
        <div className="flex">
          <div className="w-1/3 m-4">
              <div onClick={()=>
              setActive(!active)} className="w-full p-2 text-primary bg-primary-content">
                <span className="">About React</span>
                    <p  className="pt-4 text-secondary">{active ? "" : "React is a popular JavaScript library for building user interfaces (UIs). It is based on a component-based architecture and virtual DOM. React is declarative, efficient, and popular."}</p>
              </div>
            
              <div onClick={()=>setActive(!active)} className="w-full p-2 text-success bg-success-content">
                <span className="text-success ">How React Works</span>
                  <p  className="pt-4 text-white">{active ? "Here is a shorter version of my previous explanation of how React works: React is a UI library based on a virtual DOM. It uses components and declarative updates to make UI development efficient and modular." : ""}</p>
              </div>
             
              <p  className="pt-4 text-success"></p>
          </div>
          <Prism language="js" code={CodePanel} />
        </div>
      </div>
    )
}