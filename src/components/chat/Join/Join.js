import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join in a Chat</h1>
        <p>Enter your name and a subject to join a chatroom.</p>
        <div>
          <input
            placeholder='Name'
            className='joinInput'
            type='text'
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder='Room'
            className='joinInput mt-20'
            type='text'
            onChange={e => setRoom(e.target.value)}
            required
          />
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={'button mt-20'} type='submit'>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
