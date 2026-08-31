import React, { useState, useEffect } from 'react';
import { AppShell } from '../layout/AppShell';
import { CareerCard } from '../careers/CareerCard';
import { CareerChangeModal } from '../careers/CareerChangeModal';
import { CareerDetailModal } from '../careers/CareerDetailModal';
import { 
  Search, 
  Filter, 
  Sparkles, 
  Award, 
  ArrowRight, 
  Check, 
  SlidersHorizontal,
  RefreshCw 
} from 'lucide-react';
import { useAppStore } from '../../context/AppContext';

const INDUSTRY_FILTERS = [
  'All Tracks',
  'Data & AI',
  'Software & Web',
  'Cloud & DevOps',
  'Cybersecurity',
  'Green Jobs & EV',
  'Design & UI/UX'
];

const CAREERS_DATABASE = [
  {
    id: 'ai-engineer',
    title: 'AI & Machine Learning Engineer',
    industry: 'Data & AI',
    nsqfLevel: 6,
    demand: 'High Demand',
    bridgeHours: 42,
    learnerAlignment: 78,
    description: 'Design, train, and deploy production machine learning architectures, neural models, and predictive pipelines.',
    skills: ['Python', 'Machine Learning', 'Statistics', 'Deep Learning', 'PyTorch', 'Model Deployment']
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist & Analytics Specialist',
    industry: 'Data & AI',
    nsqfLevel: 6,
    demand: 'High Demand',
    bridgeHours: 36,
    learnerAlignment: 74,
    description: 'Transform complex enterprise data into predictive insights, statistical models, and automated business intelligence.',
    skills: ['SQL', 'Statistics', 'Python', 'Data Visualization', 'Pandas & NumPy', 'Exploratory Analysis']
  },
  {
    id: 'fullstack-ai-dev',
    title: 'Full Stack AI Application Developer',
    industry: 'Software & Web',
    nsqfLevel: 6,
    demand: 'High Demand',
    bridgeHours: 28,
    learnerAlignment: 82,
    description: 'Build scalable modern web applications integrated with Large Language Models, agentic workflows, and cloud APIs.',
    skills: ['JavaScript / TypeScript', 'React', 'Python APIs', 'Node.js', 'LLM Integration', 'SQL & Vector DBs']
  },
  {
    id: 'genai-engineer',
    title: 'Generative AI & LLM Systems Architect',
    industry: 'Data & AI',
    nsqfLevel: 7,
    demand: 'Emerging Demand',
    bridgeHours: 54,
    learnerAlignment: 68,
    description: 'Fine-tune large language models, build Retrieval-Augmented Generation (RAG) pipelines, and create autonomous AI agents.',
    skills: ['Transformer Models', 'RAG Pipelines', 'Vector Databases', 'Prompt Engineering', 'LangChain', 'Fine-Tuning']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Solutions & DevOps Engineer',
    industry: 'Cloud & DevOps',
    nsqfLevel: 6,
    demand: 'High Demand',
    bridgeHours: 48,
    learnerAlignment: 63,
    description: 'Architect secure multi-cloud infrastructure, container orchestration, automated CI/CD pipelines, and serverless backends.',
    skills: ['Linux Systems', 'Docker Containers', 'Kubernetes', 'AWS Cloud', 'CI/CD Pipelines', 'Infrastructure as Code']
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity & Threat Defense Analyst',
    industry: 'Cybersecurity',
    nsqfLevel: 6,
    demand: 'Critical Demand',
    bridgeHours: 56,
    learnerAlignment: 59,
    description: 'Monitor infrastructure vulnerabilities, audit authentication posture, and implement zero-trust defensive security controls.',
    skills: ['Network Security', 'Vulnerability Assessment', 'Threat Modeling', 'Linux Auditing', 'SIEM & Log Analysis']
  },
  {
    id: 'ev-embedded-engineer',
    title: 'EV Embedded Systems & IoT Developer',
    industry: 'Green Jobs & EV',
    nsqfLevel: 6,
    demand: 'Growing Demand',
    bridgeHours: 72,
    learnerAlignment: 48,
    description: 'Program real-time embedded controllers, CAN bus protocols, and battery management firmware for clean mobility systems.',
    skills: ['Embedded C/C++', 'CAN Protocol', 'Microcontrollers', 'Battery Management Systems', 'IoT Telemetry']
  },
  {
    id: 'ai-uiux-designer',
    title: 'AI Product & Design Systems Specialist',
    industry: 'Design & UI/UX',
    nsqfLevel: 5,
    demand: 'Growing Demand',
    bridgeHours: 32,
    learnerAlignment: 65,
    description: 'Create human-centered user interfaces and generative interaction patterns for intelligent AI workflows.',
    skills: ['Figma & Prototyping', 'Design Systems', 'User Research', 'Prompt UX', 'Information Architecture']
  }
];

