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

export default function Container({ children, Title }) {
  let numContainer = useContext(downContext);
  return (
    <div
      style={{ direction: `auto` }}
      className="w-11/12 mx-auto my-12 text-white bg-base-300 p-10 text-xl">
      <div style={{direction: "auto"}} className="divider divider-warning pb-8 text-secondary font-bold text-3xl max-lg:text-xl max-md:text-lg">
        {Title}
      </div>
      <downContext.Provider value={numContainer + 1}>
        {children}
      </downContext.Provider>
    </div>
  );
}
