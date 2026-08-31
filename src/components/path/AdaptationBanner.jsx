import React from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';

export const AdaptationBanner = () => {
  return (
    <div className="path-adaptation-banner glass-panel">
      <div className="adaptation-badge-icon">
        <Zap size={14} />
      </div>
      <div className="adaptation-text">
        <strong>✦ ADAPTIVE SHORTCUT APPLIED:</strong>
        <span> Your verified Python competency (<strong>87%</strong>) bypassed 14 hours of introductory syntax training, placing <strong>Machine Learning Fundamentals</strong> as your immediate starting point.</span>
      </div>
    </div>
  );
};

export default AdaptationBanner;
