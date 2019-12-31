import React from 'react';
import './CustomButton.scss';

const CustomButton = ({
  children,
  isSignUp,
  isRegister,
  loginWithGoogle,
  availability,
  removeBook,
  isBorrowBook,
  isLendBook,
  learnMore,
  ...otherProps
}) => (
  <button
    className={`
      ${isRegister ? 'register-button' : ''}
      ${isSignUp ? 'sign-up' : ''}
      ${loginWithGoogle ? 'google-button' : ''}
      ${availability ? 'availability-button' : ''}
      ${removeBook ? 'remove-button' : ''}
      ${isBorrowBook ? 'borrowBookBtn' : ''}
      ${isLendBook ? 'lendBookBtn' : ''}
      ${learnMore ? 'learnMoreBtn' : ''}
      custom-button`
    }
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
