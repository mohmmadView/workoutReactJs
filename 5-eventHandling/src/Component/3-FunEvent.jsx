import PropTypes from 'prop-types';

function AlertButton({ message, children }) {
  return (
    <button className="btn text-primary  w-2/12 h-12 p-2 m-4 text-center self-center bg-orange-500" onClick={() => alert(message)}>
      {children}
    </button>
  );
}
function Toolbar(e) {
    console.log('====================================');
    console.log(e);
    console.log('====================================');
    return (
      <div className="w-2/12 h-12 p-2 m-4 text-center self-center bg-orange-500" onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
        <button onClick={(e) => {
            console.log(e);alert('Playing!')}}>
          Play Movie 
        </button>
        <button onClick={() => alert('Uploading!')}>
          Upload Image
        </button>
      </div>
    );
  }
AlertButton.propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
export default function FunEvent(){
return(
    <>
    <AlertButton message="Hello World" >Test</AlertButton>
        <AlertButton message="test">child</AlertButton>
      
        <Toolbar />
    </>
)
}