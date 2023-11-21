import React, { useState } from 'react'
import logoImage from '../../images/Logo.jpeg';
import './styles.css'
import InputComponent from '../InputComponent';

function Footer() {
  const [fEmail, setFEmail] = useState<string>('')
  function onClickHandler() {
    if (fEmail.trim() !== '' && fEmail.trim().includes('@') && fEmail.trim().includes('.')) {
      alert(fEmail + ' Email Submitted !');
    } else {
      alert('Email Not Valid')
    }
  }
  return (
    <div className='footer'>
      <div className='logo'>
        <img src={logoImage} alt="logo-image" height={25} />
        <p>Copyright © 2021 BRIX Templates | All Rights Reserved</p>
      </div>
      <div style={{ width: '300px' }}>
        <InputComponent
          type='email'
          placeholder='Enter Your Email'
          buttonTrue='true'
          imgPath=''
          buttonText='Subscribe'
          onChange={(value: string) => {
            setFEmail(value);
          }}
          onClick={onClickHandler}
        />
      </div>
    </div>
  )
}

export default Footer