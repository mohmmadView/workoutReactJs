import StageShot from "./1-snapShot";
import StateUpdate from "./2-StateUpdate";
import StateUpdateTrue from "./3-StateUpdateTrue";
import UpdatingObject from "./4-UpdatingObject";
import UpdatingObject__2 from "./4-2-UpdateingObject";
import UpdateArrow_note from "./5-UpdatingArrays_note";
import UpdateTransform from "./5.2-updateArray_Transforming";
import Tmren from "./6-Tmren";
import Tmren2 from "./7-Tmren-2";
import Title from "./utils/Title";
import Example from "./utils/Example";
import Code from "./utils/Prism";
function App() {
  let stateUpdateCode = `
import { useState } from 'react';
export default function Counter() {
    const [number, setNumber] = useState(0);
  
    return (
      <div className='flex justify-center'>
        <h1 className='text-3xl w-36 text-white'>{number}</h1>
        <button className='btn btn-warning w-36' onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}>+3</button>
      </div>
    )
  }
  
`;
  let stateUpdateCodeTrue = `
import { useState } from 'react';
export default function Counter__true() {
    const [number, setNumber] = useState(0);
  
    return (
      <div className='flex justify-center  '>
        <h1 className='text-3xl w-36 text-center self-center p-2 rounded-lg bg-transparent/20 text-white'>{number}</h1>
        <button className='btn btn-error hover:bg-red-400 text-xl w-36 self-center ' onClick={() => {
          setNumber(n => n + 1);
          setNumber(n => n + 1);
          setNumber(n => n + 1);
        }}>+3</button>
      </div>
    )
  }
  
`;
  let CodeUpdatingObject = `
  import { useState } from 'react';
export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div className='w-1/2  relative bg-slate-500 mt-4  mx-8'
      onPointerMove={e => {
        e.target.onmouseover=(e)=>{console.log(e);};
        setPosition({
          x: e.nativeEvent.layerX,
          y: e.nativeEvent.layerY
        });
      }}
      >
      <div className={absolute bg-red-500 rounded-full  h-3 w-3} 
       style={{
        transform: translate({position.x}px, {position.y}px),
      }} 
       />
    </div>
  );
}

`;
  let CodeUpdatingObject__2 = `
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

`;
  let codeNote = `
import {useState} from 'react';
let nextId = 0;
export default function UpdateArray_note(){
    
    let [subject,setSubject]=useState("");
     let [lists,setList]=useState([]);
   
   
    return(
        <div className='w-2/3 h-96 m-8 flex flex-col gap-3'>
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

`;
  let codeTransform = `
import { useState } from  "react"
let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];
export default function Transforming() {
    const [items, setItems] = useState(
        initialShapes
    );
function handleClick(){
const nextShape = items.map((item) => {
    if (item.type === 'square') {
        // No change
        return item;
      } else {
        // Return a new circle 50px below
        return {
          ...item,
          y: item.y + 50,
    }}    }) 
setItems(nextShape);
}
    return(
        <div className="w-3/6 h-96 m-8 flex flex-col gap-3" >
            <button onClick={handleClick} className="btn btn-primary w-3/6 h-10">Element Circle react down</button>
            <div className="flex row justify-between relative">
                {items.map((item) => (
                    <div key={item.id} style={{  
                    background: 'purple',
                    position: 'absolute',
                    left: item.x,
                    top: item.y,
                    borderRadius:
                      item.type === 'circle'
                        ? '50%' : '',
                    width: 40,
                    height: 40, }} ></div>
                ))}
            </div>
        </div>
    )
}
`;
  return (
    <>
      <Title title="Render in React" />
      <div className="flex justify-center">
        <p className="w-8/12 my-6 text-2xl text-primary bg-secondary p-8 rounded-lg">
          Before your components are displayed on screen, they must be rendered
          by React. Understanding the steps in this process will help you think
          about how your code executes and explain its behavior.
        </p>
      </div>
      <div className="flex justify-center overflow-x-auto">
        <table className="w-6/12 table">
          {/* head */}
          <thead></thead>
          <tbody>
            <tr>
              <th>1</th>
              <td className="text-lime-400 font-bold text-xl">Triggering</td>
              <td className="text-blue-400 text-xl">
                a render (delivering the guest’s order to the kitchen)
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td className="text-lime-400 font-bold text-xl">Rendering</td>
              <td className="text-blue-400 text-xl">
                {" "}
                the component (preparing the order in the kitchen)
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td className="text-lime-400 font-bold text-xl">Committing</td>
              <td className="text-blue-400 text-xl">
                to the DOM (placing the order on the table)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Example exampleNumber="Step 1" exampleName="Trigger a render" />
      <div className="flex flex-col  align-middle">
        <p className="w-8/12 mt-6 text-3xl text-primary bg-secondary text-center self-center p-4 ">
          There are two reasons for a component to render:
        </p>
        <br />
        <p className="w-8/12 text-2xl text-red-400 bg-secondary p-2 self-center ">
          1. It’s the component’s initial render.
        </p>
        <p className="w-8/12 text-2xl  text-red-400 bg-secondary p-2 self-center ">
          2. The component’s (or one of its ancestors’) state has been updated.
        </p>
      </div>
      <Example
        exampleNumber="Example Render"
        exampleName="State as a Snapshot"
      />
      <div className="w-full my-4  flex justify-center">
        <StageShot />
      </div>
      <Title title="Queueing a Series of State Updates" />
      <div className="flex justify-center">
        <p className="w-8/12 my-6 text-2xl text-primary bg-secondary p-8 rounded-lg">
          Setting a state variable will queue another render. But sometimes you
          might want to perform multiple operations on the value before queueing
          the next render. To do this, it helps to understand how React batches
          state updates.
        </p>
      </div>
      <Example
        exampleName="React batches state updates"
        exampleNumber="Example  "
      />
      <div className="flex justify-center">
        <p className="w-8/12 my-6 text-2xl text-primary bg-secondary p-8 rounded-lg">
          You might expect that clicking the “+3” button will increment the
          counter three times because it calls setNumber(number + 1) three
          times:
        </p>
      </div>
      <div className="flex justify-center">
        <StateUpdate />
        <Code code={stateUpdateCode} language="js" />
      </div>
      <Example
        exampleNumber=""
        exampleName="Updating the same state multiple times before the next render"
      />
      <div className="flex justify-center">
        <p className="w-8/12 my-6 text-2xl text-primary bg-secondary p-8 rounded-lg">
          It is an uncommon use case, but if you would like to update the same
          state variable multiple times before the next render, instead of
          passing the next state value like setNumber(number + 1), you can pass
          a function that calculates the next state based on the previous one in
          the queue, like setNumber(n => n + 1). It is a way to tell React to
          “do something with the state value” instead of just replacing it. Try
          incrementing the counter now:
        </p>
      </div>
      <div className="flex justify-center">
        <StateUpdateTrue />
        <Code code={stateUpdateCodeTrue} language="js" />
      </div>

      <Example exampleNumber="" exampleName="Update Object" />
      <div className="flex justify-center">
        <UpdatingObject />
        <Code code={CodeUpdatingObject} language="js" />
      </div>
      <Example exampleNumber="" exampleName="Update Object__2" />
      <div className="flex justify-center">
        <UpdatingObject__2 />
        <Code code={CodeUpdatingObject__2} language="js" />
      </div>
      <Example
        exampleNumber=""
        exampleName="Update Object__useState__replace__useImmer"
      />
      <div className="flex justify-center">
        <p className="w-8/12 my-6 text-2xl text-primary bg-secondary p-8 rounded-lg">
          If your state is deeply nested, you might want to consider flattening
          it. But, if you don’t want to change your state structure, you might
          prefer a shortcut to nested spreads. Immer is a popular library that
          lets you write using the convenient but mutating syntax and takes care
          of producing the copies for you. With Immer, the code you write looks
          like you are “breaking the rules” and mutating an object:
        </p>
      </div>
      <Example exampleNumber="" exampleName="Note Updating Arrays in State" />
      <div className="flex justify-center">
        <UpdateArrow_note />
        <Code code={codeNote} language="js" />
      </div>
      <Example exampleNumber="" exampleName="updateArray_Transdorming" />
      <div className="flex justify-center">
        <UpdateTransform />
        <Code code={codeTransform} language="js" />
      </div>

      <Example exampleNumber="" exampleName="Tmren" />
      <div className="flex justify-center">
        <Tmren />
      </div>
      <Example exampleNumber="" exampleName="Tmren-2" />
      <div className="flex justify-center">
        <Tmren2 />
      </div>
    </>
  );
}

export default App;
