import React from 'react';
import { Search, X } from 'lucide-react';

export const ResourceSearch = ({ searchQuery, onSearchChange, onClear }) => {
  return (
    <div className="resource-search-wrap">
      <div className="search-input-box glass-panel">
        <Search size={16} className="search-icon text-tertiary" />
        <input
          type="text"
          placeholder='Search "model evaluation", "Python", "NPTEL", "statistics", "SWAYAM"...'
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input-field"
        />
        {searchQuery && (
          <button 
            type="button" 
            className="clear-search-btn"
            onClick={onClear}
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ResourceSearch;
