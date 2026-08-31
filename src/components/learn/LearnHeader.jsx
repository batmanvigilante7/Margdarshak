import React from 'react';
import { ArrowLeft, Clock, Layers, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const LearnHeader = ({ 
  milestoneNumber = '02',
  title = 'Machine Learning Fundamentals',
  nsqfLevel = 'NSQF Level 6',
  competencyType = 'Core Competency',
  estimatedHours = 8,
  competenciesCount = 3,
  onNavigate 
}) => {
  return (
    <div className="learn-page-header glass-panel">
      
      {/* Top Breadcrumb Line */}
      <div className="learn-breadcrumb-row">
        <button 
          type="button" 
          className="back-to-path-btn"
          onClick={() => onNavigate('/path')}
        >
          <ArrowLeft size={14} />
          <span>Back to Learning Path</span>
        </button>
        <span className="breadcrumb-divider">/</span>
        <span className="breadcrumb-current mono">MILESTONE {milestoneNumber}</span>
      </div>

      {/* Main Title Block */}
      <div className="learn-header-content">
        <div className="learn-title-block">
          <div className="learn-badge-strip">
            <span className="nsqf-badge level-6">◇ {nsqfLevel}</span>
            <span className="competency-type-tag">{competencyType}</span>
          </div>
          <h2>{title}</h2>
          <p>
            Build the foundational skills required to train, evaluate, and reason about machine-learning models.
          </p>
        </div>

        {/* Quick Meta Specs Strip */}
        <div className="learn-specs-pill-row">
          <div className="spec-pill mono">
            <Clock size={13} className="text-brand-300" />
            <span>~{estimatedHours} hours</span>
          </div>
          <div className="spec-pill mono">
            <Layers size={13} className="text-brand-300" />
            <span>{competenciesCount} competencies</span>
          </div>
          <div className="spec-pill mono">
            <Award size={13} className="text-purple" />
            <span>1 project</span>
          </div>
          <div className="spec-pill mono">
            <ShieldCheck size={13} className="text-emerald" />
            <span>1 checkpoint</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LearnHeader;
