import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const CareerNSQFBenchmark = () => {
  const capabilities = [
    'Apply specialized algorithmic and statistical models to unstructured problems',
    'Evaluate precision, recall, and loss convergence independently',
    'Demonstrate verified engineering competency in production pipeline integration',
    'Formulate hypothesis testing and cross-validation strategies across holdout sets'
  ];

  const progressionSteps = [
    { level: 'NSQF 5', title: 'Junior Data Analyst', status: 'completed' },
    { level: 'NSQF 6', title: 'Machine Learning Engineer', status: 'target' },
    { level: 'NSQF 7', title: 'Senior MLOps Architect', status: 'future' },
    { level: 'NSQF 8', title: 'Principal AI Scientist', status: 'future' }
  ];

  return (
    <div className="career-nsqf-section glass-panel">
      
      <div className="card-header-line">
        <div className="header-left">
          <Award size={15} className="text-brand-300" />
          <span className="micro">NATIONAL OCCUPATIONAL BENCHMARK (NSQF)</span>
        </div>
        <span className="nsqf-badge level-6">◇ NSQF Level 6 Standard</span>
      </div>

      <div className="nsqf-capability-grid">
        <div className="capability-box">
          <span className="micro text-brand-300">EXPECTED ROLE CAPABILITIES:</span>
          <ul className="capability-list">
            {capabilities.map((cap, idx) => (
              <li key={idx}>
                <CheckCircle2 size={14} className="text-emerald" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="nsqf-readiness-estimate-box">
          <span className="micro text-emerald">YOUR ESTIMATED BENCHMARK READINESS</span>
          <div className="benchmark-readiness-val">
            <strong className="mono">80%</strong>
            <span className="subtext">Estimated Level 6 Qualification Readiness</span>
          </div>
          <p className="benchmark-disclaimer">
            *Platform-evaluated estimate based on verified assessments & project deliverables.
          </p>
        </div>
      </div>

      {/* Horizontal Career Ladder */}
      <div className="career-ladder-block">
        <span className="micro text-brand-300">LONG-TERM CAREER PROGRESSION LADDER:</span>
        <div className="ladder-steps-row">
          {progressionSteps.map((st, idx) => (
            <div key={idx} className={`ladder-step-node ${st.status}`}>
              <span className="ladder-nsqf-tag mono">{st.level}</span>
              <strong>{st.title}</strong>
              {st.status === 'target' && (
                <span className="target-role-badge">TARGET ROLE</span>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CareerNSQFBenchmark;
