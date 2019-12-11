import React from 'react';
import './CustomButton.scss';

const CustomButton = ({
  children,
  isRegister,
  loginWithGoogle,
  ...otherProps
}) => (
  <button
    className={`${isRegister ? 'register-button' : ''}${
      loginWithGoogle ? 'google-button' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
