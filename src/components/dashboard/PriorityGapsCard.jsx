import React from 'react';
import { GitCompare, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

const DEFAULT_GAPS = [
  {
    name: 'Machine Learning',
    current: 48,
    target: 85,
    status: 'critical',
    statusLabel: 'Critical Gap',
    effortHours: 18
  },
  {
    name: 'Statistics & Probability',
    current: 61,
    target: 80,
    status: 'moderate',
    statusLabel: 'Moderate Gap',
    effortHours: 12
  },
  {
    name: 'Deep Learning & Neural Networks',
    current: 25,
    target: 75,
    status: 'critical',
    statusLabel: 'Critical Gap',
    effortHours: 24
  },
  {
    name: 'Python Foundations',
    current: 87,
    target: 90,
    status: 'ontrack',
    statusLabel: 'On Track',
    effortHours: 4
  }
];

export const PriorityGapsCard = ({ gaps = DEFAULT_GAPS, onNavigate }) => {
  return (
    <div className="dashboard-card priority-gaps-card glass-panel">
      
      <div className="card-header-clean">
        <div>
          <span className="micro">SKILL GAP ANALYSIS</span>
          <h3>Priority Competency Gaps</h3>
        </div>
        <button 
          type="button" 
          className="header-link-btn" 
          onClick={() => onNavigate('/skill-gap')}
        >
          <span>View Matrix</span>
          <ArrowRight size={14} />
        </button>
      </div>

      <p className="card-caption">
        Skills with the highest leverage on your target career benchmark.
      </p>

      {/* Gaps List */}
      <div className="gaps-list-stack">
        {gaps.map((gap) => (
          <div key={gap.name} className="gap-row-item">
            
            <div className="gap-row-top">
              <div className="gap-name-col">
                <strong>{gap.name}</strong>
                <span className="gap-effort-text">~{gap.effortHours}h bridge effort</span>
              </div>

              <div className="gap-meta-col">
                <span className="gap-ratio mono">
                  {gap.current}% <span className="text-secondary">/ {gap.target}%</span>
                </span>
                <span className={`status-pill ${gap.status}`}>
                  {gap.statusLabel}
                </span>
              </div>
            </div>

            {/* Visual Meter */}
            <div className="gap-meter-track">
              <div 
                className={`gap-meter-current ${gap.status}`} 
                style={{ width: `${gap.current}%` }} 
              />
              <div 
                className="gap-meter-target-marker" 
                style={{ left: `${gap.target}%` }}
                title={`Target benchmark: ${gap.target}%`}
              />
            </div>

          </div>
        ))}
      </div>

      {/* Card Footer Action */}
      <div className="card-footer-action">
        <button 
          type="button" 
          className="text-link-btn" 
          onClick={() => onNavigate('/skill-gap')}
        >
          <span>Open Full Skill Gap Matrix →</span>
        </button>
      </div>

    </div>
  );
};

export default PriorityGapsCard;
