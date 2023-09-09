// eslint-disable-next-line no-unused-vars
const Comment= (props)=>{
 
 return( 
<div className="w-full  m-5 bg-slate-200/10 p-8  divide-y divide-dotted divide-green-400  ">
<h1 className="text-center  text-lime-400 font-serif font-bold text-4xl">{props.subject}</h1>
<p className="m-5 p-1 text-white text-2xl">{props.title}<p className="text-yellow-600 bg-black ">{props.pre}</p></p>
</div>
 )
};   



export default Comment;