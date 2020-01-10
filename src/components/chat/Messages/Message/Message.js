import React from 'react';
import ReactEmoji from 'react-emoji';
import './Message.css';

class Message extends React.Component {

	render() {
		return this.props.id === 'user2' ? (
			<div className='messageContainer justifyEnd'>
				<p className='sentText pr-10'>Name</p>
				{/* {trimmedName} */}
				<div className='messageBox backgroundBlue'>
					<p className='messageText colorWhite'>{ReactEmoji.emojify(this.props.message.content)}</p>
				</div>
			</div>
		) : (
			<div className='messageContainer justifyStart'>
				<div className='messageBox backgroundLight'>
					<p className='messageText colorDark'>{ReactEmoji.emojify(this.props.message.content)}</p>
				</div>
				<p className='sentText pl-10 '>User</p>
				{/* {user} */}
			</div>
		);
	}
};

export default Message;
