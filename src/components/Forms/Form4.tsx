import React from 'react'
import submitImg from '../../images/SubmitFormImage.png';
import './styles.css'
import Button from '../Button/Button';
interface Form4Props{

}

const Form4:React.FC<Form4Props> = () => {
  return (
    <div className='form4'>
        <img src={submitImg} alt="" width={100}/>
        <div className='textclass'>
            <h2>Submit your quote request</h2>
            <p>Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.</p>
        </div>
        <Button
            text='Submit'
        ></Button>
    </div>
  )
}

export default Form4