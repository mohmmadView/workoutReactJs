import useFormInput from './useFormInput';
export default function index() {
    let setFirstName  = useFormInput('mohammad')
    let setLastName  = useFormInput('rahgoshay')

    return (
     <div className=" justify-center">
            <div className="w-full m-4 flex justify-center">
                <input className='input input-accent m-2' {...setFirstName} placeholder="first name"/>
                <input className='input input-accent m-2' {...setLastName} placeholder="last name"/>
            </div>
              <h1 className='text-center text-3xl m-2 p-2 text-primary'>{setFirstName.value}  {setLastName.value}</h1>
     </div>
    )
}
