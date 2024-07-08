import { useEffect, useState } from "react"

export default function Trading(){
let [online,setOnline] =useState(true);

useEffect(()=>{
    function isOnline(){
setOnline(true)
console.log('====================================');
console.log("online");
console.log('====================================');
}
function isOffline(){
    setOnline(false)
}
    window.addEventListener("online",isOnline);
window.addEventListener("offline",isOffline);
return ()=>{
    window.removeEventListener("online",isOnline); 
    window.removeEventListener("offline",isOffline);
}
},[])
    return (
<div className="flex justify-center bg-white w-full p-4 m-4">
<h1 className="text-2xl">{online ? '✅ Online' : '❌ Disconnected'}</h1>;

</div>        
    )
} 