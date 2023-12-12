import Code from './utils/Prism';
export default function Note() {
    return (
        <div className="w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl flex">           
         <div className="w-1/3">
            <AddTask />
         </div>
         <Code />
        </div>
    );
    function AddTask() {

        return(
        <div className="flex flex-col">
        <div className="flex flex-row gap-2"><input type="text" className="input input-accent bg-accent-content input-bordered w-full max-w-xs" /> <button className="btn btn-accent border border-purple-800 btn-circle">Add</button></div>
        </div>
        )
  }
}