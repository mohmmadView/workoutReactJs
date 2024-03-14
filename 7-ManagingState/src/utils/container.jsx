/**
 * Renders a container component with a title, direction, and children.
 *
 * @param {string} Title - The title of the container.
 * @param {string} Direction - The direction of the container.
 * @param {ReactNode} Children - The children to be rendered within the container.
 * @return {ReactElement} The rendered container component.
 */
import { downContext } from "./downContext";
import { useContext } from "react";

export default function Container({ children, Title , ColorText , ColorDivider}) {
  let numContainer = useContext(downContext);
  console.log(numContainer);
  console.log(ColorText,ColorDivider);
  return (
   
      
     <div style={{ direction: `auto` }}
      className={`text-white w-11/12 mx-auto my-12  bg-base-300 p-10 lg:text-xl xl:text-2xl  shadow-md  shadow-${ColorDivider}`}>
      <div style={{direction: "auto"}} className={` text-secondary  pb-8  font-bold text-3xl max-lg:text-xl max-md:text-lg divider divider-${ColorDivider}`}>
       <p className={ColorText}> {Title}</p>
      </div>{console.log(ColorDivider)}
       <downContext.Provider value={numContainer + 3}>
        {children}
          </downContext.Provider>
         </div>
        
   
       
  );
}
