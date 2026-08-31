import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';

export const ResourceFilterBar = ({ 
  selectedSkill, 
  onSelectSkill, 
  selectedDifficulty, 
  onSelectDifficulty, 
  selectedProvider, 
  onSelectProvider,
  onResetFilters 
}) => {
  const skills = ['All Skills', 'Model Evaluation', 'Machine Learning', 'Python', 'Statistics', 'Data Engineering', 'Deep Learning'];
  const difficulties = ['All Difficulties', 'Beginner', 'Intermediate', 'Advanced'];
  const providers = ['All Providers', 'NPTEL', 'SWAYAM', 'Skill India', 'Coursera', 'YouTube', 'Margdarshak Labs'];

  const hasActiveFilters = selectedSkill !== 'All Skills' || selectedDifficulty !== 'All Difficulties' || selectedProvider !== 'All Providers';

  return (
    <div className="resource-filter-bar glass-panel">
      
      <div className="filter-controls-row">
        <div className="filter-dropdown-wrap">
          <label className="micro">SKILL DOMAIN</label>
          <select 
            value={selectedSkill} 
            onChange={(e) => onSelectSkill(e.target.value)}
            className="filter-select-input"
          >
            {skills.map((s, idx) => (
              <option key={idx} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="filter-dropdown-wrap">
          <label className="micro">DIFFICULTY</label>
          <select 
            value={selectedDifficulty} 
            onChange={(e) => onSelectDifficulty(e.target.value)}
            className="filter-select-input"
          >
            {difficulties.map((d, idx) => (
              <option key={idx} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="filter-dropdown-wrap">
          <label className="micro">PROVIDER / PLATFORM</label>
          <select 
            value={selectedProvider} 
            onChange={(e) => onSelectProvider(e.target.value)}
            className="filter-select-input"
          >
            {providers.map((p, idx) => (
              <option key={idx} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      {hasActiveFilters && (
        <button 
          type="button" 
          className="reset-filters-btn"
          onClick={onResetFilters}
          title="Reset all filters"
        >
          <RotateCcw size={12} />
          <span>Reset Filters</span>
        </button>
      )}

    </div>
  );
};

export default ResourceFilterBar;
