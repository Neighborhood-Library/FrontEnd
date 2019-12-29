import React from 'react';
import io from 'socket.io-client';

import ChatBox from '../components/chat/ChatBox';

// init socket.io server for client side
const socket = io('http://localhost:5000');

class ChatPage extends React.Component {
  state = {
    messages: []
  }

  componentDidMount() {
    socket.on('hello', data => {
      console.log(data);
    });

    socket.on('retMsg', data => {
      const newArr = [ ...this.state.messages, data.message];

      this.setState({ messages: newArr });

    })
  }
  
  newMessage = e => {
    e.preventDefault();
    
    console.log('new message fn firing');
    
    socket.emit('message', {
      message: this.state.currMessage
    });

    return;
  }

  render() {
    return(
      <section>
        <ChatBox />
        {
          this.state.messages.length > 0 ?
            this.state.messages.map(el => <p>Message here</p>)
          :
            <p>No messages currently</p>
        }
        <button onClick={this.newMessage}>Click me for feedback</button>
      </section>
    )
  }
}

export default ChatPage;