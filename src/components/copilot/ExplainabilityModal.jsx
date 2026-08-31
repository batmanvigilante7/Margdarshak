import React from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export const ExplainabilityModal = ({ onClose }) => {
  const criteria = [
    {
      title: 'Current Assessed Competency Baseline',
      description: 'Your diagnostic score (Python 87% vs ML 38%) verified that you can skip remedial programming and focus on algorithmic optimization.'
    },
    {
      title: 'Target Career Occupational Standards',
      description: 'NSQF Level 6 Core Competency requirements for AI & Machine Learning Engineers mandate supervised learning math.'
    },
    {
      title: 'Skill-Gap Severity & Leverage Score',
      description: 'A 47-point deficit represents your highest-impact barrier to entry-level job readiness.'
    },
    {
      title: 'Prerequisite Dependency Graphs',
      description: 'Gradient descent and loss formulations in Milestone 1 directly unlock subsequent Deep Learning and Model Deployment milestones.'
    },
    {
      title: 'Study Cadence & Weekly Time Commitment',
      description: 'Calibrated specifically to your configured 10 hours/week pace (~5 weeks to readiness).'
    }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="explainability-modal glass-panel animate-fadeIn" 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="modal-header-strip">
          <div className="modal-title-wrap">
            <Sparkles size={16} className="sparkle-ai" />
            <h3>Why Margdarshak Recommends This</h3>
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

        <p className="modal-subtext">
          Margdarshak AI operates deterministically inside your competency model—never generating arbitrary or ungrounded claims.
        </p>

        {/* Factors List */}
        <div className="explainability-factors-list">
          {criteria.map((item, idx) => (
            <div key={idx} className="factor-item-card">
              <div className="factor-check-icon">
                <CheckCircle2 size={16} className="text-emerald" />
              </div>
              <div className="factor-copy">
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* NCVET Trust Note */}
        <div className="ncvet-trust-banner">
          <ShieldCheck size={16} className="text-brand-300" />
          <span>Recommendations are grounded in the National Credit and Qualifications Framework (NCrF / NSQF).</span>
        </div>

        {/* Footer Action */}
        <div className="modal-footer-actions">
          <button 
            type="button" 
            className="primary-btn" 
            onClick={onClose}
          >
            Understood
          </button>
        </div>

      </div>
    </div>
  );
};

export default ExplainabilityModal;
