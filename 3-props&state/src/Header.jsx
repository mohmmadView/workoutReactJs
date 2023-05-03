import { useState } from 'react'
import reactLogo from  './assets/react.svg'


function Header(props) {

  return (
    <header className="w-full h-24 flex bg-slate-800 shadow-md  shadow-sky-400">
<img className='p-4 px-8' src={reactLogo}></img>
     <div className='w-full text-center p-5 mt-3 pr-32 '><span className="text-yellow-500 px-2 text-5xl">{props.number}</span>
          <span className='bg-white/10 px-2 border  mx-2 border-yellow-800  text-5xl underline font-bold  text-yellow-600'>{props.name}</span>
        

  </div>
    </header>
  )
}

export default Header
