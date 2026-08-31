import React from 'react';
import { Briefcase, CheckCircle2, Terminal, Code2, Database } from 'lucide-react';

export const CareerDetailOverview = ({ career }) => {
  const responsibilities = [
    { num: '01', title: 'Prepare & Transform Data', desc: 'Clean, normalize, and validate structured and unstructured feature distributions.' },
    { num: '02', title: 'Train & Tune ML Models', desc: 'Formulate loss functions, train supervised classifiers, and optimize hyperparameters.' },
    { num: '03', title: 'Evaluate Model Performance', desc: 'Measure precision, recall, confusion matrices, and ROC-AUC curves on holdout splits.' },
    { num: '04', title: 'Deploy ML Microservices', desc: 'Containerize models using Docker and serve inference endpoints via FastAPI.' },
    { num: '05', title: 'Monitor Drift & Latency', desc: 'Track inference latency, data drift, and feature degradation in live production environments.' }
  ];

  const technicalSkills = ['Python', 'SQL', 'Scikit-Learn', 'Statistical Inference', 'Docker', 'FastAPI', 'Model Evaluation'];
  const professionalSkills = ['Structured Problem Solving', 'Hypothesis-Driven Testing', 'Technical Documentation', 'Cross-Functional Delivery'];

  return (
    <div className="career-overview-section glass-panel">
      
      <div className="card-header-line">
        <div className="header-left">
          <Briefcase size={15} className="text-brand-300" />
          <span className="micro">OCCUPATIONAL PROFILE & RESPONSIBILITIES</span>
        </div>
        <span className="micro text-brand-300">INDUSTRY STANDARD</span>
      </div>

      <p className="career-about-paragraph">
        {career.about || 'Machine Learning Engineers build software systems that learn from data to automate decision-making, predictive classification, and pattern recognition for real-world enterprise applications.'}
      </p>

      {/* Numbered Responsibilities List */}
      <div className="responsibilities-block">
        <span className="micro text-brand-300">TYPICAL WORK RESPONSIBILITIES:</span>
        <div className="responsibilities-grid">
          {responsibilities.map((r, idx) => (
            <div key={idx} className="responsibility-item-card">
              <span className="resp-num mono font-bold">{r.num}</span>
              <div className="resp-copy">
                <strong>{r.title}</strong>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Required Grid */}
      <div className="core-skills-summary-grid">
        <div className="skills-group-box">
          <span className="micro text-brand-300">CORE TECHNICAL SKILLS</span>
          <div className="skills-pills-wrap">
            {technicalSkills.map((sk, idx) => (
              <span key={idx} className="tech-skill-pill mono">{sk}</span>
            ))}
          </div>
        </div>

        <div className="skills-group-box">
          <span className="micro text-emerald">PROFESSIONAL COMPETENCIES</span>
          <div className="skills-pills-wrap">
            {professionalSkills.map((sk, idx) => (
              <span key={idx} className="prof-skill-pill">{sk}</span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default CareerDetailOverview;
