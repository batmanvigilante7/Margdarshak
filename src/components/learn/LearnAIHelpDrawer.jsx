import React, { useState } from 'react';
import { X, Sparkles, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';

export const LearnAIHelpDrawer = ({ onNavigate, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState('precision-vs-recall');

  const topics = [
    {
      id: 'precision-vs-recall',
      title: 'Precision vs. Recall in simple terms',
      content: 'Precision answers: "Of all positive predictions I made, how many were actually correct?" (minimizes false alarms). Recall answers: "Of all actual positive cases in reality, how many did I successfully find?" (minimizes missed targets).'
    },
    {
      id: 'overfitting-prevention',
      title: 'How to diagnose and fix overfitting',
      content: 'Overfitting occurs when training accuracy is much higher than test accuracy. Remedies include: adding L2 regularization (Ridge), pruning tree depth, using cross-validation, and acquiring more training samples.'
    },
    {
      id: 'stratified-split',
      title: 'Why stratified train/test split is necessary',
      content: 'Stratification preserves the original class ratio (e.g. 90% non-churn, 10% churn) in both the training set and the test set, preventing sample bias in rare class distributions.'
    }
  ];

  const currentTopic = topics.find(t => t.id === selectedTopic) || topics[0];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="ai-help-drawer glass-panel animate-fadeIn" 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="modal-header-strip">
          <div className="modal-title-wrap">
            <Sparkles size={16} className="sparkle-ai" />
            <h3>Contextual AI Assistant</h3>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close drawer"
          >
            <X size={18} />
          </button>
        </div>

        <p className="modal-subtext">
          Instant conceptual help for Machine Learning Fundamentals concepts.
        </p>

        {/* Quick Topics Pills */}
        <div className="ai-topics-pills-row">
          {topics.map(t => (
            <button
              key={t.id}
              type="button"
              className={`topic-pill-btn ${selectedTopic === t.id ? 'active' : ''}`}
              onClick={() => setSelectedTopic(t.id)}
            >
              <span>{t.title}</span>
            </button>
          ))}
        </div>

        {/* Topic Answer Box */}
        <div className="ai-answer-card glass-panel">
          <div className="ai-answer-header">
            <Sparkles size={13} className="sparkle-ai" />
            <strong>{currentTopic.title}</strong>
          </div>
          <p className="ai-answer-body">{currentTopic.content}</p>
        </div>

        {/* Navigation to Full Copilot */}
        <div className="ai-help-footer">
          <button 
            type="button" 
            className="full-copilot-link-btn"
            onClick={() => {
              onClose();
              onNavigate('/copilot');
            }}
          >
            <MessageSquare size={13} />
            <span>Open Full Margdarshak Copilot</span>
            <ArrowRight size={13} />
          </button>

          <button 
            type="button" 
            className="secondary-btn" 
            onClick={onClose}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default LearnAIHelpDrawer;
