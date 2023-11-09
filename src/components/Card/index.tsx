import React from 'react'
import './styles.css';

interface CardProps{
    text: string;
    imgPath:string;
  }
  
const Card:React.FC<CardProps> = ({imgPath,text}) => {
  return (
    <div className='card'>
        <img src={imgPath} alt="card-image" />
        <p>{text}</p>
    </div>
  )
}

export default Card