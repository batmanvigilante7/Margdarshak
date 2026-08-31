import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  Check, 
  TrendingUp, 
  Award, 
  Compass 
} from 'lucide-react';

const CAREERS_CATALOG = [
  {
    id: 'ai-engineer',
    title: 'AI & Machine Learning Engineer',
    subtitle: 'Design, train, and deploy intelligent models and neural architectures.',
    nsqfLevel: 'NSQF Level 6',
    demand: 'High Industry Demand',
    matchScore: 92,
    domain: 'Artificial Intelligence'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist & Analytics Specialist',
    subtitle: 'Extract actionable intelligence from large-scale data and predictive pipelines.',
    nsqfLevel: 'NSQF Level 6',
    demand: 'Strong Demand',
    matchScore: 84,
    domain: 'Data Science'
  },
  {
    id: 'fullstack-ai-dev',
    title: 'Full Stack AI Application Developer',
    subtitle: 'Build scalable web applications integrated with modern LLMs and APIs.',
    nsqfLevel: 'NSQF Level 6',
    demand: 'Very High Demand',
    matchScore: 89,
    domain: 'Software Engineering'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Solutions & DevOps Engineer',
    subtitle: 'Architect cloud infrastructure, container orchestration, and CI/CD pipelines.',
    nsqfLevel: 'NSQF Level 6',
    demand: 'High Industry Demand',
    matchScore: 78,
    domain: 'Cloud & Infrastructure'
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity & Threat Analyst',
    subtitle: 'Protect systems, assess vulnerabilities, and respond to security incidents.',
    nsqfLevel: 'NSQF Level 5/6',
    demand: 'Critical Demand',
    matchScore: 72,
    domain: 'Information Security'
  },
  {
    id: 'genai-engineer',
    title: 'Generative AI & LLM Systems Engineer',
    subtitle: 'Fine-tune large language models, RAG pipelines, and agentic workflows.',
    nsqfLevel: 'NSQF Level 7',
    demand: 'Emerging High Growth',
    matchScore: 88,
    domain: 'Artificial Intelligence'
  }
];

export const StepCareer = ({ data, onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCareers = CAREERS_CATALOG.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedCareerObj = CAREERS_CATALOG.find((c) => c.id === data.targetCareerId) || null;

  return (
    <div className="onboarding-step-content animate-fadeIn">
      
      <div className="step-intro">
        <span className="micro">STEP 02 OF 03</span>
        <h2>Where do you want to go?</h2>
        <p>Choose the career goal you're working toward. Margdarshak will benchmark your current skills against industry competencies.</p>
      </div>

      {/* Selected Target Career Banner */}
      {selectedCareerObj && (
        <div className="selected-target-banner">
          <div className="target-banner-badge">
            <Check size={14} strokeWidth={3} />
            <span>SELECTED TARGET GOAL</span>
          </div>
          <div className="target-banner-content">
            <div>
              <h3>{selectedCareerObj.title}</h3>
              <p>{selectedCareerObj.subtitle}</p>
            </div>
            <div className="target-banner-meta">
              <span className="nsqf-pill">{selectedCareerObj.nsqfLevel}</span>
              <span className="match-pill">{selectedCareerObj.matchScore}% Match</span>
            </div>
          </div>
        </div>
      )}

      {/* Career Search Bar */}
      <div className="career-search-box">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search career goals (e.g. AI Engineer, Data Scientist, Cloud)..."
          autoFocus={false}
        />
        {searchTerm && (
          <button 
            type="button" 
            className="clear-search-btn" 
            onClick={() => setSearchTerm('')}
          >
            Clear
          </button>
        )}
      </div>

      {/* Recommended Career Cards Grid */}
      <div className="careers-recommendation-grid">
        {filteredCareers.map((career) => {
          const isSelected = data.targetCareerId === career.id;

          return (
            <button
              key={career.id}
              type="button"
              className={`career-card-selectable ${isSelected ? 'selected' : ''}`}
              onClick={() => onChange({ 
                targetCareerId: career.id, 
                targetCareerTitle: career.title,
                targetCareerNsqf: career.nsqfLevel
              })}
            >
              <div className="career-card-top">
                <span className="career-domain">{career.domain}</span>
                <span className="career-match-badge">{career.matchScore}% Profile Match</span>
              </div>

              <div className="career-card-body">
                <h4>{career.title}</h4>
                <p>{career.subtitle}</p>
              </div>

              <div className="career-card-footer">
                <span className="career-nsqf-tag">
                  <Award size={13} />
                  <span>{career.nsqfLevel}</span>
                </span>
                <span className="career-demand-tag">
                  <TrendingUp size={13} />
                  <span>{career.demand}</span>
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {filteredCareers.length === 0 && (
        <div className="no-careers-found">
          <p>No careers found matching "{searchTerm}".</p>
          <button type="button" className="text-btn" onClick={() => setSearchTerm('')}>
            Reset search filter
          </button>
        </div>
      )}

    </div>
  );
};

export default StepCareer;
