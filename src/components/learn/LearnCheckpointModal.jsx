import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Award, ArrowRight, RotateCcw, TrendingUp } from 'lucide-react';

export const LearnCheckpointModal = ({ onPassCheckpoint, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const checkpointQuestions = [
    {
      id: 1,
      question: 'When training a gradient descent optimizer, what happens if the learning rate alpha is set too large?',
      options: [
        'The loss function oscillates or diverges away from the global minimum.',
        'The model guarantees immediate convergence in a single epoch.',
        'The dataset features become automatically normalized.',
        'The model will experience zero variance.'
      ],
      correctIndex: 0,
      explanation: 'An excessively large learning rate causes step sizes to overshoot the valley floor, causing divergence in the loss function.'
    },
    {
      id: 2,
      question: 'Your classification model achieves 96% training accuracy but only 68% cross-validation accuracy. What is the diagnosis and remedy?',
      options: [
        'High variance (overfitting). Add regularization, feature selection, or gather more training data.',
        'High bias (underfitting). Make the model deeper and remove all regularization penalties.',
        'The learning rate is too small. Multiply learning rate by 10.',
        'The dataset is missing random seed configuration.'
      ],
      correctIndex: 0,
      explanation: 'A large gap between training and validation accuracy is the classic signature of high variance / overfitting.'
    },
    {
      id: 3,
      question: 'In a medical cancer diagnosis application where missing a malignant tumor has catastrophic cost, which metric MUST be maximized?',
      options: [
        'Recall (True Positive Rate / Sensitivity)',
        'Precision',
        'Specificiy only',
        'Model inference latency'
      ],
      correctIndex: 0,
      explanation: 'Recall minimizes False Negatives (actual sick patients classified as healthy), which is vital in life-critical diagnostic tasks.'
    }
  ];

  const handleSelectOption = (qIdx, optIdx) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    checkpointQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();
  const total = checkpointQuestions.length;
  const passed = score >= 2;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="checkpoint-modal glass-panel animate-fadeIn" 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="modal-header-strip">
          <div className="modal-title-wrap">
            <ShieldCheck size={18} className="text-emerald" />
            <h3>Machine Learning Competency Check</h3>
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
              <span className="micro">CHECKPOINT QUESTION {currentIdx + 1} OF {total} • PASS THRESHOLD: 70%</span>
              <div className="quiz-mini-track">
                <div className="quiz-mini-fill emerald" style={{ width: `${((currentIdx + 1) / total) * 100}%` }} />
              </div>
            </div>

            <div className="quiz-question-box">
              <h4>{checkpointQuestions[currentIdx].question}</h4>

              <div className="quiz-options-list">
                {checkpointQuestions[currentIdx].options.map((opt, optIdx) => (
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
                  <span>Submit Competency Check</span>
                  <ShieldCheck size={15} />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Checkpoint Verification Results */
          <div className="checkpoint-results-view animate-fadeIn">
            {passed ? (
              <div className="checkpoint-passed-box">
                <div className="pass-icon-badge">
                  <CheckCircle2 size={32} />
                </div>
                
                <h3>✓ CHECKPOINT PASSED</h3>
                <div className="checkpoint-score-text mono">
                  Score: <strong>{score} / {total} ({Math.round((score / total) * 100)}%)</strong>
                </div>

                <div className="competency-update-banner glass-panel">
                  <div className="update-title">
                    <TrendingUp size={14} className="text-emerald" />
                    <span>Machine Learning Competency Updated</span>
                  </div>
                  <div className="update-score-row mono">
                    <span className="old-score">38%</span>
                    <span className="update-arrow">───────────────→</span>
                    <span className="new-score text-emerald font-bold">72%</span>
                  </div>
                </div>

                <p className="checkpoint-success-note">
                  Milestone 02 is now marked as complete. Milestone 03 (Statistics & Probability) has been unlocked in your roadmap.
                </p>

                <div className="checkpoint-actions-row">
                  <button 
                    type="button" 
                    className="primary-btn continue-next-btn"
                    onClick={() => {
                      onPassCheckpoint();
                      onClose();
                    }}
                  >
                    <span>Continue to Next Milestone</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="checkpoint-failed-box">
                <h4>Checkpoint Score: {score} / {total}</h4>
                <p>You scored below the 70% threshold. Review the learning resources and diagnostic practice before retrying.</p>
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
                  <span>Retry Checkpoint</span>
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default LearnCheckpointModal;
