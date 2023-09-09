import React from "react";


class ClassEventHandling extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "Learn React"
        };
    }
     /**
    * A function to handle a click event.
    *
    * @param {number} num1 - The first number.
    * @param {number} num2 - The second number.
    * @param {Event} event - The click event object.
    */
    ClickHandler(num1, num2, event) {
        console.log(event);
        console.log("num1 = " + num1 + " num2 = "  + num2 + " num1 + num2 = " + (num1 + num2));
    }
    render(){
        return(
            <div>
                <h1 className="text-2xl text-red-500 font-bold ">{this.state.name}</h1>
                <button className="btn  focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" 
                onClick={this.ClickHandler.bind(this, 10, 20)}
                >Click Console Log </button> 
                <button className="btn  focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" 
                onClick={(event)=>this.ClickHandler(10, 20,event)}
                >Click Console Log</button>
               
            </div>
        )
    }

}
export default ClassEventHandling