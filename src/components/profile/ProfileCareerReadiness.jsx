import React from 'react';
import { Target, ArrowRight, ShieldCheck, AlertTriangle, TrendingUp } from 'lucide-react';

export const ProfileCareerReadiness = ({ 
  targetCareer = 'AI Engineer',
  nsqfLevel = 'NSQF Level 6',
  readiness = 64,
  benchmark = 80,
  onNavigate 
}) => {
  return (
    <div className="profile-readiness-card glass-panel">
      
      <div className="card-header-line">
        <div className="header-left">
          <Target size={15} className="text-brand-300" />
          <span className="micro">OCCUPATIONAL READINESS MATRIX</span>
        </div>
        <span className="nsqf-badge level-6">◇ {nsqfLevel} Readiness</span>
      </div>

      <div className="readiness-matrix-grid">
        
        {/* Left: Score Gauge / Stats */}
        <div className="matrix-score-block">
          <span className="micro">CURRENT ESTIMATE</span>
          <div className="readiness-big-score">
            <strong className="mono">{readiness}%</strong>
            <span className="benchmark-sub mono">/ {benchmark}% benchmark</span>
          </div>

          <div className="readiness-linear-track">
            <div className="readiness-linear-fill" style={{ width: `${(readiness / benchmark) * 100}%` }} />
            <div className="benchmark-marker" style={{ left: '100%' }} />
          </div>

          <span className="trust-note-text">
            *Platform-evaluated readiness based on verified assessments & portfolio evidence.
          </span>
        </div>

        {/* Right: Competency Highlights */}
        <div className="matrix-highlights-block">
          <div className="highlight-column">
            <span className="micro text-emerald">DEMONSTRATED STRENGTHS</span>
            <div className="highlight-pills-stack">
              <div className="competency-badge-pill strong">
                <span>✓ Python Foundations: <strong>87%</strong></span>
              </div>
              <div className="competency-badge-pill strong">
                <span>✓ Statistical Inference: <strong>74%</strong></span>
              </div>
            </div>
          </div>

          <div className="highlight-column">
            <span className="micro text-rose-400">PRIORITY TARGET GAPS</span>
            <div className="highlight-pills-stack">
              <div className="competency-badge-pill gap">
                <AlertTriangle size={12} />
                <span>Model Evaluation: <strong>42% (-38 pts)</strong></span>
              </div>
              <div className="competency-badge-pill gap">
                <AlertTriangle size={12} />
                <span>Deep Learning Architectures</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Actions */}
      <div className="matrix-card-footer">
        <button 
          type="button" 
          className="primary-btn"
          onClick={() => onNavigate('/skill-gap')}
        >
          <span>View Skill Gap Matrix</span>
          <ArrowRight size={14} />
        </button>

        <button 
          type="button" 
          className="secondary-btn"
          onClick={() => onNavigate('/path')}
        >
          <span>Open Adaptive Roadmap</span>
        </button>
      </div>

    </div>
  );
};

export default ProfileCareerReadiness;
