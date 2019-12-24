import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';
import './Chat.css';

let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [users, setUsers] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	const ENDPOINT = 'localhost:5000';

	// useEffect(() => {
	// 	const { name, room } = queryString.parse(location.search);

		const socket = io(ENDPOINT);

	// 	setRoom(room);
	// 	setName(name);

	// 	socket.emit('join', { name, room }, error => {
	// 		if (error) {
	// 			alert(error);
	// 		}
	// 	});
	// }, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on('retMsg', message => {
			setMessages([...messages, message]);
		});

		socket.on('roomData', ({ users }) => {
			setUsers(users);
		});

		return () => {
			socket.emit('disconnect');

			socket.off();
		};
	}, [messages]);

	const sendMessage = event => {
		event.preventDefault();

		if (message) {
			socket.emit('message', message, () => setMessage(''));
		}
	};

	return (
		<div className='outerContainer'>
			<div className='container'>
				<InfoBar room={room} />
				<Messages messages={messages} name={name} />
				<Input
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
				/>
			</div>
			<TextContainer users={users} />
		</div>
	);
};

export default Chat;
