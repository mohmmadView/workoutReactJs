import Prism from "../utils/Prism";
import { useImmer } from "use-immer";
import codeFullName from "../codeString/AllCodeString.js";
/**
 * Generates a function FullName  give a firstName and  lastName
 *
 * @return {string}  fullName a printed screen
 */
export default function FullName() {
  let [name, setName] = useImmer({ firstName: "", lastName: "" });

  function handleChangeFirstName(e) {
    setName(draft => {
      draft.firstName = e.target.value;
    });
  }
  function handleChangeLastName(e) {
    setName(draft => {
      draft.lastName = e.target.value;
    });
  }
  return (
    <div className="w-11/12 mx-auto my-12 bg-base-300 p-10 text-xl shadow-md shadow-primary/50 hover:shadow-primary ">
      <p className="p-2 text-success">
        For example, this form has a redundant fullName state variable:
      </p>
      <div className="flex">
        <div className="w-1/3 h-48 sticky top-5 m-4">
          <label id="inputName" className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-warning">What is your First name?</span>
            </div>
            <input
            name="inputName"
              type="text"
              onChange={handleChangeFirstName}
              placeholder="Type here"
              className="input input-warning input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <label id="inputLastName" className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-success">What is your Last name?</span>
            </div>
            <input
            name="inputLastName"
              type="text"
              onChange={handleChangeLastName}
              placeholder="Type here"
              className="input input-success input-bordered w-full max-w-xs"
            />
            <div className="pt-4 text-success">
              <span >{name.firstName}</span><span className="text-lime-500"> {name.lastName}</span>
            </div>
          </label>
        </div>
        <Prism
          language="js"
          code={codeFullName[2]}
          fileName={"3-fullName.jsx"}
        />
      </div>
    </div>
  );
}
