import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const ReadinessRadial = ({ 
  score = 64, 
  targetCareer = 'AI Engineer', 
  currentNsqf = 'NSQF 5', 
  targetNsqf = 'NSQF 6',
  onNavigate 
}) => {
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="dashboard-card readiness-card glass-panel">
      <div className="card-header-clean">
        <div>
          <span className="micro">CAREER READINESS</span>
          <h3>Benchmark Match</h3>
        </div>
        <span className="sync-badge">
          <ShieldCheck size={13} />
          <span>Calibrated</span>
        </span>
      </div>

      {/* SVG Radial Meter */}
      <div className="radial-meter-container">
        <svg className="radial-svg" width="160" height="160" viewBox="0 0 160 160">
          {/* Background circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            className="radial-bg-circle"
            strokeWidth="12"
          />
          {/* Progress circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            className="radial-progress-circle"
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        <div className="radial-center-content">
          <span className="radial-score-number">{score}%</span>
          <span className="radial-score-label">READY</span>
        </div>
      </div>

      <div className="readiness-career-label">
        <span>Target: <strong>{targetCareer}</strong></span>
      </div>

      {/* NSQF Progression Bridge */}
      <div className="nsqf-progression-strip">
        <div className="nsqf-level-step">
          <span className="nsqf-step-tag">CURRENT</span>
          <span className="mono nsqf-step-num">{currentNsqf}</span>
          <span className="nsqf-step-desc">Foundation</span>
        </div>

        <div className="nsqf-bridge-arrow">
          <ArrowRight size={14} />
        </div>

        <div className="nsqf-level-step target">
          <span className="nsqf-step-tag">BENCHMARK</span>
          <span className="mono nsqf-step-num">{targetNsqf}</span>
          <span className="nsqf-step-desc">Specialist</span>
        </div>
      </div>

      <button 
        type="button" 
        className="text-link-btn" 
        onClick={() => onNavigate('/assessment')}
      >
        <span>Recalibrate with Assessment →</span>
      </button>
    </div>
  );
};

export default ReadinessRadial;
