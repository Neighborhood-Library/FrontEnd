import React from 'react';
import './landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faUserFriends } from '@fortawesome/free-solid-svg-icons';

export const backgroundStyle = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '100%',
  minWidth: '1024px',
  width: '100%',
  height: 'auto',
  position: 'fixed',
  top: 0,
  left: 0,
  border: '1px solid black',
  zIndex: 97
}

export const LandingPage = () => {
  return (
    <div className="landing-background">
      <div className="landing-content">
        <h1 className="cta">A new way to <br />share books.</h1>
        <button className="signup-btn">Sign Up</button>
      </div>
      <footer className="landing-footer">
        <div className="icon-group">
          <FontAwesomeIcon className="icon" icon={faBookOpen} />
          <p>Share your own collection <br />or borrow from others</p>
        </div>
        <div className="icon-group">
          <FontAwesomeIcon className="icon" icon={faUserFriends} />
          <p>Join a vibrant community of book <br />enthuisists in your local area</p>
        </div>
      </footer>
    </div>
  )
}
