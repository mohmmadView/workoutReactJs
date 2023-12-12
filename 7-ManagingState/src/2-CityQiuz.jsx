import { useState } from "react";
import Prism from "./utils/Prism";
import CodeCityQiuz2 from "./codeString/AllCodeString";
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
    <div className="w-10/12 mx-auto my-12 bg-base-300 p-4 text-xl flex">
      <div className="w-1/3 sticky top-5 h-56 mb-24 gap-4 p-4 flex flex-col justify-between align-baseline ">
        <h1 className="text-3xl font-bold text-primary">City Quiz</h1>
        <p>
          It is one answer the big cities of usa. The answer to the question?
        </p>
        <textarea
          onChange={textareaHandleChange}
          className="textarea textarea-secondary textarea-lg"
        />
        <p
          className={`${
            message === "answer is Good" ? "text-green-500" : "text-red-500"
          }   `}
        >
          {message}
        </p>
        <button
          onClick={handleSubmit}
          className={`btn btn-secondary w-1/3 self-center ${
            disable && "btn-disabled"
          }`}
        >
          Submit
        </button>
      </div>
      <Prism language="js" code={CodeCityQiuz2[1]} />
    </div>
  );
}
