import { useState } from "react";
import Prism from "../utils/Prism";
import CodeCityQiuz from "../codeString/AllCodeString";
/**
 * A function to handle form submission asynchronously.
 * @return {Promise} a promise representing the result of the form submission
 */
export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");
  /**
   * A function to handle form submission asynchronously.
   *
   * @param {Event} e - the event object
   * @return {Promise} a promise representing the result of the form submission
   */
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
  /**
   * Handle the change event for a textarea.
   *
   * @param {object} e - The event object
   * @return {void}
   */
  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }
  return (
    <div className="w-11/12 mx-auto my-12 bg-base-300 p-4 text-xl gap-2  flex   shadow-md shadow-secondary/50 hover:shadow-secondary">
      <div className="w-1/3 max-h-40  mb-60 sticky top-5">
        <div className="flex flex-col p-4 bg-secondary-content flex-wrap border border-secondary rounded-md">
          <h2 className="text-2xl p-2 text-primary">City quiz</h2>
          <p>
            In which city is there a billboard that turns air into drinkable
            water?
          </p>
        </div>
        <form id="cityQuizForm" className="flex flex-col" onSubmit={handleSubmit}>
          <textarea
          name="cityQuizForm"
            className=" textarea textarea-lg textarea-secondary my-4"
            value={answer}
            onChange={handleTextareaChange}
            disabled={status === "submitting"}
          />
          {/* </div> */}
          <br />
          <button
            className="btn btn-secondary m-auto self-center"
            disabled={answer.length === 0 || status === "submitting"}>
            Submit
          </button>
          <p
            className={`text-xs self-end ${
              status === "submitting" ? "text-warning" : "text-success"
            } ${answer.length === 0 ? "hidden" : "block"}`}>
            {status}
          </p>
          {error !== null && <p className="Error">{error.message}</p>}
        </form>
      </div>

      <Prism language="js" code={CodeCityQiuz[0]} fileName={"1-CityQuiz.jsx"} />
    </div>
  );
  /**
   * Submit a form with the given answer.
   *
   * @param {string} answer - the answer to submit
   * @return {Promise} a promise that resolves when the form is successfully submitted, or rejects with an error message
   */
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
