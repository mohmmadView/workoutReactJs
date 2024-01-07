export default function Signup() {
  let messageInput = "";
  return (
    <form
      className="w-5/12 mt-8 self-center"
      onSubmit={(e) => {
        e.preventDefault();
        alert(messageInput);
      }}
    >
      <input
        id="textMsg"
        placeholder="message alert"
        className="w-5/12 h-12 p-2 m-4 self-center bg-slate-300 input input-bordered"
      />
      <button
        className="btn bg-accent"
        onClick={() => {
          var elmInput = document.getElementById("textMsg");
          messageInput = elmInput.value;
        }}
      >
        Send
      </button>
    </form>
  );
}
