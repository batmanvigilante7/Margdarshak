import React from 'react';
import { Bot, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

export const CopilotTeaserCard = ({ onNavigate }) => {
  return (
    <div className="dashboard-card copilot-teaser-card glass-panel">
      
      <div className="copilot-card-inner">
        <div className="copilot-icon-badge">
          <Bot size={20} />
          <span className="copilot-sparkle-dot" />
        </div>

        <div className="copilot-content">
          <div className="copilot-top-meta">
            <span className="micro">MARGDARSHAK AI COPILOT</span>
            <span className="live-pill"><i /> Active Mentor</span>
          </div>
          
          <p className="copilot-quote">
            "You have <strong>4.5 hours logged</strong> this week. I recommend wrapping up the <strong>Machine Learning Fundamentals</strong> quiz before taking on the Deep Learning modules."
          </p>

          <button 
            type="button" 
            className="copilot-ask-btn" 
            onClick={() => onNavigate('/copilot')}
          >
            <MessageSquare size={14} />
            <span>Ask Margdarshak for personalized advice</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default CopilotTeaserCard;
