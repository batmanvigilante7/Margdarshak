import React from 'react';
import { Layers, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

export const CareerCompetencyComparison = ({ onNavigate }) => {
  const matchScore = 72;

  const competencies = [
    { name: 'Python Programming', acquired: 82, target: 90, delta: 8, status: 'On Track', tone: 'emerald' },
    { name: 'Statistical Inference', acquired: 74, target: 80, delta: 6, status: 'On Track', tone: 'emerald' },
    { name: 'Machine Learning Core', acquired: 72, target: 85, delta: 13, status: 'Developing', tone: 'brand' },
    { name: 'Data Engineering & ETL', acquired: 50, target: 70, delta: 20, status: 'Moderate Gap', tone: 'amber' },
    { name: 'Model Evaluation & Tuning', acquired: 42, target: 80, delta: 38, status: 'Critical Gap', tone: 'rose' }
  ];

  return (
    <div className="career-competency-section glass-panel animate-fadeIn">
      
      {/* Top Match Score Banner */}
      <div className="competency-match-hero">
        <div className="match-hero-left">
          <span className="micro">YOUR CAREER PROFILE MATCH</span>
          <div className="match-score-line">
            <strong className="mono">{matchScore}%</strong>
            <span className="match-subtext">8 of 12 required competencies on track</span>
          </div>
        </div>

        <button 
          type="button" 
          className="secondary-btn"
          onClick={() => onNavigate('/skill-gap')}
        >
          <span>View Full Skill Gap Matrix</span>
          <ArrowRight size={13} />
        </button>
      </div>

      <p className="match-narrative-p">
        You are already aligned with most foundational programming and statistics requirements. Your largest acceleration opportunity is in closing your <strong>Model Evaluation (42% vs 80%)</strong> and <strong>Data Engineering (50% vs 70%)</strong> deficits.
      </p>

      {/* Dual-Meter Competency Grid */}
      <div className="dual-meters-stack">
        <div className="dual-meter-legend">
          <div className="legend-item">
            <span className="legend-box acquired" />
            <span>Your Acquired Proficiency</span>
          </div>
          <div className="legend-item">
            <span className="legend-marker target" />
            <span>Role Target Benchmark</span>
          </div>
        </div>

        {competencies.map((c, idx) => (
          <div key={idx} className="dual-meter-card">
            <div className="dual-meter-header">
              <div className="comp-name-line">
                <strong>{c.name}</strong>
                <span className={`status-pill ${c.tone}`}>{c.status}</span>
              </div>

              <div className="comp-delta-badge mono">
                <span>Gap: -{c.delta} pts</span>
              </div>
            </div>

            {/* Visual Track */}
            <div className="dual-meter-track">
              {/* Acquired Bar */}
              <div 
                className={`acquired-fill-bar ${c.tone}`} 
                style={{ width: `${c.acquired}%` }} 
              />
              {/* Target Marker */}
              <div 
                className="target-benchmark-pin" 
                style={{ left: `${c.target}%` }}
                title={`Target Benchmark: ${c.target}%`}
              />
            </div>

            <div className="dual-meter-stats mono">
              <span className="text-secondary">Current: <strong>{c.acquired}%</strong></span>
              <span className="text-brand-300">Target: <strong>{c.target}%</strong></span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CareerCompetencyComparison;
