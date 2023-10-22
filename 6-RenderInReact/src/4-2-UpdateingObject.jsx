import {useState} from 'react'
export default function ChangeWord() {

 let [person , setPerson]=useState({
     firstName:"mohammad",
     lastName:"ali",
     age:"28"
 }) 
 function firstchange(e){
     setPerson({
        ...person,
         firstName:e.target.value
        
     })
 }
 function lastchange(e){
    setPerson({
       ...person,
        lastName:e.target.value
       
    })
}
 function agechange(e){
    setPerson({
       ...person,
        age:e.target.value
       
    })
}

    return(
        <div className='w-1/3 h-96 m-8 flex flex-col gap-3'>
        <input onChange={firstchange} value={person.firstName} type="text" placeholder=" firstName" className="input input-bordered input-accent w-full " />
       <input onChange={lastchange} type="text" placeholder="LastName" value={person.lastName} className="input input-bordered input-success w-full " />
      <input onChange={agechange} value={person.age} type="text" placeholder="age" className="input input-bordered input-secondary w-full " /> 
        <h1>FirstName  : {person.firstName}</h1> 
        <h1>lastName :  {person.lastName}</h1> 
        <h1>age :  {person.age}</h1> 
        </div>

    )
}