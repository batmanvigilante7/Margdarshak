import React from 'react';
import { AlertTriangle, ArrowRight, X } from 'lucide-react';

export const CareerChangeModal = ({ 
  currentCareerTitle, 
  newCareer, 
  onConfirm, 
  onCancel 
}) => {
  if (!newCareer) return null;

  return (
    <div className="modal-backdrop">
      <div className="career-change-modal glass-panel animate-fadeIn">
        
        <div className="modal-header">
          <div className="modal-icon-warning">
            <AlertTriangle size={20} />
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onCancel}
            aria-label="Close dialog"
          >
            <X size={16} />
          </button>
        </div>

        <div className="modal-body">
          <span className="micro">RECALIBRATE TARGET CAREER</span>
          <h2>Change destination to {newCareer.title}?</h2>
          <p>
            Your current skill gap analysis and active milestones are currently calibrated for{' '}
            <strong className="text-white">{currentCareerTitle}</strong>.
          </p>
          <p className="modal-subtext">
            Setting <strong className="text-brand-300">{newCareer.title}</strong> (NSQF Level {newCareer.nsqfLevel}) as your target will benchmark your competencies against its industry requirements and regenerate your adaptive path.
          </p>
        </div>

        <div className="modal-actions">
          <button 
            type="button" 
            className="secondary-btn" 
            onClick={onCancel}
          >
            Keep Current Target
          </button>

          <button 
            type="button" 
            className="primary-btn" 
            onClick={() => onConfirm(newCareer)}
          >
            <span>Confirm & Recalibrate</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CareerChangeModal;
