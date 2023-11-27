import { useState } from "react"

export default  function Tasklist({ tasks , onChangeTodo , onDeleteTodo}) {
        

    return (
      <div>
       <ul>
           {tasks.map(task=>(
            <li  key={task.id}>
              <Task todo={task.title} onChange={onChangeTodo} onDelete={onDeleteTodo} />
           </li>
           ))}
       </ul>
         {console.log(tasks)}
      </div>
                    )}
                    function Task({todo,onChange, onDelete}){
                     const [isEdit , setIsEditing ]=useState(false);
                     let contentTask ;
                     if(isEdit){
                      contentTask =(
                        <>
                        <p>{todo}</p>
                           <input type="text"  onChange={ (e)=>onChange(e.target.value)}  />
                           <button onClick={()=>{setIsEditing(false)}} >Save</button>
              <div> 
                  <button onClick={onChange} >Edit</button> 
                  <button onClick={onDelete} >Delete</button>
                  <input  type="checkbox" />
                
              </div> 
                       
                        </>
                        )
                     }else{
                      contentTask =(
                        <>
                        <p>{todo}</p>
              <div> 
                  <button onClick={()=>{setIsEditing(true)}} >Edit</button> 
                  <button onClick={onDelete} >Delete</button>
                  <input  type="checkbox" />
              </div> 
                        
                        </>
                      )

                     }
                    return(
                      contentTask
                    )
                     
                    }