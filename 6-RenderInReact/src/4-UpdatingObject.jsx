import { useState } from 'react';
export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div className='w-full h-screen relative bg-slate-500'
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      >
      <div className={`absolute bg-red-500 rounded-full transform translate-x-${`{${position.x}px}`} transform translate-y-${`{${position.y}px}`}  h-3 w-3`}  style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}  />
    </div>
  );
}
