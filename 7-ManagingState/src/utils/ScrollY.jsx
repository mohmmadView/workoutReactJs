import { useState, useEffect } from "react";
/**
 * Returns the current vertical scroll position of the window.
 *
 * @return {number} The vertical scroll position
 */
export default  function ScrollY() {
        // const [scrollY, setScrollY] = useState(0);
        let elmCity = document.querySelector("#cityQuiz");
        useEffect(() => {
            const handleScroll = () => {
                // setScrollY(window.scrollY);
                // console.log(scrollY);
                if(window.scrollY >= 2280){
                      console.log(window.scrollY,"2");
                      elmCity.style={{position:"fixed"}}
                }
               
            };
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);
        return scrollY;
    }