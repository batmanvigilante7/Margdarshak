import React from 'react';
import { Briefcase, Award, TrendingUp, RefreshCw } from 'lucide-react';

export const CareerTargetCard = ({ 
  career = {
    title: 'AI & Machine Learning Engineer',
    nsqfLevel: 'NSQF Level 6',
    alignment: 72,
    domain: 'Artificial Intelligence'
  }, 
  onNavigate 
}) => {
  return (
    <div className="dashboard-card career-target-card glass-panel">
      
      <div className="card-header-clean">
        <div>
          <span className="micro">ACTIVE DESTINATION</span>
          <h3>Target Career</h3>
        </div>
        <button 
          type="button" 
          className="icon-switch-btn" 
          onClick={() => onNavigate('/careers')}
          title="Switch Target Career"
        >
          <RefreshCw size={13} />
          <span>Switch</span>
        </button>
      </div>

      <div className="target-career-main">
        <h4>{career.title}</h4>
        <div className="career-meta-row">
          <span className="nsqf-tag mono">
            <Award size={12} />
            <span>{career.nsqfLevel}</span>
          </span>
          <span className="alignment-tag">
            <TrendingUp size={12} />
            <span>{career.alignment}% Profile Alignment</span>
          </span>
        </div>
      </div>

      <p className="career-subtext">
        All benchmarks, prerequisite chains, and course recommendations are calibrated to this target role.
      </p>

      <button 
        type="button" 
        className="text-link-btn" 
        onClick={() => onNavigate('/careers')}
      >
        <span>Explore Career Paths & Competencies →</span>
      </button>

    </div>
  );
};

export default CareerTargetCard;
