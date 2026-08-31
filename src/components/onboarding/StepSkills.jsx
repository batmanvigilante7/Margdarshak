import React from 'react';
import { Check, Plus, Code, Database, Brain, Cloud, UserCheck } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    name: 'Programming & Logic',
    icon: Code,
    skills: [
      { id: 'python', name: 'Python' },
      { id: 'sql', name: 'SQL' },
      { id: 'javascript', name: 'JavaScript / TypeScript' },
      { id: 'java', name: 'Java' },
      { id: 'cpp', name: 'C++' }
    ]
  },
  {
    name: 'Data & Mathematics',
    icon: Database,
    skills: [
      { id: 'statistics', name: 'Statistics & Probability' },
      { id: 'linear-algebra', name: 'Linear Algebra' },
      { id: 'data-analysis', name: 'Data Analysis & Pandas' },
      { id: 'data-viz', name: 'Data Visualization' }
    ]
  },
  {
    name: 'AI & Machine Learning',
    icon: Brain,
    skills: [
      { id: 'ml-basics', name: 'Machine Learning Fundamentals' },
      { id: 'deep-learning', name: 'Deep Learning & PyTorch' },
      { id: 'nlp', name: 'NLP & Transformers' },
      { id: 'computer-vision', name: 'Computer Vision' },
      { id: 'prompt-eng', name: 'Prompt Engineering & LLMs' }
    ]
  },
  {
    name: 'Cloud & Systems',
    icon: Cloud,
    skills: [
      { id: 'git', name: 'Git & Version Control' },
      { id: 'docker', name: 'Docker & Containers' },
      { id: 'aws', name: 'AWS Cloud Basics' },
      { id: 'linux', name: 'Linux Command Line' }
    ]
  },
  {
    name: 'Professional Competency',
    icon: UserCheck,
    skills: [
      { id: 'problem-solving', name: 'Structured Problem Solving' },
      { id: 'communication', name: 'Technical Documentation' }
    ]
  }
];

const CONFIDENCE_LEVELS = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'familiar', label: 'Familiar' },
  { id: 'comfortable', label: 'Comfortable' },
  { id: 'advanced', label: 'Advanced' }
];

export const StepSkills = ({ data, onChange }) => {
  const selectedSkills = data.skills || [];

  const toggleSkill = (skill) => {
    const existingIndex = selectedSkills.findIndex((s) => s.id === skill.id);
    if (existingIndex > -1) {
      // Remove skill
      const updated = selectedSkills.filter((s) => s.id !== skill.id);
      onChange({ skills: updated });
    } else {
      // Add skill with default confidence 'familiar'
      const updated = [
        ...selectedSkills,
        { id: skill.id, name: skill.name, confidence: 'familiar' }
      ];
      onChange({ skills: updated });
    }
  };

  const updateConfidence = (skillId, confidence) => {
    const updated = selectedSkills.map((s) =>
      s.id === skillId ? { ...s, confidence } : s
    );
    onChange({ skills: updated });
  };

  return (
    <div className="onboarding-step-content animate-fadeIn">
      
      <div className="step-intro">
        <span className="micro">STEP 03 OF 03</span>
        <h2>What can you already do?</h2>
        <p>Select the skills and tools you are familiar with. Margdarshak will verify your starting competency in the diagnostic step.</p>
      </div>

      {/* Selected Summary Pill */}
      <div className="skill-selection-counter">
        <span>{selectedSkills.length} skills selected for initial baseline</span>
        {selectedSkills.length === 0 && (
          <span className="warning-hint">Select at least 1 skill to continue</span>
        )}
      </div>

      {/* Skill Categories */}
      <div className="skill-categories-stack">
        {SKILL_CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.name} className="skill-category-group">
              <div className="category-heading">
                <Icon size={15} />
                <span>{category.name}</span>
              </div>

              <div className="skills-pill-cloud">
                {category.skills.map((skill) => {
                  const isSelected = selectedSkills.some((s) => s.id === skill.id);
                  const selectedSkillData = selectedSkills.find((s) => s.id === skill.id);

                  return (
                    <div key={skill.id} className="skill-pill-container">
                      <button
                        type="button"
                        className={`skill-tag-pill ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleSkill(skill)}
                      >
                        {isSelected ? (
                          <Check size={13} className="pill-check-icon" />
                        ) : (
                          <Plus size={13} className="pill-plus-icon" />
                        )}
                        <span>{skill.name}</span>
                      </button>

                      {/* Lightweight Confidence Slider when Selected */}
                      {isSelected && (
                        <div className="confidence-selector">
                          {CONFIDENCE_LEVELS.map((conf) => {
                            const isConfActive = (selectedSkillData?.confidence || 'familiar') === conf.id;
                            return (
                              <button
                                key={conf.id}
                                type="button"
                                className={`conf-btn ${isConfActive ? 'active' : ''}`}
                                onClick={() => updateConfidence(skill.id, conf.id)}
                              >
                                {conf.label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default StepSkills;
