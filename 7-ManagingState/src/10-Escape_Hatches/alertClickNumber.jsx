 import { useRef } from 'react';
export default function AlertClickNumber() {
    let ref = useRef(0);
 
   function handleClick() {
     ref.current = ref.current + 1;
     alert('You clicked ' + ref.current + ' times!');
   }
   return (
    <>
       <div className="divider text-primary divider-accent">Alert click number </div>
     <button className='btn btn-square btn-primary w-24' onClick={handleClick}>
       Click me!
     </button>
     </>
     )
}