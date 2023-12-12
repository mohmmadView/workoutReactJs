import { useState } from 'react';
import Code from './utils/Prism';
export default function Note() {
    let [text,seText] =useState("");
    return (
        <div className="w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl flex">           
         <div className="w-1/3">
            <AddTask />
              <List />
         </div>
         <Code />
       
        </div>
    );
    function AddTask() {

        return(
        <div className="flex flex-col">
        <h1 className='text-3xl text-primary py-4 font-bold'>Note</h1>
        <div className="flex flex-row gap-2"><input onClick={()=>{}} type="text" className="input input-accent bg-accent-content input-bordered w-full max-w-xs" /> <button onClick={() => console.log("clicked")} className="btn btn-accent border border-purple-800 btn-circle">Add</button></div>
        </div>
        )
  }
    function List(){

        return(
        <div className="w-3/3  flex pt-8 p-2 justify-between">
           <div className='flex w-8/12'><input className='w-4 mr-2' type="checkbox" /> <h1 className="text-2xl w-full text-primary py-2 font-bold">task</h1> </div>
           <div className='w-4/12 flex justify-between'><button className='btn btn-outline btn-sm self-center btn-secondary'>Edit</button> <button className='btn btn-sm self-center btn-error'>Delete</button></div>
        </div>
        )
    }
}