import React from 'react';
import { Sparkles, Route, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const AiGapRationale = ({ onNavigate }) => {
  return (
    <div className="ai-gap-strategy-card glass-panel">
      
      <div className="strategy-header">
        <div className="strategy-title-group">
          <Sparkles size={16} className="sparkle-ai" />
          <span className="micro">MARGDARSHAK AI DIAGNOSTIC STRATEGY</span>
        </div>
        <span className="optimization-badge">Prerequisite Optimized</span>
      </div>

      <div className="strategy-body-grid">
        
        <div className="strategy-point">
          <div className="point-icon emerald">
            <CheckCircle2 size={16} />
          </div>
          <div className="point-copy">
            <strong>Leverage Verified Python Strength (87%)</strong>
            <p>Your Python programming competency is on track. You do not need remedial language modules and can immediately write applied machine learning code.</p>
          </div>
        </div>

        <div className="strategy-point">
          <div className="point-icon rose">
            <AlertCircle size={16} />
          </div>
          <div className="point-copy">
            <strong>High-Leverage Starting Point: Machine Learning (48% → 85%)</strong>
            <p>Closing the <strong>Machine Learning Fundamentals (~18h)</strong> gap is your single highest-leverage action because it is the strict prerequisite for 4 downstream AI tracks.</p>
          </div>
        </div>

        <div className="strategy-point">
          <div className="point-icon amber">
            <AlertCircle size={16} />
          </div>
          <div className="point-copy">
            <strong>Secondary Bridge: Statistics & Probability (61% → 80%)</strong>
            <p>A focused <strong>12-hour bridge</strong> on probability distributions and hypothesis testing will complete your foundation before neural network loss optimization.</p>
          </div>
        </div>

      </div>

      <div className="strategy-footer-actions">
        <button 
          type="button" 
          className="secondary-btn" 
          onClick={() => onNavigate('/assessment')}
        >
          <span>Recalibrate Assessment</span>
        </button>

        <button 
          type="button" 
          className="primary-btn" 
          onClick={() => onNavigate('/path')}
        >
          <Route size={16} />
          <span>Generate My Learning Path</span>
          <ArrowRight size={16} />
        </button>
      </div>

    </div>
  );
};

export default AiGapRationale;
