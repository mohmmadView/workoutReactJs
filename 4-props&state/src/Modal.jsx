
export default function Modal(children){

    return(
        <>
{/* The button to open modal */}
{/* <label  className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
         <h3 className="font-bold text-white text-lg">Congratulations random Internet user!</h3>
    <p className="py-4 text-red-300">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn">Yay!</label>
     </div>
    </div>
  </div>

</>


    )
}