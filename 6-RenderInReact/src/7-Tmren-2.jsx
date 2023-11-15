import {useState} from 'react'

const dataList = [
    {
        id: 1,
        Todo: "read Book Today",
        checkList: false
    },
    {
        id: 2,
        Todo: "work in project",
        checkList: true
    },
    {
        id: 3,
        Todo: "guide in React",
        checkList: true
    }
];

export default function Tmren_2 (){
  const [list , setList] = useState(dataList);

    return(
        <div className='w-1/2 flex flex-col mt-8'>
            <div className='flex row gap-2 mb-6'>
                <input className='input input-secondary bg-green-200 w-full'></input>
                <div className='btn btn-success '> Add </div>
            </div>
            {dataList.map((item)=>{
                return(
                    <li className='flex row justify-between mb-4 ' key={item.id}>
                        <input type="checkbox" checked={item.checkList} className="checkbox" />
                        <h1 className='text-2xl'>{item.Todo}</h1>  
                        <div className='btn btn-success'>edit</div> 
                        <div className='btn btn-success'>Delete</div>
                     </li>
                )
            })}
        </div>
    )
}
