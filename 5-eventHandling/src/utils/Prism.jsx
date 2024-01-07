import { useEffect } from "react";
import Prism from "prismjs";
import PropTypes from "prop-types";
export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll(Prism.highlight);
  }, []);
  return (
    <div className="w-1/2 mt-4 p-5 mx-8 mockup-code overflow-scroll bg-violet-800 text-primary-content text-left">
      <code className="Code">
        <h2> Code Syntax Block {language}</h2>
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </code>
    </div>
  );
}

Code.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};
