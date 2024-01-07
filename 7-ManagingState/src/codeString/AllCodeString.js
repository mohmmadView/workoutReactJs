let CodeCityQiuz = `
  import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }
  

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div className='w-10/12 mx-auto my-12 bg-base-300 p-4 text-xl flex' >
    <div className='w-1/3 bg-base-100 p-4 border '>
      <h2 className='text-3xl p-2 text-primary'>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <textarea className=' textarea textarea-lg textarea-secondary my-4' 
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button className='btn btn-secondary m-auto self-center' disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
      <p className={text-xs self-end {status==="submitting"?"text-warning":"text-success"} {answer.length === 0?"hidden":"block"}}>{status}</p>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </div>
    </div>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
  `;
const CodeCityQiuz2 = `
  import { useState } from "react"

export default function CityQuiz() {
     const cities = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose",
    ]
    let [answer,setAnswer]=useState("");
    let [disable,setDisable]=useState(false);
    let [message,setMessage] = useState("");
    function textareaHandleChange(e){
        setAnswer(e.target.value);
        setDisable(false);
    }
    function handleSubmit(){
        setDisable(true);
        console.log(answer);
        let i;
       for(i=0;i<cities.length;i++){
  if(cities[i].toLowerCase()===answer.toLowerCase()){
    setMessage("answer is Good");
   break;
  }else{
    setMessage("answer is wrong");
  }
       }
    }   
return (
    <div className="w-1/2   p-4 flex flex-col justify-between align-baseline ">

        <h1 className="text-3xl font-bold text-primary">City Quiz</h1>
        <p>It is one of the big cities of usa. The answer to the question?</p>
        <textarea onChange={textareaHandleChange} className="textarea textarea-secondary textarea-lg"/>
        <p className={{message === "answer is Good" ? 'text-green-500' : 'text-red-500'}    text-red-500  'text-green-500'}>{message}</p>
        <button onClick={handleSubmit} className={btn btn-secondary w-1/3 self-center {disable && btn-disabled}}>Submit</button>
    </div>
)
}
  `;
let codeFullName = `
import Prism from "./utils/Prism";
import { useImmer } from 'use-immer'
export default function FullName() {
  let [name, setName] = useImmer({ firstName: "", lastName: "" });
  function handleChangeFirstName(e){
  setName((draft) => {draft.firstName = e.target.value})
  }
    function handleChangeLastName(e){
  setName((draft) => {draft.lastName = e.target.value})
  }
  return (
    <div className="w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl">
      <p className="p-2 text-success">
        For example, this form has a redundant fullName state variable:
      </p>
      <div className="flex">
        <div className="w-1/3 m-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your First name?</span>
            </div>
            <input
              type="text"
              // value={e=>e.target.value}
              onChange={handleChangeFirstName}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your Last name?</span>
            </div>
            <input
              type="text"
              onChange={handleChangeLastName}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <p  className="pt-4 text-success">{name.firstName} {name.lastName}</p>
          </label>
        </div>
        <Prism language="js" code={";sld;las"} />
      </div>
    </div>
  );
}
`;
let CodePanel = `
import { useState } from "react"
import Prism from "./utils/Prism";
export default function Panel() {
let [active,setActive]=useState(false);
    return (
        <div className="w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl">
        <div className="flex">
          <div className="w-1/3 m-4">
              <div onClick={()=>
              setActive(!active)} className="w-full p-2 text-primary bg-primary-content">
                <span className="">About React</span>
                    <p  className="pt-4 text-secondary">{active ? "" : "React is a popular JavaScript library for building user interfaces (UIs). It is based on a component-based architecture and virtual DOM. React is declarative, efficient, and popular."}</p>
              </div>
              <div onClick={()=>setActive(!active)} className="w-full p-2 text-success bg-success-content">
                <span className="text-success ">How React Works</span>
                  <p  className="pt-4 text-white">{active ? "Here is a shorter version of my previous explanation of how React works: React is a UI library based on a virtual DOM. It uses components and declarative updates to make UI development efficient and modular." : ""}</p>
              </div>
              <p  className="pt-4 text-success"></p>
          </div>
          <Prism language="js" />
        </div>
      </div>
    )
}
    `;
let codeChatList = `
  import { useState } from "react";
import Prism from "./utils/Prism";
export default function ChatList(){
let [id , setId]=useState(0);
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
function ContactList({list , giveId}){
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
  
  `;
