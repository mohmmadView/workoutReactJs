import { useEffect, useState } from "react"

export default function useOnlineStatus(){
function useOnlineStatus(){
let [online,setOnline] =useState(true);

useEffect(()=>{
    function isOnline(){
setOnline(true)

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
},[]);
return online
     }
 function handleSaveClick() {
    console.log('✅ Progress saved');
  }
let isOnline = useOnlineStatus();
    return (
<div className="flex justify-center bg-primary-content w-full p-4 m-4">
<button className={isOnline?`btn btn-circle btn-primary w-1/3`:`btn btn-success btn-circle w-1/3`} disabled={!isOnline} onClick={handleSaveClick} >{isOnline ? '✅ Online' : '❌ Disconnected'}</button>

</div>        
    )
} 