import { useState, useContext } from "react";
import { useTasksDispatch } from "./TaskContext";

export default function AddTask({ onAddTask }) {
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