let codeNote = `
  import { useState } from 'react';
import Code from './utils/Prism';
   let dataList=[
        {id:0,title:'mohammad', check:false , edit:false},
        {id:1,title:'Ahmad'   , check:false , edit:false}, 
        {id:2,title:'reza'    , check:true  , edit:false}
      ]
        // let idNext=3;
export default function Note() {
    let [idNext,setIdNext] = useState(2);
    let [list,setList] =useState(dataList);
    return (
        <div className="w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl flex">           
         <div className="w-1/3">
            <AddTask onAddTask={AddToList} />
              <List dataList={list} idFix={editHandel} />
         </div>
         <Code code={code} />
       
        </div>
    );
    function editHandel(edit,bolEdit){
       let a = list.map(li=> li.id ===edit)
       setList(list.map(li=>{if(li.id === edit){
                       return console.log(edit,bolEdit);}
                       else{
                       return li
                       }
                       }))
       } }
      
    function AddToList(textAdd){
      setList([...list,{id:list.length,title:textAdd,check:false,edit:false}])
    console.log(list)
    }
    function AddTask({onAddTask}){ 
        let [text,setText] = useState("");
        return(
        <div className="flex flex-col">
        <h1 className='text-3xl text-primary py-4 font-bold'>Note</h1>
        <div className="flex flex-row gap-2"><input onChange={(e)=>{ setText(e.target.value)}} value={text} type="text" className="input input-accent bg-accent-content input-bordered w-full max-w-xs" /> 
        <button onClick={() =>{onAddTask(text)}} className="btn btn-accent border border-purple-800 btn-circle">Add</button></div>
        </div>
        )
  }
    function List({dataList,idFix,bolEdit}){
      let [edit,setIsEdit] = useState(false);

        return(
           
        <div className="w-3/3  flex flex-col pt-8 p-2 justify-between">
       
        {dataList.map(task=>(
            <div className='flex'  key={task.id}>
              <div className='flex w-8/12'>
                 <input onChange={()=>{}} checked={task.check} className='w-4 mr-2' type="checkbox" /> 
                 {task.edit ? <input className="input input-accent bg-accent-content input-bordered  max-w-xs" /> : <h1 className="text-2xl w-full text-primary py-2 font-bold">{task.title}</h1> }     
              </div>
             <div className='w-4/12 flex justify-between'>
                <button onClick={()=>{ setIsEdit(!edit) ;idFix(task.id,edit); bolEdit(edit)}} className='btn btn-outline btn-sm self-center btn-secondary'>Edit</button>
                <button onClick={()=>{}} className='btn btn-sm self-center btn-error'>Delete</button>
             </div>
            </div>
        ))}
          
        </div>
        )
    }
  `;
const CodeToggleTheme = {
  App: `
    import React from "react";
import ThemedComponent from './ThemedComponent'
import {ThemeProvider} from './ThemeContext'
import Code from './../utils/Prism'
/**
 * Render the App component.
 *
 * @return {JSX.Element} The rendered App component.
 */
const App =()=>{
    return(
    <ThemeProvider >
        <div>
            <h1 className="text-3xl font-bold underline text-center p-4 text-warning">App Theme Context</h1>
            <ThemedComponent />
        </div>
        <Code language={"js"} code={""}  />
    </ThemeProvider>
    )
}

export default App
    `,
  ThemeContext: `
    import React,{createContext ,useContext , useState} from "react";
const ThemeContext = createContext();
/**
 * Creates a theme provider component that wraps the provided children components.
 *
 * @param {Object} props - The props object containing the children component.
 * @param {ReactNode} props.children - The children component to be wrapped.
 * @return {JSX.Element} - The theme provider component.
 */
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("success");
    /**
     * Toggles the theme between "success" and "secondary".
     *
     * @return {void} No return value.
     */
    const toggleTheme = () => {
        setTheme((prevTheme)=> prevTheme === "success" ? "secondary" : "success");
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
         {children}
        </ThemeContext.Provider>
    )
}
/**
 * Returns the current theme from the ThemeContext.
 *
 * @return {Theme} The current theme object.
 */
const useTheme = () => {
    return useContext(ThemeContext);
}
export {ThemeProvider,useTheme}
    `,
  ThemedComponent: `
    import React from "react";
import { useTheme } from "./ThemeContext";
/**
 * Renders a themed component.
 *
 * @return {JSX.Element} The JSX element representing the themed component.
 */
const ThemedComponent = () => {
    const {theme,toggleTheme} = useTheme();
    return (
    <div className={w-2/3 m-auto p-2 
    {theme === 'success' ? 'bg-success-content' : 'bg-secondary-content'}
    {theme === 'success' ? 'text-success' : 'text-secondary'}}>
        <h2 className="text-center text-lime-600">Themed Component</h2>
        <p className="text-center p-4">Current Theme:
        <span className="font-bold text-red-600 p-2">{theme} </span> </p>
        <div className="flex justify-center p-4">
        <button className="btn btn-secondary " 
        onClick={toggleTheme}>Toggle Theme</button>
        </div>
    </div>
    )
}
export default ThemedComponent
    `,
};

export default [
  CodeCityQiuz,
  CodeCityQiuz2,
  codeFullName,
  CodePanel,
  codeChatList,
  codeNote,
  CodeToggleTheme.App,
  CodeToggleTheme.ThemeContext,
  CodeToggleTheme.ThemedComponent,
];
