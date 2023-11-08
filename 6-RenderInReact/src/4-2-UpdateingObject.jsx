import {useState} from 'react'
import logoReact from './assets/react.svg'
export default function ChangeWord() {

 let [person , setPerson]=useState({
     firstName:"mohammad",
     about:{
     lastName:"ali",
     age:"28",
     image:logoReact
    }
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
       about:{
        ...person.about,
        lastName:e.target.value
       }
    })
}
 function agechange(e){
    setPerson({
       ...person,
       about:{
        ...person.about,
        age:e.target.value
       }
    })
   }
   function imgChange(e){
    setPerson({
       ...person,
       about:{
        ...person.about,
        image:e.target.value
       }
    })
   }
  

    return(
        <div className='w-1/3 h-96 m-8 flex flex-col gap-3'>
        <input onChange={firstchange} value={person.firstName} type="text" placeholder=" firstName" className="input input-bordered input-accent w-full " />
       <input onChange={lastchange} type="text" placeholder="LastName" value={person.about.lastName} className="input input-bordered input-success w-full " />
      <input onChange={agechange} value={person.about.age} type="text" placeholder="age" className="input input-bordered input-secondary w-full " /> 
      <input onChange={imgChange} value={person.about.image} type="text" placeholder="age" className="input input-bordered input-secondary w-full " /> 
        <h1>FirstName  : {person.firstName}</h1> 
        <h1>lastName :  {person.about.lastName}</h1> 
        <h1>age :  {person.about.age}</h1> 
        <img className='w-2/4' src={person.about.image} /> 
        </div>

    )
}