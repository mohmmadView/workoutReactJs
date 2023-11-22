
export default  function Tasklist({ tasks}) {


    return (
      <div>
       <ul>
           {tasks.map(task=>(
            <li key={task.id}>{task.title}</li>
           ))}

       </ul>

      </div>
                    )}