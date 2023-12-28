/**
 * Renders a container component with a title, direction, and children.
 *
 * @param {string} Title - The title of the container.
 * @param {string} Direction - The direction of the container.
 * @param {ReactNode} Children - The children to be rendered within the container.
 * @return {ReactElement} The rendered container component.
 */
export default function Container({Title, Direction,children}){
    return(
       <div style={{direction: `${Direction}`}} className="w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl">
        <div className="divider divider-warning text-secondary font-bold text-3xl">
         {Title}
        </div>
        <p>
         {children} 
        </p>
      </div>
    )
}