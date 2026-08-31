import React from 'react';
import { Award, Sparkles, CheckSquare, Target } from 'lucide-react';

export const AssessmentHeader = ({ 
  currentQuestionIndex, 
  totalQuestions = 10, 
  targetCareer = 'AI & Machine Learning Engineer', 
  nsqfLevel = 'NSQF Level 6' 
}) => {
  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);
  const remaining = totalQuestions - (currentQuestionIndex + 1);

  return (
    <div className="assessment-header-block glass-panel">
      
      {/* Top Title & Target Context */}
      <div className="assessment-header-top">
        <div>
          <div className="eyebrow">
            <Sparkles size={13} />
            <span>COMPETENCY BENCHMARK DIAGNOSTIC</span>
          </div>
          <h2>Let's measure your current skills</h2>
          <div className="target-career-indicator">
            <Target size={14} className="text-brand-400" />
            <span>Target: <strong>{targetCareer}</strong></span>
            <span className="nsqf-badge level-6">{nsqfLevel}</span>
          </div>
        </div>

        <div className="question-count-badge">
          <span className="count-main mono">
            {currentQuestionIndex + 1} <span className="text-tertiary">/ {totalQuestions}</span>
          </span>
          <span className="count-sub">
            {remaining === 0 ? 'Final Question' : `${remaining} questions remaining`}
          </span>
        </div>
      </div>

      {/* Progress Track */}
      <div className="assessment-progress-wrapper">
        <div className="assessment-progress-bar">
          <div 
            className="assessment-progress-fill" 
            style={{ width: `${progressPercent}%` }} 
          />
        </div>
        <div className="progress-meta-row">
          <span>Diagnostic Progress</span>
          <span className="mono">{progressPercent}% complete</span>
        </div>
      </div>

    </div>
  );
};

export default AssessmentHeader;
