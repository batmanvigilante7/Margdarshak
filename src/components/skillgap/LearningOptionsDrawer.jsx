import React from 'react';
import { 
  X, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  ExternalLink,
  Layers
} from 'lucide-react';

export const LearningOptionsDrawer = ({ 
  competency, 
  onClose, 
  onNavigate 
}) => {
  if (!competency) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="learning-options-drawer glass-panel animate-fadeIn" 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="drawer-top-header">
          <div>
            <div className="drawer-eyebrow">
              <Sparkles size={12} className="sparkle-ai" />
              <span>COMPETENCY BRIDGE OPTIONS</span>
            </div>
            <h2>BRIDGE: {competency.name.toUpperCase()}</h2>
            <div className="drawer-meta-badges">
              <span className="gap-metric mono">Gap: {competency.benchmarkScore - competency.currentScore} pts</span>
              <span className="effort-metric mono">
                <Clock size={12} />
                <span>Estimated effort: ~{competency.bridgeHours}h</span>
              </span>
              <span className={`status-pill ${competency.status}`}>
                {competency.statusLabel}
              </span>
            </div>
          </div>

          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close drawer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Scroll Content */}
        <div className="drawer-scroll-body">
          
          {/* Section 1: Modular Learning Resources */}
          <div className="options-group-section">
            <div className="group-title-row">
              <span className="micro">1. RECOMMENDED LEARNING RESOURCES</span>
              <span className="resource-type-tag">Course Modules</span>
            </div>

            <div className="resource-cards-stack">
              <div className="resource-item-card">
                <div className="resource-item-left">
                  <div className="resource-icon-wrap">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <strong>{competency.name} — Core Concepts & Math</strong>
                    <div className="res-meta-line">
                      <span>NPTEL / Swayam Verified</span> • <span className="mono">8 hours</span> • <span>Foundation</span>
                    </div>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="resource-view-btn"
                  onClick={() => onNavigate('/path')}
                >
                  <span>Add to Path</span>
                  <ArrowRight size={13} />
                </button>
              </div>

              <div className="resource-item-card">
                <div className="resource-item-left">
                  <div className="resource-icon-wrap">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <strong>Applied {competency.name} with Python Projects</strong>
                    <div className="res-meta-line">
                      <span>Hands-on Lab</span> • <span className="mono">10 hours</span> • <span>Intermediate</span>
                    </div>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="resource-view-btn"
                  onClick={() => onNavigate('/path')}
                >
                  <span>Add to Path</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: National Qualifications (NSQF Framework) */}
          <div className="options-group-section">
            <div className="group-title-row">
              <span className="micro">2. NSQF QUALIFICATION STANDARD</span>
              <span className="resource-type-tag nsqf">NCVET Framework</span>
            </div>

            <div className="qualification-standard-card">
              <div className="qual-standard-header">
                <Award size={18} className="text-brand-300" />
                <div>
                  <strong>NSQF Level {competency.nsqfLevel} Competency Standard</strong>
                  <p>Aligned with National Occupational Standards (NOS) for {competency.name}.</p>
                </div>
              </div>
              <div className="qual-tags-row">
                <span className="nsqf-badge level-6">Level {competency.nsqfLevel}</span>
                <span className="sync-badge">
                  <ShieldCheck size={12} />
                  <span>Outcomes Verified</span>
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Verifiable Micro-Credentials */}
          <div className="options-group-section">
            <div className="group-title-row">
              <span className="micro">3. INDUSTRY CERTIFICATIONS & CREDENTIALS</span>
              <span className="resource-type-tag cert">Verifiable Credential</span>
            </div>

            <div className="cert-standard-card">
              <div className="cert-left">
                <ShieldCheck size={18} className="text-emerald" />
                <div>
                  <strong>Certified Applied {competency.name} Specialist</strong>
                  <p>Digital badge recognized for prior learning credits and portfolio verification.</p>
                </div>
              </div>
              <span className="cert-effort-badge mono">1 Credit</span>
            </div>
          </div>

        </div>

        {/* Drawer Footer Actions */}
        <div className="drawer-footer-actions">
          <button 
            type="button" 
            className="secondary-btn" 
            onClick={onClose}
          >
            Close
          </button>

          <button 
            type="button" 
            className="primary-btn" 
            onClick={() => onNavigate('/path')}
          >
            <span>Start This Bridge in Roadmap</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default LearningOptionsDrawer;
