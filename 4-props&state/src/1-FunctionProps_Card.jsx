import logoReact from './assets/react.svg'
import Modal  from './Modal'
/**
@external logoReact is a logo React @typedef {svg: string}
@external Modal Component in Card1 Component button{BUYNow} in run Modal
*/
//way 1
/**
 * 
 * @param {string} [image=logoReact] - url image to default logoReact
 * @param {string} shoesName - name of shoes card-title
 * @param {number} sale - sale price in  shoes card
 * @param {*} children - children cards
 * @returns 
 */
function Card({image=logoReact,shoesName,sale,children}){

    console.log(image,shoesName,sale);
if(sale > 0){
    return(
<div className="card w-32 m-1 sm:w-44 md:w-52 md:m-2 lg:w-72  xl:w-96  shadow-xl ">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body max-sm:p-2 max-sm:text-xs text-black bg-violet-300 ">
    <h2 className="card-title text-sky-800">{shoesName}</h2>
    <p>If a children Card Shoes choose?</p>
    {children}
    <div className="card-actions  justify-between">
      <h1 className='max-sm:text-base text-4xl font-bold text-fuchsia-800'>{sale} $</h1>
      <label htmlFor="my-modal-6" className="btn max-sm:w-11/12">Buy Now</label>
  <Modal />

    </div>
  </div>
</div>


    )
}
}

 export default Card

//  Way 2
// function Card(props){
//     let {image,shoesName,sale}=props;

//     console.log(image,shoesName,sale);
// if(props.sale > 0){
//     return(
// <div className="card w-96  m-4 bg-base-100 shadow-xl">
//   <figure><img src={props.image} alt="Shoes" /></figure>
//   <div className="card-body text-black bg-stone-100">
//     <h2 className="card-title">{props.shoesName}</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions  justify-between">
//       <h1 className='text-4xl font-bold text-lime-600'>{props.sale} $</h1>
//       <button className="btn btn-secondary">Buy Now</button>
//     </div>
//   </div>
// </div>


//     )
// }
// }
// Card.defaultProps = {
//     image:logoReact

// }
//  export default Card