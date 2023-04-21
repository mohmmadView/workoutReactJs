import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css';
import App  from "./App";
import Comment  from './Comment';
class ReactComponent extends React.Component {
  render() {
    return (
    <div className='text-red-800 font-bold bg-black text-center pt-5 bg-black text-5xl'>1-React
     <span className='bg-slate-800 px-2 border border-blue-300 rounded-md  text-blue-500'> {this.props.name} </span>
     <Comment subject="what a component is ?" title="Components are independent, reusable bits of code. They serve the same purpose as JavaScript functions, but they work separately and return HTML. Components are in two types: Class Components and Function Components, in this first tutorial we focus on Function Components."/>
     <App />
     </div>
    
    )
  };
}



const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent name="Component" />);
  