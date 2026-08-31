import React from 'react';
import { ArrowLeft, Target, CheckCircle2, Bookmark, Share2, Sparkles } from 'lucide-react';

export const CareerDetailHeader = ({ 
  career, 
  isCurrentTarget = true, 
  onSelectCareer, 
  onNavigate 
}) => {
  return (
    <div className="career-detail-header glass-panel animate-fadeIn">
      
      {/* Top Breadcrumb & Options */}
      <div className="career-detail-breadcrumb-row">
        <button 
          type="button" 
          className="back-to-careers-btn"
          onClick={() => onNavigate('/careers')}
        >
          <ArrowLeft size={14} />
          <span>Back to Careers Explorer</span>
        </button>

        <div className="header-meta-actions">
          <button 
            type="button" 
            className="secondary-btn icon-only-btn" 
            title="Save career track"
          >
            <Bookmark size={13} />
          </button>
          <button 
            type="button" 
            className="secondary-btn icon-only-btn" 
            title="Share career track"
          >
            <Share2 size={13} />
          </button>
        </div>
      </div>

      {/* Main Title & Hero Banner */}
      <div className="career-detail-hero-content">
        <div className="hero-info-left">
          <div className="career-hero-eyebrow">
            <span className="nsqf-badge level-6">◇ {career.nsqfLevel}</span>
            <span className="competency-type-tag">{career.trackType || 'Core Competency Track'}</span>
          </div>

          <h2>{career.title}</h2>
          <p>{career.description}</p>
        </div>

        {/* Target Career CTA Button */}
        <div className="hero-cta-right">
          {isCurrentTarget ? (
            <div className="current-target-status-box">
              <div className="status-top">
                <CheckCircle2 size={16} className="text-emerald" />
                <strong className="text-emerald">CURRENT TARGET ROLE</strong>
              </div>
              <button 
                type="button" 
                className="primary-btn view-path-btn"
                onClick={() => onNavigate('/path')}
              >
                <span>View Learning Path</span>
              </button>
            </div>
          ) : (
            <button 
              type="button" 
              className="primary-btn choose-career-btn"
              onClick={onSelectCareer}
            >
              <Target size={14} />
              <span>Choose This Career Track</span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
};

export default CareerDetailHeader;
