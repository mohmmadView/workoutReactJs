import Code from "../utils/Prism"
export default function WhatWorkUseRef(lang) {


    return(
        <div className="w-full  mx-auto my-4 bg-base-300 p-10 text-xl">
        <div className="collapse ">
  <input style={{opacity:1}} type="checkbox" className="peer  w-20 h-14 absolute right-14 checkbox checkbox-primary opacity-100" /> 
  <div className="w-full collapse-title border border-error  bg-error-content h-auto p-8 text-primary-content peer-checked:bg-primary-content peer-checked:text-primary">
    <p className="text-sm text-blue-300  pb-3">better understanding </p>
 <p className="text-xl text-error"> How does useRef work inside? </p>
  </div>
  <div className="collapse-content bg-primary-content text-error-content peer-checked:bg-warning peer-checked:text-warning"> 
   <div className="w-11/12 mx-auto mt-2 ">
  <Code  fileName={`useRef(initialValue)`} widthIN={` w-full m-auto h-auto `} language={'js'} code={`
// Inside of React
function useRef(initialValue) {
  const [ref, unused] = useState({ current: initialValue });
  return ref;
}
  `}/>
   </div>
  </div>
</div>
        
        </div>
    )
}