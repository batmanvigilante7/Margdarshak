import React from 'react';
import { Calendar, CheckCircle2, Clock, Flame } from 'lucide-react';

export const WeeklyGoalCard = ({ onNavigate }) => {
  const currentHours = 4.5;
  const targetHours = 6.0;
  const percent = Math.round((currentHours / targetHours) * 100);

  return (
    <div className="dashboard-card weekly-goal-card glass-panel">
      
      <div className="card-header-clean">
        <div>
          <span className="micro">WEEKLY CADENCE</span>
          <h3>Study Progress</h3>
        </div>
        <span className="streak-badge">
          <Flame size={14} className="streak-flame" />
          <span>3-day pace</span>
        </span>
      </div>

      <div className="goal-main-metric">
        <div className="metric-number-wrap">
          <span className="current-num mono">{currentHours}</span>
          <span className="target-num mono">/ {targetHours} hrs</span>
        </div>
        <span className="percent-badge mono">{percent}%</span>
      </div>

      {/* Progress Bar */}
      <div className="goal-progress-bar">
        <div className="goal-progress-fill" style={{ width: `${percent}%` }} />
      </div>

      {/* Mini Activity Breakdown */}
      <div className="weekly-stats-grid">
        <div className="stat-box">
          <strong className="mono">2</strong>
          <span>Milestones</span>
        </div>
        <div className="stat-box">
          <strong className="mono">1</strong>
          <span>Assessment</span>
        </div>
        <div className="stat-box">
          <strong className="mono">3</strong>
          <span>Sessions</span>
        </div>
      </div>

      <button 
        type="button" 
        className="text-link-btn" 
        onClick={() => onNavigate('/planner')}
      >
        <span>Open Weekly Planner →</span>
      </button>

    </div>
  );
};

export default WeeklyGoalCard;
