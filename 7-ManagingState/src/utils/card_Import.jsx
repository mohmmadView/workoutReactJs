import { useEffect } from "react";
import Prism from "prismjs";
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
  const createContext = [
    {
      id: 1,
      name: "createContext",
      code: `
    (alias) function createContext<T>(defaultValue: T): Context<T>
    `,
      about: `  defaultValue: The value that you want the context to have when there is no matching context provider in the tree above the component that reads context. If you don’t have any meaningful default value, specify null. The default value is meant as a “last resort” fallback. It is static and never changes over time.`,
    },
    {
      id: 2,
      name: "useTasksDispatch",
      code: `
    (alias) function useTasksDispatch(): null
    import useTasksDispatch
    `,
      about: `  context provider in the tree above the component that reads context. If you don’t have any meaningful default value, specify null. The default value is meant as a “last resort” fallback. It is static and never changes over time.`,
    },
    {
      id: 3,
      name: "useReducer",
      code: `
  (alias) function useReducer<R extends ReducerWithoutAction<any>, I>(reducer: R, initializerArg: I, initializer: (arg: I) => ReducerStateWithoutAction<R>): [ReducerStateWithoutAction<R>, DispatchWithoutAction] (+4 overloads)
    `,
      about: `  context provider in the tree above the component that reads context. If you don’t have any meaningful default value, specify null. The default value is meant as a “last resort” fallback. It is static and never changes over time.import useReducer
An alternative to useState.
useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.`,
    },
    {
      id: 4,
      name: "useContext",
      code: `
    (alias) function useContext<T>(context: Context<T>): T

    `,
      about: `  context provider in the tree above the component that reads context. If you don’t have any meaningful default value, specify null. The default value is meant as a “last resort” fallback. It is static and never changes over time.import useReducer
An alternative to useState.
useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.Accepts a context object (the value returned from React.createContext) and returns the current context value, as given by the nearest context provider for the given context.

`,
    },
    {
      id: 5,
      name: "useReducer",
      code: `
  (alias) function useReducer<R extends ReducerWithoutAction<any>, I>(reducer: R, initializerArg: I, initializer: (arg: I) => ReducerStateWithoutAction<R>): [ReducerStateWithoutAction<R>, DispatchWithoutAction] (+4 overloads)
    `,
      about: `  context provider in the tree above the component that reads context. If you don’t have any meaningful default value, specify null. The default value is meant as a “last resort” fallback. It is static and never changes over time.import useReducer
An alternative to useState.
useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.`,
    },
    {
      id: 6,
      name: "useEffect",
      code: `
      (alias) useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void
      
      `,
      about: `
      Accepts a function that contains imperative, possibly effectful code.
      @param effect — Imperative function that can return a cleanup function
      @param deps — If present, effect will only activate if the values in the list change.
      @version — 16.8.0
      `,
    },{
      id:7,
      name:"useRef",
      code:`
     (alias) function useRef<T>(initialValue: T): MutableRefObject<T> (+2 overloads)
      `,
      about:`
     useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
Note that useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
@version — 16.8.0
      `
    }
  ];
  return (
    <>
      {createContext.map(item => (
        <div
          key={item.id}
          className="collapse collapse-arrow bg-secondary-content">
            <label htmlFor="my-accordion-2"></label>
          <input title="toggle" placeholder="toggle" type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <div className="badge badge-warning text-center badge-lg text-2xl">
              {item.name}
            </div>
          </div>
          <div className="collapse-content flex flex-col">
            <code className={`language-${"js"} bg-black`}>{`
           ${item.code}
            `}</code>
            <p className="p-2 m-2 border border-primary bg-primary-content">{item.about}</p>
          </div>
        </div>
      ))}
    </>
  );
}
