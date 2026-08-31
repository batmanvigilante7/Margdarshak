import React from 'react';
import { Route, ArrowRight, Sparkles } from 'lucide-react';
import { ResourceCard } from './ResourceCard';

export const CurrentMilestoneResources = ({ 
  milestoneTitle = 'Machine Learning Fundamentals', 
  resources = [], 
  savedIds = [],
  pathResourceIds = [],
  onToggleSave,
  onAddToPath,
  onClickCard,
  onNavigate 
}) => {
  if (!resources || resources.length === 0) return null;

  return (
    <div className="current-milestone-resources-section glass-panel animate-fadeIn">
      
      <div className="milestone-section-header">
        <div className="header-left">
          <div className="active-milestone-indicator">
            <span className="live-pulse-dot" />
            <span className="micro">ACTIVE ROADMAP MILESTONE</span>
          </div>
          <h3>Currently Learning: {milestoneTitle}</h3>
        </div>

        <button 
          type="button" 
          className="secondary-btn"
          onClick={() => onNavigate('/learn/ml-fundamentals')}
        >
          <span>Open Milestone Workspace</span>
          <ArrowRight size={13} />
        </button>
      </div>

      <div className="milestone-resources-grid">
        {resources.map((res) => (
          <ResourceCard
            key={res.id}
            resource={res}
            isSaved={savedIds.includes(res.id)}
            isAddedToPath={pathResourceIds.includes(res.id)}
            onToggleSave={onToggleSave}
            onAddToPath={onAddToPath}
            onClickCard={onClickCard}
          />
        ))}
      </div>

    </div>
  );
};

export default CurrentMilestoneResources;
