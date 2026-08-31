import React from 'react';
import { Award, FileCode, CheckCircle2, FlaskConical, ShieldCheck, ArrowRight } from 'lucide-react';

export const ProfileEvidencePortfolio = ({ onNavigate }) => {
  const artifacts = [
    {
      id: 'art-1',
      icon: <Award size={18} className="text-purple" />,
      type: 'PORTFOLIO ARTIFACT',
      title: 'Customer Churn Predictor Pipeline',
      domain: 'Machine Learning Core',
      status: 'Verified Deliverable',
      date: 'Aug 28, 2026',
      specs: ['Stratified 80/20 split', 'Random Forest & Logistic Regression', 'ROC-AUC: 0.84 achieved']
    },
    {
      id: 'art-2',
      icon: <FlaskConical size={18} className="text-emerald" />,
      type: 'COMPETENCY CHECKPOINT',
      title: 'Milestone 02 Competency Check',
      domain: 'NSQF Level 6 Verification',
      status: 'Passed (9/10)',
      date: 'Aug 31, 2026',
      specs: ['Loss convergence diagnostics', 'High variance regularization', 'Recall optimization math']
    },
    {
      id: 'art-3',
      icon: <ShieldCheck size={18} className="text-brand-300" />,
      type: 'DIAGNOSTIC BENCHMARK',
      title: 'Python Foundations Competency Exam',
      domain: 'Foundation Benchmark',
      status: 'Verified 84%',
      date: 'Aug 20, 2026',
      specs: ['Object-Oriented Programming', 'Time complexity reasoning', 'Bypassed 14h remedial syntax']
    }
  ];

  return (
    <div className="profile-evidence-section glass-panel">
      
      <div className="card-header-line">
        <div className="header-left">
          <Award size={15} className="text-brand-300" />
          <span className="micro">VERIFIED EVIDENCE PORTFOLIO</span>
        </div>
        <span className="micro text-emerald">3 VERIFIED ARTIFACTS</span>
      </div>

      <div className="evidence-cards-grid">
        {artifacts.map((art) => (
          <div key={art.id} className="evidence-portfolio-card glass-panel">
            <div className="art-card-top">
              <div className="art-icon-box">{art.icon}</div>
              <span className="art-type-tag mono">{art.type}</span>
            </div>

            <div className="art-card-main">
              <h4>{art.title}</h4>
              <span className="art-domain-text">{art.domain}</span>
              
              <ul className="art-specs-list">
                {art.specs.map((sp, idx) => (
                  <li key={idx}>
                    <span className="bullet text-brand-300">•</span>
                    <span>{sp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="art-card-footer">
              <div className="art-status-line">
                <CheckCircle2 size={13} className="text-emerald" />
                <strong className="mono text-emerald">{art.status}</strong>
              </div>
              <span className="art-date mono">{art.date}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProfileEvidencePortfolio;
