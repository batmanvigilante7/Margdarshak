import React from 'react';
import { Sparkles, Clock, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export const PlannerTodayFocus = ({ 
  taskTitle = 'Model Training Fundamentals & Loss Formulations',
  taskDuration = '45 min',
  taskCategory = 'Machine Learning',
  isCompleted = false,
  onStartTask 
}) => {
  return (
    <div className="today-focus-card glass-panel animate-fadeIn">
      
      <div className="today-focus-left">
        <div className="today-eyebrow">
          <Sparkles size={13} className="sparkle-ai" />
          <span className="micro">✦ TODAY'S SCHEDULED FOCUS</span>
        </div>

        <h3>{taskTitle}</h3>

        <div className="today-meta-row">
          <div className="meta-pill mono">
            <Clock size={12} />
            <span>{taskDuration}</span>
          </div>
          <div className="meta-pill target-gap">
            <span>Addresses: <strong>{taskCategory}</strong> gap</span>
          </div>
        </div>
      </div>

      <div className="today-focus-right">
        <button 
          type="button" 
          className="primary-btn today-start-btn"
          onClick={onStartTask}
        >
          <Play size={14} fill="currentColor" />
          <span>{isCompleted ? 'Review Module' : 'Start Learning'}</span>
          <ArrowRight size={14} />
        </button>
      </div>

    </div>
  );
};

export default PlannerTodayFocus;
