import React from 'react';
import "./Button.css";

interface ButtonProps {
  text: string;
  onClick?: () => void; 
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}

export default Button;
