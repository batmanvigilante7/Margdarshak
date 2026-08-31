import React from 'react';
import { Moon, Sun, Monitor, Palette, ShieldCheck } from 'lucide-react';

export const AppearancePreferences = ({ theme = 'dark', accent = 'indigo', onChange }) => {
  const themeOptions = [
    { id: 'dark', label: 'Dark Mode (Default)', icon: <Moon size={13} /> },
    { id: 'light', label: 'Light Mode', icon: <Sun size={13} /> },
    { id: 'system', label: 'System Sync', icon: <Monitor size={13} /> }
  ];

  const accentOptions = [
    { id: 'indigo', label: 'Indigo (Default)', color: '#6366f1' },
    { id: 'violet', label: 'Violet', color: '#8b5cf6' },
    { id: 'emerald', label: 'Emerald', color: '#10b981' }
  ];

  return (
    <div id="appearance" className="preferences-section-card glass-panel">
      
      <div className="section-title-line">
        <div className="title-left">
          <Palette size={16} className="text-brand-300" />
          <h3>Appearance & Visual Accent</h3>
        </div>
        <span className="micro text-brand-300">INTERFACE STYLING</span>
      </div>

      {/* Theme Selection */}
      <div className="pref-setting-block">
        <div className="setting-label-col">
          <strong>Theme Mode</strong>
          <p>Margdarshak is designed dark-first for extended analytical reading comfort.</p>
        </div>

        <div className="theme-options-grid">
          {themeOptions.map((th) => (
            <button
              key={th.id}
              type="button"
              className={`theme-option-btn ${theme === th.id ? 'active' : ''}`}
              onClick={() => onChange('theme', th.id)}
            >
              {th.icon}
              <span>{th.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Accent Color Selection */}
      <div className="pref-setting-block">
        <div className="setting-label-col">
          <strong>Primary Accent Color</strong>
          <p>Customizes interactive highlight borders and focus markers.</p>
        </div>

        <div className="accent-options-row">
          {accentOptions.map((acc) => (
            <button
              key={acc.id}
              type="button"
              className={`accent-color-btn ${accent === acc.id ? 'active' : ''}`}
              onClick={() => onChange('accent', acc.id)}
            >
              <span className="accent-color-circle" style={{ background: acc.color }} />
              <span>{acc.label}</span>
            </button>
          ))}
        </div>

        <span className="trust-note-text">
          *Semantic indicators (Emerald for verified on-track, Amber for moderate gaps, Rose for critical blockers) remain unchanged to preserve diagnostic clarity.
        </span>
      </div>

    </div>
  );
};

export default AppearancePreferences;
