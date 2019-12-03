import React from 'react';
import vivlio from '../../vivlio.jpg';
import './landing.css';

export const backgroundStyle = {
  backgroundImage: `url(${vivlio})`,
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
    <div>
      <div style={ backgroundStyle }>
      </div>
      <div className="landing-content">
        <h1 className="cta">A new way to <br />share books.</h1>
        <button className="signup-btn">Sign Up</button>
      </div>

    </div>
  )
}
