import React from 'react';
import { Calendar, Sparkles, RotateCcw, Clock } from 'lucide-react';

export const PlannerHeader = ({ 
  weekRange = 'Aug 31 — Sep 6, 2026',
  onRegeneratePlan 
}) => {
  return (
    <div className="planner-page-header glass-panel">
      
      <div className="planner-header-info">
        <div className="eyebrow">
          <Calendar size={13} className="sparkle-ai" />
          <span>ADAPTIVE STUDY PLANNER</span>
        </div>
        <h2>Make your learning fit your week.</h2>
        <p>
          Your schedule is dynamically synthesized from your target career requirements, active milestone, and identified competency gaps.
        </p>
      </div>

      <div className="planner-header-actions">
        <div className="week-range-pill mono">
          <Clock size={13} className="text-brand-300" />
          <span>{weekRange}</span>
        </div>

        <button 
          type="button" 
          className="regenerate-plan-btn"
          onClick={onRegeneratePlan}
          title="Recalculate weekly distribution"
        >
          <RotateCcw size={12} />
          <span>Regenerate Plan</span>
        </button>
      </div>

    </div>
  );
};

export default PlannerHeader;
