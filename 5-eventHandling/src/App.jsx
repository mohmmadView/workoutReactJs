import Title from './utils/Title'
import ClassEventHandling from './Component/1-ClassEventHandling';
import ClassConditionalRendering from './Component/2-ClassConditionalRendering';
import FuncEvent from './Component/3-FunEvent';
import FuncEvent2 from './Component/4-funEvent2';
import Navbar from './Component/NavBar/NavBar';
import Code from './utils/Prism';

import './App.css'
let codeFuncEvent =`import PropTypes from 'prop-types';

function AlertButton({ message, children }) {
  return (
    <button className="btn text-primary  w-2/12 h-12 p-2 m-4 text-center self-center bg-orange-500" onClick={() => alert(message)}>
      {children}
    </button>
  );
}
function Toolbar() {
    return (
      <div className="w-2/12 h-12 p-2 m-4 text-center self-center bg-orange-500" onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
        <button onClick={() => alert('Playing!')}>
          Play Movie
        </button>
        <button onClick={() => alert('Uploading!')}>
          Upload Image
        </button>
      </div>
    );
  }
AlertButton.propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
export default function FunEvent(){
return(
    <>
    <AlertButton message="Hello World" >Test</AlertButton>
        <AlertButton message="test">child</AlertButton>
        <br />
        <Toolbar />
    </>
)
}`
function App() {

  return (
  <main>
<Title title="Class Event Handling" />
 <ClassEventHandling />
<ClassConditionalRendering />
<Navbar />
<Title title="function Event Handling" />
<section className='flex self-center h-96'>
<FuncEvent  />

<Code code={codeFuncEvent} language="js" />
</section>
<FuncEvent2 />
  </main>
  )
}

export default App
