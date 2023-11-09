import React from 'react'
import CheckboxCard from '../CheckboxCard'
import './styles.css'

interface form3Props{

}

const Form3:React.FC<form3Props> = () => {
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
                        onChange={()=>{}}
                    />
                    <CheckboxCard 
                        label='$10.000 - 20.000'
                        onChange={()=>{}}
                    />
                    <CheckboxCard 
                        label='$20.000 - 50.000'
                        onChange={()=>{}}
                    />
                    <CheckboxCard 
                        label='$50.000 +'
                        onChange={()=>{}}
                    />
                </div>
            </div>
        </div>
    )
}

export default Form3