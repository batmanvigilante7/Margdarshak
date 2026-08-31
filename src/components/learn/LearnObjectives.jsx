import React from 'react';
import { CheckSquare, Square, CheckCircle2 } from 'lucide-react';

export const LearnObjectives = ({ 
  objectives, 
  onToggleObjective 
}) => {
  const completedCount = objectives.filter(o => o.completed).length;
  const totalCount = objectives.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="learn-objectives-card glass-panel">
      
      <div className="objectives-header">
        <div className="objectives-title-line">
          <span className="micro">MILESTONE OBJECTIVES & PROGRESS</span>
          <span className="mono font-bold text-emerald">{progressPercent}% ({completedCount} of {totalCount} completed)</span>
        </div>
        
        <div className="objectives-progress-bar">
          <div 
            className="objectives-progress-fill" 
            style={{ width: `${progressPercent}%` }} 
          />
        </div>
      </div>

      <div className="objectives-list-box">
        <span className="objectives-subtitle micro">BY THE END OF THIS MILESTONE, YOU'LL BE ABLE TO:</span>
        
        <div className="objectives-items-stack">
          {objectives.map((obj) => (
            <div 
              key={obj.id} 
              className={`objective-item ${obj.completed ? 'completed' : ''}`}
              onClick={() => onToggleObjective(obj.id)}
            >
              <div className="objective-checkbox">
                {obj.completed ? (
                  <CheckCircle2 size={16} className="text-emerald" />
                ) : (
                  <Square size={16} className="text-tertiary" />
                )}
              </div>
              <span className="objective-text">{obj.text}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LearnObjectives;
