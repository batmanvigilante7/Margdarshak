import React, { useState } from 'react';
import { X, CheckCircle2, User, GraduationCap, MapPin, AlignLeft } from 'lucide-react';

export const EditProfileDrawer = ({ profile, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: profile.name || '',
    degree: profile.degree || '',
    institution: profile.institution || '',
    semester: profile.semester || '',
    bio: profile.bio || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="edit-profile-drawer glass-panel animate-fadeIn" 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="drawer-header-strip">
          <div className="drawer-title-wrap">
            <User size={16} className="text-brand-300" />
            <h3>Edit Learner Profile</h3>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close drawer"
          >
            <X size={18} />
          </button>
        </div>

        <form className="edit-profile-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label className="micro">FULL NAME</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="profile-input-field"
              required
            />
          </div>

          <div className="form-group">
            <label className="micro">DEGREE / PROGRAM</label>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="profile-input-field"
              required
            />
          </div>

          <div className="form-group">
            <label className="micro">INSTITUTION / UNIVERSITY</label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              className="profile-input-field"
              required
            />
          </div>

          <div className="form-group">
            <label className="micro">CURRENT SEMESTER / YEAR</label>
            <input
              type="text"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="profile-input-field"
              required
            />
          </div>

          <div className="form-group">
            <label className="micro">LEARNER BIO & OBJECTIVE</label>
            <textarea
              name="bio"
              rows={3}
              value={formData.bio}
              onChange={handleChange}
              className="profile-input-field textarea"
            />
          </div>

          <div className="drawer-footer-actions">
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
            >
              <CheckCircle2 size={14} />
              <span>Save Changes</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default EditProfileDrawer;
