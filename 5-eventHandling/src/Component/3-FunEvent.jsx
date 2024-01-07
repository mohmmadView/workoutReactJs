import PropTypes from "prop-types";

function AlertButton({ message, children }) {
  return (
    <button
      className="btn bg-primary text-white  w-2/12 h-12 p-2 m-4 text-center self-center "
      onClick={() => alert(message)}
    >
      {children}
    </button>
  );
}
function Toolbar() {
  return (
    <div
      className="w-2/12 h-12  m-4 text-center self-center "
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <button
        className="btn bg-secondary mr-1 "
        onClick={(e) => {
          console.log(e);
          alert("Playing!");
        }}
      >
        Play Movie
      </button>
      <button className="btn bg-warning " onClick={() => alert("Uploading!")}>
        Upload Image
      </button>
    </div>
  );
}
AlertButton.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default function FunEvent() {
  return (
    <>
      <AlertButton message="Hello World">Test</AlertButton>
      <AlertButton message="test">child</AlertButton>
      <Toolbar />
    </>
  );
}
