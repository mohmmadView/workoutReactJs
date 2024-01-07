import PropTypes from "prop-types";

export default function Example(props) {
  // Component code here

  return (
    <section className="m-12 bg-slate-600 border-2 border-dotted border-fuchsia-300 rounded-2xl">
      <h1 className="p-2 mb-2 bg-slate-700 text-3xl text-lime-600 font-normal border rounded-lg ring-1 inline  after:bg-white ">
        Example {props.exampleNumber} :{" "}
        <span className="text-orange-400">{props.exampleName}</span>
      </h1>
    </section>
  );
}
Example.propTypes = {
  exampleNumber: PropTypes.number.isRequired,
  exampleName: PropTypes.string.isRequired,
  // Other prop validations
};
