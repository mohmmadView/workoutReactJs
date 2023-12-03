import { useState } from 'react'
import Title from "./utils/Title";
import Example from "./utils/Example";
import Code from "./utils/Prism";
import CityQiuz from './1-CityQiuz';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const CodeCityQiuz = `
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
  `

  return (
    <div className='w-full'>
      <Title title="Managing State" />
     <div className='w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl' >
      <div className="divider divider-warning text-secondary font-bold text-3xl">Intermediate</div>
       <p>
         As your application grows, it helps to be more intentional about how your <span className='text-primary underline underline-offset-4  decoration-double font-bold'>state</span> is organized and how the data flows between your components. Redundant or duplicate <span className='text-primary underline underline-offset-4  decoration-double decoration-double font-bold '>state</span> is a common source of bugs. In this chapter, you’ll learn how to structure your <span className='text-primary underline underline-offset-4  decoration-double font-bold'> state </span> well, how to keep your <span className='text-primary underline underline-offset-4  decoration-double font-bold'>state</span> update logic maintainable, and how to share <span className='text-primary underline underline-offset-4  decoration-double font-bold'>state</span> between distant components.
       </p>
     </div>
     <div className='w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl' >
      <div className="divider divider-warning text-secondary font-bold text-3xl">مدیریت وضعیت</div>
       <p className='rtl' style={{direction: 'rtl'}}>
       هرچقدر برنامه شما بزرگتر می‌شود، بهتر است که در مورد نحوه سازماندهی و چگونگی جریان داده <span className='text-primary underline underline-offset-4  decoration-double font-bold'>state</span> بین کامپوننت‌های شما دقت بیشتری داشته باشید. وضعیت <span className='text-primary underline underline-offset-4  decoration-wavy font-bold'>state</span> تکراری یا تکراری منبعی رایج برای باگ‌هاست. در این فصل، یاد می‌گیرید که چگونه وضعیت <span className='text-primary underline underline-offset-4  decoration-double font-bold'>state</span> خود را به خوبی سازماندهی کنید، چگونه منطق به‌روزرسانی وضعیت <span className='text-primary underline underline-offset-4  decoration-double font-bold'>state</span> خود را قابل دفاع نگه دارید و چگونه وضعیت <span className='text-primary underline underline-offset-4  decoration-double font-bold'>state</span> را بین کامپوننت‌های دوردست به اشتراک بگذارید    
          </p>
     </div>
      <Example exampleNumber={1} exampleName={'Example State'} />
     <div className='w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl' >
         <div className="divider divider-warning text-secondary font-bold text-3xl"> Reacting to input with state </div>
       <p>
       With React, you won’t modify the UI from code directly. For example, you won’t write commands like “disable the button”, “enable the button”, “show the success message”, etc. Instead, you will describe the UI you want to see for the different visual states of your component (“initial state”, “typing state”, “success state”), and then trigger the state changes in response to user input. This is similar to how designers think about UI.

Here is a quiz form built using React. Note how it uses the status state variable to determine whether to enable or disable the submit button, and whether to show the success message instead.       </p>
     </div>
      <div className='w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl flex' >
        <CityQiuz/>
        <Code language="jsx" code={CodeCityQiuz} />
     </div>
     </div>
  )
}

export default App
