import React from 'react';
import { Sliders, Settings } from 'lucide-react';

export const PreferencesHeader = () => {
  return (
    <div className="preferences-page-header glass-panel animate-fadeIn">
      <div className="preferences-header-info">
        <div className="eyebrow-line">
          <Settings size={14} className="text-brand-300" />
          <span className="micro">WORKSPACE CONFIGURATION & ADAPTIVE CONTROLS</span>
        </div>
        <h2>Preferences & Settings</h2>
        <p>
          Configure how Margdarshak adapts to your learning style, weekly study schedule, and communication cadence.
        </p>
      </div>
    </div>
  );
};

export default PreferencesHeader;
