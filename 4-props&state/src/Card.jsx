import logoReact from './assets/react.svg'
import Modal  from './Modal'
//way 1
function Card({image=logoReact,shoesName,sale,children}){

    console.log(image,shoesName,sale);
if(sale > 0){
    return(
<div className="card w-96  m-4 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body text-black bg-stone-100">
    <h2 className="card-title">{shoesName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    {children}
    <div className="card-actions  justify-between">
      <h1 className='text-4xl font-bold text-lime-600'>{sale} $</h1>
      <label htmlFor="my-modal-6" className="btn btn-secondary">Buy Now</label>
  

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