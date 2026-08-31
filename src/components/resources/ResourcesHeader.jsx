import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

export const ResourcesHeader = () => {
  return (
    <div className="resources-page-header glass-panel animate-fadeIn">
      <div className="resources-header-info">
        <div className="eyebrow-line">
          <BookOpen size={14} className="text-brand-300" />
          <span className="micro">LEARNING LIBRARY & OPEN COURSEWARE</span>
        </div>
        <h2>Curated Learning Resources</h2>
        <p>
          Targeted study materials, NPTEL/Swayam modules, and practice datasets aligned directly to your skill gaps and roadmap milestones.
        </p>
      </div>
    </div>
  );
};

export default ResourcesHeader;
