import PropTypes from "prop-types";

/** 
* @external PropTypes  
* @see https://www.npmjs.com/package/prop-types
*/
/**
*  components.React (and potentially other libraries—see the 
*  checkPropTypes() reference below) will check props 
*  passed to your components against those definitions,
*   and warn in development if they don’t match.
*/

const Person = ({ name, age }) => {
    return (
<div className="w-3/4 flex justify-evenly mx-auto">

  <label className="label">
    <span className="label-text">Props.Types : String</span>
  </label>
  <label className="input-group">
    <span>Name</span>
    <input type="text"  value={name} placeholder=" Type : String" className="input input-bordered" />
  </label>



  <label className="label">
    <span className="label-text">Props.Types : Number</span>
  </label>
  <label className="input-group">
    <span>Age</span>
    <input type="text"  value={age} placeholder=" Type : Number" className="input input-bordered" />
  </label>
</div>


  
    );
  };
  
  Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };
  
  export default Person;