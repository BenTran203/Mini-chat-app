import React, { useEffect, useState } from 'react';
import socket from '../socket';

const Chat = ({ user }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    socket.on('chatHistory', (messages) => {
      setChatHistory(messages);
    });

    socket.on('receiveMessage', (message) => {
      setChatHistory((prev) => [...prev, message]);
    });

    return () => {
      socket.off('chatHistory');
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = () => {
    const data = { user: user.name, text: message };
    socket.emit('sendMessage', data);
    setMessage('');
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div>
        {chatHistory.map((msg, index) => (
          <p key={index}>
            <strong>{msg.user}</strong>: {msg.text} <em>({msg.time})</em>
          </p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
