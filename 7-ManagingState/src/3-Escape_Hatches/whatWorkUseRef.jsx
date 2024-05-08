import Code from "../utils/Prism"
export default function WhatWorkUseRef() {
  function Preview(){
    return(
  <div className="collapse-content bg-primary-content text-error-content  peer-checked:bg-warning peer-checked:text-warning"> 
   <div className=" mt-2 ">
      <Code fileName={`useRef(initialValue)`}  language={'js'} widthIN={`max-sm:w-[62%]  max-md:w-[79%] max-md:m-0 max-lg:w-11/12 max-lg:m-0 h-auto m-auto`}
  code={`
// Inside of React
function useRef(initialValue) {
  const [ref, unused] = useState({ current: initialValue });
  return ref;`}/>
   </div>
  </div>
    )
  }

    return(
       
        <div className="collapse w-full border border-primary rounded-box mt-8">
          <label className="text-center text-accent bg-accent-content " htmlFor="inside">input CheckBox</label>
  <input id="inside" title="How does useRef work inside" type="checkbox" className="peer  " /> 
  <div  className="flex justify-between collapse-title   border border-error  bg-error-content text-primary-content peer-checked:bg-primary-content peer-checked:text-primary">
   <div>
      <p className=" p-2 text-sm text-blue-300  max-md:text-xs">better understanding </p>
   <p className="  text-xl max-md:text-lg text-error"> How does useRef work inside? </p>
   </div>
<button className="btn btn-primary  text-center font-bold mr-28 mt-3 p-2 text-sm   max-md:text-xs"> click more</button>
  </div>
  <Preview/>
  
</div>
        
  
    )
}