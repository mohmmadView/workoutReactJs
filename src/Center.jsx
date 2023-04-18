import React from 'react'
import viteLogo  from '../public/tailwindui-small@75.8bb955b2.jpg'
function Center(){

return(
<main className=" ">
<div className="-z-10 flex-col " onMouseOver={()=>console.log("CenterLogNew")}>
<img src={viteLogo} className='  w-full' />
<div className="flex justify-center">
<h1 className="text-center  bg-sky-700 inline-block  border-4 border-sky-950 text-4xl p-6 font-bold">Application UI</h1>
</div>
</div>


</main>

) 

}



export default Center