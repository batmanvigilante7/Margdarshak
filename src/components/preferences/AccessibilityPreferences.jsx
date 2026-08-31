import React from 'react';
import { Eye, ZapOff, Contrast, Type } from 'lucide-react';

export const AccessibilityPreferences = ({ accessibility, onChange }) => {
  const a11yItems = [
    {
      key: 'reduceMotion',
      title: 'Reduce Motion & Transitions',
      desc: 'Minimizes sliding drawers and animated visual state changes.',
      icon: <ZapOff size={14} />
    },
    {
      key: 'highContrast',
      title: 'High Contrast Mode',
      desc: 'Amplifies structural borders and status badges for improved legibility.',
      icon: <Contrast size={14} />
    },
    {
      key: 'largerText',
      title: 'Enhanced Text Scaling',
      desc: 'Scales dashboard metric labels and body paragraphs for enhanced readability.',
      icon: <Type size={14} />
    }
  ];

  const handleToggle = (key) => {
    const updated = {
      ...accessibility,
      [key]: !accessibility[key]
    };
    onChange('accessibility', updated);
  };

  return (
    <div id="accessibility" className="preferences-section-card glass-panel">
      
      <div className="section-title-line">
        <div className="title-left">
          <Eye size={16} className="text-brand-300" />
          <h3>Accessibility Controls</h3>
        </div>
        <span className="micro text-brand-300">INCLUSIVE DESIGN</span>
      </div>

      <div className="toggles-stack">
        {a11yItems.map((item) => {
          const isEnabled = accessibility[item.key] ?? false;
          return (
            <div key={item.key} className="toggle-setting-row">
              <div className="toggle-label-col">
                <div className="item-title-wrap">
                  {item.icon}
                  <strong>{item.title}</strong>
                </div>
                <p>{item.desc}</p>
              </div>

              <button
                type="button"
                className={`switch-toggle-btn ${isEnabled ? 'on' : 'off'}`}
                onClick={() => handleToggle(item.key)}
                aria-label={`Toggle ${item.title}`}
              >
                <span className="switch-thumb" />
                <span className="switch-state-text mono font-bold">
                  {isEnabled ? 'ON' : 'OFF'}
                </span>
              </button>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default AccessibilityPreferences;
