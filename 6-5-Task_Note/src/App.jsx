import Add__task from "./Add_task";
import Tasklist from "./Tasklist";
import "./App.css";
import { useState } from "react";
let DataTask = [
  {
    id: 1,
    title: "buy in home",
    isTask: true,
  },
  {
    id: 2,
    title: "fix Bug Project",
    isTask: false,
  },
  {
    id: 3,
    title: "go to",
    isTask: true,
  },
];
let indexOf = 4;
function App() {
  let [data, setData] = useState(DataTask);
  /**
   * Adds a task to the data array.
   *
   * @param {string} title - The title of the task.
   * @return {object} - This function sets the state of the data array.
   */
  function handelrAddTask(title) {
    if (title) {
      setData([
        ...data,
        {
          id: indexOf++,
          title: title,
          isTask: false,
        },
      ]);
      console.log("update data task list");
    }
  }
  function changeUpdate(nextTodo) {
    setData(
      data.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      }),
    );
  }
  function onDeleteTask(todoId) {
    setData(data.filter((t) => t.id !== todoId));
  }

  return (
    <div className="container">
      <Add__task onAddTodo={handelrAddTask} />
      {console.log(DataTask)}
      <Tasklist
        onChangeTodo={changeUpdate}
        onDeleteTodo={onDeleteTask}
        tasks={data}
      />
    </div>
  );
}

export default App;
