/* jsDoc */
import PropTypes from "prop-types";

/**
 * Renders a Container component with specified Title, ColorText, ColorDivider, and children.
 *
 * @param {string} Title - The title of the container.
 * @param {string} ColorText - The color of the text.
 * @param {string} ColorDivider - The color of the divider.
 * @param {ReactNode} children - The children components to be rendered inside the container.
 * @return {ReactElement} The rendered Container component.
 */
const Container = ({Title, ColorText, ColorDivider, children }) => {
  return (
    <div dir="auto" 
      className={`text-white w-11/12 mx-auto my-6 
        bg-base-300  lg:text-xl xl:text-2xl p-5 shadow-md shadow-${ColorText}/50 hover:shadow-${ColorText} `}>
      <div dir="auto"
        className={`pb-5 font-bold text-3xl max-lg:text-xl max-md:text-lg divider divider-${ColorDivider}`}>
        <p className={`text-${ColorText}`}>{Title}</p>
      </div>
        {children}
    </div>
  );
}
  Container.propTypes = {
   Title: PropTypes.string.isRequired,
   ColorText: PropTypes.string.isRequired,
   ColorDivider: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired
 }
Container.defaultProps = {
children: "about us",
Title: "Title",
ColorText: "primary",
ColorDivider:  "secondary",
}
export default Container;