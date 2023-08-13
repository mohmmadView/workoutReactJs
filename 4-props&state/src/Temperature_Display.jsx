import { useState } from "react"
import PrismGe from './Prism';
import Prism from 'prismjs';
export default function Temperature() {
  const codeTemp = `
  import { useState } from "react"
  import PrismGe from './Prism';
  
  export default function Temperature() {
   let [celsius , setCelsius] = useState(10);
   let elmCircle = document.querySelector('#circle');
   let colorBg = ["bg-primary","bg-amber-200","bg-amber-400"]
      return(
  <>
  <div className="flex  justify-center w-96 h-96 bg-neutral border  text-neutral-content">
    <div className="flex w-full flex-col justify-center text-center">
      <h2 id="circle" className="w-1/2 h-1/2 bg-primary mx-auto text-4xl text-neutral flex  justify-center   rounded-full"><p className="inline my-auto font-bold">celsius</p></h2>
      <div className="w-1/2 mt-4 p-5 mx-32 mockup-code overflow-scroll bg-violet-300 text-primary-content">
      <code>
          <PrismGe code={codeTemp} language="javascript" ></PrismGe>
      </code>
      </div> 
      <div className=" w-10/12 mt-16 mx-auto flex justify-around">
        <button onClick={handlerTemplateMinus} className="btn btn-primary w-1/3 "><p className="text-4xl">-</p></button>
        <button onClick={handlerTemplatePlus} className="btn btn-primary w-1/3 "><p className="text-4xl">+</p></button>
      </div>
    </div>
  </div>
  <div className="w-1/2 mt-4 p-5 mx-32 mockup-code overflow-scroll bg-violet-300 text-primary-content">
  <code>
      <PrismGe  language="javascript" ></PrismGe>
  </code>
  </div>
  </>
      )
      function handlerTemplatePlus(){
          setCelsius(celsius + 5)
          if(celsius < 25){
              console.log(celsius)
              elmCircle.classList="w-1/2 h-1/2 bg-primary mx-auto text-4xl text-neutral flex  justify-center   rounded-full"
          }
          if(celsius==20){
     console.log(celsius)
     elmCircle.classList="w-1/2 h-1/2 bg-amber-200 mx-auto text-4xl text-neutral flex  justify-center   rounded-full"
          }  if(celsius==25){
             console.log(celsius)
        return     elmCircle.classList="w-1/2 h-1/2 bg-amber-400 mx-auto text-4xl text-neutral flex  justify-center   rounded-full"
                  }
       
         }
            function handlerTemplateMinus(){
          setCelsius(celsius - 5)
          if(celsius == 25){
              console.log(celsius)
           return   elmCircle.classList="w-1/2 h-1/2 bg-primary mx-auto text-4xl text-neutral flex  justify-center   rounded-full"
          }
          if(celsius == 30){
            console.log(celsius)
           elmCircle.classList="w-1/2 h-1/2 bg-amber-200 mx-auto text-4xl text-neutral flex  justify-center   rounded-full"
          } 
         }
    }`;
 let [celsius , setCelsius] = useState(10);
 let elmCircle = document.querySelector('#circle');
 

    return(
<div className="flex h-96">
  <div className="w-1/2 mx-8">
<div className="flex  justify-center w-96 h-96 bg-neutral border  text-neutral-content">
  <div className="flex w-full flex-col justify-center text-center">
    <h2 id="circle" className="w-1/2 h-1/2 bg-primary mx-auto text-4xl text-neutral flex  justify-center   rounded-full"><p className="inline my-auto font-bold">{`${celsius} C`}</p></h2>
  
    <div className=" w-10/12 mt-16 mx-auto flex justify-around">
      <button onClick={handlerTemplateMinus} className="btn btn-primary w-1/3 "><p className="text-4xl">-</p></button>
      <button onClick={handlerTemplatePlus} className="btn btn-primary w-1/3 "><p className="text-4xl">+</p></button>
    </div>
  </div>
   </div>
</div>
<div className="w-1/2 mt-4 p-5 mx-8 mockup-code overflow-scroll bg-violet-300 text-primary-content">
<code>
    <PrismGe code={codeTemp} language="javascript" ></PrismGe>
</code>

</div>

</div>

    )
    function handlerTemplatePlus(){
        setCelsius(celsius + 5)
        if(celsius < 25){
            console.log(celsius)
            elmCircle.classList="w-1/2 h-1/2 bg-primary mx-auto text-4xl text-neutral flex  justify-center   rounded-full"
        }
        if(celsius==20){
   console.log(celsius)
   elmCircle.classList="w-1/2 h-1/2 bg-amber-200 mx-auto text-4xl text-neutral flex  justify-center   rounded-full"
        }  if(celsius==25){
           console.log(celsius)
      return     elmCircle.classList="w-1/2 h-1/2 bg-amber-400 mx-auto text-4xl text-neutral flex  justify-center   rounded-full"
                }
     
       }
          function handlerTemplateMinus(){
        setCelsius(celsius - 5)
        if(celsius == 25){
            console.log(celsius)
         return   elmCircle.classList="w-1/2 h-1/2 bg-primary mx-auto text-4xl text-neutral flex  justify-center   rounded-full"
        }
        if(celsius == 30){
          console.log(celsius)
         elmCircle.classList="w-1/2 h-1/2 bg-amber-200 mx-auto text-4xl text-neutral flex  justify-center   rounded-full"
        } 

     
       }
  }
