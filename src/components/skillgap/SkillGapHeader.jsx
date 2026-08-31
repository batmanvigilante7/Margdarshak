import React from 'react';
import { Sparkles, Award, Target, GitCompare, RefreshCw } from 'lucide-react';

export const SkillGapHeader = ({ 
  targetCareer = 'AI Engineer', 
  nsqfLevel = 'NSQF Level 6',
  onNavigate 
}) => {
  return (
    <div className="skillgap-hero-header glass-panel">
      
      <div className="skillgap-hero-copy">
        <div className="eyebrow">
          <Sparkles size={13} />
          <span>COMPETENCY ANALYSIS</span>
        </div>
        <h2>Here's what's between you and your goal.</h2>
        <p>
          We compared your assessed competencies with the requirements of your target career.
        </p>
      </div>

      <div className="skillgap-target-pill-card">
        <div className="target-pill-top">
          <span className="micro">TARGET DESTINATION</span>
          <button 
            type="button" 
            className="text-switch-btn" 
            onClick={() => onNavigate('/careers')}
            title="Change Target Career"
          >
            <RefreshCw size={12} />
            <span>Switch</span>
          </button>
        </div>
        <h4>{targetCareer}</h4>
        <div className="target-pill-tags">
          <span className="nsqf-badge level-6">◇ {nsqfLevel}</span>
          <span className="sync-badge">
            <GitCompare size={12} />
            <span>Calibrated</span>
          </span>
        </div>
      </div>

    </div>
  );
};

export default SkillGapHeader;
