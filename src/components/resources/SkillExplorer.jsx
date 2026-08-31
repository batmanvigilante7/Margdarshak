import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';

export const SkillExplorer = ({ onSelectSkill, currentSkill }) => {
  const skillCategories = [
    { name: 'Model Evaluation', count: 14, tag: 'Priority Gap' },
    { name: 'Machine Learning', count: 31, tag: 'Core Target' },
    { name: 'Python', count: 24, tag: 'Foundation' },
    { name: 'Statistics', count: 18, tag: 'Foundation' },
    { name: 'Data Engineering', count: 16, tag: 'Applied' },
    { name: 'Deep Learning', count: 12, tag: 'Specialist' }
  ];

  return (
    <div className="skill-explorer-section glass-panel">
      
      <div className="card-header-line">
        <div className="header-left">
          <Layers size={15} className="text-brand-300" />
          <span className="micro">EXPLORE BY SKILL DOMAIN</span>
        </div>
        <span className="micro text-tertiary">6 DOMAINS</span>
      </div>

      <div className="skill-chips-grid">
        {skillCategories.map((sc, idx) => (
          <button
            key={idx}
            type="button"
            className={`skill-category-card ${currentSkill === sc.name ? 'active' : ''}`}
            onClick={() => onSelectSkill(sc.name)}
          >
            <div className="skill-cat-top">
              <strong>{sc.name}</strong>
              <span className="cat-count mono">{sc.count} resources</span>
            </div>
            <div className="skill-cat-bottom">
              <span className="cat-tag-pill">{sc.tag}</span>
              <ArrowRight size={12} className="cat-arrow" />
            </div>
          </button>
        ))}
      </div>

    </div>
  );
};

export default SkillExplorer;
