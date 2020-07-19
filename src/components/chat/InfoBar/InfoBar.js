import React from 'react';
import { useParams } from 'react-router';

import closeIcon from '../icons/closeIcon.png';
import onlineIcon from '../icons/onlineIcon.png';
import './InfoBar.css';

const InfoBar = () => {
  const {book_name} = useParams();

  return (
  <div className='infoBar'>
    <div className='leftInnerContainer'>
      <img className='onlineIcon' src={onlineIcon} alt='online icon' />
      <h3>{book_name}</h3>
    </div>  
    <div className='rightInnerContainer'>
        <a href='/shelf'>
        <img src={closeIcon} alt='close icon' />
      </a>
    </div>
  </div>
  )
};


export default InfoBar;