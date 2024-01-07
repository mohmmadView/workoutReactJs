import React from "react";
import ThemedComponent from './ThemedComponent'
import {ThemeProvider} from './ThemeContext'
const App =()=>{
    return(
    <ThemeProvider >
        <div>
            <h1 className="text-3xl font-bold underline text-center p-4 text-warning">App Theme Context</h1>
            <ThemedComponent />
        </div>
    </ThemeProvider>
    )
}

export default App