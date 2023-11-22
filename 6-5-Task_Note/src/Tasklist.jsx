
export default  function Tasklist({ tasks ,dataUpdate}) {
        

    return (
      <div>
       <ul>
           {tasks.map(task=>(
            <li key={task.id}>{task.title}</li>
           ))}

       </ul>
         {console.log(tasks)}
      </div>
                    )}