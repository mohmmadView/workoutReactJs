import PropTypes from "prop-types";
/**
 * Renders a container component with a title, direction, and children.
 *
 * @param {string} Title - The title of the container.
 * @param {string} Direction - The direction of the container.
 * @param {ReactNode} Children - The children to be rendered within the container.
 * @return {ReactElement} The rendered container component.
 */

 export default function Container( {Title, ColorText, ColorDivider, children })  {
 

  return (
    <div style={{ direction: `auto` }}
      className={`text-white w-11/12 mx-auto my-12 
        bg-base-300 pt-10 lg:text-xl xl:text-2xl  shadow-md  ${ColorDivider} p-10   `}>
      <div style={{ direction: "auto" }}
        className={`text-secondary pb-8 font-bold text-3xl max-lg:text-xl max-md:text-lg divider divider-${ColorDivider}`}>
        <p className={ColorText}>{Title}</p>
      </div>
        {children}
    </div>
  );
}

// Container.Prototypes = {
//   children: PropTypes.node,
//   Title: PropTypes.string,
//   ColorText: PropTypes.string,
//   ColorDivider: PropTypes.string,
// }
  Container.prototypes = {
   children: PropTypes.node,
   Title: PropTypes.string,
   ColorText: PropTypes.string,
   ColorDivider: PropTypes.string,
 }
Container.defaultProps = {
children: "about us",
Title: "Title",
ColorText: "text-secondary",
ColorDivider: "divider-primary",
}