import React, { useState } from 'react';
import { X, Calendar, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const PlannerRescheduleModal = ({ task, onConfirmMove, onClose }) => {
  const [targetDay, setTargetDay] = useState('wed');

  const days = [
    { key: 'mon', name: 'Monday' },
    { key: 'tue', name: 'Tuesday' },
    { key: 'wed', name: 'Wednesday' },
    { key: 'thu', name: 'Thursday' },
    { key: 'fri', name: 'Friday' },
    { key: 'sat', name: 'Saturday' },
    { key: 'sun', name: 'Sunday' }
  ];

  const isCheckpoint = task?.type === 'checkpoint';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="reschedule-task-modal glass-panel animate-fadeIn" 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="modal-header-strip">
          <div className="modal-title-wrap">
            <Calendar size={16} className="text-brand-300" />
            <h3>Reschedule Study Activity</h3>
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

        {/* Selected Task Details */}
        <div className="reschedule-task-preview glass-panel">
          <span className="micro text-brand-300">SELECTED ACTIVITY:</span>
          <h4>{task?.title}</h4>
          <span className="task-preview-meta mono">{task?.durationMin} min • {task?.topic}</span>
        </div>

        {isCheckpoint && (
          <div className="reschedule-warning-card">
            <AlertTriangle size={15} className="text-amber-400" />
            <p>
              This is a formal milestone checkpoint. Moving it past Sunday may adjust your target role completion timeline.
            </p>
          </div>
        )}

        {/* Select Target Day */}
        <div className="select-day-form-group">
          <label className="micro">MOVE TO DAY:</label>
          <div className="days-selection-grid">
            {days.map((d) => (
              <button
                key={d.key}
                type="button"
                className={`day-pick-btn ${targetDay === d.key ? 'selected' : ''}`}
                onClick={() => setTargetDay(d.key)}
              >
                <span>{d.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="modal-actions-row">
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
              onConfirmMove(task.id, targetDay);
              onClose();
            }}
          >
            <CheckCircle2 size={14} />
            <span>Confirm Reschedule</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default PlannerRescheduleModal;
