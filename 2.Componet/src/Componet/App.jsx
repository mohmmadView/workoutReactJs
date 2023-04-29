// way 1  ()   is the return
// !const App = () => (
    
//  *   <div>
//   *    <p>Hello world</p>
//   *  </div>
//!   )
//?   export default App

//! way 2
// ?  Jsx
const App = () => {
    const now = new Date();
   
    console.log(now);

    return (
      <div className="w-2/4 mx-auto">
        <p className="text-green-500 text-3xl p-3 text-center"> <span className="text-yellow-400 text-2xl">it is  {now.toString()}</span></p>
        <Plus />
      </div>
    )
    
  }
  
  

// !  After compiling, our application looks like this:
//?  It is also possible to write React as "pure JavaScript" without using JSX. Although, nobody with a sound mind would do so.
//   const App = () => {
//     const now = new Date()
//     const a = 10
//     const b = 20
//     return React.createElement(
//       'div',
//       null,
//       React.createElement(
//         'p', null, 'Hello world, it is ', now.toString()
//       ),
//       React.createElement(
//         'p', null, a, ' plus ', b, ' is ', a + b
//       )
//     )
//   }
//  multiple components  App  >   <Plus />
const Plus=()=>{
    const a = 10;
    const b = 20;
return(
<p className="text-center mt-3 text-orange-300 pb-3">
            {a} <span className="text-rose-400"> plus </span> {b} <span className="text-rose-400">  is </span>{a+b}
        </p>
)
}
export default App