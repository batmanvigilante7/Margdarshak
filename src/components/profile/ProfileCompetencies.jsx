import React, { useState } from 'react';
import { Layers, CheckCircle2, AlertTriangle, Plus, ArrowRight, ShieldCheck } from 'lucide-react';

export const ProfileCompetencies = ({ onNavigate, onAddSkillClick }) => {
  const [selfSkills, setSelfSkills] = useState([
    { name: 'Python', verified: true, score: 82 },
    { name: 'Machine Learning', verified: true, score: 72 },
    { name: 'Java Programming', verified: false, level: 'Intermediate' },
    { name: 'SQL & Relational DBs', verified: false, level: 'Proficient' }
  ]);

  const competencies = [
    { name: 'Python Foundations', score: 82, status: 'Strong', tone: 'emerald', verified: true },
    { name: 'Statistics & Probability', score: 74, status: 'Strong', tone: 'emerald', verified: true },
    { name: 'Data Structures & Algorithms', score: 71, status: 'Developing', tone: 'brand', verified: true },
    { name: 'Machine Learning Core', score: 72, status: 'Developing', tone: 'brand', verified: true },
    { name: 'Model Evaluation & Metrics', score: 42, status: 'Critical Gap', tone: 'rose', verified: false }
  ];

  return (
    <div className="profile-competencies-section glass-panel">
      
      <div className="card-header-line">
        <div className="header-left">
          <Layers size={15} className="text-brand-300" />
          <span className="micro">YOUR VERIFIED COMPETENCY INVENTORY</span>
        </div>
        <button 
          type="button" 
          className="add-skill-trigger-btn"
          onClick={onAddSkillClick}
        >
          <Plus size={13} />
          <span>Add Skill</span>
        </button>
      </div>

      {/* Competencies Progress Bars */}
      <div className="profile-competencies-grid">
        {competencies.map((comp, idx) => (
          <div 
            key={idx} 
            className="profile-comp-row"
            onClick={() => onNavigate('/skill-gap')}
            title="Click to view gap analysis and bridge options"
            style={{ cursor: 'pointer' }}
          >
            <div className="comp-row-top">
              <div className="comp-name-box">
                {comp.verified && <CheckCircle2 size={13} className="text-emerald" />}
                <strong>{comp.name}</strong>
              </div>

              <div className="comp-status-box mono">
                <span className={`status-tag ${comp.tone}`}>{comp.status}</span>
                <strong className={`score-digit ${comp.tone}`}>{comp.score}%</strong>
              </div>
            </div>

            <div className="comp-track-bar">
              <div 
                className={`comp-fill-bar ${comp.tone}`} 
                style={{ width: `${comp.score}%` }} 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Self-Reported vs Verified Tags Strip */}
      <div className="skills-tags-box">
        <span className="micro text-tertiary">REGISTERED SKILL PROFILES:</span>
        <div className="skills-chips-row">
          {selfSkills.map((sk, idx) => (
            <div key={idx} className={`skill-pill-chip ${sk.verified ? 'verified' : 'self'}`}>
              {sk.verified ? (
                <ShieldCheck size={12} className="text-emerald" />
              ) : (
                <span className="self-dot" />
              )}
              <span>{sk.name}</span>
              <span className="pill-status mono">{sk.verified ? `${sk.score}%` : sk.level}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProfileCompetencies;
