import { useState } from "react"

export default  function Tasklist({ tasks , onChangeTodo , onDeleteTodo}) {
        

    return (
      <div>
       <ul>
           {tasks.map(task=>(
            <li  key={task.id}>
              <Task todo={task} onChange={onChangeTodo} onDelete={onDeleteTodo} />
           </li>
           ))}
       </ul>
         {console.log(tasks)}
      </div>
                    )}
                    function Task({todo,onChange, onDelete,isChecked}){
                     const [isEdit , setIsEditing ]=useState(false);
                     let contentTask ;
                     if(isEdit){
                      contentTask =(
                        <>
                           <input type="text" value={todo.title} onChange={ (e)=>{onChange({
                            ...todo, 
                            title:e.target.value})}}  />
                              <div>
                           <button onClick={()=>{setIsEditing(false)}} >Save</button>
                               </div>
                           
                       
                        </>
                        )
                     }else{
                      contentTask =(
                        <>
                        <p>{todo.title}</p>
                        <button onClick={()=>{setIsEditing(true)}} >edit</button>
                        </>
                      )

                     }
                    return(
                      <div>
                          {contentTask}
                  <button onClick={()=> 
                  onDelete(todo.id)} >Delete</button>
                  <input checked={todo.isTask} onChange={()=>onChange({...todo,
                    isTask:!todo.isTask
                  })} type="checkbox" />
                           <button onClick={(e)=>{
                            console.log(e.target);
                           }}>red</button>
                      </div>
                 
                    )
                }
                   