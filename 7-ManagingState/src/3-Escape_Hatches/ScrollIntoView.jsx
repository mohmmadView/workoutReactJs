import { useRef } from "react";
import Code from '../utils/Prism'
import imgCat_1 from './img/200.jpeg'
import imgCat_2 from './img/cat-2.jpg'
import imgCat_3 from './img/cat-3.jpg'
export default function ScrollIntoView() {
 const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);
  const checkTest = useRef(null);
  function TestClick() {
  let testC =  checkTest.current.hasAttribute('class');
  console.log(testC);
  }
  function handleScrollClick1() {
    firstCatRef.current.scrollIntoView({
      behavior: "smooth" ,
      block: 'nearest',
      inline: 'center'
});
  }
  function handleScrollClick2() {
    secondCatRef.current.scrollIntoView({ 
         behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
     });
  }
  function handleScrollClick3() {
    thirdCatRef.current.scrollIntoView({ 
         behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
     });
  }

   return (
    <>
     <div className="my-4">
        <nav className="flex justify-center bg-success-content text-success border border-success m-8 rounded-lg ring-1  p-5 gap-8 ">
          <button className="btn btn-success ring-1  ring-inset " onClick={handleScrollClick1}>
            Tom
          </button>
          <button className="btn btn-success ring-1  ring-inset " onClick={handleScrollClick2}>
            Maru
          </button>
          <button className="btn btn-success ring-1  ring-inset " onClick={handleScrollClick3}>
            Jellylorum
          </button>
         
        </nav>
        <div className="max-w-3xl m-auto">
          <ul className=" carousel carousel-center   p-4 space-x-32 bg-neutral rounded-box  gap-14">
            <li className="carousel-item">
              <img
                src={imgCat_1}
                alt="Tom"
                ref={firstCatRef}
              />
            </li>
            <li  className="carousel-item">
              <img
                src={imgCat_2}
                alt="Maru"
                ref={secondCatRef}
              />
            </li>
            <li  className="carousel-item">
              <img
                src={imgCat_3}
                alt="Jellylorum"
                ref={thirdCatRef}
              />
            </li>
             
          </ul>
        </div>
     </div>
     <Code fileName={`ScrollIntoView.jsx`} code={`
import { useRef } from "react";
import Code from '../utils/Prism'

export default function ScrollIntoView() {
const firstCatRef = useRef(null);
const secondCatRef = useRef(null);
const thirdCatRef = useRef(null);

  function handleScrollClick1() {
  firstCatRef.current.scrollIntoView({
      behavior: "smooth" ,
      block: 'nearest',
      inline: 'center'
});
  }
  function handleScrollClick2() {
    secondCatRef.current.scrollIntoView({ 
         behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
     });
  }
  function handleScrollClick3() {
    thirdCatRef.current.scrollIntoView({ 
         behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
     });
  }

   return (
    <>
     <div>
        <nav className="flex justify-center bg-success-content text-success border border-success m-8 rounded-lg ring-1  p-5 gap-8 ">
          <button className="btn btn-success ring-1  ring-inset " onClick={handleScrollClick1}>
            Tom
          </button>
          <button className="btn btn-success ring-1  ring-inset " onClick={handleScrollClick2}>
            Maru
          </button>
          <button className="btn btn-success ring-1  ring-inset " onClick={handleScrollClick3}>
            Jellylorum
          </button>
        </nav>
        <div>
          <ul className="carousel carousel-center max-w-3xl  p-4 space-x-32 bg-neutral rounded-box  gap-14">
            <li className="carousel-item">
              <img
                src="https://placekitten.com/g/200/200"
                alt="Tom"
                ref={firstCatRef}
              />
            </li>
            <li  className="carousel-item">
              <img
                src="https://placekitten.com/g/300/200"
                alt="Maru"
                ref={secondCatRef}
              />
            </li>
            <li  className="carousel-item">
              <img
                src="https://placekitten.com/g/250/200"
                alt="Jellylorum"
                ref={thirdCatRef}
              />
            </li>
          </ul>
        </div>
     </div>
    
    </>
  );
}

     `} language={"js"} widthIN={`w-full`} />
    </>
  );
}
