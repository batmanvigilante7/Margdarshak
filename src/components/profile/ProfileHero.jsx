import React from 'react';
import { Target, Edit3, Award, GraduationCap, MapPin, Sparkles, Route } from 'lucide-react';

export const ProfileHero = ({ 
  profile, 
  targetCareer = 'AI Engineer',
  nsqfLevel = 'NSQF Level 6',
  onEditClick, 
  onNavigate 
}) => {
  return (
    <div className="profile-hero-card glass-panel animate-fadeIn">
      
      <div className="profile-hero-left">
        {/* Avatar with Completeness Ring */}
        <div className="avatar-wrapper">
          <svg className="avatar-ring-svg" viewBox="0 0 100 100">
            <circle
              className="avatar-ring-bg"
              cx="50"
              cy="50"
              r="44"
              strokeWidth="5"
            />
            <circle
              className="avatar-ring-fill"
              cx="50"
              cy="50"
              r="44"
              strokeWidth="5"
              strokeDasharray={2 * Math.PI * 44}
              strokeDashoffset={2 * Math.PI * 44 * (1 - 0.82)}
            />
          </svg>

          <div className="profile-avatar-circle">
            <span className="avatar-initials mono font-bold">HS</span>
          </div>

          <span className="avatar-completion-badge mono font-bold">82%</span>
        </div>

        {/* Identity & Background Block */}
        <div className="profile-identity-block">
          <div className="name-row">
            <h2>{profile.name}</h2>
            <button 
              type="button" 
              className="edit-profile-btn"
              onClick={onEditClick}
              title="Edit personal details"
            >
              <Edit3 size={13} />
              <span>Edit Profile</span>
            </button>
          </div>

          <div className="education-meta-strip">
            <div className="edu-item">
              <GraduationCap size={13} className="text-brand-300" />
              <span>{profile.degree} • {profile.semester}</span>
            </div>
            <div className="edu-item">
              <MapPin size={13} className="text-tertiary" />
              <span>{profile.institution}</span>
            </div>
          </div>

          <p className="profile-bio-text">{profile.bio}</p>
        </div>
      </div>

      {/* Hero Right: Career Destination Card */}
      <div className="profile-destination-card glass-panel">
        <div className="dest-eyebrow">
          <Target size={13} className="text-brand-300" />
          <span className="micro">CAREER DESTINATION</span>
        </div>

        <h3>{targetCareer}</h3>

        <div className="dest-meta-strip">
          <span className="nsqf-badge level-6">◇ {nsqfLevel}</span>
          <span className="competency-type-tag">Core Competency Track</span>
        </div>

        <div className="dest-actions-row">
          <button 
            type="button" 
            className="primary-btn dest-track-btn"
            onClick={() => onNavigate('/careers')}
          >
            <span>Change Target</span>
            <Route size={13} />
          </button>

          <button 
            type="button" 
            className="secondary-btn"
            onClick={() => onNavigate('/path')}
          >
            <span>View Path</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProfileHero;
