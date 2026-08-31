import React from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

export const PathHeader = ({ 
  targetCareer = 'AI Engineer', 
  nsqfLevel = 'NSQF Level 6',
  onNavigate 
}) => {
  return (
    <div className="path-page-header glass-panel">
      
      <div className="path-header-left">
        <div className="eyebrow">
          <Sparkles size={13} className="sparkle-ai" />
          <span>PERSONALIZED ROADMAP</span>
        </div>
        <h2>Your path to {targetCareer}.</h2>
        <p>
          Built from your competency profile, target career requirements, and identified skill gaps.
        </p>
      </div>

      <div className="path-target-card">
        <div className="path-target-top">
          <span className="micro">CAREER TARGET</span>
          <button 
            type="button" 
            className="text-switch-btn"
            onClick={() => onNavigate('/careers')}
            title="Switch Target Career"
          >
            <RefreshCw size={12} />
            <span>Change</span>
          </button>
        </div>
        <h3>{targetCareer}</h3>
        <div className="target-badge-row">
          <span className="nsqf-badge level-6">◇ {nsqfLevel}</span>
          <span className="competency-type-tag">Core Competency</span>
        </div>
      </div>

    </div>
  );
};

export default PathHeader;
