
export default  function Tasklist({ tasks , onChangeTodo , onDeleteTodo}) {
        

    return (
      <div>
       <ul>
           {tasks.map(task=>(
            <li  key={task.id}>{task.title}
              <div> 
                  <button onClick={onChangeTodo} >Edit</button> 
                  <button onClick={onDeleteTodo} >Delete</button>
                  <input  type="checkbox" />
              </div> 
           </li>
           ))}
       </ul>
         {console.log(tasks)}
      </div>
                    )}