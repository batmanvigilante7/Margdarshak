import React from 'react';
import { Layers, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';

export const AnalyticsSkillBreakdown = ({ onNavigate }) => {
  const skills = [
    { name: 'Python Programming', score: 82, status: 'On Track', tone: 'emerald' },
    { name: 'Statistics & Probability', score: 74, status: 'On Track', tone: 'emerald' },
    { name: 'Data Structures & Algorithms', score: 71, status: 'On Track', tone: 'emerald' },
    { name: 'Machine Learning Core', score: 67, status: 'Developing', tone: 'amber' },
    { name: 'Model Evaluation & Metrics', score: 42, status: 'Critical Gap', tone: 'rose' }
  ];

  return (
    <div className="analytics-skills-section-grid">
      
      {/* 1. Skill Competencies Breakdown */}
      <div className="skill-breakdown-card glass-panel">
        <div className="breakdown-header-line">
          <div className="header-left">
            <Layers size={14} className="text-brand-300" />
            <span className="micro">SKILL COMPETENCY BENCHMARKS</span>
          </div>
          <span className="micro text-brand-300">5 DOMAINS</span>
        </div>

        <div className="skills-meter-stack">
          {skills.map((s, idx) => (
            <div key={idx} className="skill-meter-row">
              <div className="skill-meter-labels">
                <strong>{s.name}</strong>
                <div className="skill-score-status mono">
                  <span className={`status-pill ${s.tone}`}>{s.status}</span>
                  <strong className={`score-val ${s.tone}`}>{s.score}%</strong>
                </div>
              </div>

              <div className="skill-track-bar">
                <div 
                  className={`skill-fill-bar ${s.tone}`}
                  style={{ width: `${s.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Skill Gap Reduction Progress Card */}
      <div className="gap-reduction-card glass-panel">
        <div className="breakdown-header-line">
          <span className="micro">SKILL GAP REDUCTION</span>
          <span className="closed-count-badge mono font-bold text-emerald">5 Gaps Closed</span>
        </div>

        <h3>Transformation Since Onboarding</h3>
        <p className="reduction-desc">
          Structured diagnostic assessments and milestone execution have resolved 5 of your original 8 critical blockers.
        </p>

        <div className="gap-comparison-meters">
          <div className="comparison-row">
            <div className="comp-label-line">
              <span className="comp-label">AT ONBOARDING INTAKE</span>
              <span className="comp-val mono text-rose-400 font-bold">8 major gaps</span>
            </div>
            <div className="comp-track">
              <div className="comp-fill initial" style={{ width: '80%' }} />
            </div>
          </div>

          <div className="comparison-row">
            <div className="comp-label-line">
              <span className="comp-label text-emerald">CURRENT STATE TODAY</span>
              <span className="comp-val mono text-emerald font-bold">3 remaining gaps</span>
            </div>
            <div className="comp-track">
              <div className="comp-fill current" style={{ width: '30%' }} />
            </div>
          </div>
        </div>

        <div className="reduction-card-footer">
          <button 
            type="button" 
            className="primary-btn"
            onClick={() => onNavigate('/skill-gap')}
          >
            <span>View Skill Gap Matrix</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default AnalyticsSkillBreakdown;
