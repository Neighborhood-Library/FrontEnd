import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <nav className="app-nav">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link>Shelf</Link>
        <Link>Books</Link>
      </nav>
      <p>MuoVivlio. All rights reserved.</p>
    </footer>
  )
};

export default Footer;