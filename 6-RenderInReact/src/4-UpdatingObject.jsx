import { useState } from 'react';
export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div className='w-1/2  relative bg-slate-500 mt-4  mx-8'
      onPointerMove={e => {console.log(e.nativeEvent)
        // e.target.onmouseover=(e)=>{console.log(e)};
        setPosition({
          x: e.nativeEvent.layerX,
          y: e.nativeEvent.layerY
        });
      }}
      >
      <div className={`absolute bg-red-500 rounded-full  h-5 w-5`} 
       style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }} 
       />
    </div>
  );
}
