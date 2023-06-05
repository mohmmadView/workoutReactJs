import { useState } from 'react'
import reactLogo from  './assets/react.svg'


function Header(props) {

  return (
    <header className="w-full h-24 flex justify-center  shadow-md  shadow-sky-400">
      <img className='p-4 px-8' src={reactLogo}></img>
          <span className=' align-middle  text-5xl p-4 underline   text-sky-300'>{props.name}</span>
        

    </header>
  )
}

export default Header