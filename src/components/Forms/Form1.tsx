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
    setIsNext:React.Dispatch<React.SetStateAction<boolean>>;
}

const Form1: React.FC<form1Props> = ({ setFormValid,isNext,setIsNext }) => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [number, setNumber] = useState<string>();
    const [companyName, setCompanyName] = useState<string>('');


    const dispatch = useDispatch();
    const form = useSelector((state: RootState) => state.form);

    
        if(isNext){
            if(name!=''&&email!=''&&number!=null&&companyName!=''){
                dispatch(setFormData({ ...form, name,email,number,companyName}));
                setFormValid(true);
                setIsNext(false);
            }else{
                alert('All feilds are mandatory')
                setIsNext(false);
            }
        }
    

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
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <InputComponent
                            type='text'
                            placeholder='(123) 456 - 7890'
                            imgPath={phoneIcon}
                            onChange={(phone: string) => { setNumber(phone);
                                
                            }}
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
                            onChange={(value: string) => { setEmail(value) }}
                        />
                    </div>
                    <div>
                        <label htmlFor="company">Company</label>
                        <InputComponent
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