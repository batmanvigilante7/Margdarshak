import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  HelpCircle, 
  Lightbulb, 
  Check, 
  Layers, 
  Info 
} from 'lucide-react';

const CONFIDENCE_LEVELS = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'familiar', label: 'Familiar' },
  { id: 'comfortable', label: 'Comfortable' },
  { id: 'expert', label: 'Expert' }
];

export const QuestionCard = ({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  selectedConfidence,
  onSelectAnswer,
  onSelectConfidence,
  onPrev,
  onNext
}) => {
  const [showClarification, setShowClarification] = useState(false);
  const isLast = questionIndex === totalQuestions - 1;

  return (
    <div className="question-workspace-card glass-panel animate-fadeIn">
      
      {/* Question Header & Category */}
      <div className="question-card-top">
        <div className="question-category-tag">
          <span className="category-name">{question.competency}</span>
          <span className="category-tier">({question.tier})</span>
        </div>
        <span className="question-number-pill mono">
          Question {questionIndex + 1 < 10 ? `0${questionIndex + 1}` : questionIndex + 1}
        </span>
      </div>

      {/* Scenario Context Block */}
      {question.scenario && (
        <div className="question-scenario-box">
          <span className="scenario-label">SCENARIO CONTEXT</span>
          <p>{question.scenario}</p>
        </div>
      )}

      {/* Question Main Prompt */}
      <div className="question-prompt">
        <h3>{question.question}</h3>
      </div>

      {/* 4 Option Choices */}
      <div className="options-stack">
        {question.options.map((opt) => {
          const isSelected = selectedAnswer === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              className={`option-choice-card ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectAnswer(opt.id)}
            >
              <div className="option-radio-indicator">
                <div className="option-radio-dot" />
              </div>
              <div className="option-text">
                <span className="option-letter mono">{opt.id.toUpperCase()}.</span>
                <span>{opt.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Self-Confidence Selector */}
      <div className="confidence-assessment-bar">
        <div className="confidence-label">
          <span>How confident are you with this concept?</span>
        </div>
        <div className="confidence-buttons-group">
          {CONFIDENCE_LEVELS.map((conf) => {
            const isActive = (selectedConfidence || 'familiar') === conf.id;
            return (
              <button
                key={conf.id}
                type="button"
                className={`conf-pill-btn ${isActive ? 'active' : ''}`}
                onClick={() => onSelectConfidence(conf.id)}
              >
                {conf.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Clarification Tooltip Drawer */}
      <div className="clarification-helper-wrap">
        <button
          type="button"
          className="clarification-toggle-btn"
          onClick={() => setShowClarification(!showClarification)}
        >
          <Lightbulb size={14} className="lightbulb-icon" />
          <span>{showClarification ? 'Hide context guidance' : 'Need clarification?'}</span>
        </button>

        {showClarification && (
          <div className="clarification-content-box animate-fadeIn">
            <Info size={14} className="info-icon" />
            <p>{question.clarification}</p>
          </div>
        )}
      </div>

      {/* Navigation Actions */}
      <div className="question-nav-actions">
        <button
          type="button"
          className="secondary-btn"
          onClick={onPrev}
          disabled={questionIndex === 0}
        >
          <ArrowLeft size={16} />
          <span>Previous</span>
        </button>

        <button
          type="button"
          className="primary-btn"
          onClick={onNext}
          disabled={!selectedAnswer}
        >
          <span>{isLast ? 'Complete Assessment' : 'Next Question'}</span>
          <ArrowRight size={16} />
        </button>
      </div>

    </div>
  );
};

export default QuestionCard;
