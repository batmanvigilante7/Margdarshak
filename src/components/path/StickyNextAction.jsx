import React from 'react';
import { Play, ArrowRight, Sparkles, Sliders } from 'lucide-react';

export const StickyNextAction = ({ 
  activeMilestoneTitle = 'Machine Learning Fundamentals',
  estimatedHours = 8,
  skillsCount = 3,
  projectsCount = 1,
  onContinue,
  onAdjustPlan
}) => {
  return (
    <div className="sticky-next-action-bar glass-panel animate-fadeIn">
      <div className="sticky-action-left">
        <div className="sticky-icon-wrap">
          <Sparkles size={16} className="sparkle-ai" />
        </div>
        <div>
          <span className="micro text-brand-300">✦ CURRENT ACTIVE MILESTONE</span>
          <h4>{activeMilestoneTitle}</h4>
          <span className="sticky-meta mono">
            ~{estimatedHours}h estimated • {skillsCount} skills • {projectsCount} project
          </span>
        </div>
      </div>

      <div className="sticky-action-right">
        <button 
          type="button" 
          className="adjust-plan-btn"
          onClick={onAdjustPlan}
        >
          <Sliders size={13} />
          <span>Adjust Plan</span>
        </button>

        <button 
          type="button" 
          className="primary-btn continue-btn"
          onClick={onContinue}
        >
          <Play size={14} fill="currentColor" />
          <span>Continue Learning</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default StickyNextAction;
