import React from 'react';
import { ShieldCheck, CheckCircle2, FileCode, Award, ArrowRight } from 'lucide-react';

export const AnalyticsEvidencePanel = ({ onNavigate }) => {
  const assessments = [
    { label: 'Diagnostic Assessment', score: 54, status: 'Completed' },
    { label: 'Interactive Practice Quizzes', score: 71, status: 'Verified' },
    { label: 'Milestone Competency Checks', score: 86, status: 'Passed' },
    { label: 'Applied Portfolio Evaluation', score: 78, status: 'Verified' }
  ];

  const evidence = [
    { title: 'Python Foundation Diagnostic Exam', score: '84%', date: 'Aug 20' },
    { title: 'Supervised ML Concept Practice Quiz', score: '90%', date: 'Aug 24' },
    { title: 'Customer Churn Predictor Pipeline (Jupyter Artifact)', score: 'Verified', date: 'Aug 28' },
    { title: 'Milestone 02 Competency Checkpoint', score: '80%', date: 'Aug 31' }
  ];

  return (
    <div className="analytics-evidence-grid">
      
      {/* 1. Assessment Performance Meters */}
      <div className="assessment-performance-card glass-panel">
        <div className="evidence-header-line">
          <div className="header-left">
            <ShieldCheck size={15} className="text-emerald" />
            <span className="micro">ASSESSMENT PERFORMANCE SCORES</span>
          </div>
          <span className="average-score-pill mono font-bold text-emerald">72% Overall Average</span>
        </div>

        <div className="assessment-rows-stack">
          {assessments.map((a, idx) => (
            <div key={idx} className="assessment-meter-item">
              <div className="assessment-label-line">
                <span>{a.label}</span>
                <strong className="mono">{a.score}%</strong>
              </div>
              <div className="assessment-track">
                <div className="assessment-fill" style={{ width: `${a.score}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="assessment-card-footer">
          <button 
            type="button" 
            className="secondary-btn retake-btn"
            onClick={() => onNavigate('/assessment')}
          >
            <span>Retake Diagnostic Assessment</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* 2. Evidence of Competency Artifacts */}
      <div className="evidence-artifacts-card glass-panel">
        <div className="evidence-header-line">
          <div className="header-left">
            <Award size={15} className="text-brand-300" />
            <span className="micro">VERIFIED COMPETENCY EVIDENCE</span>
          </div>
          <span className="micro text-brand-300">4 ARTIFACTS</span>
        </div>

        <div className="evidence-items-stack">
          {evidence.map((ev, idx) => (
            <div key={idx} className="evidence-item-card">
              <div className="evidence-check-icon">
                <CheckCircle2 size={16} className="text-emerald" />
              </div>
              <div className="evidence-info">
                <strong>{ev.title}</strong>
                <span className="evidence-date mono">Completed {ev.date}</span>
              </div>
              <div className="evidence-score-badge mono font-bold">
                {ev.score}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AnalyticsEvidencePanel;
