import React from 'react';
import { Sparkles, RotateCcw, ShieldCheck, Cpu } from 'lucide-react';

export const CopilotHeader = ({ 
  targetCareer = 'AI Engineer',
  nsqfLevel = 'NSQF Level 6',
  onResetChat 
}) => {
  return (
    <div className="copilot-page-header glass-panel">
      
      <div className="copilot-header-info">
        <div className="eyebrow">
          <Sparkles size={13} className="sparkle-ai" />
          <span>AI CAREER COPILOT</span>
        </div>
        <h2>Your path, with a guide beside you.</h2>
        <p>
          Ask about your competencies, personalized roadmap, career target, or what to learn next.
        </p>
      </div>

      <div className="copilot-status-badge-card">
        <div className="copilot-identity-line">
          <div className="ai-pulse-dot-wrap">
            <span className="ai-core-dot" />
            <span className="ai-pulse-ring" />
          </div>
          <div>
            <strong>Margdarshak AI</strong>
            <span className="micro">{nsqfLevel} Context Synchronized</span>
          </div>
        </div>

        <button 
          type="button" 
          className="reset-conversation-btn"
          onClick={onResetChat}
          title="Start a new conversation"
        >
          <RotateCcw size={12} />
          <span>New Chat</span>
        </button>
      </div>

    </div>
  );
};

export default CopilotHeader;
