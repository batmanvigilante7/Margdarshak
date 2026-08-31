import React from 'react';
import { Sparkles, ArrowRight, Target, AlertTriangle } from 'lucide-react';

export const PersonalizationBanner = ({ 
  targetCareer = 'AI Engineer', 
  priorityGap = 'Model Evaluation',
  onFilterByGap,
  onNavigate 
}) => {
  return (
    <div className="personalization-banner-card glass-panel animate-fadeIn">
      
      <div className="banner-left-info">
        <div className="banner-eyebrow">
          <Sparkles size={15} className="sparkle-ai" />
          <span className="micro">✦ PERSONALIZED DISCOVERY ENGINE</span>
        </div>

        <h3>Selected for your target: {targetCareer}</h3>
        <p>
          Margdarshak automatically ranks learning resources by their ability to close your active <strong>{priorityGap}</strong> gap (-38 pts) and advance your roadmap.
        </p>

        <div className="banner-tags-row">
          <span className="banner-tag target">
            <Target size={11} />
            <span>Target: {targetCareer}</span>
          </span>
          <span className="banner-tag gap">
            <AlertTriangle size={11} />
            <span>Priority Blocker: {priorityGap}</span>
          </span>
        </div>
      </div>

      <div className="banner-right-actions">
        <button 
          type="button" 
          className="primary-btn banner-action-btn"
          onClick={() => onFilterByGap(priorityGap)}
        >
          <span>Focus on {priorityGap}</span>
          <ArrowRight size={13} />
        </button>

        <button 
          type="button" 
          className="secondary-btn"
          onClick={() => onNavigate('/path')}
        >
          <span>View Active Roadmap</span>
        </button>
      </div>

    </div>
  );
};

export default PersonalizationBanner;
