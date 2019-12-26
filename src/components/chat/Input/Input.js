import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Input.css';

const socket = io(process.env.REACT_APP_REQ_URL);

const Input = ({ setMessages, messages }) => {
	const [message, setMessage] = useState('');

  const sendMessage = event => {
		event.preventDefault();

		if (message) {
			// sends message to server
			socket.emit('message', message);
			setMessage('');
		}
  };
  
  useEffect(() => {
    // returned message from server
		socket.on('retMsg', message => {
			setMessages([...messages, message]);
		});
  });

  return (
  <form className='form'>
    <input
      className='input'
      type='test'
      placeholder='Type a message...'
      value={message}
      onChange={e => setMessage(e.target.value)}
      onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
    />
    <button className='sendButton' onClick={e => sendMessage(e)}>
      Send
    </button>
  </form>
  );
};


export default Input;
