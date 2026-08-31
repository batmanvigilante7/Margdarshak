import React from 'react';
import { 
  Award, 
  TrendingUp, 
  Clock, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Layers 
} from 'lucide-react';

export const CareerCard = ({ 
  career, 
  isCurrentTarget, 
  onSelectTarget, 
  onViewDetails 
}) => {
  const isHighMatch = career.learnerAlignment >= 75;

  return (
    <div className={`career-explorer-card glass-panel ${isCurrentTarget ? 'active-target' : ''}`}>
      
      {/* Top Meta Line */}
      <div className="career-card-header">
        <span className="career-industry-badge">{career.industry}</span>
        <span className={`demand-badge ${career.demand.toLowerCase().replace(/\s+/g, '-')}`}>
          <span className="demand-dot" />
          <span>{career.demand}</span>
        </span>
      </div>

      {/* Title & Description */}
      <div className="career-card-title-group">
        <h3>{career.title}</h3>
        <p>{career.description}</p>
      </div>

      {/* NSQF Level & Core Qualifications */}
      <div className="career-nsqf-row">
        <span className={`nsqf-badge level-${career.nsqfLevel}`}>
          <Award size={13} />
          <span>NSQF Level {career.nsqfLevel}</span>
        </span>
        <span className="bridge-effort-badge">
          <Clock size={12} />
          <span>~{career.bridgeHours}h bridge</span>
        </span>
      </div>

      {/* Profile Alignment Meter */}
      <div className="alignment-meter-block">
        <div className="alignment-label-row">
          <span className="alignment-title">PROFILE ALIGNMENT</span>
          <span className="alignment-value mono">{career.learnerAlignment}%</span>
        </div>
        <div className="alignment-meter-track">
          <div 
            className={`alignment-meter-fill ${isHighMatch ? 'high' : 'medium'}`} 
            style={{ width: `${career.learnerAlignment}%` }} 
          />
        </div>
      </div>

      {/* Top Required Competencies */}
      <div className="career-skills-tags">
        {career.skills.slice(0, 3).map((skill) => (
          <span key={skill} className="skill-mini-tag">
            {skill}
          </span>
        ))}
        {career.skills.length > 3 && (
          <span className="skill-mini-tag count">+{career.skills.length - 3} more</span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="career-card-actions">
        {isCurrentTarget ? (
          <button 
            type="button" 
            className="target-selected-btn"
            disabled
          >
            <Check size={14} strokeWidth={3} />
            <span>Active Target Goal</span>
          </button>
        ) : (
          <button 
            type="button" 
            className="set-target-btn" 
            onClick={() => onSelectTarget(career)}
          >
            <span>Set as Target Goal</span>
            <ArrowRight size={14} />
          </button>
        )}

        <button 
          type="button" 
          className="details-link-btn" 
          onClick={() => onViewDetails(career)}
          title="View Competencies & Qualifications"
        >
          <span>View Track</span>
        </button>
      </div>

    </div>
  );
};

export default CareerCard;
