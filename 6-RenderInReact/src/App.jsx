import { useState } from 'react'
import  Title from './utils/Title';
import Example from './utils/Example';
function App() {

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
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td className='text-lime-400 font-bold text-xl'>Triggering</td>
        <td className='text-blue-400 text-xl'>a render (delivering the guest’s order to the kitchen)</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td className='text-lime-400 font-bold text-xl'>Rendering</td>
        <td className='text-blue-400 text-xl'> the component (preparing the order in the kitchen)</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td className='text-lime-400 font-bold text-xl'>Committing</td>
        <td className='text-blue-400 text-xl'>to the DOM (placing the order on the table)</td>
      </tr>
    </tbody>
  </table>
</div>
    <Example  exampleNumber={1} exampleName="Render in React" />
    
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className='w-full flex justify-center'>
    <button className='btn btn-primary'>start</button>
</div>
    </>
  )
}

export default App
