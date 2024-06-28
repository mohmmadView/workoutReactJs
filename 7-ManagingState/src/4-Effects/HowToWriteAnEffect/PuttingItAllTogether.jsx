import { useEffect ,useState } from "react";
import Code from './../../utils/Prism';

function PlayGround() {
    const [text,setText] = useState("a");
useEffect(()=>{
   function onTimeOut() {
    console.log('⏰ ' + text)
}
    console.log('🔵 Schedule "' + text + '" log');
    const timeoutId = setTimeout(onTimeOut, 3000);

    return ()=>{
        console.log('🟡 Cancel "' + text + '" log');
              clearTimeout(timeoutId);
    }
},[text])
    return (
       <div>
            
            <label>
                  What to log:{' '}
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </label>
            <h1>{text}</h1>
       </div>
    )
}
export default function PuttingItAllTogether() {
let [show, setShow] = useState(false);
return (
    <div className=" flex">
      <div className="w-1/4">
            <h1 className="display-1"></h1>
           <button className="btn btn-primary m-4" onClick={() => setShow(!show)}>
             {show ? 'Unmount' : 'Mount'} the component
            </button>
            {show && <hr   />} 
            {show && <PlayGround />}
      </div>
    

        <Code language={'js'} className="w-3/4" more={true} code={`
import { useEffect ,useState } from "react";
import Code from '../utils/Prism';

function PlayGround() {
    const [text,setText] = useState("a");
useEffect(()=>{
   function onTimeOut() {
    console.log('⏰ ' + text)
}
    console.log('🔵 Schedule "' + text + '" log');
    const timeoutId = setTimeout(onTimeOut, 3000);

    return ()=>{
        console.log('🟡 Cancel "' + text + '" log');
              clearTimeout(timeoutId);
    }
},[text])
    return (
       <div>
            
            <label>
                  What to log:{' '}
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </label>
            <h1>{text}</h1>
       </div>
    )
}
export default function PuttingItAllTogether() {
let [show, setShow] = useState(false);
return (
    <div className="flex">
      <div>
            <h1 className="display-1"></h1>
           <button className="btn btn-primary m-4" onClick={() => setShow(!show)}>
             {show ? 'Unmount' : 'Mount'} the component
            </button>
            {show && <hr   />} 
            {show && <PlayGround />}
      </div>`} />
     
    </div>
)
}