import React from 'react';
import { Clock, TrendingUp, AlertTriangle, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const SkillGapSummary = ({ 
  readiness = 64, 
  targetCareer = 'AI Engineer',
  nsqfLevel = 'NSQF Level 6',
  totalBridgeHours = 54, 
  onTrackCount = 3, 
  moderateCount = 2, 
  criticalCount = 2 
}) => {
  return (
    <div className="skillgap-summary-hero glass-panel">
      
      <div className="summary-hero-main">
        <div className="summary-readiness-block">
          <span className="micro">CURRENT READINESS</span>
          <div className="readiness-giant-num mono">{readiness}%</div>
          <div className="readiness-target-subtext">
            <span>{targetCareer}</span> • <span className="mono">{nsqfLevel}</span>
          </div>
          <span className="readiness-disclaimer">
            Margdarshak Readiness Estimate (Calibrated to {nsqfLevel})
          </span>
        </div>

        <div className="summary-hero-divider" />

        <div className="summary-hero-breakdown">
          
          <div className="breakdown-stat-row">
            <span className="micro">COMPETENCY STATUS BREAKDOWN</span>
            <div className="gap-badges-stack">
              <div className="gap-pill-count critical">
                <span className="gap-dot rose" />
                <span className="mono font-bold">{criticalCount} Critical</span>
              </div>
              <div className="gap-pill-count moderate">
                <span className="gap-dot amber" />
                <span className="mono font-bold">{moderateCount} Moderate</span>
              </div>
              <div className="gap-pill-count ontrack">
                <span className="gap-dot emerald" />
                <span className="mono font-bold">{onTrackCount} On Track</span>
              </div>
            </div>
          </div>

          <div className="breakdown-effort-row">
            <div className="effort-cell">
              <span className="micro">ESTIMATED LEARNING EFFORT</span>
              <div className="effort-val">
                <Clock size={16} className="text-brand-400" />
                <span className="mono font-bold">~{totalBridgeHours} hours</span>
              </div>
              <span className="effort-note">Total across 7 competency benchmarks</span>
            </div>

            <div className="effort-cell">
              <span className="micro">STARTING LEVERAGE</span>
              <div className="effort-val">
                <Zap size={16} className="text-purple" />
                <span className="mono font-bold">ML Fundamentals</span>
              </div>
              <span className="effort-note">Unlocks 3 downstream milestones</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SkillGapSummary;
