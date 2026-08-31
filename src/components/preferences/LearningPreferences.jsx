import React from 'react';
import { 
  Clock, 
  Video, 
  BookOpen, 
  FlaskConical, 
  FolderGit2, 
  Compass, 
  Languages, 
  ArrowRight, 
  Sparkles,
  Check
} from 'lucide-react';

export const LearningPreferences = ({ 
  preferences, 
  onChange, 
  onNavigate 
}) => {
  const presets = [2, 5, 7, 10, 15, 20];

  const formatOptions = [
    { id: 'video', label: 'Video Lessons', icon: <Video size={13} /> },
    { id: 'reading', label: 'Technical Reading', icon: <BookOpen size={13} /> },
    { id: 'practice', label: 'Practice Labs & Quizzes', icon: <FlaskConical size={13} /> },
    { id: 'projects', label: 'Portfolio Projects', icon: <FolderGit2 size={13} /> }
  ];

  const styleOptions = [
    { 
      id: 'guided', 
      title: 'Guided Path', 
      desc: 'Structured step-by-step instruction with frequent checkpoint reviews.' 
    },
    { 
      id: 'balanced', 
      title: 'Balanced Approach (Recommended)', 
      desc: 'Harmonious blend of core theory, interactive labs, and applied project work.' 
    },
    { 
      id: 'hands-on', 
      title: 'Hands-on Builder', 
      desc: 'Accelerated progression focused directly on building code artifacts and deliverables.' 
    }
  ];

  const handleHoursChange = (val) => {
    onChange('weeklyHours', Number(val));
  };

  const handleToggleFormat = (formatId) => {
    const current = preferences.preferredFormats || ['video', 'practice'];
    const next = current.includes(formatId)
      ? current.filter(x => x !== formatId)
      : [...current, formatId];
    onChange('preferredFormats', next);
  };

  return (
    <div id="learning" className="preferences-section-card glass-panel">
      
      <div className="section-title-line">
        <div className="title-left">
          <Compass size={16} className="text-brand-300" />
          <h3>Learning Preferences & Cadence</h3>
        </div>
        <span className="micro text-brand-300">CORE ADAPTIVE SIGNALS</span>
      </div>

      {/* 1. Weekly Learning Time Slider */}
      <div className="pref-setting-block">
        <div className="setting-header-row">
          <div className="setting-label-col">
            <strong>Weekly Study Availability</strong>
            <p>How many hours can you realistically commit each week to coursework and project work?</p>
          </div>
          <div className="hours-display-badge mono font-bold">
            <Clock size={13} className="text-brand-300" />
            <span>{preferences.weeklyHours || 7} hours / week</span>
          </div>
        </div>

        <div className="slider-track-wrap">
          <input
            type="range"
            min="2"
            max="20"
            step="1"
            value={preferences.weeklyHours || 7}
            onChange={(e) => handleHoursChange(e.target.value)}
            className="hours-range-slider"
          />
          <div className="slider-presets-row">
            {presets.map((h) => (
              <button
                key={h}
                type="button"
                className={`preset-btn mono ${preferences.weeklyHours === h ? 'active' : ''}`}
                onClick={() => handleHoursChange(h)}
              >
                {h}h
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Pacing Impact Feedback */}
        <div className="pacing-feedback-alert">
          <Sparkles size={14} className="text-purple" />
          <div className="alert-text">
            <span>At <strong>{preferences.weeklyHours || 7} hours/week</strong>, your NSQF Level 6 career roadmap takes approximately <strong>{Math.ceil(42 / (preferences.weeklyHours || 7))} weeks</strong> to complete.</span>
            <button 
              type="button" 
              className="planner-link-btn"
              onClick={() => onNavigate('/planner')}
            >
              <span>View Updated Planner</span>
              <ArrowRight size={11} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Preferred Format Multi-Select */}
      <div className="pref-setting-block">
        <div className="setting-label-col">
          <strong>Preferred Learning Format</strong>
          <p>Select the material types you learn best with. Resource recommendations will align accordingly.</p>
        </div>

        <div className="format-chips-grid">
          {formatOptions.map((fmt) => {
            const isSelected = (preferences.preferredFormats || ['video', 'practice']).includes(fmt.id);
            return (
              <button
                key={fmt.id}
                type="button"
                className={`format-select-chip ${isSelected ? 'selected' : ''}`}
                onClick={() => handleToggleFormat(fmt.id)}
              >
                <div className="chip-left">
                  {fmt.icon}
                  <span>{fmt.label}</span>
                </div>
                {isSelected && <Check size={13} className="text-emerald" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Learning Style */}
      <div className="pref-setting-block">
        <div className="setting-label-col">
          <strong>Learning Approach</strong>
          <p>Choose your preferred pedagogical balance for AI Copilot explanations and roadmap tasks.</p>
        </div>

        <div className="style-options-stack">
          {styleOptions.map((opt) => {
            const isSelected = (preferences.learningStyle || 'balanced') === opt.id;
            return (
              <div
                key={opt.id}
                className={`style-option-card ${isSelected ? 'selected' : ''}`}
                onClick={() => onChange('learningStyle', opt.id)}
              >
                <div className="radio-circle">
                  {isSelected && <span className="radio-dot" />}
                </div>
                <div className="style-copy">
                  <strong>{opt.title}</strong>
                  <p>{opt.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Language Selection */}
      <div className="pref-setting-block">
        <div className="setting-header-row">
          <div className="setting-label-col">
            <strong>Interface & Material Language</strong>
            <p>Preferred language for navigation, subtitles, and AI Copilot responses.</p>
          </div>

          <div className="lang-select-box">
            <Languages size={14} className="text-brand-300" />
            <select
              value={preferences.language || 'en'}
              onChange={(e) => onChange('language', e.target.value)}
              className="lang-select-dropdown"
            >
              <option value="en">English (Default)</option>
              <option value="hi">हिन्दी (Hindi)</option>
              <option value="te">తెలుగు (Telugu)</option>
            </select>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LearningPreferences;
