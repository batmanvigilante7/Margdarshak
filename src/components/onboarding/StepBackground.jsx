import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Layers, 
  Briefcase, 
  Check 
} from 'lucide-react';

const EDUCATION_LEVELS = [
  { id: 'school', title: 'School', subtitle: 'Class 10 / 12' },
  { id: 'diploma', title: 'Diploma', subtitle: 'Polytechnic / Vocational' },
  { id: 'undergraduate', title: 'Undergraduate', subtitle: 'B.Tech, BCA, B.Sc, B.Com' },
  { id: 'postgraduate', title: 'Postgraduate', subtitle: "Master's Degree / Above" },
  { id: 'other', title: 'Self-Taught / Other', subtitle: 'Non-traditional pathway' }
];

const FIELDS = [
  'Computer Science',
  'Engineering & Tech',
  'Data & Mathematics',
  'Business & Finance',
  'Design & UI/UX',
  'Physical Sciences',
  'Healthcare',
  'Skilled Trades & ITI',
  'Other'
];

const EXPERIENCES = [
  { id: 'just-starting', label: 'Just starting', desc: 'New to technology and professional coding' },
  { id: 'some-coursework', label: 'Some coursework', desc: 'College academics or introductory tutorials' },
  { id: 'project-experience', label: 'Project experience', desc: 'Built small applications, scripts, or coursework projects' },
  { id: 'internship', label: 'Internship / Junior', desc: 'Industry internship or 1–2 years practical experience' },
  { id: 'working-pro', label: 'Working professional', desc: 'Active industry engineer or career transitioner' }
];

export const StepBackground = ({ data, onChange }) => {
  return (
    <div className="onboarding-step-content animate-fadeIn">
      
      <div className="step-intro">
        <span className="micro">STEP 01 OF 03</span>
        <h2>Where are you starting from?</h2>
        <p>Tell us about your current education and experience. We'll use this to calibrate your baseline learning path.</p>
      </div>

      {/* 1. Education Level */}
      <div className="onboarding-section">
        <label className="onboarding-label">
          <GraduationCap size={16} />
          <span>What's your current education level?</span>
        </label>
        <div className="education-grid">
          {EDUCATION_LEVELS.map((edu) => {
            const isSelected = data.educationLevel === edu.id;
            return (
              <button
                key={edu.id}
                type="button"
                className={`selection-card ${isSelected ? 'selected' : ''}`}
                onClick={() => onChange({ educationLevel: edu.id })}
              >
                <div className="selection-card-header">
                  <strong>{edu.title}</strong>
                  {isSelected && <span className="selection-badge"><Check size={12} strokeWidth={3} /></span>}
                </div>
                <span>{edu.subtitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Current Field */}
      <div className="onboarding-section">
        <label className="onboarding-label">
          <BookOpen size={16} />
          <span>What is your primary academic or professional field?</span>
        </label>
        <div className="pills-grid">
          {FIELDS.map((f) => {
            const isSelected = data.field === f;
            return (
              <button
                key={f}
                type="button"
                className={`pill-option ${isSelected ? 'selected' : ''}`}
                onClick={() => onChange({ field: f })}
              >
                {isSelected && <Check size={13} className="pill-check" />}
                <span>{f}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Experience Level */}
      <div className="onboarding-section">
        <label className="onboarding-label">
          <Briefcase size={16} />
          <span>How would you describe your current practical experience?</span>
        </label>
        <div className="experience-list">
          {EXPERIENCES.map((exp) => {
            const isSelected = data.experience === exp.id;
            return (
              <button
                key={exp.id}
                type="button"
                className={`experience-row ${isSelected ? 'selected' : ''}`}
                onClick={() => onChange({ experience: exp.id })}
              >
                <div className="radio-dot">
                  <div className="radio-dot-inner" />
                </div>
                <div className="experience-copy">
                  <strong>{exp.label}</strong>
                  <span>{exp.desc}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default StepBackground;
