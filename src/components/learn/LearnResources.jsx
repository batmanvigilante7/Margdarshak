import React from 'react';
import { BookOpen, ExternalLink, Play, Clock } from 'lucide-react';

export const LearnResources = ({ resources, onOpenResource }) => {
  return (
    <section className="learn-section-block">
      <div className="learn-section-title-line">
        <div className="title-left">
          <BookOpen size={16} className="text-brand-400" />
          <h3>1. LEARN — Curated Modules</h3>
        </div>
        <span className="section-subtext">Verified NPTEL & Swayam open courseware</span>
      </div>

      <div className="resources-grid-stack">
        {resources.map((res) => (
          <div key={res.id} className="resource-card-item glass-panel">
            <div className="res-card-top">
              <div className="res-icon-tag">
                <Play size={12} fill="currentColor" />
              </div>
              <span className="res-provider-tag mono">{res.provider}</span>
            </div>

            <div className="res-card-main">
              <h4>{res.title}</h4>
              <p>{res.description}</p>
            </div>

            <div className="res-card-footer">
              <div className="res-duration mono">
                <Clock size={12} />
                <span>~{res.durationMinutes} min</span>
              </div>

              <button 
                type="button" 
                className="open-resource-btn"
                onClick={() => onOpenResource(res)}
              >
                <span>Open Resource</span>
                <ExternalLink size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnResources;
