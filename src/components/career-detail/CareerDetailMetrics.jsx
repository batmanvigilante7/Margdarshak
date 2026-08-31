import React from 'react';
import { Target, TrendingUp, AlertTriangle, ArrowUpRight, Zap, Briefcase } from 'lucide-react';

export const CareerDetailMetrics = ({ 
  readiness = 64, 
  readinessGrowth = 12, 
  marketDemand = 'HIGH', 
  openRoles = '2,400+', 
  salaryRange = '₹8L – ₹18L',
  priorityGapsCount = 5,
  bridgeHours = 42 
}) => {
  return (
    <div className="career-detail-metrics-grid animate-fadeIn">
      
      {/* 1. Career Readiness Card */}
      <div className="career-metric-card glass-panel">
        <div className="metric-top-row">
          <span className="micro">YOUR ROLE READINESS</span>
          <div className="metric-icon-box brand">
            <Target size={14} />
          </div>
        </div>
        <div className="metric-val-row">
          <strong className="mono">{readiness}%</strong>
          <span className="metric-badge positive mono">
            <ArrowUpRight size={11} />
            <span>+{readinessGrowth}% gain</span>
          </span>
        </div>
        <span className="metric-subtext">Verified diagnostic baseline</span>
      </div>

      {/* 2. Market Demand Card */}
      <div className="career-metric-card glass-panel">
        <div className="metric-top-row">
          <span className="micro text-sky-400">MARKET DEMAND</span>
          <div className="metric-icon-box sky">
            <Briefcase size={14} />
          </div>
        </div>
        <div className="metric-val-row">
          <strong className="mono text-sky-400">{marketDemand}</strong>
          <span className="metric-badge sky mono">
            <span>{openRoles} roles</span>
          </span>
        </div>
        <span className="metric-subtext">Typical Salary: {salaryRange}</span>
      </div>

      {/* 3. Skill Gap Card */}
      <div className="career-metric-card glass-panel">
        <div className="metric-top-row">
          <span className="micro text-rose-400">IDENTIFIED SKILL GAPS</span>
          <div className="metric-icon-box rose">
            <AlertTriangle size={14} />
          </div>
        </div>
        <div className="metric-val-row">
          <strong className="mono text-rose-400">{priorityGapsCount}</strong>
          <span className="metric-badge rose mono">
            <span>~{bridgeHours}h effort</span>
          </span>
        </div>
        <span className="metric-subtext">Addressable via structured roadmap</span>
      </div>

    </div>
  );
};

export default CareerDetailMetrics;
