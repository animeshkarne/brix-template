import React, { useEffect, useState } from 'react'
import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/types';

//icon imports 
import userIcon from '../../images/user.png';
import phoneIcon from '../../images/phoneNumber.png';
import emailIcon from '../../images/message.png'
import companyIcon from '../../images/comapany.png'

//component imports
import InputComponent from '../InputComponent';
import { setFormData } from '../../store/formActions';

interface form1Props {
    setFormValid: React.Dispatch<React.SetStateAction<boolean>>;
    isNext: boolean;
    setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Form1: React.FC<form1Props> = ({ setFormValid, isNext, setIsNext ,setStep}) => {

    const dispatch = useDispatch();
    const form = useSelector((state: RootState) => state.form);
    
    const [name, setName] = useState<string>(form.name);
    const [email, setEmail] = useState<string>(form.email);
    const [number, setNumber] = useState<string>(form.number);
    const [companyName, setCompanyName] = useState<string>(form.companyName);


    


   useEffect(()=>{
     if (isNext) {
        if (name != '' && email != '' && number != null && companyName != '') {
            if (/^[a-zA-Z\s]+$/.test(name)) {
                if (email.trim().includes('@') && email.trim().includes('.')) {
                    if (/^\d+$/.test(number) && number.length == 10 && number.length<15) {
                        dispatch(setFormData({ ...form, name, email, number, companyName }));
                        setFormValid(true);
                        setStep(2)
                        setIsNext(false);
                    }else{
                        alert("Ten Digits Phone Number is required !");
                        setIsNext(false);
                    }
                } else {
                    alert("Email is not valid !");
                    setIsNext(false);
                }
            } else {
                alert("Please Enter Valid Name");
                setIsNext(false);
            }
        } else {
            alert('All feilds are mandatory')
            setIsNext(false);
        }
    }
   },[isNext])


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
                            onChange={(value: string) => {
                                setName(value);

                            }}
                            value={name}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <InputComponent
                            value={number}
                            type='number'
                            placeholder='(123) 456 - 7890'
                            imgPath={phoneIcon}
                            onChange={(phone: string) => {
                                setNumber(phone);

                            }}
                        />
                    </div>

                </div>
                <div className='form-group'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <InputComponent
                            value={email}
                            type='email'
                            placeholder='Email address'
                            imgPath={emailIcon}
                            onChange={(value: string) => { setEmail(value) }}
                        />
                    </div>
                    <div>
                        <label htmlFor="company">Company</label>
                        <InputComponent
                            value={companyName}
                            type='text'
                            placeholder='Company Name'
                            imgPath={companyIcon}
                            onChange={(value: string) => { setCompanyName(value) }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form1