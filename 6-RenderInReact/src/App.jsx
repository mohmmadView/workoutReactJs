import StageShot from './1-snapShot';
import StateUpdate from './2-StateUpdate';
import  Title from './utils/Title';
import Example from './utils/Example';
import Code from './utils/Prism';
function App() {
let stateUpdateCode =`
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
  
`
  return (
    <>
    <Title  title="Render in React" />
    <div className='flex justify-center'>
      <p className='w-8/12 my-6 text-2xl text-primary bg-secondary p-8 rounded-lg'>
      Before your components are displayed on screen, they must be rendered by React. Understanding the steps in this process will help you think about how your code executes and explain its behavior.
      </p>
    </div>
      <div className="flex justify-center overflow-x-auto">
          <table className="w-6/12 table">
          {/* head */}
          <thead>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td className='text-lime-400 font-bold text-xl'>Triggering</td>
              <td className='text-blue-400 text-xl'>a render (delivering the guest’s order to the kitchen)</td>
            </tr>
            <tr>
              <th>2</th>
              <td className='text-lime-400 font-bold text-xl'>Rendering</td>
              <td className='text-blue-400 text-xl'> the component (preparing the order in the kitchen)</td>
            </tr>
            <tr>
              <th>3</th>
              <td className='text-lime-400 font-bold text-xl'>Committing</td>
              <td className='text-blue-400 text-xl'>to the DOM (placing the order on the table)</td>
            </tr>
          </tbody>
        </table>
      </div>
    <Example  exampleNumber="Step 1" exampleName="Trigger a render" />
    <div className='flex flex-col  align-middle'>
      <p className='w-8/12 mt-6 text-3xl text-primary bg-secondary text-center self-center p-4 '>
      There are two reasons for a component to render: 
      </p><br/>
       <p className='w-8/12 text-2xl text-red-400 bg-secondary p-2 self-center '>
      1. It’s the component’s initial render.
      </p>
       <p className='w-8/12 text-2xl  text-red-400 bg-secondary p-2 self-center '>
      2. The component’s (or one of its ancestors’) state has been updated.
      </p>
    </div>
    <Example  exampleNumber="Example Render" exampleName="State as a Snapshot" />
    <div className='w-full my-4  flex justify-center'>
       <StageShot />
    </div>
    <Title title="Queueing a Series of State Updates" />
      <div className='flex justify-center'>
      <p className='w-8/12 my-6 text-2xl text-primary bg-secondary p-8 rounded-lg'>
      Setting a state variable will queue another render. But sometimes you might want to perform multiple operations on the value before queueing the next render. To do this, it helps to understand how React batches state updates.</p>
    </div>
    <Example exampleName="React batches state updates" exampleNumber="Example  " />
    <div className='flex justify-center'>
      <p className='w-8/12 my-6 text-2xl text-primary bg-secondary p-8 rounded-lg'>
      You might expect that clicking the “+3” button will increment the counter three times because it calls setNumber(number + 1) three times:
      </p>
    </div>
    <div className='flex justify-center'>
    <StateUpdate />
    <Code  code={stateUpdateCode} language="js" />
   
    </div> 
    <Example exampleNumber="" exampleName="Updating the same state multiple times before the next render" />
    </>
    
  )
}

export default App
