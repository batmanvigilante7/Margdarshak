import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';
import { OnboardingHeader } from '../onboarding/OnboardingHeader';
import { StepBackground } from '../onboarding/StepBackground';
import { StepCareer } from '../onboarding/StepCareer';
import { StepSkills } from '../onboarding/StepSkills';
import { useAppStore } from '../../context/AppContext';

const STORAGE_KEY = 'margdarshak-onboarding';

const DEFAULT_ONBOARDING_STATE = {
  educationLevel: 'undergraduate',
  field: 'Computer Science',
  experience: 'project-experience',
  targetCareerId: 'ai-engineer',
  targetCareerTitle: 'AI & Machine Learning Engineer',
  targetCareerNsqf: 'NSQF Level 6',
  skills: [
    { id: 'python', name: 'Python', confidence: 'comfortable' },
    { id: 'sql', name: 'SQL', confidence: 'familiar' },
    { id: 'statistics', name: 'Statistics & Probability', confidence: 'beginner' }
  ]
};

export const Onboarding = ({ onNavigate }) => {
  const { setTargetCareer, updateUserProfile, setHasCompletedOnboarding } = useAppStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_ONBOARDING_STATE;
    } catch {
      return DEFAULT_ONBOARDING_STATE;
    }
  });
  const [error, setError] = useState('');
  const [isFinishing, setIsFinishing] = useState(false);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (patch) => {
    setFormData((prev) => ({ ...prev, ...patch }));
    setError('');
  };

  const handleNext = () => {
    setError('');

    // Step 1 Validation
    if (currentStep === 1) {
      if (!formData.educationLevel || !formData.field || !formData.experience) {
        setError('Please complete all selections to continue.');
        return;
      }
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Step 2 Validation
    if (currentStep === 2) {
      if (!formData.targetCareerId) {
        setError('Please select your target career goal.');
        return;
      }
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Step 3 Validation & Path Engine Initialization
    if (currentStep === 3) {
      if (!formData.skills || formData.skills.length === 0) {
        setError('Please select at least one skill or tool you are familiar with.');
        return;
      }

      // Sync with global store
      setTargetCareer({
        id: formData.targetCareerId,
        title: formData.targetCareerTitle,
        nsqfLevel: formData.targetCareerNsqf
      });

      updateUserProfile({
        degree: formData.educationLevel === 'undergraduate' ? 'B.Tech Computer Science' : 'Graduate',
        institution: 'GITAM University'
      });

      setHasCompletedOnboarding(true);

      // Trigger 1000ms transition
      setIsFinishing(true);
      setTimeout(() => {
        onNavigate('/dashboard');
      }, 1100);
    }
  };

  const handleBack = () => {
    setError('');
    if (currentStep === 1) {
      onNavigate('/login');
    } else {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main className="onboarding-page">
      <div className="ambient ambient-one" />
      
      {/* Onboarding Header */}
      <OnboardingHeader 
        currentStep={currentStep} 
        totalSteps={3} 
        onExit={() => onNavigate('/welcome')} 
      />

      {/* Main Form Container */}
      <div className="onboarding-container">
        
        {/* Step Renderer */}
        <div className="onboarding-card glass-panel">
          
          {currentStep === 1 && (
            <StepBackground data={formData} onChange={updateFormData} />
          )}

          {currentStep === 2 && (
            <StepCareer data={formData} onChange={updateFormData} />
          )}

          {currentStep === 3 && (
            <StepSkills data={formData} onChange={updateFormData} />
          )}

          {/* Validation Notice */}
          {error && (
            <div className="onboarding-error">
              <AlertCircle size={15} />
              <span>{error}</span>
            </div>
          )}

          {/* Onboarding Navigation Footer */}
          <div className="onboarding-actions">
            <button 
              type="button" 
              className="secondary-btn" 
              onClick={handleBack}
            >
              <ArrowLeft size={16} />
              <span>{currentStep === 1 ? 'Back to Sign In' : 'Previous Step'}</span>
            </button>

            <button 
              type="button" 
              className="primary-btn" 
              onClick={handleNext}
            >
              <span>{currentStep === 3 ? 'Build My Learning Path' : 'Continue'}</span>
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="onboarding-subnote">
            <span>{currentStep === 3 ? 'You can refine your skills and career targets anytime.' : 'Step ' + currentStep + ' of 3 • Takes less than 60 seconds'}</span>
          </div>

        </div>

      </div>

      {/* Transition Overlay on Complete */}
      {isFinishing && (
        <div className="onboarding-transition-overlay">
          <div className="transition-card glass-panel animate-fadeIn">
            <div className="transition-icon">
              <Sparkles size={28} />
            </div>
            <span className="micro">CALIBRATING LEARNING PATH</span>
            <h2>Your starting point is ready.</h2>
            <p>
              Next, Margdarshak will benchmark your skills against{' '}
              <strong className="text-white">{formData.targetCareerTitle}</strong>.
            </p>
            <div className="transition-progress-bar">
              <div className="transition-progress-fill" />
            </div>
          </div>
        </div>
      )}

    </main>
  );
};

export default Onboarding;
