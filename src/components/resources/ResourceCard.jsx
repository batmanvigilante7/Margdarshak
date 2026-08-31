import React from 'react';
import { 
  GraduationCap, 
  Video, 
  FolderGit2, 
  FlaskConical, 
  FileText, 
  ExternalLink, 
  Bookmark, 
  Plus, 
  Check, 
  Target, 
  Clock, 
  Sparkles 
} from 'lucide-react';

export const ResourceCard = ({ 
  resource, 
  isSaved = false, 
  isAddedToPath = false, 
  onToggleSave, 
  onAddToPath, 
  onClickCard 
}) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'course': return <GraduationCap size={13} className="text-brand-300" />;
      case 'video': return <Video size={13} className="text-sky-400" />;
      case 'project': return <FolderGit2 size={13} className="text-purple" />;
      case 'practice': return <FlaskConical size={13} className="text-emerald" />;
      default: return <FileText size={13} className="text-tertiary" />;
    }
  };

  return (
    <div 
      className="resource-card glass-panel animate-fadeIn"
      onClick={() => onClickCard(resource)}
    >
      
      {/* Top Provider & Type Row */}
      <div className="card-top-header">
        <div className="provider-type-strip">
          <span className="provider-pill mono">{resource.provider}</span>
          <div className="resource-type-tag">
            {getTypeIcon(resource.type)}
            <span className="capitalize">{resource.type}</span>
          </div>
        </div>

        <button 
          type="button" 
          className={`save-bookmark-btn ${isSaved ? 'saved' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(resource.id);
          }}
          title={isSaved ? 'Remove from saved' : 'Save resource'}
        >
          <Bookmark size={13} fill={isSaved ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Main Title & Description */}
      <div className="card-body-content">
        <h4>{resource.title}</h4>
        <p>{resource.description}</p>
      </div>

      {/* Metadata & Skill Tag */}
      <div className="card-meta-block">
        <div className="skill-target-pill">
          <Target size={11} className="text-brand-300" />
          <span>{resource.skill}</span>
        </div>

        <div className="duration-diff-row mono">
          <span className={`diff-pill ${resource.difficulty.toLowerCase()}`}>
            {resource.difficulty}
          </span>
          <span className="duration-text">
            <Clock size={11} />
            <span>{resource.duration}</span>
          </span>
        </div>
      </div>

      {/* Bottom Match Score & Action Row */}
      <div className="card-footer-actions">
        <div className="match-score-badge mono font-bold">
          <Sparkles size={11} className="text-brand-300" />
          <span>{resource.matchScore}% MATCH</span>
        </div>

        <div className="card-buttons-group" onClick={(e) => e.stopPropagation()}>
          <button 
            type="button" 
            className={`add-path-btn ${isAddedToPath ? 'added' : ''}`}
            onClick={() => onAddToPath(resource)}
            title="Attach resource to roadmap milestone"
          >
            {isAddedToPath ? (
              <>
                <Check size={12} className="text-emerald" />
                <span>In Path</span>
              </>
            ) : (
              <>
                <Plus size={12} />
                <span>Add to Path</span>
              </>
            )}
          </button>

          <a 
            href={resource.url} 
            target="_blank" 
            rel="noreferrer"
            className="open-external-btn"
            title="Open original resource"
          >
            <span>Open</span>
            <ExternalLink size={11} />
          </a>
        </div>
      </div>

    </div>
  );
};

export default ResourceCard;
