import PropTypes from "prop-types";
import { createContext, useContext } from "react";

function Container( {Title, ColorText, ColorDivider, children })  {
  const PrevContext = createContext();
  return (
    <div style={{ direction: `auto` }}
      className={`text-white w-11/12 mx-auto my-12 
        bg-base-300 pt-10 lg:text-xl xl:text-2xl p-10 shadow-md shadow-${ColorText}/50 hover:shadow-${ColorText} `}>
      
      <PrevContext.Provider value={children}>
        {children}
      </PrevContext.Provider>
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