export const Careers = ({ onNavigate }) => {
  const { targetCareer: appTargetCareer, setTargetCareer: setAppTargetCareer } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Tracks');
  const [selectedNsqf, setSelectedNsqf] = useState('all');
  const targetCareer = appTargetCareer?.id || 'ai-engineer';

  // Modal states
  const [pendingCareerChange, setPendingCareerChange] = useState(null);
  const [activeDetailCareer, setActiveDetailCareer] = useState(null);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  const currentTargetObj = CAREERS_DATABASE.find((c) => c.id === targetCareer) || CAREERS_DATABASE[0];

  // Filtering logic
  const filteredCareers = CAREERS_DATABASE.filter((career) => {
    // Search matching
    const query = searchTerm.toLowerCase().trim();
    const matchesSearch = !query || 
      career.title.toLowerCase().includes(query) ||
      career.description.toLowerCase().includes(query) ||
      career.industry.toLowerCase().includes(query) ||
      career.skills.some((s) => s.toLowerCase().includes(query));

    // Industry matching
    const matchesIndustry = selectedIndustry === 'All Tracks' || career.industry === selectedIndustry;

    // NSQF Level matching
    const matchesNsqf = selectedNsqf === 'all' || career.nsqfLevel.toString() === selectedNsqf;

    return matchesSearch && matchesIndustry && matchesNsqf;
  });

  // High alignment recommendations (Top 2 matches)
  const recommendedCareers = [...CAREERS_DATABASE]
    .sort((a, b) => b.learnerAlignment - a.learnerAlignment)
    .slice(0, 3);

  const handleSelectCareer = (career) => {
    if (career.id === targetCareer) return;

    // Trigger confirmation modal if learner already has an active target
    setPendingCareerChange(career);
  };

  const handleConfirmCareerChange = (newCareer) => {
    setAppTargetCareer({
      id: newCareer.id,
      title: newCareer.title,
      nsqfLevel: `NSQF Level ${newCareer.nsqfLevel}`,
      trackType: `${newCareer.industry} Track`,
      description: newCareer.description,
      matchScore: newCareer.learnerAlignment
    });
    setPendingCareerChange(null);
  };

  return (
    <AppShell
      currentPath="/careers"
      onNavigate={onNavigate}
      pageTitle="CAREER TRACK EXPLORER"
      pageSubtitle="Find where your skills can take you"
    >
      <div className="careers-page-content animate-fadeIn">
        
        {/* 1. Explorer Header Banner */}
        <section className="careers-hero-banner glass-panel">
          <div className="careers-hero-copy">
            <div className="eyebrow">
              <Sparkles size={13} />
              <span>CAREER DESTINATIONS & COMPETENCIES</span>
            </div>
            <h2>Explore Career Tracks & Competency Benchmarks</h2>
            <p>
              Compare industry pathways, NSQF qualification standards, and estimated bridge efforts. Choose the target destination for your adaptive learning path.
            </p>
          </div>

          {/* Current Target Snapshot Card */}
          <div className="current-target-card">
            <span className="micro">CURRENT TARGET GOAL</span>
            <h3>{currentTargetObj.title}</h3>
            <div className="current-target-meta">
              <span className="nsqf-badge level-6">NSQF Level {currentTargetObj.nsqfLevel}</span>
              <span className="alignment-tag mono">{currentTargetObj.learnerAlignment}% Alignment</span>
            </div>
            <button 
              type="button" 
              className="primary-btn current-target-action"
              onClick={() => onNavigate('/assessment')}
            >
              <span>Verify Readiness with Assessment</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </section>

        {/* 2. Search & Filter Bar */}
        <section className="careers-search-section">
          
          <div className="search-bar-wrap">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search careers, skills, or industries (e.g. AI Engineer, Machine Learning, Cloud, Security)..."
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

          <div className="filter-controls-row">
            {/* Industry Pills */}
            <div className="industry-pills-scroll">
              {INDUSTRY_FILTERS.map((ind) => (
                <button
                  key={ind}
                  type="button"
                  className={`industry-pill-btn ${selectedIndustry === ind ? 'active' : ''}`}
                  onClick={() => setSelectedIndustry(ind)}
                >
                  {ind}
                </button>
              ))}
            </div>

            {/* NSQF Level Quick Filter */}
            <div className="nsqf-level-selector">
              <Award size={14} className="nsqf-sel-icon" />
              <select 
                value={selectedNsqf} 
                onChange={(e) => setSelectedNsqf(e.target.value)}
                aria-label="Filter by NSQF Level"
              >
                <option value="all">All NSQF Levels</option>
                <option value="5">NSQF Level 5 (Foundation)</option>
                <option value="6">NSQF Level 6 (Specialist)</option>
                <option value="7">NSQF Level 7 (Mastery)</option>
              </select>
            </div>
          </div>

        </section>

        {/* 3. Recommended For You Strip (Shown if no search active) */}
        {!searchTerm && selectedIndustry === 'All Tracks' && selectedNsqf === 'all' && (
          <section className="recommended-section">
            <div className="section-title-wrap">
              <div className="section-title-left">
                <Sparkles size={16} className="sparkle-gold" />
                <h3>Recommended for Your Profile</h3>
              </div>
              <span className="section-caption">Based on your background and baseline competencies</span>
            </div>

            <div className="recommended-grid">
              {recommendedCareers.map((rec) => (
                <div key={rec.id} className="recommended-card glass-panel">
                  <div className="rec-top">
                    <span className="career-industry-badge">{rec.industry}</span>
                    <span className="match-pill mono">{rec.learnerAlignment}% Match</span>
                  </div>
                  <h4>{rec.title}</h4>
                  <p>{rec.description}</p>
                  <div className="rec-footer">
                    <span className="mono nsqf-text">NSQF Level {rec.nsqfLevel}</span>
                    <button 
                      type="button" 
                      className="rec-action-btn"
                      onClick={() => setActiveDetailCareer(rec)}
                    >
                      Explore Track →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Main Careers Grid */}
        <section className="careers-grid-section">
          <div className="results-count-bar">
            <span>Showing {filteredCareers.length} career tracks</span>
            {(searchTerm || selectedIndustry !== 'All Tracks' || selectedNsqf !== 'all') && (
              <button 
                type="button" 
                className="reset-filters-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedIndustry('All Tracks');
                  setSelectedNsqf('all');
                }}
              >
                Reset all filters
              </button>
            )}
          </div>

          <div className="careers-grid">
            {filteredCareers.map((career) => (
              <CareerCard
                key={career.id}
                career={career}
                isCurrentTarget={career.id === targetCareer}
                onSelectTarget={handleSelectCareer}
                onViewDetails={setActiveDetailCareer}
              />
            ))}
          </div>

          {/* Empty Search State */}
          {filteredCareers.length === 0 && (
            <div className="no-careers-box glass-panel">
              <div className="no-results-icon">
                <Search size={28} />
              </div>
              <h3>No career tracks match your search</h3>
              <p>Try searching for a different skill, title, or resetting your industry filters.</p>
              <button 
                type="button" 
                className="primary-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedIndustry('All Tracks');
                  setSelectedNsqf('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

      </div>

      {/* Career Recalibration Confirmation Modal */}
      {pendingCareerChange && (
        <CareerChangeModal
          currentCareerTitle={currentTargetObj.title}
          newCareer={pendingCareerChange}
          onConfirm={handleConfirmCareerChange}
          onCancel={() => setPendingCareerChange(null)}
        />
      )}

      {/* Career Deep-Dive Detail Modal */}
      {activeDetailCareer && (
        <CareerDetailModal
          career={activeDetailCareer}
          isCurrentTarget={activeDetailCareer.id === targetCareer}
          onSelectTarget={handleSelectCareer}
          onClose={() => setActiveDetailCareer(null)}
        />
      )}

    </AppShell>
  );
};

export default Careers;
