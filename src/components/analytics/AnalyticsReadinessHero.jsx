import React from 'react';
import { Target, ArrowRight, TrendingUp, AlertTriangle, Sparkles } from 'lucide-react';

export const AnalyticsReadinessHero = ({ 
  readiness = 64, 
  growth = 12, 
  targetCareer = 'AI Engineer', 
  nsqfLevel = 'NSQF Level 6',
  onNavigate 
}) => {
  const circumference = 2 * Math.PI * 46;
  const strokeDashoffset = circumference - (readiness / 100) * circumference;

  return (
    <div className="analytics-readiness-hero glass-panel animate-fadeIn">
      
      {/* Left Column: Radial Gauge */}
      <div className="readiness-gauge-column">
        <span className="micro">ROLE READINESS BENCHMARK</span>

        <div className="radial-chart-container">
          <svg className="radial-svg" viewBox="0 0 110 110">
            {/* Background Track */}
            <circle
              className="radial-bg"
              cx="55"
              cy="55"
              r="46"
              strokeWidth="9"
            />
            {/* Progress Stroke */}
            <circle
              className="radial-fill"
              cx="55"
              cy="55"
              r="46"
              strokeWidth="9"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>

          <div className="radial-center-text">
            <strong className="mono">{readiness}%</strong>
            <span className="radial-subtext">VERIFIED</span>
          </div>
        </div>

        <div className="gauge-trend-badge mono">
          <TrendingUp size={12} className="text-emerald" />
          <span>+{growth}% this month</span>
        </div>
      </div>

      {/* Right Column: Breakdown Explanation & CTA */}
      <div className="readiness-explanation-column">
        <div className="target-career-header">
          <div>
            <span className="micro text-brand-300">TARGET OCCUPATIONAL BENCHMARK</span>
            <h3>{targetCareer}</h3>
          </div>
          <span className="nsqf-badge level-6">◇ {nsqfLevel}</span>
        </div>

        <div className="readiness-narrative-box">
          <p>
            Your overall role readiness gained <strong>+{growth} percentage points</strong> over the last 30 days. The fastest acceleration originated from closing your foundational Machine Learning gap.
          </p>

          <div className="gain-factors-strip">
            <div className="factor-pill verified">
              <span>✓ Python Competency: <strong>87%</strong></span>
            </div>
            <div className="factor-pill verified">
              <span>✓ Machine Learning: <strong>72%</strong></span>
            </div>
            <div className="factor-pill blocker">
              <AlertTriangle size={12} className="text-rose-400" />
              <span>Priority Blocker: <strong>Model Evaluation (42%)</strong></span>
            </div>
          </div>
        </div>

        <div className="readiness-hero-actions">
          <button 
            type="button" 
            className="primary-btn"
            onClick={() => onNavigate('/skill-gap')}
          >
            <span>Work on Priority Gap</span>
            <ArrowRight size={14} />
          </button>

          <button 
            type="button" 
            className="secondary-btn"
            onClick={() => onNavigate('/path')}
          >
            <span>View Learning Path</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default AnalyticsReadinessHero;
