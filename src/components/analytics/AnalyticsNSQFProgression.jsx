import React from 'react';
import { Award, CheckCircle2, Lock, ShieldCheck } from 'lucide-react';

export const AnalyticsNSQFProgression = () => {
  const levels = [
    {
      level: 'LEVEL 5',
      title: 'Foundation & Programming',
      status: 'completed',
      score: 'Verified 87%',
      desc: 'Python syntax, data structures, and algorithmic logic verified.'
    },
    {
      level: 'LEVEL 6',
      title: 'Core AI & ML Engineering',
      status: 'active',
      score: '74% Readiness',
      desc: 'Supervised classification, cost optimization, and model validation.'
    },
    {
      level: 'LEVEL 7',
      title: 'Specialist & Architecture',
      status: 'locked',
      score: 'Locked',
      desc: 'Distributed deep learning, MLOps orchestration, and cloud scale.'
    }
  ];

  return (
    <div className="nsqf-progression-card glass-panel">
      
      <div className="nsqf-progression-header">
        <div className="header-left">
          <Award size={15} className="text-brand-300" />
          <span className="micro">NATIONAL QUALIFICATION PROGRESSION (NSQF)</span>
        </div>
        <span className="nsqf-badge level-6">◇ Current Target: Level 6</span>
      </div>

      <div className="nsqf-stepper-grid">
        {levels.map((lvl, idx) => (
          <div key={idx} className={`nsqf-level-box ${lvl.status}`}>
            <div className="level-box-top">
              <span className="nsqf-num-tag mono font-bold">{lvl.level}</span>
              {lvl.status === 'completed' && (
                <div className="status-badge completed">
                  <CheckCircle2 size={13} />
                  <span>COMPLETED</span>
                </div>
              )}
              {lvl.status === 'active' && (
                <div className="status-badge active">
                  <span className="active-dot" />
                  <span>CURRENT BENCHMARK</span>
                </div>
              )}
              {lvl.status === 'locked' && (
                <div className="status-badge locked">
                  <Lock size={12} />
                  <span>LOCKED</span>
                </div>
              )}
            </div>

            <h4>{lvl.title}</h4>
            <span className="level-score-pill mono font-bold">{lvl.score}</span>
            <p className="level-desc">{lvl.desc}</p>
          </div>
        ))}
      </div>

      <div className="nsqf-trust-footnote">
        <ShieldCheck size={14} className="text-brand-300" />
        <span>Readiness metrics reflect verified competency evidence aligned with the National Credit and Qualifications Framework (NCrF / NSQF).</span>
      </div>

    </div>
  );
};

export default AnalyticsNSQFProgression;
