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
    setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Form2: React.FC<form2Props> = ({ setFormValid, isNext, setIsNext,setStep }) => {
    const dispatch = useDispatch();
    const form = useSelector((state: RootState) => state.form);

    const [selectedService, setSelectedService] = useState<string[]>(form.selectedService.split(','));


    if (isNext) {
        if (selectedService.length > 0) {
            const arrToString = selectedService.join(',');
            dispatch(setFormData({ ...form, selectedService: arrToString }))
            setFormValid(true);
            setStep(3)
            setIsNext(false);
        } else {
            alert('Selecting Service is Mandatory')
            setIsNext(false);
        }
    }

    useEffect(() => {
        selectedService.forEach((elem) => {
            const selectedElement = document.getElementById(elem);
            console.log(elem);
            if (selectedElement) selectedElement.style.border = '1px solid blue';
        })
    })

    function selectionOperationHandler(data: string) {
        const selectedElement = document.getElementById(data);
        if (!selectedElement) {
            return;
        }
        if (selectedService.includes(data)) {
            const filteredArray = selectedService.filter((elem) => {
                return elem != data;
            })
            setSelectedService(filteredArray);
            selectedElement.style.border = 'none';
        } else {
            setSelectedService([...selectedService, data]);
            selectedElement.style.border = '1px solid blue';
        }

    }

    return (
        <div className='form2'>
            <div className='form-head-text'>
                <h2>Our services</h2>
                <p>Please select which service you are interested in.</p>
            </div>
            <div className='form1'>
                <div className='card-container'>
                    <Card
                        text='Development'

                        imgPath={devImg}
                        onClick={(value: string) => {
                            selectionOperationHandler('Development')
                        }}
                    />
                    <Card
                        text='Web Design'
                        imgPath={webDImg}
                        onClick={(value: string) => {
                            selectionOperationHandler('Web Design')
                        }}
                    />
                    <Card
                        text='Marketing'
                        imgPath={marketingImg}
                        onClick={(value: string) => {
                            selectionOperationHandler('Marketing')
                        }}
                    />
                    <Card
                        text='Other'
                        imgPath={otherImg}
                        onClick={(value: string) => {
                            selectionOperationHandler('Other')
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Form2