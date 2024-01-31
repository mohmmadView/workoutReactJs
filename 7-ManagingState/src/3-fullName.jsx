import Prism from "./utils/Prism";
import { useImmer } from "use-immer";
import codeFullName from "./codeString/AllCodeString.js";
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
    <div className="w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl">
      <p className="p-2 text-success">
        For example, this form has a redundant fullName state variable:
      </p>
      <div className="flex">
        <div className="w-1/3 h-48 sticky top-5 m-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your First name?</span>
            </div>
            <input
              type="text"
              onChange={handleChangeFirstName}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your Last name?</span>
            </div>
            <input
              type="text"
              onChange={handleChangeLastName}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <p className="pt-4 text-success">
              {name.firstName} {name.lastName}
            </p>
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
