import React, { useState } from 'react';
import { X, Plus, CheckCircle2 } from 'lucide-react';

export const AddSkillModal = ({ onAddSkill, onClose }) => {
  const [skillName, setSkillName] = useState('');
  const [proficiency, setProficiency] = useState('Intermediate');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skillName.trim()) {
      onAddSkill({
        name: skillName.trim(),
        verified: false,
        level: proficiency
      });
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="add-skill-modal glass-panel animate-fadeIn" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-strip">
          <div className="modal-title-wrap">
            <Plus size={16} className="text-brand-300" />
            <h3>Add Self-Reported Skill</h3>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <p className="modal-subtext">
          Self-reported skills will be marked as unverified until demonstrated in an assessment or project deliverable.
        </p>

        <form onSubmit={handleSubmit} className="add-skill-form">
          <div className="form-group">
            <label className="micro">SKILL OR TECHNOLOGY NAME</label>
            <input
              type="text"
              placeholder="e.g. Docker, TypeScript, PyTorch"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              className="profile-input-field"
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label className="micro">SELF-ASSESSED PROFICIENCY</label>
            <select
              value={proficiency}
              onChange={(e) => setProficiency(e.target.value)}
              className="profile-input-field select"
            >
              <option value="Beginner">Beginner (Foundational)</option>
              <option value="Intermediate">Intermediate (Working Knowledge)</option>
              <option value="Proficient">Proficient (Independent Practitioner)</option>
              <option value="Advanced">Advanced (Domain Specialist)</option>
            </select>
          </div>

          <div className="modal-actions-row">
            <button 
              type="button" 
              className="secondary-btn" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="primary-btn"
              disabled={!skillName.trim()}
            >
              <CheckCircle2 size={14} />
              <span>Add to Profile</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSkillModal;
