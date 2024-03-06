import { useRef } from "react";
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
    </>
  );
}
