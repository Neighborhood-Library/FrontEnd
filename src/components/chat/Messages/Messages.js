import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import './Messages.css';


// messages, name
class Messages extends React.Component {
	render() {
		const user1 = this.props.transaction.borrower_id;
		// const user2 = this.props.transaction.lender_id;
	
		return (
			<ScrollToBottom className='messages'>
				{this.props.messages.map(
					(message, i) => {
						return (
							<div key={i}>
								<Message
									message={message}
									id={message.sender_id === user1 ? 'user1' : 'user2'}
								/>
							</div>
						)
					}
				)}
			</ScrollToBottom>
		)
	}
};

export default Messages;
