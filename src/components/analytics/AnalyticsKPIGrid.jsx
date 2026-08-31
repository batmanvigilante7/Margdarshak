import React from 'react';
import { Target, TrendingUp, Award, Zap, ArrowUpRight } from 'lucide-react';

export const AnalyticsKPIGrid = ({ 
  readiness = 64, 
  readinessGrowth = 12, 
  competencyGrowth = 18, 
  activeSkills = 7, 
  totalSkills = 12, 
  learningVelocity = 2.4 
}) => {
  return (
    <div className="analytics-kpi-grid">
      
      {/* 1. Career Readiness */}
      <div className="analytics-kpi-card glass-panel">
        <div className="kpi-top-row">
          <span className="micro">CAREER READINESS</span>
          <div className="kpi-icon-badge brand">
            <Target size={14} />
          </div>
        </div>
        <div className="kpi-value-row">
          <strong className="mono">{readiness}%</strong>
          <span className="kpi-delta-pill positive mono">
            <ArrowUpRight size={11} />
            <span>+{readinessGrowth}%</span>
          </span>
        </div>
        <span className="kpi-subtext">Target: AI Engineer (NSQF Level 6)</span>
      </div>

      {/* 2. Competency Growth */}
      <div className="analytics-kpi-card glass-panel">
        <div className="kpi-top-row">
          <span className="micro">COMPETENCY GROWTH</span>
          <div className="kpi-icon-badge emerald">
            <TrendingUp size={14} />
          </div>
        </div>
        <div className="kpi-value-row">
          <strong className="mono">+{competencyGrowth}%</strong>
          <span className="kpi-delta-pill positive mono">
            <ArrowUpRight size={11} />
            <span>Net gain</span>
          </span>
        </div>
        <span className="kpi-subtext">Across 6 assessed competency domains</span>
      </div>

      {/* 3. Active Verified Skills */}
      <div className="analytics-kpi-card glass-panel">
        <div className="kpi-top-row">
          <span className="micro">VERIFIED SKILLS</span>
          <div className="kpi-icon-badge sky">
            <Award size={14} />
          </div>
        </div>
        <div className="kpi-value-row">
          <strong className="mono">{activeSkills} / {totalSkills}</strong>
          <span className="kpi-delta-pill neutral mono">
            <span>58% verified</span>
          </span>
        </div>
        <span className="kpi-subtext">Demonstrated in labs, code & checkpoints</span>
      </div>

      {/* 4. Learning Velocity */}
      <div className="analytics-kpi-card glass-panel">
        <div className="kpi-top-row">
          <span className="micro">LEARNING VELOCITY</span>
          <div className="kpi-icon-badge purple">
            <Zap size={14} />
          </div>
        </div>
        <div className="kpi-value-row">
          <strong className="mono">+{learningVelocity}</strong>
          <span className="kpi-delta-pill positive mono">
            <span>pts / hr</span>
          </span>
        </div>
        <span className="kpi-subtext">↑ 18% efficiency vs baseline average</span>
      </div>

    </div>
  );
};

export default AnalyticsKPIGrid;
