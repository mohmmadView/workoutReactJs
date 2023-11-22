import { useState } from "react"


export default  function Add_task({onAddTodo}){
let  [title ,setTitle] = useState("");

    return(
        <section>
          <input className="input__Add" onChange={(e)=>setTitle(e.target.value)} value={title} />
           <button className="btn__Add" onClick={()=>{
               setTitle("");
               onAddTodo(title);
           }} >Add Task</button>
        </section>
    )
}