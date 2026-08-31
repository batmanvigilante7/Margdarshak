import React from 'react';
import { Layers, PieChart, Sparkles } from 'lucide-react';

export const PlannerPriorityBreakdown = ({ breakdown }) => {
  return (
    <div className="priority-breakdown-card glass-panel">
      
      <div className="breakdown-header">
        <div className="breakdown-title-left">
          <Layers size={15} className="text-brand-300" />
          <span className="micro">THIS WEEK'S LEARNING TIME DISTRIBUTION</span>
        </div>
        <span className="micro text-brand-300">SCORING-WEIGHTED</span>
      </div>

      <div className="breakdown-items-list">
        {breakdown.map((item, idx) => (
          <div key={idx} className="breakdown-row">
            <div className="breakdown-info-line">
              <strong>{item.skill}</strong>
              <span className="mono font-bold text-brand-300">{item.hours}h</span>
            </div>

            <div className="breakdown-track">
              <div 
                className={`breakdown-fill ${item.tone || 'brand'}`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>

            <div className="breakdown-reason-line">
              <span className="reason-tag mono">{item.reasonTag}</span>
              <span className="reason-desc">{item.reason}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PlannerPriorityBreakdown;
