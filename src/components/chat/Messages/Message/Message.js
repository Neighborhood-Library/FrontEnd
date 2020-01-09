import React from 'react';
import ReactEmoji from 'react-emoji';
import './Message.css';

const Message = ({ message }) => {
	//, user }, name }

	let isSentByCurrentUser = Math.round(Math.random() * 1) === 0 ? true: false;

	// const trimmedName = name.trim().toLowerCase();

	// if (user === trimmedName) {
	// 	isSentByCurrentUser = true;
	// }

	return isSentByCurrentUser ? (
		<div className='messageContainer justifyEnd'>
			<p className='sentText pr-10'>Name</p>
			{/* {trimmedName} */}
			<div className='messageBox backgroundBlue'>
				<p className='messageText colorWhite'>{ReactEmoji.emojify(message.content)}</p>
			</div>
		</div>
	) : (
		<div className='messageContainer justifyStart'>
			<div className='messageBox backgroundLight'>
				<p className='messageText colorDark'>{ReactEmoji.emojify(message.content)}</p>
			</div>
			<p className='sentText pl-10 '>User</p>
			{/* {user} */}
		</div>
	);
};

export default Message;
