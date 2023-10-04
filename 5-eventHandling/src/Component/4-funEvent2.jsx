export default function Signup() {
    return (
      <form className="w-5/12 h-52 bg-yellow-700 p-4 " onSubmit={e => {
        e.preventDefault();
        alert('Submitting!');
      }}>
        <input className="w-5/12 h-12 p-2 m-4 text-center self-center bg-orange-500" />
        <button>Send</button>
      </form>
    );
  }
  