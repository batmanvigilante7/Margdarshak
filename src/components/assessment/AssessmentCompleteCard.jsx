import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  GitCompare, 
  Award, 
  Clock, 
  Layers 
} from 'lucide-react';

export const AssessmentCompleteCard = ({ 
  targetCareer = 'AI & Machine Learning Engineer', 
  nsqfLevel = 'NSQF Level 6',
  score = 64,
  onNavigate 
}) => {
  return (
    <div className="assessment-complete-container animate-fadeIn">
      <div className="assessment-complete-card glass-panel">
        
        {/* Success Header */}
        <div className="complete-hero-header">
          <div className="complete-icon-orb">
            <CheckCircle2 size={32} />
          </div>
          <span className="micro">DIAGNOSTIC COMPLETED</span>
          <h2>Your Competency Profile is Ready</h2>
          <p>
            We have calibrated your baseline skills against the <strong>{targetCareer}</strong> ({nsqfLevel}) benchmark.
          </p>
        </div>

        {/* Readiness Metric Highlight */}
        <div className="complete-metric-banner">
          <div className="metric-score-col">
            <span className="metric-score-num mono">{score}%</span>
            <span className="metric-score-desc">VERIFIED READINESS</span>
          </div>
          <div className="metric-divider" />
          <div className="metric-summary-col">
            <div className="summary-item strength">
              <span className="summary-dot emerald" />
              <span><strong>Python Base (87%)</strong> — Verified Strength</span>
            </div>
            <div className="summary-item gap">
              <span className="summary-dot rose" />
              <span><strong>Machine Learning (48%)</strong> — Priority Critical Gap</span>
            </div>
            <div className="summary-item gap">
              <span className="summary-dot amber" />
              <span><strong>Statistics (61%)</strong> — Moderate Gap</span>
            </div>
          </div>
        </div>

        {/* AI Interpretation Box */}
        <div className="complete-ai-interpretation">
          <div className="ai-title-row">
            <Sparkles size={14} className="sparkle-purple" />
            <span>AI DIAGNOSTIC INTERPRETATION</span>
          </div>
          <p>
            "Your Python fundamentals and data modeling skills are solidly in place. Your fastest bridge to role readiness is closing the <strong>Machine Learning Fundamentals (18h)</strong> prerequisite gap before attempting neural architecture projects."
          </p>
        </div>

        {/* Action Buttons */}
        <div className="complete-actions-row">
          <button 
            type="button" 
            className="secondary-btn" 
            onClick={() => onNavigate('/dashboard')}
          >
            <span>Go to Command Center</span>
          </button>

          <button 
            type="button" 
            className="primary-btn" 
            onClick={() => onNavigate('/skill-gap')}
          >
            <GitCompare size={16} />
            <span>View My Skill Gaps</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default AssessmentCompleteCard;
