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
