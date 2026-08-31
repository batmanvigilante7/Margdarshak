import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  Lock, 
  Clock, 
  Layers, 
  Award, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  TrendingUp,
  BookOpen,
  FlaskConical,
  Wrench,
  ShieldCheck
} from 'lucide-react';

export const MilestoneTimelineCard = ({ 
  milestone, 
  onNavigate 
}) => {
  const [whyExpanded, setWhyExpanded] = useState(false);
  const isActive = milestone.status === 'active';
  const isCompleted = milestone.status === 'completed';
  const isRecommended = milestone.status === 'recommended';
  const isLocked = milestone.status === 'locked';

  const getTypeIcon = (type) => {
    switch (type) {
      case 'learn':
        return <BookOpen size={12} />;
      case 'practice':
        return <FlaskConical size={12} />;
      case 'build':
        return <Wrench size={12} />;
      case 'prove':
        return <ShieldCheck size={12} />;
      default:
        return <Layers size={12} />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'learn': return '📚 Learn';
      case 'practice': return '🧪 Practice';
      case 'build': return '🛠 Build';
      case 'prove': return '✓ Prove';
      default: return 'Module';
    }
  };

  return (
    <div className={`milestone-timeline-item status-${milestone.status}`}>
      
      {/* 1. Left Vertical Timeline Node */}
      <div className="timeline-node-column">
        <div className={`timeline-node-circle ${milestone.status}`}>
          {isCompleted && <span className="node-icon-check">✓</span>}
          {isActive && <span className="node-icon-active">▶</span>}
          {isRecommended && <span className="node-icon-next mono">{milestone.stepNumber}</span>}
          {isLocked && <Lock size={12} className="node-icon-lock" />}
        </div>
        <div className="timeline-connecting-line" />
      </div>

      {/* 2. Milestone Card Body */}
      <div className={`milestone-card-glass glass-panel status-${milestone.status}`}>
        
        {/* Top Header Row */}
        <div className="milestone-card-header">
          <div className="milestone-card-title-group">
            <div className="milestone-tags-row">
              <span className="step-num-pill mono">STEP {milestone.stepNumber}</span>
              <span className="type-badge-pill">{getTypeLabel(milestone.type)}</span>
              <span className="nsqf-badge level-6">◇ {milestone.nsqfBadge}</span>
              {milestone.marketDemand && (
                <span className="market-demand-badge">
                  <TrendingUp size={11} />
                  <span>{milestone.marketDemand}</span>
                </span>
              )}
            </div>

            <h3>{milestone.title}</h3>
          </div>

          {/* Status Pill */}
          <div className="milestone-status-badge-wrap">
            {isActive && (
              <span className="milestone-status-pill active">
                <span className="pulse-indicator" />
                <span>● IN PROGRESS</span>
              </span>
            )}
            {isCompleted && (
              <span className="milestone-status-pill completed">
                <CheckCircle2 size={12} />
                <span>✓ COMPLETED</span>
              </span>
            )}
            {isRecommended && (
              <span className="milestone-status-pill recommended">
                <span>◌ NEXT MILESTONE</span>
              </span>
            )}
            {isLocked && (
              <span className="milestone-status-pill locked">
                <Lock size={12} />
                <span>🔒 LOCKED</span>
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="milestone-description">{milestone.description}</p>

        {/* Milestone Specs & Stats */}
        <div className="milestone-stats-strip">
          <div className="spec-item mono">
            <Clock size={13} className="text-brand-400" />
            <span>⏱ ~{milestone.estimatedHours} hours</span>
          </div>
          <div className="spec-item mono">
            <Layers size={13} className="text-brand-400" />
            <span>◇ {milestone.competenciesCount} competencies</span>
          </div>
          <div className="spec-item skills-list">
            <span className="micro">SKILLS:</span>
            <span className="skills-tags">{milestone.skills.join(' • ')}</span>
          </div>
        </div>

        {/* Gap Coverage Progress Bar */}
        {milestone.gapCoverage && (
          <div className="gap-coverage-box">
            <div className="gap-coverage-label">
              <span className="micro">ADDRESSES YOUR GAPS</span>
              <span className="mono font-bold text-brand-300">
                {milestone.gapCoverage.name} ({milestone.gapCoverage.percentage}% covered)
              </span>
            </div>
            <div className="gap-coverage-track">
              <div 
                className="gap-coverage-fill" 
                style={{ width: `${milestone.gapCoverage.percentage}%` }} 
              />
            </div>
          </div>
        )}

        {/* Deliverable Box */}
        <div className="milestone-deliverable-box">
          <div className="deliverable-header">
            <Award size={14} className="text-purple" />
            <span className="micro">PRACTICAL DELIVERABLE / CAPSTONE</span>
          </div>
          <p className="deliverable-text">
            <strong>{milestone.deliverable}</strong>
          </p>
        </div>

        {/* Locked Prerequisites Requirement Notice */}
        {isLocked && milestone.prereqLockDetails && (
          <div className="prereq-lock-box">
            <Lock size={13} className="lock-icon" />
            <div className="lock-text-block">
              <strong>Prerequisites Required:</strong>
              <div className="prereq-requirements-list">
                {milestone.prereqLockDetails.map((req, idx) => (
                  <span key={idx} className={`req-item ${req.completed ? 'done' : 'missing'}`}>
                    {req.completed ? '✓' : '○'} {req.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Card Action Strip */}
        <div className="milestone-card-footer">
          <div className="footer-actions-left">
            {isActive && (
              <button 
                type="button" 
                className="primary-btn milestone-primary-btn"
                onClick={() => onNavigate(`/learn/${milestone.id}`)}
              >
                <Play size={14} fill="currentColor" />
                <span>Continue Learning</span>
                <ArrowRight size={14} />
              </button>
            )}

            {isRecommended && (
              <button 
                type="button" 
                className="primary-btn milestone-primary-btn"
                onClick={() => onNavigate(`/learn/${milestone.id}`)}
              >
                <Play size={14} fill="currentColor" />
                <span>Start Milestone</span>
                <ArrowRight size={14} />
              </button>
            )}

            {isCompleted && (
              <button 
                type="button" 
                className="secondary-btn"
                onClick={() => onNavigate(`/learn/${milestone.id}`)}
              >
                <span>Review Completed Modules</span>
              </button>
            )}

            {isLocked && (
              <button 
                type="button" 
                className="locked-action-btn"
                disabled
              >
                <Lock size={13} />
                <span>Complete Prerequisites First</span>
              </button>
            )}

            <button 
              type="button" 
              className="why-step-btn"
              onClick={() => setWhyExpanded(!whyExpanded)}
            >
              <Sparkles size={12} className="sparkle-ai" />
              <span>{whyExpanded ? 'Hide Reason' : 'Why this step?'}</span>
              {whyExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>
          </div>
        </div>

        {/* Expandable "Why This Step?" Drawer */}
        {whyExpanded && (
          <div className="why-step-drawer animate-fadeIn">
            <div className="why-step-header">
              <Sparkles size={13} className="sparkle-ai" />
              <span>WHY THIS STEP?</span>
            </div>
            <p>{milestone.whyThisStep}</p>
            {milestone.unlocks && (
              <div className="unlocks-chain">
                <span className="micro">UNLKOCKS SUBSEQUENT ROADMAP STEPS:</span>
                <div className="unlocks-pills">
                  {milestone.unlocks.map((u, idx) => (
                    <span key={idx} className="unlock-pill">→ {u}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
};

export default MilestoneTimelineCard;
