import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const AssessmentAnalysisModal = ({ targetCareer = 'AI & Machine Learning Engineer' }) => {
  return (
    <div className="modal-backdrop">
      <div className="analysis-loading-card glass-panel animate-fadeIn">
        
        <div className="analysis-icon-orb">
          <Sparkles size={28} />
        </div>

        <span className="micro">EVALUATION IN PROGRESS</span>
        <h2>Analyzing Your Competencies</h2>
        <p>Comparing your diagnostic responses against industry benchmarks for <strong>{targetCareer}</strong>.</p>

        <div className="analysis-steps-list">
          <div className="analysis-step-item done">
            <CheckCircle2 size={15} />
            <span>Target career competency benchmarks (NSQF Level 6)</span>
          </div>
          <div className="analysis-step-item done">
            <CheckCircle2 size={15} />
            <span>Knowledge accuracy & confidence weighting</span>
          </div>
          <div className="analysis-step-item active">
            <span className="step-spinner-dot" />
            <span>Computing priority skill gap deltas & bridge hours</span>
          </div>
          <div className="analysis-step-item pending">
            <span className="step-circle-dot" />
            <span>Generating personalized adaptive roadmap</span>
          </div>
        </div>

        <div className="analysis-progress-bar">
          <div className="analysis-progress-fill" />
        </div>

      </div>
    </div>
  );
};

export default AssessmentAnalysisModal;
