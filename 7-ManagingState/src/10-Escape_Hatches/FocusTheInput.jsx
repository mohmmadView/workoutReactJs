import {useRef} from 'react';
import Code from '../utils/Prism'
export default function FocusInInput(){
    const inputRef = useRef(null);

    function handleClick(){
        inputRef.current.focus();
    }
    return(
    <>
      
 <Code fileName={"example"} widthIN={"w-full"} code={`
import { useRef } from 'react';
export default function FocusInInput() {
const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
    }
            `} language={"js"}></Code><br />
            <div className='flex gap-4 border border-success rounded-lg p-4 bg-secondary-content'>
              <input className="input input-secondary" ref={inputRef} />
              <button onClick={handleClick} className="w-24 btn btn-secondary btn-circle" type="button">Focus the input</button>
            </div>
            
   </>
    )
}