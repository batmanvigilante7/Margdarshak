import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, Clock } from 'lucide-react';

export const CareerAIRecommendation = ({ onNavigate }) => {
  return (
    <div className="career-ai-recommendation-card glass-panel animate-fadeIn">
      
      <div className="ai-rec-header">
        <div className="header-left">
          <Sparkles size={16} className="sparkle-ai" />
          <span className="micro">✦ MARGDARSHAK AI RECOMMENDATION</span>
        </div>
        <span className="mono text-brand-300 font-bold">72% Profile Match</span>
      </div>

      <div className="ai-rec-body">
        <p>
          This career track is a strong, natural progression for your technical profile. You don't need to start from scratch—your verified <strong>Python (87%)</strong> and <strong>Statistics (74%)</strong> competencies fulfill 72% of the occupational benchmark.
        </p>

        <div className="priority-focus-strip">
          <span className="micro text-brand-300">BEFORE INTERVIEW READINESS, COMPLETE:</span>
          <div className="focus-steps-pills">
            <span className="focus-pill">1. Model Evaluation & ROC-AUC Diagnostics (~8h)</span>
            <span className="focus-pill">2. Customer Churn Predictor Portfolio Project (~10h)</span>
            <span className="focus-pill">3. Deep Learning & Neural Architectures (~12h)</span>
          </div>
        </div>

        <div className="bridge-effort-summary-line mono">
          <Clock size={13} className="text-brand-300" />
          <span>Estimated Bridge Effort: <strong>~42 hours</strong> (~6 weeks at 7h/week)</span>
        </div>
      </div>

      <div className="ai-rec-actions">
        <button 
          type="button" 
          className="primary-btn"
          onClick={() => onNavigate('/path')}
        >
          <span>Build My Learning Path</span>
          <ArrowRight size={14} />
        </button>

        <button 
          type="button" 
          className="secondary-btn"
          onClick={() => onNavigate('/copilot')}
        >
          <MessageSquare size={13} />
          <span>Ask Copilot About This Role</span>
        </button>
      </div>

    </div>
  );
};

export default CareerAIRecommendation;
