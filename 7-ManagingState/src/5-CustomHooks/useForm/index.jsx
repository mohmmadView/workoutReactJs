import useFormInput from './useFormInput';
export default function index() {
    let setFirstName  = useFormInput('Movie')
    let setLastName  = useFormInput('SpiderMan')

    return (
     <div className=" justify-center">
            <div className="w-full m-4 flex justify-center">
                <input className='input input-accent m-2' {...setFirstName} placeholder="first name"/>
                <input className='input input-accent m-2' {...setLastName} placeholder="last name"/>
            </div>
             <div className="card card-side bg-base-100 shadow-xl">
            
                <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New <span className='text-primary'>{setFirstName.value} </span> is released!</h2>   <h1 className='text-start text-3xl m-2 p-2 text-primary'> {setLastName.value}</h1>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
     </div>
    )
}
