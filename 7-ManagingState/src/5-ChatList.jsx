import { useState } from "react";
import Prism from "./utils/Prism";
import codeChatList from "./codeString/AllCodeString";
export default function ChatList() {
  let [id, setId] = useState(0);
  return (
    <div className="w-10/12 mx-auto my-12 bg-base-300 flex p-10 text-xl">
      <div className="w-1/3 flex">
        <ContactList giveId={setId} list={contacts} />
        <Chat listContact={contacts[id]} />
      </div>
      <Prism language="js" code={codeChatList[4]} fileName={"5-ChatList.jsx"} />
    </div>
  );
}
const contacts = [
  { id: 0, name: "mohammad", email: "mohammad@gmail.com" },
  { id: 1, name: "Ahmad", email: "Ahmad@gmail.com" },
  { id: 2, name: "reza", email: "reza@gmail.com" },
];
function ContactList({ list, giveId }) {
  return (
    <div className="w-5/12">
      {list.map((contact) => {
        return (
          <button
            onClick={() => giveId(contact.id)}
            className="w-11/12 m-1 btn btn-primary flex"
            key={contact.id}
          >
            {contact.name}
          </button>
        );
      })}
    </div>
  );
}
function Chat({ listContact }) {
  let [message, setMessage] = useState("");
  return (
    <div className="w-7/12 flex flex-col">
      <textarea
        className="w-full textarea textarea-bordered h-4/6"
        placeholder={listContact.name}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button className="w-5/6  mt-1 h-1/6 self-center btn btn-accent">
        {listContact.email}
      </button>
    </div>
  );
}
