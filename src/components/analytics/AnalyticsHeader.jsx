import React from 'react';
import { Activity, Sparkles, Calendar } from 'lucide-react';

export const AnalyticsHeader = ({ 
  timeRange = '30d', 
  onSelectTimeRange 
}) => {
  return (
    <div className="analytics-page-header glass-panel">
      
      <div className="analytics-header-info">
        <div className="eyebrow">
          <Activity size={13} className="sparkle-ai" />
          <span>LEARNING INTELLIGENCE</span>
        </div>
        <h2>Your Progress</h2>
        <p>
          Track how your competencies are changing over time—not just how much time you've spent studying.
        </p>
      </div>

      <div className="analytics-header-filters">
        <div className="time-filter-pill-group">
          <button 
            type="button" 
            className={`time-filter-btn ${timeRange === '7d' ? 'active' : ''}`}
            onClick={() => onSelectTimeRange('7d')}
          >
            7 days
          </button>
          <button 
            type="button" 
            className={`time-filter-btn ${timeRange === '30d' ? 'active' : ''}`}
            onClick={() => onSelectTimeRange('30d')}
          >
            30 days
          </button>
          <button 
            type="button" 
            className={`time-filter-btn ${timeRange === 'term' ? 'active' : ''}`}
            onClick={() => onSelectTimeRange('term')}
          >
            Academic Term
          </button>
        </div>
      </div>

    </div>
  );
};

export default AnalyticsHeader;
