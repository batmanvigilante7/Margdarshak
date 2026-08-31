import React from 'react';
import { Sparkles, GraduationCap, Video, FolderGit2, FlaskConical, Bookmark } from 'lucide-react';

export const ResourceTabs = ({ activeTab, onSelectTab, savedCount = 0 }) => {
  const tabs = [
    { id: 'for-you', label: 'For You', icon: <Sparkles size={13} className="text-purple" /> },
    { id: 'courses', label: 'Courses', icon: <GraduationCap size={13} /> },
    { id: 'videos', label: 'Videos', icon: <Video size={13} /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 size={13} /> },
    { id: 'practice', label: 'Practice', icon: <FlaskConical size={13} /> },
    { id: 'saved', label: `Saved (${savedCount})`, icon: <Bookmark size={13} /> }
  ];

  return (
    <div className="resource-tabs-pill-group">
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          className={`resource-tab-btn ${activeTab === t.id ? 'active' : ''}`}
          onClick={() => onSelectTab(t.id)}
        >
          {t.icon}
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ResourceTabs;
