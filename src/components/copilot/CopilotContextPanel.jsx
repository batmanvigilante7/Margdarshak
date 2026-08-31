import React from 'react';
import { Target, Award, Layers, Clock, AlertTriangle, Route, ArrowRight, Sparkles } from 'lucide-react';

export const CopilotContextPanel = ({ 
  targetCareer = 'AI Engineer',
  nsqfLevel = 'NSQF Level 6',
  readiness = 64,
  activeMilestone = 'Machine Learning Fundamentals',
  topGap = { skill: 'Machine Learning', current: 38, target: 85, delta: 47 },
  milestonesCompleted = 1,
  totalMilestones = 6,
  onNavigate 
}) => {
  return (
    <div className="copilot-context-sidebar glass-panel">
      
      <div className="context-sidebar-header">
        <Sparkles size={13} className="sparkle-ai" />
        <span className="micro">YOUR CURRENT CONTEXT</span>
      </div>

      <div className="context-items-stack">
        
        {/* 1. Target Career */}
        <div className="context-item-card">
          <span className="micro">TARGET CAREER</span>
          <h4>{targetCareer}</h4>
          <div className="context-meta-row">
            <span className="nsqf-badge level-6">◇ {nsqfLevel}</span>
          </div>
        </div>

        {/* 2. Assessed Readiness */}
        <div className="context-item-card">
          <span className="micro">READINESS ESTIMATE</span>
          <div className="context-readiness-val">
            <strong className="mono text-emerald">{readiness}%</strong>
            <span className="context-subtext">Verified diagnostic baseline</span>
          </div>
        </div>

        {/* 3. Active Milestone */}
        <div className="context-item-card active-border">
          <span className="micro text-brand-300">ACTIVE MILESTONE</span>
          <h4>{activeMilestone}</h4>
          <span className="context-subtext mono">Step 02 of 06 • ~8 hours</span>
        </div>

        {/* 4. Top Skill Gap */}
        <div className="context-item-card">
          <span className="micro text-rose-400">TOP PRIORITY GAP</span>
          <div className="top-gap-headline">
            <strong>{topGap.skill}</strong>
            <span className="gap-tag mono font-bold">-{topGap.delta} pts</span>
          </div>
          <div className="top-gap-bar-wrap">
            <div className="top-gap-bar-acquired" style={{ width: `${topGap.current}%` }} />
            <div className="top-gap-marker" style={{ left: `${topGap.target}%` }} />
          </div>
          <span className="context-subtext mono">{topGap.current}% current → {topGap.target}% benchmark</span>
        </div>

        {/* 5. Path Progress */}
        <div className="context-item-card">
          <span className="micro">ROADMAP STATUS</span>
          <div className="context-path-stat">
            <strong className="mono">{milestonesCompleted} of {totalMilestones} completed</strong>
            <span className="context-subtext mono">1 active • 4 locked/queued</span>
          </div>
        </div>

      </div>

      {/* Navigation Shortcuts */}
      <div className="context-sidebar-footer">
        <button 
          type="button" 
          className="context-nav-btn primary"
          onClick={() => onNavigate('/path')}
        >
          <Route size={14} />
          <span>Open My Path</span>
          <ArrowRight size={14} />
        </button>

        <button 
          type="button" 
          className="context-nav-btn secondary"
          onClick={() => onNavigate('/skill-gap')}
        >
          <span>View Skill Gaps</span>
          <ArrowRight size={14} />
        </button>
      </div>

    </div>
  );
};

export default CopilotContextPanel;
