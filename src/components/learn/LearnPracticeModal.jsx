import React, { useState } from 'react';
import { X, FlaskConical, CheckCircle2, AlertCircle, ArrowRight, RotateCcw } from 'lucide-react';

export const LearnPracticeModal = ({ onCompletePractice, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const practiceQuestions = [
    {
      id: 1,
      question: 'Why is it critical to split your data into training and test sets BEFORE applying standard deviation scaling?',
      options: [
        'To prevent data leakage from the test set into the training feature statistics.',
        'Because Scikit-Learn will throw an assertion error otherwise.',
        'To reduce CPU compute time during gradient descent optimization.',
        'Because test data cannot have floating point numbers.'
      ],
      correctIndex: 0,
      explanation: 'Calculating scaling parameters on the entire dataset leaks distribution parameters from the test set into training, resulting in overly optimistic evaluation scores.'
    },
    {
      id: 2,
      question: 'When evaluating a machine learning model on an imbalanced dataset (98% negative, 2% positive), which metric is the MOST misleading?',
      options: [
        'ROC-AUC Score',
        'Raw Accuracy',
        'Recall (Sensitivity)',
        'F1-Score'
      ],
      correctIndex: 1,
      explanation: 'A trivial classifier that predicts negative 100% of the time will achieve 98% raw accuracy while detecting zero actual positive cases.'
    },
    {
      id: 3,
      question: 'In logistic regression, what mathematical function maps real-valued logits into valid probabilities [0, 1]?',
      options: [
        'Sigmoid / Logistic activation function',
        'Rectified Linear Unit (ReLU)',
        'Euclidean distance metric',
        'L1 Lasso penalty'
      ],
      correctIndex: 0,
      explanation: 'The Sigmoid function 1 / (1 + e^-z) maps unbounded real-valued linear outputs into the interval (0, 1).'
    }
  ];

  const handleSelectOption = (qIdx, optIdx) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    practiceQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();
  const total = practiceQuestions.length;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="practice-quiz-modal glass-panel animate-fadeIn" 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="modal-header-strip">
          <div className="modal-title-wrap">
            <FlaskConical size={16} className="text-brand-400" />
            <h3>Model Evaluation Diagnostic Practice</h3>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {!isSubmitted ? (
          <div className="quiz-body-content">
            <div className="quiz-progress-indicator">
              <span className="micro">QUESTION {currentIdx + 1} OF {total}</span>
              <div className="quiz-mini-track">
                <div className="quiz-mini-fill" style={{ width: `${((currentIdx + 1) / total) * 100}%` }} />
              </div>
            </div>

            <div className="quiz-question-box">
              <h4>{practiceQuestions[currentIdx].question}</h4>

              <div className="quiz-options-list">
                {practiceQuestions[currentIdx].options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    type="button"
                    className={`quiz-option-btn ${selectedAnswers[currentIdx] === optIdx ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(currentIdx, optIdx)}
                  >
                    <span className="opt-letter mono">{['A', 'B', 'C', 'D'][optIdx]}</span>
                    <span className="opt-text">{opt}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="quiz-nav-row">
              <button
                type="button"
                className="secondary-btn"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx(prev => prev - 1)}
              >
                Previous
              </button>

              {currentIdx < total - 1 ? (
                <button
                  type="button"
                  className="primary-btn"
                  disabled={selectedAnswers[currentIdx] === undefined}
                  onClick={() => setCurrentIdx(prev => prev + 1)}
                >
                  <span>Next Question</span>
                  <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  type="button"
                  className="primary-btn submit-quiz-btn"
                  disabled={Object.keys(selectedAnswers).length < total}
                  onClick={() => setIsSubmitted(true)}
                >
                  <span>Submit Practice</span>
                  <CheckCircle2 size={14} />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Results View */
          <div className="quiz-results-content animate-fadeIn">
            <div className="results-hero-box">
              <div className="score-ring-badge mono font-bold">
                {score} / {total}
              </div>
              <h4>{score === total ? 'Perfect Diagnostic Score! 🎉' : 'Practice Completed!'}</h4>
              <p>You have demonstrated conceptual grasp of model evaluation and data leakage prevention.</p>
            </div>

            <div className="modal-footer-actions">
              <button 
                type="button" 
                className="secondary-btn"
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentIdx(0);
                  setSelectedAnswers({});
                }}
              >
                <RotateCcw size={13} />
                <span>Retry Practice</span>
              </button>

              <button 
                type="button" 
                className="primary-btn"
                onClick={() => {
                  onCompletePractice();
                  onClose();
                }}
              >
                <CheckCircle2 size={14} />
                <span>Apply to Milestone Progress</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default LearnPracticeModal;
