import Add__task from './Add_task'
import Tasklist from './Tasklist'
import './App.css'
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
let indexOf = 3;
function App() {
 

  return (
    <div className='container'>
    <Add__task indexID={indexOf} data={DataTask} />
    <Tasklist tasks={DataTask} />
       
    </div>
  )
}

export default App
