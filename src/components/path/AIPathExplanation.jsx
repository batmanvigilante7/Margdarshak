import React from 'react';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

export const AIPathExplanation = () => {
  return (
    <div className="ai-path-explanation-box glass-panel">
      <div className="ai-explanation-header">
        <Sparkles size={14} className="sparkle-ai" />
        <span>WHY THIS PATH?</span>
      </div>
      
      <p className="ai-explanation-copy">
        Based on your diagnostic profile, you don't need another remedial Python course. We've placed <strong>Machine Learning Fundamentals</strong> before Deep Learning because your assessment showed a foundational ML gap (38% vs 85% target).
      </p>
      
      <p className="ai-explanation-subcopy">
        Strengthening this core competency first drastically accelerates your comprehension of subsequent neural architectures and model deployment milestones.
      </p>
    </div>
  );
};

export default AIPathExplanation;
