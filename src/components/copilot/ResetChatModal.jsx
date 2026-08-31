import React from 'react';
import { RotateCcw, X, ShieldAlert } from 'lucide-react';

export const ResetChatModal = ({ onConfirm, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="reset-chat-modal glass-panel animate-fadeIn" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="reset-modal-icon">
          <RotateCcw size={22} />
        </div>

        <h3>Start a new conversation?</h3>
        <p>
          This will clear the current chat history. Your assessed competencies, verified skill gaps, and learning roadmap progress will remain completely intact.
        </p>

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
            className="primary-btn" 
            onClick={onConfirm}
          >
            <RotateCcw size={14} />
            <span>New Conversation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetChatModal;
