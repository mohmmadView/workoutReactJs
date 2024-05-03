import { createContext } from "react";
const  HandlerContext = createContext();
const PrevContext =(children)=>{
    return(
        <HandlerContext.Provider value={children}>
            {children}
        </HandlerContext.Provider>
    )
}
export {PrevContext}