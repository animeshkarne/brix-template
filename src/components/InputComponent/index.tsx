import React from 'react'
import './styles.css';
import Button from '../Button/Button';

interface InputComponentProps {
    type: string;
    placeholder: string;
    imgPath?: string;
    buttonTrue?: string;
    buttonText?: string;
}

const InputComponent: React.FC<InputComponentProps> = ({ type, placeholder, imgPath, buttonTrue, buttonText = 'DefaultText' }) => {
    return (
        <div className='input'>
            <input type={type} placeholder={placeholder} className='input__box' />
            {imgPath != '' && <img src={imgPath} alt="input-image" className='input-image' />}
            {
                buttonTrue == 'true' && (
                    <div className='input-image' style={{marginRight:'70px',marginTop:'10px'}}>
                        <Button text={buttonText} />
                    </div>
                )
            }
        </div>
    )
}

export default InputComponent