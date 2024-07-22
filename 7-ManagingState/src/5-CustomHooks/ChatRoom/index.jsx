import { useState } from 'react';
import ChatRoom from './ChatRoom.jsx';

export default function App() {
  const [roomId, setRoomId] = useState('general');
  return (
    <div className="w-11/12 mx-auto my-12 bg-base-300 p-10 text-xl shadow-md shadow-primary/50 hover:shadow-primary ">
      <label className="label">
        Choose the chat room:{' '}
        <select
        className='select select-primary'
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
      />
    </div>
  );
}
