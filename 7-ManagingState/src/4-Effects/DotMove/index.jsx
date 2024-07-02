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
        <>
      <label>
        <input type="checkbox"
          checked={play}
          onChange={e => setPlay(e.target.checked)}
        />
        The dot is allowed to move
      </label>
      <hr />
      <div  style={{
        position: 'absolute',
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        backgroundColor: 'red',
         left: -20,
        top: -20,
         transform: `translate(${move.x}px, ${move.y}px)`,
      }} ></div>
    </>
    );
}