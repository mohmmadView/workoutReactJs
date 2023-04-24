export default function Header() {

    return(
    <div className='bg-black p-3'>
    <h1 className="mx-auto text-center m-1 p-3 text-3xl font-bold font-serif bg-yellow-500 w-1/3">TodoList</h1>
    <div className='flex justify-center mt-6'>
        <div className='bg-blue-500 text-2xl w-1/12 p-2 text-center font-bold'>#</div>
        <div className='bg-red-500 w-1/4 font-bold p-2 text-center text-2xl'>subject</div>
        <div className="bg-green-500 w-1/2 font-bold p-2 text-center text-2xl">title</div>
    </div>
    
    </div>)
 }