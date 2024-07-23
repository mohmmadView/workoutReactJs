import { useState } from 'react';
import { useChatRoom } from './useChatRooms';

export default function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({ 
    serverUrl : serverUrl ,  
    roomId : roomId
});
 

  return (
    <>
      <label className='label'>
        Server URL:
        <input className='input input-primary' value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
      </label>
      <h1 className='text-center mt-5'>Welcome to the {roomId} room!</h1>
    </>
  );
}
