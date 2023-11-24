
export default  function Tasklist({ tasks , onChangeTodo , onDeleteTodo}) {
        

    return (
      <div>
       <ul>
           {tasks.map(task=>(
            <li  key={task.id}>{task.title}
           <div> <button>Edit</button> <button>Delete</button></div> </li>
           ))}

       </ul>
         {console.log(tasks)}
      </div>
                    )}