import { useState } from "react";
import Prism from "../utils/Prism";
import CodeCityQiuz2 from "../codeString/AllCodeString";
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
  ];
  let [answer, setAnswer] = useState("");
  let [disable, setDisable] = useState(false);
  let [message, setMessage] = useState("");
  function textareaHandleChange(e) {
    setAnswer(e.target.value);
    setDisable(false);
  }
  function handleSubmit() {
    setDisable(true);
    let i;
    for (i = 0; i < cities.length; i++) {
      if (
        cities[i].toLowerCase().split(" ").join("") ===
        answer.toLowerCase().split(" ").join("")
      ) {
        setMessage("answer is Good");
        break;
      } else {
        setMessage("answer is wrong");
      }
    }
  }
  return (
    <div className="w-11/12 mx-auto my-12 bg-base-300 p-4  text-xl gap-2 flex  shadow-md shadow-secondary/50 hover:shadow-secondary">
      <div className="w-1/3 max-h-40  mb-60 sticky top-5 ">
        <div className="flex flex-col p-4 bg-secondary-content flex-wrap border border-secondary rounded-md">
        <h2 className="text-2xl p-2 text-primary">  City Quiz 2</h2>
        <p>
          It is one answer the big cities of usa. The answer to the question?
        </p>
        </div>
        <form id="cityQuizForm" className="flex flex-col">
          
          <textarea
          name="cityQuizForm"
          placeholder="Enter Your Answer City"
          title="Enter Your Answer City"
            onChange={textareaHandleChange}
            className="textarea textarea-secondary textarea-lg my-4"
          />
          <p
            className={`${
              message === "answer is Good" ? "text-green-500" : "text-red-500"
            }   `}>
            {message}
          </p>
          <button
            onClick={handleSubmit}
            className={`btn btn-secondary w-1/3 self-center ${
              disable && "btn-disabled"
            }`}>
            Submit
          </button>
        </form>
      </div>
      <Prism
        language="js"
        code={CodeCityQiuz2[1]}
        fileName={"2-CityQiuz.jsx"}
      />
    </div>
  );
}
