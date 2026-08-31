import React from 'react';
import { Clock, Calendar, TrendingUp, Sparkles, MessageSquare, Route } from 'lucide-react';

export const PathOverviewCard = ({ 
  overallProgress = 20, 
  completedHours = 10.8, 
  totalHours = 54, 
  weeklyHours = 6, 
  onNavigate 
}) => {
  const weeksRemaining = Math.ceil((totalHours - completedHours) / weeklyHours);

  return (
    <div className="path-overview-bar glass-panel">
      
      {/* 1. Overall Progress */}
      <div className="overview-cell progress-cell">
        <div className="cell-top">
          <span className="micro">ROADMAP PROGRESS</span>
          <span className="mono font-bold text-emerald">{overallProgress}%</span>
        </div>
        <div className="overview-progress-bar">
          <div className="overview-progress-fill" style={{ width: `${overallProgress}%` }} />
        </div>
        <span className="cell-subtext mono">{completedHours} of {totalHours} hrs completed</span>
      </div>

      {/* 2. Pacing Velocity */}
      <div className="overview-cell">
        <span className="micro">STUDY CADENCE</span>
        <div className="cell-metric-line">
          <Calendar size={16} className="text-brand-400" />
          <span className="mono font-bold">{weeklyHours} hrs / week</span>
        </div>
        <span className="cell-subtext">~{weeksRemaining} weeks to role readiness</span>
      </div>

      {/* 3. Next High-Impact Action */}
      <div className="overview-cell leverage-cell">
        <span className="micro">ACTIVE PREREQUISITE</span>
        <div className="cell-metric-line">
          <Sparkles size={16} className="sparkle-ai" />
          <strong>Machine Learning (60%)</strong>
        </div>
        <span className="cell-subtext">Unlocks 2 downstream specialized milestones</span>
      </div>

      {/* 4. Action Buttons */}
      <div className="overview-actions-cell">
        <button 
          type="button" 
          className="copilot-mini-btn"
          onClick={() => onNavigate('/copilot')}
        >
          <MessageSquare size={13} />
          <span>Ask Copilot</span>
        </button>

        <button 
          type="button" 
          className="planner-mini-btn"
          onClick={() => onNavigate('/planner')}
        >
          <span>Adjust Schedule</span>
        </button>
      </div>

    </div>
  );
};

export default PathOverviewCard;
