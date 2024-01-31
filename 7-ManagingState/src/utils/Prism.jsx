import { useEffect, useState } from "react";
import Prism from "prismjs";
export default function Code({ code, language, fileName, widthIN }) {
  useEffect(() => {
    Prism.highlightAll(Prism.highlight);
  }, []);
  let [overflow, setOverflow] = useState(false);
  function handleClick() {
    if (!overflow) {
      setOverflow(true);
    } else {
      setOverflow(false);
    }
  }
  return (
    <div className={`w-2/3 ${widthIN}  ml-2`}>
      <div
        className={
          overflow
            ? ``
            : ` h-96 overflow-auto ` +
              `w-full p-1  mockup-code text-white rounded-none text-left`
        }>
        <code className="Code">
          <h2 className="flex justify-around text-center text-success p-4 font-bold ">
            {fileName}
            <svg
              className=" fill-red-100 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(code);
                document.body.insertAdjacentHTML(
                  "afterbegin",
                  `
            <div id="alert" role="alert" class="alert alert-success w-1/12 fixed bottom-2 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p>Copy</p>
            </div>
            `,
                );
                setTimeout(
                  () => document.querySelector("#alert").remove(),
                  3000,
                );
              }}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <path d="M3 3a2 2 0 0 1 2-2h9.982a2 2 0 0 1 1.414.586l4.018 4.018A2 2 0 0 1 21 7.018V21a2 2 0 0 1-2 2H4.75a.75.75 0 0 1 0-1.5H19a.5.5 0 0 0 .5-.5V8.5h-4a2 2 0 0 1-2-2v-4H5a.5.5 0 0 0-.5.5v6.25a.75.75 0 0 1-1.5 0Zm12-.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0-.146-.336l-4.018-4.018A.5.5 0 0 0 15 2.5Z"></path>
              <path d="M4.53 12.24a.75.75 0 0 1-.039 1.06l-2.639 2.45 2.64 2.45a.75.75 0 1 1-1.022 1.1l-3.23-3a.75.75 0 0 1 0-1.1l3.23-3a.75.75 0 0 1 1.06.04Zm3.979 1.06a.75.75 0 1 1 1.02-1.1l3.231 3a.75.75 0 0 1 0 1.1l-3.23 3a.75.75 0 1 1-1.021-1.1l2.639-2.45-2.64-2.45Z"></path>
            </svg>
          </h2>
          <pre>
            <code className={`language-${language}`}>{code}</code>
          </pre>
        </code>
      </div>
      <button
        className="w-[100%]  btn  btn-warning rounded-t"
        onClick={handleClick}>
        more
      </button>
    </div>
  );
}
