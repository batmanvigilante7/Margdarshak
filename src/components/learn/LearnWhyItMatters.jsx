import React from 'react';
import { Sparkles, ArrowRight, TrendingUp } from 'lucide-react';

export const LearnWhyItMatters = ({ 
  currentScore = 38,
  targetScore = 85,
  gapDelta = 47,
  unlocks = ['Model Evaluation Diagnostics', 'Applied ML Portfolio Project', 'Deep Learning & Neural Architectures']
}) => {
  return (
    <div className="learn-why-matters-card glass-panel animate-fadeIn">
      
      <div className="why-matters-header">
        <Sparkles size={14} className="sparkle-ai" />
        <span className="micro">WHY THIS MATTERS</span>
      </div>

      <div className="why-matters-grid">
        
        {/* Left: Competency Delta Progression */}
        <div className="competency-delta-box">
          <p>This milestone directly addresses your highest-priority Machine Learning competency gap.</p>
          
          <div className="delta-score-bridge">
            <div className="score-node current">
              <span className="node-label">CURRENT</span>
              <strong className="mono">{currentScore}%</strong>
            </div>

            <div className="score-arrow-track">
              <div className="arrow-line" />
              <span className="gap-delta-pill mono font-bold">-{gapDelta} pts</span>
            </div>

            <div className="score-node target">
              <span className="node-label">TARGET BENCHMARK</span>
              <strong className="mono">{targetScore}%</strong>
            </div>
          </div>
        </div>

        {/* Right: Unlocks Chain */}
        <div className="milestone-unlocks-box">
          <span className="micro text-brand-300">COMPLETING THIS MILESTONE UNLOCKS:</span>
          <ul className="unlocks-list">
            {unlocks.map((item, idx) => (
              <li key={idx}>
                <span className="unlock-arrow">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
};

export default LearnWhyItMatters;
