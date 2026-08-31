import React from 'react';
import { X, AlertTriangle, Trash2 } from 'lucide-react';

export const ResetConfirmationModal = ({ onConfirmReset, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="reset-confirmation-modal glass-panel animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-strip">
          <div className="modal-title-wrap text-rose-400">
            <AlertTriangle size={18} />
            <h3>Reset Learning Progress?</h3>
          </div>
          <button 
            type="button" 
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="reset-modal-body">
          <p>
            This action will reset your learning roadmap state back to onboarding baseline:
          </p>

          <ul className="reset-impact-list">
            <li>• Completed milestones & deliverable submissions will be reset</li>
            <li>• Practice quizzes and checkpoint scores will be cleared</li>
            <li>• Study velocity logs and planner task completions will be removed</li>
          </ul>

          <div className="reset-safe-note">
            <span>Your target career, account profile, and self-reported skills will be preserved.</span>
          </div>
        </div>

        <div className="modal-actions-row">
          <button 
            type="button" 
            className="secondary-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button 
            type="button" 
            className="danger-btn-solid"
            onClick={onConfirmReset}
          >
            <Trash2 size={14} />
            <span>Yes, Reset Progress</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ResetConfirmationModal;
