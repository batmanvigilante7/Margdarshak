import React, { useState } from 'react';
import { X, Clock, Calendar, Check, Sliders, ArrowRight } from 'lucide-react';

export const LearningPaceModal = ({ 
  currentWeeklyHours = 10, 
  totalHours = 46,
  onSave, 
  onClose 
}) => {
  const [selectedHours, setSelectedHours] = useState(currentWeeklyHours);

  const calculateWeeks = (hours) => Math.ceil(totalHours / hours);

  const paceOptions = [
    {
      hours: 5,
      label: '5 hours / week',
      subtitle: 'Steady Pacing',
      weeks: calculateWeeks(5),
      note: 'Ideal for learners with full-time academic course loads.'
    },
    {
      hours: 10,
      label: '10 hours / week',
      subtitle: 'Recommended Balance',
      weeks: calculateWeeks(10),
      note: 'Optimal balance between theory comprehension and project labs.'
    },
    {
      hours: 15,
      label: '15 hours / week',
      subtitle: 'Intensive Sprint',
      weeks: calculateWeeks(15),
      note: 'Fast-track completion for pre-placement bootcamps.'
    }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="pace-adjustment-modal glass-panel animate-fadeIn" 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="modal-header-strip">
          <div className="modal-title-wrap">
            <Sliders size={16} className="text-brand-400" />
            <h3>Adjust Learning Pace</h3>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <p className="modal-subtext">
          Margdarshak will dynamically recalibrate your weekly milestone schedules and estimated target completion dates.
        </p>

        {/* Pace Options Radio List */}
        <div className="pace-options-stack">
          {paceOptions.map((opt) => (
            <div 
              key={opt.hours}
              className={`pace-option-card ${selectedHours === opt.hours ? 'selected' : ''}`}
              onClick={() => setSelectedHours(opt.hours)}
            >
              <div className="pace-option-left">
                <div className={`pace-radio-dot ${selectedHours === opt.hours ? 'checked' : ''}`}>
                  {selectedHours === opt.hours && <div className="radio-inner" />}
                </div>
                <div>
                  <div className="pace-title-line">
                    <strong>{opt.label}</strong>
                    <span className="pace-badge">{opt.subtitle}</span>
                  </div>
                  <p className="pace-note">{opt.note}</p>
                </div>
              </div>

              <div className="pace-calc-result mono font-bold">
                ~{opt.weeks} weeks
              </div>
            </div>
          ))}
        </div>

        {/* Calculation Preview Banner */}
        <div className="pace-calc-preview glass-panel">
          <div className="preview-metric">
            <span className="micro">TOTAL BRIDGE</span>
            <strong className="mono">{totalHours} hours</strong>
          </div>
          <div className="preview-divider" />
          <div className="preview-metric">
            <span className="micro">WEEKLY COMMITMENT</span>
            <strong className="mono text-brand-300">{selectedHours} hrs / week</strong>
          </div>
          <div className="preview-divider" />
          <div className="preview-metric">
            <span className="micro">TARGET COMPLETION</span>
            <strong className="mono text-emerald">~{calculateWeeks(selectedHours)} weeks</strong>
          </div>
        </div>

        {/* Actions */}
        <div className="modal-footer-actions">
          <button 
            type="button" 
            className="secondary-btn" 
            onClick={onClose}
          >
            Cancel
          </button>
          
          <button 
            type="button" 
            className="primary-btn" 
            onClick={() => {
              onSave(selectedHours);
              onClose();
            }}
          >
            <Check size={15} />
            <span>Apply Changes</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default LearningPaceModal;
