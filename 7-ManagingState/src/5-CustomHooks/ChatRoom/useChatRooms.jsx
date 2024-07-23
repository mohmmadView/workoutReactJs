import { useEffect } from "react";
import { createConnection } from './Chat';
import { showNotification } from './notification';
export function useChatRoom({ serverUrl, roomId }) {
    
    useEffect(() => {
      const options = {
        serverUrl: serverUrl,
        roomId: roomId
      };
      const connection = createConnection(options);
      connection.connect();
      connection.on('message', (msg) => {
        showNotification('New message: ' + msg);
      });
      return () => connection.disconnect();
    }, [roomId, serverUrl]);
  }