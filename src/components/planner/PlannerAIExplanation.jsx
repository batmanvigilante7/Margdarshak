import React from 'react';
import { Sparkles, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

export const PlannerAIExplanation = ({ onNavigate }) => {
  return (
    <div className="planner-ai-explanation-card glass-panel">
      
      <div className="ai-plan-header">
        <Sparkles size={14} className="sparkle-ai" />
        <span className="micro">WHY THIS SCHEDULE IS OPTIMIZED FOR YOU</span>
      </div>

      <div className="ai-plan-body">
        <p>
          Margdarshak allocated <strong>65% of your weekly study time to Machine Learning</strong> because it is your highest-leverage competency blocker (38% acquired vs 85% benchmark).
        </p>
        <p>
          Your verified Python competency (87%) allows skipping introductory programming review, enabling you to reach the <strong>Milestone 02 Competency Checkpoint by Sunday</strong>.
        </p>
      </div>

      {/* Checkpoint Alert Box */}
      <div className="planner-checkpoint-alert">
        <div className="alert-icon-box">
          <AlertTriangle size={15} className="text-amber-400" />
        </div>
        <div className="alert-copy">
          <strong>UPCOMING DEADLINE: Milestone 02 Checkpoint</strong>
          <p>Scheduled for Sunday 4:00 PM. Recommended: Finish the Model Evaluation Practice Quiz by Thursday evening.</p>
        </div>
      </div>

      <div className="ai-plan-footer">
        <button 
          type="button" 
          className="consult-copilot-btn"
          onClick={() => onNavigate('/copilot')}
        >
          <Sparkles size={12} className="sparkle-ai" />
          <span>Ask Copilot to Adjust Pace</span>
          <ArrowRight size={12} />
        </button>
      </div>

    </div>
  );
};

export default PlannerAIExplanation;
