import { useState } from 'react';
let dataNameSccor = [{
    id:0,
    name:"ali",
    count:1,
   },{
    id:1,
    name:"mohammad",
    count:3,
   },{
    id:2,
    name:"jack",
    count:5,
   }
 ]


export default function Tmren () {

const [count , setCount] = useState(dataNameSccor);



return(
<ul className='w-1/2 flex flex-col   '> 
  {count.map((item)=>{
    return(
      <li className='text-2xl self-center m-1' key={item.id}>{item.name} : {item.count} <button className='btn btn-primary ml-6' onClick={
        ()=>setCount(
        count.map((ite_m)=>{
         if(ite_m.id===item.id){
          return{
            ...ite_m,
            count:ite_m.count+1
          }
         }
         return ite_m
        } )
      )} >+</button> <button className='btn btn-error ml-3' onClick={
        ()=>setCount(
        count.map((ite_m)=>{
         if(ite_m.id===item.id){
          return{
            ...ite_m,
            count:ite_m.count-1
          }
         }
         return ite_m
        } )
      )} >-</button> </li>
    )
  })}
</ul>
)

}