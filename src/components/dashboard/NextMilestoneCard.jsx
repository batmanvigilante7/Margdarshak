import React from 'react';
import { 
  Play, 
  Sparkles, 
  Clock, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Route 
} from 'lucide-react';

export const NextMilestoneCard = ({ 
  milestone = {
    id: 'ml-fundamentals',
    title: 'Machine Learning Fundamentals',
    category: 'Core Competency',
    nsqfTrack: 'NSQF Level 6',
    estimatedHours: 6,
    progress: 60,
    description: 'Build supervised and unsupervised learning intuition, loss functions, and evaluation metrics before practical deep learning modules.'
  },
  onNavigate 
}) => {
  return (
    <div className="dashboard-card milestone-hero-card glass-panel">
      
      {/* Top Tag & Track */}
      <div className="milestone-card-top">
        <div className="milestone-badge">
          <span className="pulse-icon"><Play size={10} fill="currentColor" /></span>
          <span>YOUR NEXT MILESTONE</span>
        </div>
        <div className="milestone-meta-pills">
          <span className="meta-pill"><Clock size={12} /> {milestone.estimatedHours}h estimated</span>
          <span className="meta-pill mono">{milestone.nsqfTrack}</span>
        </div>
      </div>

      {/* Main Milestone Body */}
      <div className="milestone-card-body">
        <h2>{milestone.title}</h2>
        <p>{milestone.description}</p>

        {/* Progress Bar */}
        <div className="milestone-progress-wrap">
          <div className="progress-labels">
            <span>Milestone Progress</span>
            <span className="mono">{milestone.progress}% completed</span>
          </div>
          <div className="milestone-progress-bar">
            <div 
              className="milestone-progress-fill" 
              style={{ width: `${milestone.progress}%` }} 
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="milestone-actions-row">
        <button 
          type="button" 
          className="primary-btn" 
          onClick={() => onNavigate(`/learn/${milestone.id}`)}
        >
          <Play size={15} fill="currentColor" />
          <span>Continue Learning</span>
          <ArrowRight size={16} />
        </button>

        <button 
          type="button" 
          className="secondary-btn" 
          onClick={() => onNavigate('/path')}
        >
          <Route size={15} />
          <span>View Full Roadmap</span>
        </button>
      </div>

      {/* AI Rationale Box */}
      <div className="ai-rationale-box">
        <div className="rationale-header">
          <Sparkles size={14} className="sparkle-ai" />
          <span>WHY THIS NEXT?</span>
        </div>
        <p>
          Your Python programming base is verified (87%), but <strong>Machine Learning (48%)</strong> is currently your highest-priority prerequisite gap for the <strong>AI Engineer</strong> career track.
        </p>
      </div>

    </div>
  );
};

export default NextMilestoneCard;
