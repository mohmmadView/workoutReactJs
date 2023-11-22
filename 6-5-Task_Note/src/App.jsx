import Add__task from './Add_task'
import Tasklist from './Tasklist'
import './App.css'
import { useState } from 'react';
let DataTask =[
  {
id : 1,
title : "buy in home",
isTask : true
},  {
id : 2,
title : "fix Bug Project",
isTask : false
},  {
id : 3,
title : "go to",
isTask : true
}
]
let indexOf = 4;
function App() {
 let [data , setData] = useState(DataTask)
  function handelrAddTask(title){
setData([...data,{
  id : indexOf++,
  title :title,
  isTask :false
}])
  }
  function handelerUpdateTask(nextTodo){
   const todo = data.find(t => t.id === nextTodo.id)
   todo.title===nextTodo.title
  }


  return (
    <div className='container'>
    <Add__task onAddTodo={handelrAddTask} />
    {console.log(DataTask)}
    <Tasklist  dataUpdate={handelerUpdateTask} tasks={data} />
       
    </div>
  )
}

export default App
