import Title from './utils/Title'
import ClassEventHandling from './Component/1-ClassEventHandling';
import ClassConditionalRendering from './Component/2-ClassConditionalRendering';
import FuncEvent from './Component/3-FunEvent';
import FuncEvent2 from './Component/4-funEvent2';
import Navbar from './Component/NavBar/NavBar';
import Code from './utils/Prism';
import Example from './utils/Example';
import './App.css'
let codeFuncEvent_3 =`import PropTypes from 'prop-types';

function AlertButton({ message, children }) {
  return (
    <button className="btn bg-primary text-white  w-2/12 h-12 p-2 m-4 text-center self-center " onClick={() => alert(message)}>
      {children}
    </button>
  );
}
function Toolbar() {
    return (
      <div className="w-2/12 h-12  m-4 text-center self-center " onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
        <button className='btn bg-secondary mr-1 ' onClick={(e) => {
            console.log(e);alert('Playing!')}}>
          Play Movie 
        </button>
        <button className='btn bg-warning ' onClick={() => alert('Uploading!')}>
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
        <Toolbar />
    </>
)
}`
let codeFuncEvent_4 =`export default function Signup() {
  let messageInput = "";
      return (
        <form className="w-5/12 mt-8 self-center" onSubmit={e => {
          e.preventDefault();
          alert(messageInput);
        }}>
          <input id="textMsg" placeholder="message alert" className="w-5/12 h-12 p-2 m-4 self-center bg-slate-300 input input-bordered" />
          <button className="btn bg-accent" onClick={() => { var elmInput = document.getElementById('textMsg')
           messageInput = elmInput.value 
          }}>Send</button>
        </form>
      );
    }
    `
function App() {

  return (
  <main>
<Title title="Class Event Handling" />
<Example exampleNumber={1} exampleName="Class Event Handling"  />
 <ClassEventHandling />
<Example exampleNumber={2} exampleName="Class Event Handling"  />
<ClassConditionalRendering />
<Navbar />
<Title title="function Event Handling" />
<Example exampleNumber={1} exampleName="function Event Handling"  />
<section className='flex self-center h-96 '>
<FuncEvent  />
<Code code={codeFuncEvent_3} language="js" />
</section>
<Example exampleNumber={2} exampleName="function Event Handling"  />
<section className='flex justify-between self-center h-96 '>
<FuncEvent2 />
<Code code={codeFuncEvent_4} language="js" />
</section>
  </main>
  )
}

export default App
