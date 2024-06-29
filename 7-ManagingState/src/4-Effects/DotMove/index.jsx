import { useEffect, useState } from "react";

export default function DotMove() {
    let [move ,setMove] = useState({x:0,y:0});
    let [play ,setPlay] = useState(true);
     const onMove = (e)=>{
        if(true){
            setMove({
                x:e.clientX,
                y:e.clientY
            })
        }
     }
     useEffect(() =>{
        window.addEventListener("pointermove",onMove);
        return () => window.removeEventListener("pointermove",onMove);
    });
    return (
        <div className="relative w-full h-72">
      <label>
        <input type="checkbox"
          checked={play}
          onChange={e => setPlay(e.target.checked)}
        />
        The dot is allowed to move
      </label>
      <hr />
      <div className="w-32 h-32 absolute bg-white pointer-events-none left-2 top-2 " style={{
        transform: `translate(${move.x}px, ${move.y}px)`,
       
      }} />
    </div>
    );
}