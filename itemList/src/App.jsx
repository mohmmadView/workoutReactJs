import { Children, Fragment, createElement, useId, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';

export default function App() {


function HandlerClick(event){
  
   return  
}
function newTodo() {
   var Btn =document.getElementById("btn");

  console.log(Btn);
   return(
     <div className='flex justify-center bg-black'>
     <input className='bg-blue-500 text-2xl w-1/12 p-2 text-center font-bold'/>
     <input className='bg-red-500 w-1/4 font-bold p-2 text-center text-2xl'/>
     <input className="bg-green-500 w-1/2 font-bold p-2 text-center text-2xl"/>
  </div>
  )   
  }
newTodo()
  let test = React.createElement("input", { type: "number" });
   return(
   <div id='btn' className='flex justify-center bg-black'>
      <button onClick={()=>ReactDOM.render(test,Btn) } className='w-1/4 p-2 bg-yellow-400 font-bold rounded-xl border border-white border-2'>addTodo</button>
   </div>)
}


