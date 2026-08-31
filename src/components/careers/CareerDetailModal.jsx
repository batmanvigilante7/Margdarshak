import React from 'react';
import { 
  X, 
  Award, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  ArrowRight, 
  Briefcase 
} from 'lucide-react';

export const CareerDetailModal = ({ 
  career, 
  isCurrentTarget, 
  onSelectTarget, 
  onClose 
}) => {
  if (!career) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="career-detail-modal glass-panel animate-fadeIn" 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="detail-modal-header">
          <div>
            <div className="detail-domain-eyebrow">
              <Briefcase size={13} />
              <span>{career.industry} • CAREER TRACK</span>
            </div>
            <h2>{career.title}</h2>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close details"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="detail-modal-body">
          
          <p className="detail-description">{career.description}</p>

          {/* Key Metrics Strip */}
          <div className="detail-metrics-strip">
            <div className="metric-cell">
              <span className="micro">FRAMEWORK</span>
              <div className="metric-val mono text-brand-300">
                <Award size={14} />
                <span>NSQF Level {career.nsqfLevel}</span>
              </div>
            </div>

            <div className="metric-cell">
              <span className="micro">DEMAND TRAJECTORY</span>
              <div className="metric-val text-sky">
                <TrendingUp size={14} />
                <span>{career.demand}</span>
              </div>
            </div>

            <div className="metric-cell">
              <span className="micro">ESTIMATED BRIDGE</span>
              <div className="metric-val">
                <Clock size={14} />
                <span>~{career.bridgeHours} hours</span>
              </div>
            </div>

            <div className="metric-cell">
              <span className="micro">PROFILE MATCH</span>
              <div className="metric-val text-emerald mono">
                <span>{career.learnerAlignment}% Match</span>
              </div>
            </div>
          </div>

          {/* Competency Benchmarks */}
          <div className="detail-section">
            <span className="detail-section-title">CORE COMPETENCY BENCHMARKS</span>
            <div className="competencies-grid">
              {career.skills.map((skill, i) => (
                <div key={i} className="competency-item">
                  <CheckCircle2 size={15} className="competency-check" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Qualifications & Certifications */}
          <div className="detail-section">
            <span className="detail-section-title">ALIGNED QUALIFICATIONS & MICRO-CREDENTIALS</span>
            <div className="qualifications-stack">
              <div className="qualification-card">
                <BookOpen size={16} className="qual-icon" />
                <div className="qual-copy">
                  <strong>National Qualification: {career.title} (NSQF {career.nsqfLevel})</strong>
                  <span>Aligned with NCVET competency standards & vocational progression.</span>
                </div>
              </div>
              <div className="qualification-card">
                <Award size={16} className="qual-icon" />
                <div className="qual-copy">
                  <strong>Industry Micro-Credentials (SWAYAM / NPTEL / AICTE)</strong>
                  <span>Verifiable course modules mapped directly to skill-gap bridges.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="detail-modal-footer">
          <button 
            type="button" 
            className="secondary-btn" 
            onClick={onClose}
          >
            Close Explorer
          </button>

          {isCurrentTarget ? (
            <button type="button" className="target-selected-btn" disabled>
              <CheckCircle2 size={16} />
              <span>Current Target Goal</span>
            </button>
          ) : (
            <button 
              type="button" 
              className="primary-btn" 
              onClick={() => {
                onClose();
                onSelectTarget(career);
              }}
            >
              <span>Set as Target Goal</span>
              <ArrowRight size={16} />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default CareerDetailModal;
