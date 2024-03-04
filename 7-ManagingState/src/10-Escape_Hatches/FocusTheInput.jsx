import {useRef} from 'react';
export default function form(){
    const inputRef = useRef(null);

    function handleClick(){
        inputRef.current.focus();
    }
    return(
        <div className='flex gap-4 border border-success rounded-lg p-4 bg-secondary-content'>
          <input className="input input-secondary" ref={inputRef} />
          <button onClick={handleClick} className="w-24 btn btn-secondary btn-circle" type="button">Focus the input</button>
        </div>
    )
}