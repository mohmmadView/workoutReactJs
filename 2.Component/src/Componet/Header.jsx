export default function Header(props) {
  return (
    <div className=" text-center p-5 mt-3  ">
      <span className="text-yellow-500 px-2 text-5xl">{props.number}</span>
      <span className="bg-white/10 px-2 border  mx-2 border-yellow-800  text-5xl underline font-bold  text-yellow-600">
        {props.name}
      </span>
    </div>
  );
}
