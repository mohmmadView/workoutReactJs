import { useState } from "react";
import Prism from "./utils/Prism";
import CodeCityQiuz from "./codeString/AllCodeString";
export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");
  // if (status === "success") {
  //   return (<h1>That right!</h1>)
  // }
  
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div className="w-10/12 mx-auto my-12 bg-base-300 p-4 text-xl  flex">
      <div
        id="cityQuiz"
        className="w-1/3 max-h-40 border p-4 mb-44 sticky top-5"
      >
        <h2 className="text-3xl p-2 text-primary">City quiz</h2>
        <p>
          In which city is there a billboard that turns air into drinkable
          water?
        </p>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <textarea
            className=" textarea textarea-lg textarea-secondary my-4"
            value={answer}
            onChange={handleTextareaChange}
            disabled={status === "submitting"}
          />
          <br />
          <button
            className="btn btn-secondary m-auto self-center"
            disabled={answer.length === 0 || status === "submitting"}
          >
            Submit
          </button>
          <p
            className={`text-xs self-end ${
              status === "submitting" ? "text-warning" : "text-success"
            } ${answer.length === 0 ? "hidden" : "block"}`}
          >
            {status}
          </p>
          {error !== null && <p className="Error">{error.message}</p>}
        </form>
      </div>

      <Prism language="js" code={CodeCityQiuz} />
    </div>
  );

  function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== "lima";
        if (shouldError) {
          reject(new Error("Good guess but a wrong answer. Try again!"));
        } else {
          resolve();
        }
      }, 1500);
    });
  }
}
