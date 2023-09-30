import { useState , useRef } from "react"
import PrismGe from '../utils/Prism';
import Prism from 'prismjs';

/**
 * Generates a function comment for the given function body.
 *
 * @return {string} The function Temperature.
 */
export default function Temperature() {
  const codeTemp = `
export default function Temperature() {
 let [celsius , setCelsius] = useState(10);
 let elmCircle =useRef(null);
 elmCircle = document.querySelector('#circle');
 useRef(elmCircle);
 let styleElmCircle = [
 "w-1/2 h-1/2 bg-primary mx-auto text-4xl text-neutral flex justify-center rounded-full",
 "w-1/2 h-1/2 bg-amber-200 mx-auto text-4xl text-neutral flex justify-center rounded-full",
 "w-1/2 h-1/2 bg-amber-400 mx-auto text-4xl text-neutral flex  justify-center rounded-full"]
    return(
<div className="flex h-96">
  <div className="w-1/2 mx-8">
<div className="flex  justify-center w-96 h-96 bg-neutral border  text-neutral-content">
  <div className="flex w-full flex-col justify-center text-center">
    <h2 id="circle" className={styleElmCircle[0]}><p className="inline my-auto font-bold">{$celsius C}</p></h2>
    <div className=" w-10/12 mt-16 mx-auto flex justify-around">
      <button onClick={()=> handlerTemplate(-5)} className="btn btn-primary w-1/3 "><p className="text-4xl">-</p></button>
      <button onClick={()=> handlerTemplate(5)} className="btn btn-primary w-1/3 "><p className="text-4xl">+</p></button>
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
  /**
           * Decreases the value of celsius by -5 and updates the temperature display accordingly.
           *
           * @param {number} a - The amount to decrease celsius by
           * @return {style} - The style new element circle  
           */
    function handlerTemplate(a){
        setCelsius(celsius + a)
        if(celsius == 20){
          elmCircle.classList=styleElmCircle[1]
               } 
      else  if(celsius >= 25){
            elmCircle.classList=styleElmCircle[2]}
    else{
         elmCircle.classList=styleElmCircle[0];
                }
              }
      }
 `;
 let [celsius , setCelsius] = useState(10);

 let elmCircle =document.querySelector('#circle');



 let [styleElmCircle_1 , styleElmCircle_2 , styleElmCircle_3 ] = [
 "w-1/2 h-1/2 bg-primary mx-auto text-4xl text-neutral flex justify-center rounded-full",
 "w-1/2 h-1/2 bg-amber-200 mx-auto text-4xl text-neutral flex justify-center rounded-full",
 "w-1/2 h-1/2 bg-amber-400 mx-auto text-4xl text-neutral flex  justify-center rounded-full"];

    return(
<div className="flex h-96">
  <div className="w-1/2 mx-8">
<div className="flex  justify-center w-96 h-96 bg-neutral border  text-neutral-content">
  <div className="flex w-full flex-col justify-center text-center">
    <h2 id="circle" className={styleElmCircle_1}><p className="inline my-auto font-bold">{`${celsius} C`}</p></h2>
    <div className=" w-10/12 mt-16 mx-auto flex justify-around">
      <button onClick={()=> handlerTemplate(-5)} className="btn btn-primary w-1/3 "><p className="text-4xl">-</p></button>
      <button onClick={()=> handlerTemplate(5)} className="btn btn-primary w-1/3 "><p className="text-4xl">+</p></button>
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
  /**
           * Decreases the value of `celsius` by -5 and updates the temperature display accordingly.
           *
           * @param {number} a - The amount to decrease `celsius` by
           * @return {style} - The style new element circle  
           */
    function handlerTemplate(equals){
        setCelsius(celsius + equals)
        if(celsius == 20){
          elmCircle.classList=styleElmCircle_2
               } 
      else  if(celsius >= 25){
            elmCircle.classList=styleElmCircle_3
          }
    else{
        elmCircle.classList=styleElmCircle_1;
                }
              }

      }