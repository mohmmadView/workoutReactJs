import { useEffect, useState } from "react";
import Prism from "prismjs";
import "../index.css";
export default function Code() {
  useEffect(() => {
    Prism.highlightAll(Prism.highlight);
  }, []);
  let [overflow, setOverflow] = useState(false);
  function handleClick() {
    if (!overflow) {
      setOverflow(true);
    } else {
      setOverflow(false);
    }
  }
  return (
    <div className={`w-full  ml-2`}>
      <div className="join m-auto w-3/6 flex justify-center  ">
        <a href="#TaskApp" className="join-item btn btn-outline  ">
          TaskApp.jsx
        </a>
        <a href="#TaskList" className="join-item btn btn-outline  ">
          TaskList.jsx
        </a>
        <a href="#TaskContext" className="join-item btn btn-outline">
          TaskContext.jsx
        </a>
        <a href="#AddTask" className="join-item btn btn-outline">
          AddTask.jsx
        </a>
      </div>
      <div
        className={
          overflow
            ? ``
            : ` h-96 overflow-auto m-3.5` +
              `w-full p-1 m-3 mockup-code text-white rounded-none text-left`
        }>
        {codeTaskApp.map((code, index) => (
          <code
            key={index}
            id={fileName[index]}
            tabIndex={index}
            className="Code">
            <h2 className="flex justify-around text-center text-success p-4 font-bold ">
              {fileName[index] + ".jsx"}
              <svg
                className=" fill-red-100 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  document.body.insertAdjacentHTML(
                    "afterbegin",
                    `
            <div id="alert" role="alert" class="alert alert-success w-1/12 fixed bottom-2 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p>Copy</p>
            </div>
            `,
                  );
                  setTimeout(
                    () => document.querySelector("#alert").remove(),
                    3000,
                  );
                }}
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <path d="M3 3a2 2 0 0 1 2-2h9.982a2 2 0 0 1 1.414.586l4.018 4.018A2 2 0 0 1 21 7.018V21a2 2 0 0 1-2 2H4.75a.75.75 0 0 1 0-1.5H19a.5.5 0 0 0 .5-.5V8.5h-4a2 2 0 0 1-2-2v-4H5a.5.5 0 0 0-.5.5v6.25a.75.75 0 0 1-1.5 0Zm12-.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0-.146-.336l-4.018-4.018A.5.5 0 0 0 15 2.5Z"></path>
                <path d="M4.53 12.24a.75.75 0 0 1-.039 1.06l-2.639 2.45 2.64 2.45a.75.75 0 1 1-1.022 1.1l-3.23-3a.75.75 0 0 1 0-1.1l3.23-3a.75.75 0 0 1 1.06.04Zm3.979 1.06a.75.75 0 1 1 1.02-1.1l3.231 3a.75.75 0 0 1 0 1.1l-3.23 3a.75.75 0 1 1-1.021-1.1l2.639-2.45-2.64-2.45Z"></path>
              </svg>
            </h2>
            <pre>
              <code className={`language-${"js"}`}>{code}</code>
            </pre>
          </code>
        ))}
      </div>
      <button
        className="w-[100%]  btn  btn-warning rounded-t"
        onClick={handleClick}>
        more
      </button>
    </div>
  );
}
let fileName = ["TaskApp", "TaskContext", "TaskList", "AddTask"];
let codeTaskApp = [
  `
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TaskContext"; 
    export default function TaskApp() {
     return (
       <div className="w-10/12   mx-auto my-12 bg-base-300 p-10 text-xl">
         <TasksProvider>
           <h1 className="text-3xl text-secondary py-4 font-bold">
             Day off in Kyoto
           </h1>
           <AddTask />
           <TaskList />
           <Code code={} />
         </TasksProvider>
       </div>
     );
   } `,
  `
   import { createContext, useContext, useReducer } from "react";
   const TasksContext = createContext(null);
   const TasksDispatchContext = createContext(null);
   /**
    * Create a provider component for managing tasks.
    *
    * @param {ReactNode} children - The child components to be wrapped by the provider.
    * @return {ReactNode} The wrapped child components.
    */
   export function TasksProvider({ children }) {
     const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
     return (
       <TasksContext.Provider value={tasks}>
         <TasksDispatchContext.Provider value={dispatch}>
           {children}
         </TasksDispatchContext.Provider>
       </TasksContext.Provider>
     );
   }
   export function useTasks() {
     return useContext(TasksContext);
   }
   export function useTasksDispatch() {
     return useContext(TasksDispatchContext);
   }
   /**
    * Reduces an array of tasks based on the given action.
    *
    * @param {Array} tasks - The array of tasks to be reduced.
    * @param {Object} action - The action object containing the type and additional data.
    * @return {Array} - The updated array of tasks after the reduction.
    */
   function tasksReducer(tasks, action) {
     switch (action.type){
       case "added": {
         return [
           ...tasks,
           {
             id: action.id,
             text: action.text,
             done: false,
           },
         ];
       }
       case "changed": {
         return tasks.map((t) => {
           if (t.id === action.task.id) {
             return action.task;
           } else {
             return t;
           }
         });
       }
       case "deleted": {
         return tasks.filter((t) => t.id !== action.id);
       }
       default: {
         throw Error("Unknown action: " + action.type);
       }
     }
   }
   const initialTasks = [
     { id: 0, text: "Philosopher’s Path", done: true },
     { id: 1, text: "Visit the temple", done: false },
     { id: 2, text: "Drink matcha", done: false },
   ];`,
  `
   import { useState } from "react";
import { useTasks, useTasksDispatch } from "./TaskContext";
export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul className="w-8/12">
      {tasks.map((task) => (
        <li className="flex m-2" key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="input input-accent bg-accent-content input-bordered  max-w-xs"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button
          className="btn btn-accent border border-purple-800 btn-circle"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <div className="flex text-2xl w-6/12">
        <p className="w-full">{task.text}</p>
        <button
          className="btn btn-accent border border-purple-800 btn-circle ml-2"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </div>
    );
  }
  return (
    <label className="w-full gap-4 flex ">
      <input
        className="checkbox checkbox-accent border border-purple-800"
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        className="btn btn-accent border border-purple-800 btn-circle"
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
   `,
  `
   import { useState } from "react";
import { useTasksDispatch } from "./TaskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  return (
    <div className="flex  m-2 gap-2">
      <input
        className="input input-accent bg-accent-content input-bordered w-full max-w-xs"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn btn-accent border border-purple-800 btn-circle"
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </div>
  );
}

let nextId = 3;

   `,
];
