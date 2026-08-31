import React from 'react';
import { 
  X, 
  Sparkles, 
  ExternalLink, 
  Plus, 
  Check, 
  Target, 
  Route, 
  Clock, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';

export const ResourceDrawer = ({ 
  resource, 
  isAddedToPath = false, 
  onAddToPath, 
  onClose,
  onNavigate 
}) => {
  if (!resource) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="resource-detail-drawer glass-panel animate-fadeIn" 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Strip */}
        <div className="drawer-header-strip">
          <div className="drawer-title-wrap">
            <span className="provider-pill mono">{resource.provider}</span>
            <span className="nsqf-badge level-6">◇ NSQF Level {resource.nsqfLevel || 6}</span>
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

        {/* Title & Description */}
        <div className="drawer-main-headline">
          <h3>{resource.title}</h3>
          <p>{resource.description}</p>
        </div>

        {/* Why Recommended Section */}
        <div className="drawer-reason-card glass-panel">
          <div className="reason-header">
            <Sparkles size={14} className="sparkle-ai" />
            <span className="micro">WHY THIS IS RECOMMENDED FOR YOU</span>
          </div>

          <p className="reason-text">
            {resource.recommendationReason || `This resource directly targets your ${resource.skill} gap, providing structured coursework calibrated for NSQF Level 6 competence.`}
          </p>

          {/* Match Breakdown Matrix */}
          <div className="match-score-breakdown">
            <div className="match-breakdown-row">
              <span className="factor-name">Skill Gap Deficit Match</span>
              <strong className="mono text-emerald">95%</strong>
            </div>
            <div className="match-breakdown-row">
              <span className="factor-name">Career Role Relevance</span>
              <strong className="mono text-brand-300">92%</strong>
            </div>
            <div className="match-breakdown-row">
              <span className="factor-name">NSQF Level Calibrated</span>
              <strong className="mono text-purple">90%</strong>
            </div>
            <div className="match-breakdown-row">
              <span className="factor-name">Learner Pace Fit</span>
              <strong className="mono text-sky-400">88%</strong>
            </div>
          </div>
        </div>

        {/* Roadmap Milestone Connection */}
        <div className="roadmap-connection-box glass-panel">
          <div className="connection-header">
            <Route size={14} className="text-brand-300" />
            <span className="micro">ROADMAP MILESTONE CONNECTION</span>
          </div>
          <h4>Milestone: {resource.milestoneTitle || 'Model Evaluation & Metrics'}</h4>
          <p className="milestone-sub">
            Completing this material provides the practical knowledge needed to pass the milestone competency checkpoint.
          </p>
        </div>

        {/* Drawer Footer Actions */}
        <div className="drawer-footer-actions">
          <button 
            type="button" 
            className={`primary-btn ${isAddedToPath ? 'added' : ''}`}
            onClick={() => onAddToPath(resource)}
          >
            {isAddedToPath ? (
              <>
                <Check size={14} className="text-emerald" />
                <span>Added to Learning Path</span>
              </>
            ) : (
              <>
                <Plus size={14} />
                <span>Add to My Path</span>
              </>
            )}
          </button>

          <a 
            href={resource.url} 
            target="_blank" 
            rel="noreferrer"
            className="secondary-btn"
          >
            <span>Open Provider</span>
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default ResourceDrawer;
