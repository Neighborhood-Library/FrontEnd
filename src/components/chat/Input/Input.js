import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import Axios from 'axios';
import './Input.css';

const socket = io(process.env.REACT_APP_REQ_URL);

const Input = ({ setMessages, messages, transaction }) => {
  const [message, setMessage] = useState('');
  const { user_id } = useParams();

  const sendMessage = event => {
		event.preventDefault();

		if (message !== '') {
      // sends message to server
			socket.emit('message', {
        content: message,
        transaction_id: transaction.id,
        sender_id: parseInt(user_id)
      });
      setMessage('');
		}
  };
  
  useEffect(() => {
    async function getMessages() {
      await Axios
        .get(`${process.env.REACT_APP_REQ_URL}/api/message/tran/${transaction.id}`, {withCredentials: true})
        .then(resp => {
          setMessages(resp.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    
    // returned message from server
		socket.on('retMsg', getMessages());
    
    socket.on('update', getMessages());
  }, [message, messages, setMessages, transaction]);

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
