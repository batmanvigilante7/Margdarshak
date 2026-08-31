import React from 'react';
import { Sparkles, ArrowRight, Zap, Play } from 'lucide-react';

export const WhatToFixFirstBanner = ({ onNavigate }) => {
  return (
    <div className="what-to-fix-banner glass-panel animate-fadeIn">
      
      <div className="fix-banner-left">
        <div className="fix-icon-badge">
          <Zap size={20} />
        </div>

        <div className="fix-copy">
          <div className="fix-eyebrow">
            <Sparkles size={13} className="sparkle-ai" />
            <span>MARGDARSHAK RECOMMENDATION • WHAT SHOULD I FIX FIRST?</span>
          </div>
          <h3>Start with Machine Learning Fundamentals.</h3>
          <p>
            It's your largest high-impact competency gap (<strong>47 pts delta</strong>) and the mandatory prerequisite for <strong>3 later roadmap milestones</strong>.
          </p>
        </div>
      </div>

      <div className="fix-banner-action">
        <button 
          type="button" 
          className="primary-btn fix-action-btn"
          onClick={() => onNavigate('/path')}
        >
          <Play size={14} fill="currentColor" />
          <span>Start This Bridge</span>
          <ArrowRight size={15} />
        </button>
      </div>

    </div>
  );
};

export default WhatToFixFirstBanner;
