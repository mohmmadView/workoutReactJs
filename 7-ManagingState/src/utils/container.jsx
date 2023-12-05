import { Children } from "react";

export default function Container({Title, Direction,Children}){


    return(
        <>
             <div style={{direction: `${Direction}`}} className="w-10/12 mx-auto my-12 bg-base-300 p-10 text-xl">
        <div className="divider divider-warning text-secondary font-bold text-3xl">
         {Title}
        </div>
        <p>
         {Children} 
        </p>
      </div>
        </>
    )
}