 import { useRef } from 'react';
export default function AlertClickNumber() {
    let ref = useRef(0);
 
   function handleClick() {
     ref.current = ref.current + 1;
     alert('You clicked ' + ref.current + ' times!');
   }
   return (
    <div className='w-2/12 bg-primary-content p-4 border-4 border-primary ring-2 ring-primary-content m-auto'>
      <div className='flex flex-col items-center gap-3'>
        
         <p className='text-center '>ref.current is {ref.current}</p>
       <button className=' btn btn-square btn-primary w-24' onClick={handleClick}>
         Click me!
       </button>
      </div>
     </div>
     )
}