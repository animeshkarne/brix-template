import React from 'react'
import logoImage from '../../images/Logo.jpeg';
import './styles.css'
import InputComponent from '../InputComponent';
function Footer() {
  return (
    <div className='footer'>
      <div className='logo'>
        <img src={logoImage} alt="logo-image" height={20} />
        <p>Copyright © 2021 BRIX Templates | All Rights Reserved</p>
      </div>
      <div style={{width:'300px'}}>
        <InputComponent 
            type='email'
            placeholder='Enter Your Email'
            buttonTrue='true'
            imgPath=''
            buttonText='Subscribe'
        />
      </div>
    </div>
  )
}

export default Footer