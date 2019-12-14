import React from 'react';
import './CustomButton.scss';

const CustomButton = ({
  children,
  isRegister,
  loginWithGoogle,
  availability,
  removeBook,
  ...otherProps
}) => (
  <button
    className={`${isRegister ? 'register-button' : ''}${
      loginWithGoogle ? 'google-button' : ''
    }${availability ? 'availability-button' : ''} 
    ${removeBook ? 'remove-button' : ''}custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
