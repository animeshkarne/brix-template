import React from 'react';
import './styles.css';

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="progress-bar">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className={`step-container ${step === currentStep ? 'active' : ''}`}>
          <div className={`step ${step === currentStep ? 'active' : ''}`}>
            {step}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
