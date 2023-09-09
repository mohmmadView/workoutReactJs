import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css';
import Header  from  './Componet/Header'
import App  from "./Componet/App";
import Comment  from './Componet/Comment';
import CommentClass from './Componet/CommentClass';
class ReactComponent extends React.Component {
  render() {
    return (
      <div className='container flex flex-col  flex-nowrap mx-auto'> 
<Header number='2-' name="component"/>
<main className=''>
<Comment subject="what a component is ?" title="Components are independent, reusable bits of code. They serve the same purpose as JavaScript functions, but they work separately and return HTML. The component-based approach was introduced to overcome an issue. In this approach, the entire application is divided into a small logical group of code, which is known as components."/>
<Comment subject='what types component ?' title="Components are in two types: Class Components and Function Components, in this first tutorial we focus on Function Components." />
<Comment subject="Functional Components" pre="    function WelcomeMessage(props) {  return <h1>Welcome to the , {props.name}</h1>;  }  " title="In React, function components are a way to write components that only contain a render method and don't have their own state. They are simply JavaScript functions that may or may not receive data as parameters. We can create a function that takes props(properties) as input and returns what should be rendered. A valid functional component can be shown in the below example. "/>

      <CommentClass subject="Class Components" title="The functional component is also known as a stateless component because they do not hold or manage state. It can be explained in the below example." pre="import React, { Component } from 'react';  
class App extends React.Component {  
   render(){  
      return ( <div>  
            <First/>  
            <Second/>  
         </div>  
      );  
   } } "
 /> 
     


</main>
<footer>
  <App />
</footer>
    </div>
   
    )
  };
}



const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent name="Component" />);
  