import { useEffect, useState } from "react";
import Prism from "prismjs";
// import PropTypes from "prop-types";
export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll(Prism.highlight);
  }, []);
  let [overflow,setOverflow]=useState(false);
  function handleClick(){
    console.log(overflow);
    if(!overflow){
      setOverflow(true);
    }else{
      setOverflow(false);
    }
  }
  return (
   <div className="w-2/3  ml-2">
    <div className={overflow ?  ``  :` h-96 overflow-auto `+`w-full mt-4 p-1  mockup-code text-white rounded-none text-left`}>
      <code className="Code">
        <h2> Code Syntax Block {language}</h2>
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </code>
     
    </div>
     <button className="w-[100%]  btn  btn-warning rounded-t"
     onClick={handleClick}>more</button>
   </div>
  );
}

// Code.propTypes = {
//   code: PropTypes.string.isRequired,
//   language: PropTypes.string.isRequired,
// };
