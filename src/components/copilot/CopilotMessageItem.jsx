import React from 'react';
import { Sparkles, ArrowRight, Info } from 'lucide-react';

export const CopilotMessageItem = ({ 
  message, 
  onActionClick, 
  onExplainClick 
}) => {
  const isAi = message.sender === 'ai';

  if (!isAi) {
    return (
      <div className="chat-message-row user animate-fadeIn">
        <div className="user-message-bubble">
          <p>{message.text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-message-row ai animate-fadeIn">
      
      {/* AI Message Card */}
      <div className="ai-message-card glass-panel">
        
        {/* Header */}
        <div className="ai-message-header">
          <div className="ai-identity">
            <span className="ai-dot-symbol">◉</span>
            <strong>Margdarshak AI</strong>
          </div>
          
          {message.hasExplainability && (
            <button 
              type="button" 
              className="explain-link-btn"
              onClick={() => onExplainClick(message)}
              title="See why Margdarshak made this recommendation"
            >
              <Info size={12} />
              <span>Why this recommendation?</span>
            </button>
          )}
        </div>

        {/* Message Content */}
        <div className="ai-message-body">
          {message.formattedLines ? (
            message.formattedLines.map((line, idx) => {
              if (line.type === 'paragraph') {
                return <p key={idx}>{line.content}</p>;
              }
              if (line.type === 'highlight') {
                return (
                  <div key={idx} className="ai-highlight-quote">
                    <strong>{line.content}</strong>
                  </div>
                );
              }
              if (line.type === 'list') {
                return (
                  <ul key={idx} className="ai-steps-list">
                    {line.items.map((it, itemIdx) => (
                      <li key={itemIdx}>
                        <span className="step-bullet mono">{itemIdx + 1}.</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })
          ) : (
            <p>{message.text}</p>
          )}
        </div>

        {/* Action Pills Strip */}
        {message.actions && message.actions.length > 0 && (
          <div className="ai-action-pills-row">
            {message.actions.map((act, idx) => (
              <button
                key={idx}
                type="button"
                className={`action-pill-btn ${act.primary ? 'primary' : ''}`}
                onClick={() => onActionClick(act)}
              >
                <span>{act.label}</span>
                <ArrowRight size={12} />
              </button>
            ))}
          </div>
        )}

      </div>

    </div>
  );
};

export default CopilotMessageItem;
