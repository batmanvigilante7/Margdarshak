import React from 'react';
import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

export const AnalyticsAIInsight = ({ onNavigate }) => {
  return (
    <div className="analytics-ai-insight-card glass-panel animate-fadeIn">
      
      <div className="ai-insight-header">
        <div className="header-left">
          <Sparkles size={16} className="sparkle-ai" />
          <span className="micro">✦ MARGDARSHAK AI INSIGHT</span>
        </div>
        <span className="ai-status-tag mono">Calculated from verified diagnostics</span>
      </div>

      <div className="ai-insight-content">
        <p>
          You're making strong, verifiable velocity in technical machine learning foundations (+18% net competency gain).
        </p>
        <p>
          Your highest-impact remaining blocker is <strong>Model Evaluation (42% acquired vs 80% required)</strong>. Closing this 38-point deficit will advance your overall NSQF Level 6 career readiness from <strong>64% to 78%</strong>.
        </p>
      </div>

      <div className="ai-insight-actions">
        <button 
          type="button" 
          className="primary-btn insight-action-btn"
          onClick={() => onNavigate('/skill-gap')}
        >
          <span>Work on Model Evaluation Gap</span>
          <ArrowRight size={14} />
        </button>

        <button 
          type="button" 
          className="secondary-btn"
          onClick={() => onNavigate('/copilot')}
        >
          <MessageSquare size={13} />
          <span>Ask Copilot for Advice</span>
        </button>
      </div>

    </div>
  );
};

export default AnalyticsAIInsight;
