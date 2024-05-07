import PropTypes from "prop-types";
import TitleDivider from "../../titleDivider";
// eslint-disable-next-line react/prop-types
function Container( {Title, ColorText, ColorDivider, children })  {
  return (
    <div style={{ direction: `auto` }}
      className={`text-white w-11/12 mx-auto my-12 
        bg-base-300 pt-10 lg:text-xl xl:text-2xl p-10 shadow-md shadow-${ColorDivider}/50 hover:shadow-${ColorDivider} `}>
      <TitleDivider text1={Title} color2={ColorText} />
        {children}
    </div>
  );
}
  Container.prototypes = {
   children: PropTypes.node,
   Title: PropTypes.string,
   ColorText: PropTypes.string,
   ColorDivider: PropTypes.string,
 }
Container.defaultProps = {
children: "about us",
Title: "Title",
ColorText: "primary",
ColorDivider:  "secondary",
}
export default Container;
