import React, { useEffect, useState } from 'react'
import Card from '../Card'

//card icon imports
import devImg from '../../images/dev.png'
import webDImg from '../../images/webD.png'
import marketingImg from '../../images/marketing.png'
import otherImg from '../../images/other.png'

import './styles.css';
import { useDispatch } from 'react-redux'
import { setFormData } from '../../store/formActions'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/types'

interface form2Props {
    setFormValid: React.Dispatch<React.SetStateAction<boolean>>;
    isNext: boolean;
    setIsNext:React.Dispatch<React.SetStateAction<boolean>>;
}

const Form2: React.FC<form2Props> = ({setFormValid,isNext,setIsNext}) => {
    const [selectedService,setSelectedService] = useState<string>('');

    const dispatch = useDispatch();
    const form = useSelector((state: RootState) => state.form);

    if(isNext){
        if(selectedService!==''){
            dispatch(setFormData({ ...form,selectedService}))
            setFormValid(true);
            setIsNext(false);
        }else{
            alert('Selecting Service is Mandatory')
            setIsNext(false);
        }
    }

    

    return (
        <div>
            <div className='form-head-text'>
                <h2>Our services</h2>
                <p>Please select which service you are interested in.</p>
            </div>
            <div className='form1'>
                <div className='card-container'>
                    <Card
                        text='Development'
                        imgPath={devImg}
                        onClick={(value: string) => { setSelectedService('Development'); }}
                    />
                    <Card
                        text='Web Design'
                        imgPath={webDImg}
                        onClick={(value: string) => { setSelectedService('Web Design') }}
                    />
                    <Card
                        text='Marketing'
                        imgPath={marketingImg}
                        onClick={(value: string) => { setSelectedService('Marketing') }}
                    />
                    <Card
                        text='Other'
                        imgPath={otherImg}
                        onClick={(value: string) => { setSelectedService('Other') }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Form2