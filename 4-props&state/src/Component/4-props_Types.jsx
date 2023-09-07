import PropTypes, { number } from "prop-types";

/** 
*  components.React (and potentially other libraries—see the 
*  checkPropTypes() reference below) will check props 
*  passed to your components against those definitions,
*   and warn in development if they don’t match.
 * Renders a Person component with the given props.
* @external PropTypes  
* @see https://www.npmjs.com/package/prop-types
*/
/**
 *
 * @param {object} props - The props for the Person component.
 * @param {string} props.name - The name of the person.
 * @param {number} props.age - The age of the person.
 * @return {JSX.Element} - The rendered Person component.
*/

const Person = (props) => {

    return (
<div className="w-3/4 flex justify-evenly mx-auto">

  <label className="label">
    <span className="label-text">Props.Types : String</span>
  </label>
  <label className="input-group">
    <span>Name</span>
    <input type="text"  value={props.name} placeholder=" Type : String" className="input input-bordered" />
  </label>

  <label className="label">
    <span className="label-text">Props.Types : Number</span>
  </label>
  <label className="input-group">
    <span>Age</span>
    <input type="text"  value={props.age} placeholder=" Type : Number" className="input input-bordered" />
  </label>
</div>
    );
  };
  
  Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };
  
  export default Person;