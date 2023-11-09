import React from 'react'
import "./styles.css";

//icon imports 
import userIcon from '../../images/user.png';
import phoneIcon from '../../images/phoneNumber.png';
import emailIcon from '../../images/message.png'
import companyIcon from '../../images/comapany.png'

//component imports
import InputComponent from '../InputComponent';

function Form1() {
  return (
    <div>
         <div className='form-head-text'>
        <h2>Contact Details</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className='form1'>
            <div className='form-group'>
                <div>
                    <label htmlFor="name">Name</label>
                    <InputComponent
                        type='text' 
                        placeholder='John Carter'
                        imgPath={userIcon}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <InputComponent
                        type='number' 
                        placeholder='(123) 456 - 7890'
                        imgPath={phoneIcon}
                    />
                </div>
               
            </div>
            <div className='form-group'>
            <div>
                    <label htmlFor="email">Email</label>
                    <InputComponent
                        type='email' 
                        placeholder='Email address'
                        imgPath={emailIcon}
                    />
                </div>
                <div>
                    <label htmlFor="company">Company</label>
                    <InputComponent
                        type='text' 
                        placeholder='Company Name'
                        imgPath={companyIcon}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form1