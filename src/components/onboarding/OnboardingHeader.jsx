import React from 'react';
import { Compass, Check } from 'lucide-react';

export const OnboardingHeader = ({ currentStep, totalSteps = 3, onExit }) => {
  return (
    <header className="onboarding-header">
      <div className="onboarding-header-inner">
        
        {/* Left Brand Mark */}
        <button 
          className="brand" 
          onClick={onExit} 
          aria-label="Exit onboarding to Home"
        >
          <span className="brand-mark">
            <Compass size={18} />
          </span>
          <span className="brand-text">
            <span>Margdarshak</span>
            <span className="brand-hindi">मार्गदर्शक</span>
          </span>
        </button>

        {/* Right Step Counter */}
        <div className="step-counter">
          <span>Step {currentStep} of {totalSteps}</span>
        </div>

      </div>

      {/* Progress Track */}
      <div className="progress-track-wrapper">
        <div className="progress-track-nodes">
          {[1, 2, 3].map((stepNum) => {
            const isCompleted = currentStep > stepNum;
            const isCurrent = currentStep === stepNum;

            return (
              <div 
                key={stepNum} 
                className={`track-node ${isCompleted ? 'completed' : isCurrent ? 'current' : 'upcoming'}`}
              >
                <div className="track-node-circle">
                  {isCompleted ? <Check size={12} strokeWidth={3} /> : stepNum}
                </div>
                <span className="track-node-label">
                  {stepNum === 1 ? 'Background' : stepNum === 2 ? 'Target Career' : 'Skill Inventory'}
                </span>
              </div>
            );
          })}
        </div>
        <div className="progress-track-bar">
          <div 
            className="progress-track-fill" 
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          />
        </div>
      </div>
    </header>
  );
};

export default OnboardingHeader;
