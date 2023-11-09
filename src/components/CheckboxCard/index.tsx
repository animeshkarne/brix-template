import React from 'react'
import './styles.css';

interface CheckboxProps {
    label: string;
    onChange: (checked: boolean) => void;
    checked?: boolean;
  }

const CheckboxCard:React.FC<CheckboxProps> = ({ label, onChange, checked }) => {
  return (
    <div className='chekboxcard'>
        <label className='checkboxlabel'>
        <input
          type="radio"
          checked={checked} 
          onChange={(e) => onChange(e.target.checked)}
          className='checkboxinput'
          name='budget'
        />
        {label}
      </label>
    </div>
  )
}

export default CheckboxCard