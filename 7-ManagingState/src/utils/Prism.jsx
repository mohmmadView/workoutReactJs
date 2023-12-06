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
   <div className="w-2/3  ">
    <div className={overflow ?  ``  :` h-96 overflow-auto `+`mt-4 p-1 mx-2 mockup-code text-white text-left`}>
      <code className="Code">
        <h2> Code Syntax Block {language}</h2>
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </code>
     
    </div>
     <button className="full-screen btn btn-success-content btn-success"
     onClick={handleClick}>more</button>
   </div>
  );
}

// Code.propTypes = {
//   code: PropTypes.string.isRequired,
//   language: PropTypes.string.isRequired,
// };
