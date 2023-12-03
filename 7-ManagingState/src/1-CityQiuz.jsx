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
    let message = answer === "New York" ? "answer is wrong" : "answer good" 
    function handleSubmit(){
        setDisable(true)
    }   
return (
    <div className="w-1/2   p-4 flex flex-col justify-between align-baseline ">

        <h1 className="text-3xl font-bold text-primary">City Quiz</h1>
        <p>It is one of the big cities of Iran. The answer to the question?</p>
        <textarea className="textarea textarea-secondary textarea-lg"></textarea>
        <button  className="btn btn-secondary w-1/3 self-center ">Submit</button>
        {/* <ul>
            {cities.map((city) => (
                <li key={city}>{city}</li>
            ))}
        </ul> */}
    </div>
)

}