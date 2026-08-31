import React from 'react';
import { BookOpen, Bell, Moon, Eye, Database } from 'lucide-react';

export const SettingsNavigation = ({ activeSection, onSelectSection }) => {
  const sections = [
    { id: 'learning', label: 'Learning Preferences', icon: <BookOpen size={14} /> },
    { id: 'notifications', label: 'Notifications & Cadence', icon: <Bell size={14} /> },
    { id: 'appearance', label: 'Appearance & Theme', icon: <Moon size={14} /> },
    { id: 'accessibility', label: 'Accessibility', icon: <Eye size={14} /> },
    { id: 'data', label: 'Data & Privacy', icon: <Database size={14} /> }
  ];

  return (
    <div className="settings-nav-sidebar glass-panel">
      <span className="micro nav-label">CONFIGURATION INDEX</span>
      <div className="settings-nav-list">
        {sections.map((sec) => (
          <button
            key={sec.id}
            type="button"
            className={`settings-nav-item ${activeSection === sec.id ? 'active' : ''}`}
            onClick={() => onSelectSection(sec.id)}
          >
            {sec.icon}
            <span>{sec.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SettingsNavigation;
