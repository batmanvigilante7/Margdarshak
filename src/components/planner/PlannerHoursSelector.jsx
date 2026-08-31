import React, { useState } from 'react';
import { Clock, Sliders, Sparkles } from 'lucide-react';

export const PlannerHoursSelector = ({ 
  selectedHours = 8, 
  onSelectHours 
}) => {
  const [isCustom, setIsCustom] = useState(false);
  const [customVal, setCustomVal] = useState(selectedHours);

  const presets = [
    { hours: 5, label: '5h / wk', pace: 'Light Pace (~9 wks to goal)' },
    { hours: 8, label: '8h / wk', pace: 'Balanced (~6 wks to goal)' },
    { hours: 10, label: '10h / wk', pace: 'Accelerated (~5 wks to goal)' },
    { hours: 15, label: '15h / wk', pace: 'Intensive (~3 wks to goal)' }
  ];

  const handleCustomChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val > 0 && val <= 40) {
      setCustomVal(val);
      onSelectHours(val);
    }
  };

  return (
    <div className="hours-selector-card glass-panel">
      
      <div className="hours-selector-title-row">
        <div className="title-left">
          <Clock size={15} className="text-brand-300" />
          <span className="micro">HOW MUCH TIME CAN YOU LEARN THIS WEEK?</span>
        </div>
        <span className="velocity-tag mono text-brand-300">
          ✦ Adaptive pace recalculated on change
        </span>
      </div>

      <div className="hours-presets-grid">
        {presets.map((preset) => {
          const isSelected = !isCustom && selectedHours === preset.hours;
          return (
            <button
              key={preset.hours}
              type="button"
              className={`preset-hour-btn ${isSelected ? 'active' : ''}`}
              onClick={() => {
                setIsCustom(false);
                onSelectHours(preset.hours);
              }}
            >
              <div className="preset-btn-top">
                <span className="preset-radio-circle">{isSelected ? '●' : '○'}</span>
                <strong className="mono">{preset.label}</strong>
              </div>
              <span className="preset-pace-text">{preset.pace}</span>
            </button>
          );
        })}

        {/* Custom Hours Button / Input */}
        <div className={`custom-hour-box ${isCustom ? 'active' : ''}`}>
          <div className="custom-box-top">
            <button
              type="button"
              className="custom-toggle-btn"
              onClick={() => {
                setIsCustom(true);
                onSelectHours(customVal);
              }}
            >
              <span>{isCustom ? '●' : '○'}</span>
              <strong className="mono">Custom</strong>
            </button>

            {isCustom && (
              <div className="custom-input-wrap">
                <input
                  type="number"
                  min="1"
                  max="40"
                  value={customVal}
                  onChange={handleCustomChange}
                  className="custom-number-input mono"
                />
                <span className="input-unit">h/wk</span>
              </div>
            )}
          </div>
          <span className="preset-pace-text">User-defined schedule</span>
        </div>
      </div>

    </div>
  );
};

export default PlannerHoursSelector;
