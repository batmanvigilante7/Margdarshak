import React from 'react';
import { Sparkles, Sliders, Clock, Layers, Award, CheckCircle2 } from 'lucide-react';

export const PathSummaryHero = ({ 
  targetCareer = 'AI Engineer',
  nsqfLevel = 'NSQF Level 6',
  readiness = 64,
  milestonesCount = 6,
  totalHours = 46,
  projectsCount = 2,
  checksCount = 3,
  weeklyHours = 10,
  onOpenPaceModal 
}) => {
  const estimatedWeeks = Math.ceil(totalHours / weeklyHours);

  return (
    <div className="path-summary-hero glass-panel">
      
      <div className="hero-top-row">
        <div className="hero-status-tag">
          <Sparkles size={13} className="sparkle-ai" />
          <span>✦ YOUR PATH IS READY</span>
        </div>

        <button 
          type="button" 
          className="adjust-pace-trigger-btn"
          onClick={onOpenPaceModal}
        >
          <Sliders size={13} />
          <span>Adjust Learning Pace ({weeklyHours}h/wk • ~{estimatedWeeks} wks)</span>
        </button>
      </div>

      <div className="hero-main-content">
        <div className="hero-target-block">
          <h2>{targetCareer}</h2>
          <div className="hero-subtext">
            <span>{nsqfLevel}</span> • <span className="readiness-highlight mono">{readiness}% current readiness</span>
          </div>
        </div>

        <div className="hero-metrics-pill-row">
          <div className="stat-pill-cell">
            <Layers size={14} className="text-brand-300" />
            <span className="mono font-bold">{milestonesCount} milestones</span>
          </div>

          <div className="stat-pill-cell">
            <Clock size={14} className="text-brand-300" />
            <span className="mono font-bold">~{totalHours}h bridge</span>
          </div>

          <div className="stat-pill-cell">
            <Award size={14} className="text-purple" />
            <span className="mono font-bold">{projectsCount} projects</span>
          </div>

          <div className="stat-pill-cell">
            <CheckCircle2 size={14} className="text-emerald" />
            <span className="mono font-bold">{checksCount} checks</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PathSummaryHero;
