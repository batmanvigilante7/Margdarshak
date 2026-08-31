import React, { useState } from 'react';
import { 
  Play, 
  Lock, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Award, 
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const MilestoneCard = ({ 
  milestone, 
  onSelectMilestone, 
  onNavigate 
}) => {
  const [expanded, setExpanded] = useState(milestone.status === 'active');
  const isLocked = milestone.status === 'locked';
  const isActive = milestone.status === 'active';

  return (
    <div className={`milestone-timeline-card glass-panel status-${milestone.status}`}>
      
      {/* Milestone Card Top Row */}
      <div className="milestone-top-row">
        
        {/* Left: Number & Status */}
        <div className="milestone-status-cluster">
          <div className="milestone-number-badge mono">
            {milestone.stepNumber}
          </div>
          
          <div className="milestone-title-group">
            <div className="milestone-cat-line">
              <span className="micro">{milestone.category}</span>
              <span className="milestone-nsqf mono">{milestone.nsqfTrack}</span>
            </div>
            <h3>{milestone.title}</h3>
          </div>
        </div>

        {/* Right: State Tag & Effort */}
        <div className="milestone-meta-cluster">
          {isActive && (
            <span className="milestone-state-pill active">
              <span className="pulse-dot" />
              <span>ACTIVE MILESTONE</span>
            </span>
          )}
          {milestone.status === 'unlocked' && (
            <span className="milestone-state-pill unlocked">
              <CheckCircle2 size={12} />
              <span>READY TO START</span>
            </span>
          )}
          {isLocked && (
            <span className="milestone-state-pill locked">
              <Lock size={12} />
              <span>LOCKED</span>
            </span>
          )}

          <div className="effort-badge mono">
            <Clock size={12} />
            <span>~{milestone.estimatedHours}h</span>
          </div>
        </div>

      </div>

      {/* Description */}
      <p className="milestone-desc-text">{milestone.description}</p>

      {/* Progress Bar (if active or started) */}
      {!isLocked && (
        <div className="milestone-progress-strip">
          <div className="progress-labels">
            <span>Milestone Progress</span>
            <span className="mono font-bold">{milestone.progress}% complete</span>
          </div>
          <div className="milestone-bar-track">
            <div 
              className="milestone-bar-fill" 
              style={{ width: `${milestone.progress}%` }} 
            />
          </div>
        </div>
      )}

      {/* Locked Prerequisite Notice */}
      {isLocked && (
        <div className="milestone-lock-banner">
          <Lock size={14} className="lock-icon" />
          <span>{milestone.lockReason}</span>
        </div>
      )}

      {/* Action Row */}
      <div className="milestone-action-strip">
        <div className="action-buttons-group">
          {isActive && (
            <button 
              type="button" 
              className="primary-btn milestone-cta-btn"
              onClick={() => onNavigate(`/learn/${milestone.id}`)}
            >
              <Play size={14} fill="currentColor" />
              <span>Continue Learning</span>
              <ArrowRight size={15} />
            </button>
          )}

          {milestone.status === 'unlocked' && (
            <button 
              type="button" 
              className="primary-btn milestone-cta-btn"
              onClick={() => onNavigate(`/learn/${milestone.id}`)}
            >
              <Play size={14} fill="currentColor" />
              <span>Start Milestone</span>
              <ArrowRight size={15} />
            </button>
          )}

          {isLocked && (
            <button 
              type="button" 
              className="secondary-btn milestone-cta-btn"
              onClick={() => onNavigate('/skill-gap')}
            >
              <span>View Prerequisite Gaps</span>
            </button>
          )}

          <button 
            type="button" 
            className="modules-toggle-btn"
            onClick={() => setExpanded(!expanded)}
          >
            <BookOpen size={13} />
            <span>{milestone.modules.length} Modules & Project</span>
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        {/* AI Rationale Tag */}
        <div className="milestone-prereq-note">
          <Sparkles size={13} className="sparkle-ai" />
          <span>{milestone.prereqNote}</span>
        </div>
      </div>

      {/* Expandable Module Breakdown Drawer */}
      {expanded && (
        <div className="modules-breakdown-drawer animate-fadeIn">
          
          <div className="modules-list-stack">
            {milestone.modules.map((mod, idx) => (
              <div key={idx} className={`module-item-row status-${mod.status}`}>
                <div className="module-item-left">
                  <div className="module-status-icon">
                    {mod.status === 'completed' && <CheckCircle2 size={15} className="text-emerald" />}
                    {mod.status === 'active' && <Play size={13} className="text-brand-400" fill="currentColor" />}
                    {mod.status === 'pending' && <span className="module-pending-dot" />}
                  </div>
                  <div>
                    <strong>{mod.title}</strong>
                    <div className="module-meta-line">
                      <span>{mod.provider}</span> • <span className="mono">{mod.hours}h</span> • <span>{mod.type}</span>
                    </div>
                  </div>
                </div>

                <div className="module-item-right">
                  <span className={`module-status-badge ${mod.status}`}>
                    {mod.statusLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Capstone Deliverable Project Box */}
          {milestone.capstoneProject && (
            <div className="capstone-deliverable-box">
              <div className="capstone-box-header">
                <Award size={15} className="text-brand-300" />
                <strong>HANDS-ON PROJECT DELIVERABLE</strong>
              </div>
              <p>{milestone.capstoneProject.title} — {milestone.capstoneProject.description}</p>
            </div>
          )}

        </div>
      )}

    </div>
  );
};

export default MilestoneCard;
