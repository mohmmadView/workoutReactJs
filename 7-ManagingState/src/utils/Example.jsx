//  import PropTypes from 'prop-types';

/**
 * Renders an example component.
 *
 * @param {number} props.exampleNumber - The example number.
 * @param {string} props.exampleName - The name of the example.
 * @return {ReactElement} The rendered example component.
 */
export default function Example(props) {
  // Component code here

  return (
    <section className="m-10 bg-secondary-content border-2 border-dotted border-secondary rounded-2xl">
      <h1 className="p-3 mb-2 bg-primary-content text-2xl text-primary font-normal border rounded-lg ring-1 inline  after:bg-white ">
        {" "}
        {props.exampleNumber} :{" "}
        <span className="text-orange-400">{props.exampleName}</span>
      </h1>
    </section>
  );
}
// Example.propTypes = {
//     exampleNumber: PropTypes.string.isRequired,
//     exampleName: PropTypes.string.isRequired,
//     // Other prop validations
//   }
