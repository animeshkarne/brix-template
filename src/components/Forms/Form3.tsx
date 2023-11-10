import React, { useEffect, useState } from 'react'
import CheckboxCard from '../CheckboxCard'
import './styles.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import { setFormData } from '../../store/formActions';

interface form3Props {
    setFormValid: React.Dispatch<React.SetStateAction<boolean>>;
    isNext: boolean;
    setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form3: React.FC<form3Props> = ({ setFormValid, isNext, setIsNext }) => {

    const [projectBudget, setProjectBudget] = useState<string>('');

    const dispatch = useDispatch();
    const form = useSelector((state: RootState) => state.form);

    if (isNext) {
        if (projectBudget !== '') {
            dispatch(setFormData({ ...form, projectBudget }))
            setFormValid(true);
            setIsNext(false);
        } else {
            alert('Selecting Budget is Mandatory')
            setIsNext(false);
        }
    }

    return (
        <div>
            <div className='form-head-text'>
                <h2>What’s your project budget?</h2>
                <p>Please select the project budget range you have in mind.</p>
            </div>
            <div className='form1'>
                <div className='card-container'>
                    <CheckboxCard
                        label='$5.000 - $10.000'
                        onChange={() => { setProjectBudget('$5.000 - $10.000') }}
                    />
                    <CheckboxCard
                        label='$10.000 - 20.000'
                        onChange={() => { setProjectBudget('$10.000 - 20.000') }}
                    />
                    <CheckboxCard
                        label='$20.000 - 50.000'
                        onChange={() => { setProjectBudget('$20.000 - 50.000') }}
                    />
                    <CheckboxCard
                        label='$50.000 +'
                        onChange={() => { setProjectBudget('$50.000 +') }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Form3