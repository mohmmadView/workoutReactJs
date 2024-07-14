import { useState } from "react";

/**
 * Custom hook for managing form input state.
 *
 * @param {any} initialValue - The initial value of the input.
 * @return {Object} An object containing the input value and a change handler.
 */
export default function useFormInput(initialValue)   {
const [value,setValue] = useState(initialValue);
function handleChange(event) {
setValue(event.target.value);
}

const inputProps = {
    value: value,
    onChange: handleChange
}
return inputProps
}