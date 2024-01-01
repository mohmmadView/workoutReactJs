import {useEffect} from "react";
import Prism from 'prismjs';
export default function CardImport() {
      useEffect(() => {
     Prism.highlightAll(Prism.highlight);
  }, []);
  // let [overflow, setOverflow] = useState(false);
  // function handleClick() {
  //   console.log(overflow);
  //   if (!overflow) {
  //     setOverflow(true);
  //   } else {
  //     setOverflow(false);
  //   }
  // }
  const createContext=[{
    name:'createContext',
    code:`
    (alias) function createContext<T>(defaultValue: T): Context<T>
    `,
    about:`  defaultValue: The value that you want the context to have when there is no matching context provider in the tree above the component that reads context. If you don’t have any meaningful default value, specify null. The default value is meant as a “last resort” fallback. It is static and never changes over time.`
  },{
  name:'useTasksDispatch',
    code:`
    (alias) function useTasksDispatch(): null
    import useTasksDispatch
    `,
    about:`  context provider in the tree above the component that reads context. If you don’t have any meaningful default value, specify null. The default value is meant as a “last resort” fallback. It is static and never changes over time.`
  }];

    return (
        <>
        {createContext.map((item)=>(<>
               <div className="collapse collapse-arrow bg-secondary-content">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div className="collapse-title text-xl font-medium">
        <div className="badge badge-warning text-center badge-lg text-2xl">{item.name}</div> 
        </div>
        <div className="collapse-content "> 
        <code className={`language-${'js'} bg-black`}>{
            `
           ${item.code}

            `
        }</code> 
        <p>
        {item.about}
        </p>
        </div>
      </div>
      </>
        ))}
     
      </>
    );
}