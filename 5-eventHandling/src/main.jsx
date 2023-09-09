import React from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from  './assets/react.svg'
import App from './App.jsx'
import './index.css'
function Header(name) {
name="eventHandling"  
  return (
    <header className="w-full h-24 flex rounded-xl border border-violet-200 justify-center  bg-violet-800 shadow-xl  shadow-violet-400">
      <>
      <img className='p-4 px-8' src={reactLogo}></img>
          <span className=' align-middle font-serif text-5xl p-4 underline   text-violet-200'>{name}</span>
        </>

    </header>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Header  />
    <App />
  </React.StrictMode>,
)
