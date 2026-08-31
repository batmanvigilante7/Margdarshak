import React from 'react';
import { Sparkles, CheckCircle2, Clock, Zap } from 'lucide-react';

export const PlannerSummaryHero = ({ 
  availableHours = 8,
  plannedHours = 6,
  completedHours = 2,
  prioritySkill = 'Machine Learning',
  gapPoints = 47
}) => {
  const remainingHours = Math.max(0, availableHours - plannedHours);
  const plannedPercent = Math.min(100, Math.round((plannedHours / availableHours) * 100));
  const completedPercent = Math.min(100, Math.round((completedHours / availableHours) * 100));

  return (
    <div className="planner-summary-hero glass-panel animate-fadeIn">
      
      <div className="summary-hero-top-line">
        <div className="summary-stat-left">
          <span className="micro">YOUR WEEK OVERVIEW</span>
          <div className="available-hours-heading">
            <strong className="mono">{availableHours}h</strong>
            <span>available this week</span>
          </div>
        </div>

        <div className="summary-priority-badge">
          <Zap size={13} className="text-rose-400" />
          <span>Priority Gap: <strong>{prioritySkill}</strong> (-{gapPoints} pts)</span>
        </div>
      </div>

      {/* Dual Progress Meter Bar */}
      <div className="planner-hero-progress-wrap">
        <div className="planner-hero-progress-bar">
          <div 
            className="progress-completed-fill" 
            style={{ width: `${completedPercent}%` }} 
            title={`${completedHours}h completed`}
          />
          <div 
            className="progress-planned-fill" 
            style={{ width: `${plannedPercent - completedPercent}%` }} 
            title={`${plannedHours - completedHours}h planned`}
          />
        </div>

        <div className="progress-legend-row mono">
          <div className="legend-item">
            <span className="legend-dot completed" />
            <span>{completedHours}h completed</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot planned" />
            <span>{plannedHours - completedHours}h scheduled</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot remaining" />
            <span>{remainingHours}h buffer remaining</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PlannerSummaryHero;
