import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./utils/Header";
import Center from "./Center";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <p>
          it is Clock Iran :
          <span className="font-bold text-blue-600">
            {this.state.date.toLocaleTimeString()}
          </span>
        </p>

        <p>
          it is Clock Uae :
          <span className="font-bold text-blue-600">
            {this.state.date.toLocaleTimeString()}
          </span>
        </p>
      </div>
    );
  }
}
function BtnClick(props) {
  const [count, setCount] = useState(10);

  return (
    <section className="flex flex-col p-3">
      <h2 className="p-2 bg-black  text-white w-1/3 mx-auto">
        <span className="text-red-700 font-bold text-3xl ">{count}</span> back
        in count
      </h2>
      <button
        className="bg-sky-400 m-2 p-3 border w-1/3 mx-auto border-black rounded-2xl hover:bg-sky-600"
        onClick={() => setCount(count - 1)}
      >
        count Down
      </button>
    </section>
  );
}
function Footer() {
  return (
    <footer className="text-center text-2xl p-8">
      <h2 className="text-center text-4xl font-bold bg-slate-300 p-5">
        State Example
      </h2>
      <p className="text-center text-2xl p-8">
        {" "}
        interactive examples for React and Vue powered by Headless UI, plus
        vanilla HTML if you’d rather write any necessary JS yourself
      </p>
      <Clock />
      <BtnClick />
      There used to be a render method exported from react-dom. This got
      deprecated in React 18 to make way for React 18's concurrent features. If
      you see the code below, note that it's outdated (but still works in React
      18):
    </footer>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header name="props&state" />
    <Center />
    <Footer />
  </React.StrictMode>,
);
