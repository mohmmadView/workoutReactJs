import { useState } from "react"
import PropTypes from "prop-types";

/**
 * Render a component for adding a task.
 *
 * @param {Object} onAddTodo - A function to add a new task.
 * @return {JSX.Element} A React component for adding a task.
 */
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

Add_task.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};