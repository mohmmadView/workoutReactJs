import { useState } from "react";

export default function ChatList(){
let [id , setId]=useState(0);
function ContactList({list , giveId}){
// console.log(list.map(contact =>console.log(contact.name)));

return(
    <div className="w-full ">
      {list.map(contact => {
        
        return <button onClick={()=>giveId(contact.id)}  className="w-3/4 m-1 btn btn-primary flex" key={contact.id} >{contact.name}</button>})}
    </div>
)
}
function Chat({listContact}){
 let  [message ,setMessage]=useState('');
    return(
        <div className="flex flex-col">
            <textarea  className="textarea textarea-bordered h-4/6"
            placeholder={listContact.name}
            onChange={(e)=> setMessage(e.target.value)}
            value={message}
             />
             <button className="w-5/6  mt-1 h-1/6 self-center btn btn-accent">{listContact.email}</button>
        </div>
    )
  }

    return(
     <div className="w-10/12 mx-auto my-12 bg-base-300 flex p-10 text-xl">
        <div className="w-1/3 flex">
              <ContactList giveId={setId} list={contacts}  />
            <Chat  listContact={contacts[id]} />
        </div>
     </div>
    )
    
}
const contacts = [
    {id:0,name:'mohammad' , email:'mohammad@gmail.com'},
    {id:1,name:'Ahmad' ,  email:'Ahmad@gmail.com'},
    {id:2, name:'reza' , email:'reza@gmail.com'}
];