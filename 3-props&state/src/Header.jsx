import { useState } from 'react'
import reactLogo from  './assets/react.svg'


function Header() {

  return (
    <header className="w-full h-24 flex bg-slate-800 shadow-md  shadow-sky-400">
<img className='p-4 px-8' src={reactLogo}></img>
    </header>
  )
}

export default Header
