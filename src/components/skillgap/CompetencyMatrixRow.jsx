import React, { useState } from 'react';
import { 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Award, 
  Layers 
} from 'lucide-react';

export const CompetencyMatrixRow = ({ competency, targetCareer = 'AI Engineer', onNavigate }) => {
  const [expanded, setExpanded] = useState(false);
  const isComplete = competency.currentScore >= competency.benchmarkScore;
  const gapDelta = Math.max(0, competency.benchmarkScore - competency.currentScore);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'critical':
        return <span className="status-pill critical">🔴 CRITICAL</span>;
      case 'moderate':
        return <span className="status-pill moderate">🟡 MODERATE</span>;
      case 'ontrack':
        return <span className="status-pill ontrack">🟢 ON TRACK</span>;
      default:
        return null;
    }
  };

  return (
    <div className={`skillgap-card glass-panel status-${competency.status}`}>
      
      {/* Top Header */}
      <div className="card-top-row">
        <div className="skill-title-block">
          <div className="skill-cat-line">
            <span className="micro">{competency.category}</span>
            <span className="skill-nsqf-tag mono">NSQF Level {competency.nsqfLevel}</span>
          </div>
          <h3>{competency.name}</h3>
        </div>
        {getStatusBadge(competency.status)}
      </div>

      <p className="card-description-text">{competency.description}</p>

      {/* Dual-Meter Visualizer Section */}
      <div className="dual-meter-block">
        
        <div className="meter-row-acquired">
          <div className="meter-label-line">
            <span className="meter-label">Your competency</span>
            <span className="meter-score mono">{competency.currentScore}%</span>
          </div>
          <div className="meter-track-base">
            <div 
              className={`meter-bar-fill ${competency.status}`} 
              style={{ width: `${competency.currentScore}%` }} 
            />
          </div>
        </div>

        <div className="meter-row-target">
          <div className="meter-label-line">
            <span className="meter-label">Target benchmark</span>
            <span className="meter-score mono">{competency.benchmarkScore}%</span>
          </div>
          <div className="meter-track-base benchmark">
            <div 
              className="benchmark-target-bar" 
              style={{ width: `${competency.benchmarkScore}%` }} 
            />
            <div 
              className="benchmark-target-marker" 
              style={{ left: `${competency.benchmarkScore}%` }}
              title={`Required benchmark: ${competency.benchmarkScore}%`}
            >
              <span className="marker-arrow">▲</span>
            </div>
          </div>
        </div>

      </div>

      {/* Metrics Row: Gap Delta + Estimated Learning Effort + Required Tag */}
      <div className="card-metrics-strip">
        <div className="metric-col">
          <span className="micro">GAP</span>
          <span className="metric-highlight mono">
            {isComplete ? '0 pts' : `${gapDelta} pts`}
          </span>
        </div>

        <div className="metric-col">
          <span className="micro">ESTIMATED LEARNING EFFORT</span>
          <span className="metric-highlight mono">
            <Clock size={13} className="text-brand-400" />
            <span>~{competency.bridgeHours} hours</span>
          </span>
        </div>

        <div className="metric-col">
          <span className="micro">REQUIRED FOR {targetCareer.toUpperCase()}</span>
          <span className="metric-highlight mono font-bold text-brand-300">
            {competency.relevance}
          </span>
        </div>
      </div>

      {/* Card Action Row */}
      <div className="card-actions-row">
        <button 
          type="button" 
          className="explore-btn"
          onClick={() => onNavigate('/path')}
        >
          <span>Explore Learning Options</span>
          <ArrowRight size={15} />
        </button>

        <button 
          type="button" 
          className="why-toggle-btn"
          onClick={() => setExpanded(!expanded)}
        >
          <Sparkles size={13} className="sparkle-ai" />
          <span>{expanded ? 'Hide Explanation' : 'Why this matters & priority'}</span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {/* Expandable Explanation Drawer */}
      {expanded && (
        <div className="card-explanation-drawer animate-fadeIn">
          <div className="explanation-section">
            <span className="micro text-brand-400">WHY THIS MATTERS</span>
            <p>{competency.whyMatters}</p>
          </div>

          <div className="explanation-section">
            <span className="micro text-brand-400">WHY PRIORITY?</span>
            <ul className="priority-points-list">
              {competency.priorityReasons.map((reason, idx) => (
                <li key={idx}>
                  <span className="priority-num mono">{['①', '②', '③', '④', '⑤', '⑥'][idx] || `${idx + 1}.`}</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

    </div>
  );
};

export default CompetencyMatrixRow;
