import React from 'react';
import './styles.css';
import Button from '../Button/Button';
import logoImage from '../../images/Logo.jpeg';

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logoImage} alt="logo-image" height={25} />
      </div>
      <div>
        <Button text="Clone now" />
      </div>
    </div>
  );
}

export default Header;
