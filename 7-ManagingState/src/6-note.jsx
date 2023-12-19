import { useState } from 'react';
import Code from './utils/Prism';
   let dataList=[
        {id:0,title:'mohammad', check:false , edit:false},
        {id:1,title:'Ahmad'   , check:false , edit:false}, 
        {id:2,title:'reza'    , check:true  , edit:false}
      ]
        // let idNext=3;
export default function Note() {
    let [idNext,setIdNext] = useState(2);
    let [list,setList] =useState(dataList);
    return (
        <div className="w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl flex">           
         <div className="w-1/3">
            <AddTask onAddTask={AddToList} />
              <List dataList={list} idFix={editHandel} />
         </div>
         <Code />
       
        </div>
    );
    function editHandel(edit,bolEdit){
       let a = list.map(li=> li.id ===edit)
       setList(list.map(li=>{if(li.id === edit){
                       return console.log(edit,bolEdit);}
                       else{
                       return li
                       }
                       }))
       } }
      
    function AddToList(textAdd){
      setList([...list,{id:list.length,title:textAdd,check:false,edit:false}])
    console.log(list)
    }
    function AddTask({onAddTask}){ 
        let [text,setText] = useState("");
        return(
        <div className="flex flex-col">
        <h1 className='text-3xl text-primary py-4 font-bold'>Note</h1>
        <div className="flex flex-row gap-2"><input onChange={(e)=>{ setText(e.target.value)}} value={text} type="text" className="input input-accent bg-accent-content input-bordered w-full max-w-xs" /> 
        <button onClick={() =>{onAddTask(text)}} className="btn btn-accent border border-purple-800 btn-circle">Add</button></div>
        </div>
        )
  }
    function List({dataList,idFix,bolEdit}){
      let [edit,setIsEdit] = useState(false);

        return(
           
        <div className="w-3/3  flex flex-col pt-8 p-2 justify-between">
       
        {dataList.map(task=>(
            <div className='flex'  key={task.id}>
              <div className='flex w-8/12'>
                 <input onChange={()=>{}} checked={task.check} className='w-4 mr-2' type="checkbox" /> 
                 {task.edit ? <input className="input input-accent bg-accent-content input-bordered  max-w-xs" /> : <h1 className="text-2xl w-full text-primary py-2 font-bold">{task.title}</h1> }     
              </div>
             <div className='w-4/12 flex justify-between'>
                <button onClick={()=>{ setIsEdit(!edit) ;idFix(task.id,edit); bolEdit(edit)}} className='btn btn-outline btn-sm self-center btn-secondary'>Edit</button>
                <button onClick={()=>{}} className='btn btn-sm self-center btn-error'>Delete</button>
             </div>
            </div>
        ))}
          
        </div>
        )
    }



