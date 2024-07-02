import { useEffect, useState } from "react";

export default function DotMove() {
    let [move ,setMove] = useState({x:0,y:0});
    let [play ,setPlay] = useState(true);
   
     const onMove = (e)=>{
     
        if(play){
            setMove({
                x:e.x,
                y:e.y
            })}else{
            setMove({x:30,y:190})}
        }
     
     useEffect(() =>{
       let dotContainer = document.getElementById("dotContainer");
 
        dotContainer.addEventListener("pointermove",onMove);
        return () => dotContainer.removeEventListener("pointermove",onMove);
    });
    return (
        <div id="dotContainer" className="p-4 w-full h-52 relative">
      <label>
        <input type="checkbox"
          checked={play}
          onChange={e => setPlay(e.target.checked)}
        />
        The dot is allowed to move
      </label>
      <hr />
      <span   style={{
        position: 'absolute',
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        backgroundColor: 'red',
        top:-190,
        left: -30,
         transform: `translate(${move.x}px, ${move.y}px)`,
      }} ></span>
    </div>
    );
}