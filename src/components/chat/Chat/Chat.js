import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';
import './Chat.css';
import Axios from 'axios';

const socket = io(process.env.REACT_APP_REQ_URL);

const Chat = () => {
	// const [name, setName] = useState('');
	const [users, setUsers] = useState('');
	const [messages, setMessages] = useState([]);
	const [transaction, setTransaction] = useState({});
	
	const {user_id, book_id} = useParams();

	useEffect(() => {
		// returned active users from server
		socket.on('roomData', ({ users }) => {
			setUsers(users);
		});

		return () => {
			socket.emit('disconnect');

			socket.off();
		};
	}, [messages]);

	useEffect(() => {
		async function getMessages() {
			// get transaction info
			await Axios
				.get(`${process.env.REACT_APP_REQ_URL}/api/transaction/${user_id}&${book_id}`,
				{withCredentials: true})
				.then(async res => {

					setTransaction(res.data.message);

					// get messages for transcation
					await Axios
						.get(`${process.env.REACT_APP_REQ_URL}/api/message/tran/${res.data.message.id}`, {withCredentials: true})
						.then(resp => {
							
							// update messages state for db list of messages
							setMessages(resp.data);
						})
						.catch(err => console.log(err));
	
					return;
				})
				.catch(err => console.log(err));
		}

		getMessages();
	}, [book_id, user_id]);

	return (
		<div className='outerContainer'>
			<div className='container'>
				<InfoBar />
				{/* room={room} */}
				<Messages messages={messages} transaction={transaction} />
				{/* name={name} */}
				<Input setMessages={setMessages} messages={messages} transaction={transaction} />
			</div>
			<TextContainer users={users} />
		</div>
	);
};

export default Chat;
