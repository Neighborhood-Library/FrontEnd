import React from 'react';
import './CustomButton.css';

const CustomButton = ({
  children,
  isRegister,
  signinWithGoogle,
  ...otherProps
}) => (
  <button
    className={`${isRegister ? 'register-button' : ''}${
      signinWithGoogle ? 'google-button' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
