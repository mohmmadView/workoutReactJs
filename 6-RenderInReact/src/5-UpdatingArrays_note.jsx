import {useState} from 'react';
let nextId = 0;
export default function UpdateArray_note(){
    
    let [subject,setSubject]=useState("");
     let [lists,setList]=useState([]);
   
   
    return(
        <div className='w-2/6 h-96 m-8 flex flex-col gap-3'>
          <input  type="text" onChange={(e)=> setSubject(e.target.value)} value={subject}  placeholder=" firstName" className="input input-bordered input-accent w-full h-10 sub" />

 <button onClick={()=>{ setList([
                    ...lists,
                    {id:nextId++, subject : subject}
                ]) }
            } className='btn btn-info'>new note</button>       
            <ul className='list-disc m-5'>
               {lists.map(li=>(
                <li className='text-2xl' key={li.id}>{li.subject}</li>
               ))}
            </ul>
            
        </div>

    )
}
