import React from 'react';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';

export const ProfileCompletionCard = ({ onCompleteClick }) => {
  const items = [
    { label: 'Target Career & NSQF Alignment', done: true },
    { label: 'Competency Diagnostic Inventory', done: true },
    { label: 'Learning Preferences & Study Cadence', done: true },
    { label: 'Academic Registration (APAAR / ABC ID)', done: false },
    { label: 'Verified Portfolio Artifacts', done: false }
  ];

  return (
    <div className="profile-completion-card glass-panel animate-fadeIn">
      
      <div className="completion-top-row">
        <div className="completion-title-wrap">
          <span className="micro">PORTFOLIO COMPLETENESS</span>
          <h4>82% Complete</h4>
        </div>
        <button 
          type="button" 
          className="complete-profile-btn"
          onClick={onCompleteClick}
        >
          <span>Complete Profile</span>
          <ArrowRight size={12} />
        </button>
      </div>

      <div className="completion-progress-track">
        <div className="completion-progress-fill" style={{ width: '82%' }} />
      </div>

      <div className="completion-checklist-grid">
        {items.map((item, idx) => (
          <div key={idx} className={`completion-check-item ${item.done ? 'done' : ''}`}>
            {item.done ? (
              <CheckCircle2 size={14} className="text-emerald" />
            ) : (
              <Circle size={14} className="text-tertiary" />
            )}
            <span>{item.label}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProfileCompletionCard;
