export default function Example(props) {
  return (
    <section className="m-6 bg-slate-600 border-2 border-dotted border-fuchsia-300 rounded-2xl">
      <h1 className="p-2 mb-2 bg-slate-700 text-3xl text-lime-600 font-normal border rounded-lg ring-1 inline  after:bg-white ">
        Example {props.exampleNumber} :{" "}
        <span className="text-orange-400">{props.exampleName}</span>
      </h1>
    </section>
  );
}
