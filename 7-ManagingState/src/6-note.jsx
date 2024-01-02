import { useState } from "react";
import Code from "./utils/Prism";
import codeString from "./codeString/AllCodeString";

let dataList = [
  { id: 0, title: "mohammad", check: false, edit: false },
  { id: 1, title: "Ahmad", check: false, edit: false },
  { id: 2, title: "reza", check: true, edit: false },
];
// let idNext=3;
export default function Note() {
  // let [idNext,setIdNext] = useState(2);
  let [list, setList] = useState(dataList);
  return (
    <div className="w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl flex">
      <div className="w-1/3">
        <AddTask onAddTask={AddToList} />
             {dataList.map((li) => ( <section key={li.id}>
              <TaskNote check={li.check} edit={li.edit}  title={li.title}  />
             </section> ))}
       
      </div>
      <Code language={"js"} code={codeString[5]} />
    </div>
  );
  function deleteHandel(idDelete) {
    console.log(idDelete);
    setList(list.filter((li) => li.id !== idDelete));
  }
  function editHandel(edit, text) {
    console.log(text);
    setList(
      list.map((li) => {
        if (li.id === edit) {
          console.log(li, edit);
          li.edit = !li.edit;
        
        
          return li;
        } else {
          li.edit = false;
          return li;
        }
      }),
    );

    return list;
  }

  function AddToList(textAdd) {
    setList([
      ...list,
      { id: list.length, title: textAdd, check: false, edit: false },
    ]);
    console.log(list);
  }
  function AddTask({ onAddTask }) {
    let [text, setText] = useState("");
    return (
      <div className="flex flex-col">
        <h1 className="text-3xl text-primary py-4 font-bold">Note</h1>
        <div className="flex flex-row gap-2">
          <input
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            type="text"
            className="input input-accent bg-accent-content input-bordered w-full max-w-xs"
          />
          <button
            onClick={() => {
              onAddTask(text);
            }}
            className="btn btn-accent border border-purple-800 btn-circle"
          >
            Add
          </button>
        </div>
      </div>
    );
  }
  function TaskNote({  title, check , edit }) {
    let  setTitle = useState("")
   let [IdEdit , setEdit] = useState(false)
    return (
      <div className="w-3/3  flex flex-col pt-8 p-2 justify-between">
   
          <div className="flex" >
            <div className="flex w-8/12">
              <input
                checked={check}
                className="w-4 mr-2"
                type="checkbox"
              />
              <input
                onChange={(e) =>setTitle( e.target.value)}
                value={title}
                className={
                    IdEdit
                    ? ` input input-accent bg-accent-content input-bordered max-w-xs }`
                    : ` input input-ghost bg-accent-ghost input-bordered max-w-xs `
                }
                type="text"
              />
            </div>
            <div className="w-4/12 flex justify-between">
              <button
                onClick={() => {
                  setEdit(!IdEdit)
                }}
                className="btn btn-outline btn-sm self-center btn-secondary"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  
                }}
                className="btn btn-sm self-center btn-error"
              >
                Delete
              </button>
            </div>
          </div>
      
      </div>
    );
  }
}
//  onClick={()=>{ setIsEdit(!edit) ;idFix(task.id)}}
