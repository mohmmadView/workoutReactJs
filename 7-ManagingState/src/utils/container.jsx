/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { createContext, useContext } from "react";

function Container( {Title, ColorText, ColorDivider, children })  {
  return (
    <div style={{ direction: `auto` }}
      className={`text-white w-11/12 mx-auto my-12 
        bg-base-300 pt-10 lg:text-xl xl:text-2xl p-10 shadow-md shadow-${ColorText}/50 hover:shadow-${ColorText} `}>
      <div style={{ direction: "auto" }}
        className={`pb-8 font-bold text-3xl max-lg:text-xl max-md:text-lg divider divider-${ColorDivider}`}>
        <p className={`text-${ColorText}`}>{Title}</p>
      </div>
        {children}
    </div>
  );
}
  Container.prototypes = {
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