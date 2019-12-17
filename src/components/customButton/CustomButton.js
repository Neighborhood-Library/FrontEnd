import React from 'react';
import './CustomButton.scss';

const CustomButton = ({
  children,
  isRegister,
  loginWithGoogle,
  availability,
  removeBook,
  isBorrowBook,
  isLendBook,
  ...otherProps
}) => (
  <button
    className={`${isRegister ? 'register-button' : ''}
    ${loginWithGoogle ? 'google-button' : ''}${
      availability ? 'availability-button' : ''
    } 
    ${removeBook ? 'remove-button' : ''} ${isBorrowBook ? 'borrowBookBtn' : ''}
    ${isLendBook ? 'lendBookBtn' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
