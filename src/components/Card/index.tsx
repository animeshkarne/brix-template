import React from 'react'
import './styles.css';

interface CardProps{
    text: string;
    imgPath:string;
    onClick:Function;
  }
  
const Card:React.FC<CardProps> = ({imgPath,text,onClick}) => {
  return (
    <div className='card' onClick={()=>{onClick(text)}}>
        <img src={imgPath} alt="card-image" />
        <p>{text}</p>
    </div>
  )
}

export default Card