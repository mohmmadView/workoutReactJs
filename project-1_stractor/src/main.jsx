import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './Header'
import './index.css'
import Center from './center'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className=" w-screen h-screen  bg-white">
  <Header/>
  <Center/>
  </div>
  
    <App /> 
  </React.StrictMode>,
)
