import { useState } from 'react';
export default function Counter() {
    const [number, setNumber] = useState(0);
  
    return (
      <div className='flex justify-center  '>
        <h1 className='text-3xl w-36 text-center self-center p-2 rounded-lg bg-transparent/20 text-white'>{number}</h1>
        <button className='btn btn-error hover:bg-red-400 text-xl w-36 self-center ' onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}>+3</button>
      </div>
    )
  }
  