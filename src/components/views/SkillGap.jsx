import React, { useState } from 'react';
import { AppShell } from '../layout/AppShell';
import { SkillGapHeader } from '../skillgap/SkillGapHeader';
import { SkillGapSummary } from '../skillgap/SkillGapSummary';
import { WhatToFixFirstBanner } from '../skillgap/WhatToFixFirstBanner';
import { CompetencyMatrixRow } from '../skillgap/CompetencyMatrixRow';
import { SkillGapTable } from '../skillgap/SkillGapTable';
import { LearningOptionsDrawer } from '../skillgap/LearningOptionsDrawer';
import { AiGapRationale } from '../skillgap/AiGapRationale';
import { Layers, LayoutGrid, Table, ArrowRight, Sparkles, Route } from 'lucide-react';

const COMPETENCY_BENCHMARKS = [
  {
    id: 'ml-fundamentals',
    name: 'Machine Learning Fundamentals',
    category: 'Core Competency',
    nsqfLevel: 6,
    currentScore: 38,
    benchmarkScore: 85,
    status: 'critical',
    statusLabel: 'Critical Gap',
    bridgeHours: 18,
    relevance: 'HIGH',
    priorityRank: 1,
    description: 'Supervised & unsupervised learning, cost functions, gradient descent, model validation, and bias-variance tradeoff.',
    whyMatters: 'Machine Learning is a core competency for your target AI Engineer role. Your assessment indicates a foundational gap, so advanced ML projects are likely to be inefficient right now.',
    priorityReasons: [
      'High career relevance for AI Engineer role.',
      'Large proficiency gap (47 points delta).',
      'Prerequisite for 3 later roadmap milestones.'
    ]
  },
  {
    id: 'deep-learning',
    name: 'Deep Learning & Neural Architectures',
    category: 'Specialist Benchmark',
    nsqfLevel: 6,
    currentScore: 25,
    benchmarkScore: 75,
    status: 'critical',
    statusLabel: 'Critical Gap',
    bridgeHours: 24,
    relevance: 'HIGH',
    priorityRank: 2,
    description: 'Multi-layer perceptrons, backpropagation, CNNs for computer vision, RNNs, and PyTorch tensor operations.',
    whyMatters: 'Neural networks are critical for modern computer vision and generative AI. Requires foundational ML math before practical PyTorch implementation.',
    priorityReasons: [
      'Required for Level 6 NSQF Specialist certification.',
      'Large 50-point gap identified during diagnostic verification.',
      'Scheduled directly following Machine Learning Fundamentals completion.'
    ]
  },
  {
    id: 'stats-probability',
    name: 'Statistics & Applied Probability',
    category: 'Foundation',
    nsqfLevel: 5,
    currentScore: 54,
    benchmarkScore: 80,
    status: 'moderate',
    statusLabel: 'Moderate Gap',
    bridgeHours: 12,
    relevance: 'HIGH',
    priorityRank: 3,
    description: 'Probability distributions, Central Limit Theorem, hypothesis testing, Bayes theorem, and statistical evaluation metrics.',
    whyMatters: 'Statistical metrics (Precision, Recall, ROC-AUC) prevent misleading evaluation on imbalanced production datasets.',
    priorityReasons: [
      'Moderate 26-point gap with fast bridging velocity (~12 hours).',
      'Directly reinforces model validation and hypothesis testing in ML modules.',
      'Provides probabilistic intuition for Bayesian inference.'
    ]
  },
  {
    id: 'data-modeling-sql',
    name: 'Data Modeling & SQL Analytics',
    category: 'Core Competency',
    nsqfLevel: 5,
    currentScore: 72,
    benchmarkScore: 80,
    status: 'moderate',
    statusLabel: 'Moderate Gap',
    bridgeHours: 8,
    relevance: 'MEDIUM',
    priorityRank: 4,
    description: 'Relational data modeling, window functions, complex aggregations, indexing strategies, and ETL preprocessing.',
    whyMatters: 'AI models rely on clean, aggregated training datasets extracted efficiently from production data stores.',
    priorityReasons: [
      'Small 8-point gap requiring minor query optimization review.',
      'Essential for feature engineering pipelines in production.',
      'Quick win to reach full benchmark competency.'
    ]
  },
  {
    id: 'python-foundations',
    name: 'Python Foundations & Data Structures',
    category: 'Foundation',
    nsqfLevel: 5,
    currentScore: 87,
    benchmarkScore: 90,
    status: 'ontrack',
    statusLabel: 'On Track',
    bridgeHours: 4,
    relevance: 'HIGH',
    priorityRank: 5,
    description: 'OOP patterns, memory management, generators, decorators, NumPy vectorized operations, and idiomatic Python.',
    whyMatters: 'Your verified syntax fluency and generator understanding means you can bypass remedial coding and build models immediately.',
    priorityReasons: [
      'Verified strong baseline (87% vs 90% benchmark).',
      'No blocking prerequisites—ready for applied development.',
      'Leverage as your primary accelerator across the roadmap.'
    ]
  },
  {
    id: 'problem-solving',
    name: 'Structured Algorithmic Problem Solving',
    category: 'Engineering Competency',
    nsqfLevel: 6,
    currentScore: 85,
    benchmarkScore: 85,
    status: 'ontrack',
    statusLabel: 'On Track',
    bridgeHours: 0,
    relevance: 'MEDIUM',
    priorityRank: 6,
    description: 'Time/space complexity analysis, hash tables, divide-and-conquer paradigms, and algorithmic optimization.',
    whyMatters: 'Your computational complexity and data structure knowledge is fully on target for junior-to-mid engineering standards.',
    priorityReasons: [
      'Benchmark fully satisfied (85% / 85%).',
      'Demonstrates strong analytical reasoning capability.',
      'No dedicated remedial bridge required.'
    ]
  },
  {
    id: 'ai-deployment',
    name: 'AI Systems & Model Deployment',
    category: 'Specialist Benchmark',
    nsqfLevel: 6,
    currentScore: 68,
    benchmarkScore: 70,
    status: 'ontrack',
    statusLabel: 'On Track',
    bridgeHours: 4,
    relevance: 'MEDIUM',
    priorityRank: 7,
    description: 'FastAPI microservices, model serialization, Docker containerization, REST inference endpoints, and telemetry monitoring.',
    whyMatters: 'Understanding how models sit behind APIs ensures your machine learning projects can be deployed to production.',
    priorityReasons: [
      'Close to benchmark (68% vs 70%).',
      'Capstone project milestone at the end of the learning path.',
      'Minor bridge effort (~4 hours) scheduled after model training competencies.'
    ]
  }
];

export const SkillGap = ({ onNavigate }) => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'table'
  const [selectedDrawerCompetency, setSelectedDrawerCompetency] = useState(null);

  const [targetCareer, setTargetCareer] = useState(() => {
    try {
      const profile = localStorage.getItem('margdarshak-learner-profile');
      if (profile) {
        const parsed = JSON.parse(profile);
        return {
          title: parsed.targetCareerTitle || 'AI Engineer',
          nsqfLevel: parsed.targetCareerNsqf || 'NSQF Level 6'
        };
      }
      return {
        title: 'AI Engineer',
        nsqfLevel: 'NSQF Level 6'
      };
    } catch {
      return {
        title: 'AI Engineer',
        nsqfLevel: 'NSQF Level 6'
      };
    }
  });

  // Default sorting: Critical -> Moderate -> On Track
  const sortedCompetencies = [...COMPETENCY_BENCHMARKS].sort((a, b) => a.priorityRank - b.priorityRank);

  const filteredCompetencies = sortedCompetencies.filter((comp) => {
    if (filterStatus === 'all') return true;
    return comp.status === filterStatus;
  });

  const criticalCount = COMPETENCY_BENCHMARKS.filter((c) => c.status === 'critical').length;
  const moderateCount = COMPETENCY_BENCHMARKS.filter((c) => c.status === 'moderate').length;
  const onTrackCount = COMPETENCY_BENCHMARKS.filter((c) => c.status === 'ontrack').length;

  return (
    <AppShell
      currentPath="/skill-gap"
      onNavigate={onNavigate}
      pageTitle="SKILL GAP ANALYSIS"
      pageSubtitle="Competency benchmark matrix"
    >
      <div className="skillgap-page-layout animate-fadeIn">
        
        {/* 1. Header Hero Banner */}
        <SkillGapHeader
          targetCareer={targetCareer.title}
          nsqfLevel={targetCareer.nsqfLevel}
          onNavigate={onNavigate}
        />

        {/* 2. Top Summary Hero */}
        <SkillGapSummary
          readiness={64}
          targetCareer={targetCareer.title}
          nsqfLevel={targetCareer.nsqfLevel}
          totalBridgeHours={54}
          onTrackCount={onTrackCount}
          moderateCount={moderateCount}
          criticalCount={criticalCount}
        />

        {/* 3. "What Should I Fix First?" Recommendation Banner */}
        <WhatToFixFirstBanner onNavigate={onNavigate} />

        {/* 4. Competency Matrix & Gap Cards Section */}
        <section className="competency-matrix-section">
          
          <div className="matrix-filter-header">
            <div className="matrix-title-group">
              <Layers size={16} className="text-brand-400" />
              <h3>Competency Benchmark Matrix</h3>
            </div>

            <div className="matrix-controls-right">
              {/* Filter Tabs */}
              <div className="matrix-filter-tabs">
                <button
                  type="button"
                  className={`matrix-tab-btn ${filterStatus === 'all' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('all')}
                >
                  All {COMPETENCY_BENCHMARKS.length}
                </button>
                <button
                  type="button"
                  className={`matrix-tab-btn rose ${filterStatus === 'critical' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('critical')}
                >
                  Critical {criticalCount}
                </button>
                <button
                  type="button"
                  className={`matrix-tab-btn amber ${filterStatus === 'moderate' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('moderate')}
                >
                  Moderate {moderateCount}
                </button>
                <button
                  type="button"
                  className={`matrix-tab-btn emerald ${filterStatus === 'ontrack' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('ontrack')}
                >
                  On Track {onTrackCount}
                </button>
              </div>

              {/* View Switcher: Cards vs Table */}
              <div className="view-mode-toggle">
                <button
                  type="button"
                  className={`view-mode-btn ${viewMode === 'cards' ? 'active' : ''}`}
                  onClick={() => setViewMode('cards')}
                  title="Card View"
                >
                  <LayoutGrid size={14} />
                </button>
                <button
                  type="button"
                  className={`view-mode-btn ${viewMode === 'table' ? 'active' : ''}`}
                  onClick={() => setViewMode('table')}
                  title="Compact Table View"
                >
                  <Table size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Render Cards or Compact Table */}
          {viewMode === 'cards' ? (
            <div className="matrix-rows-stack">
              {filteredCompetencies.map((comp) => (
                <CompetencyMatrixRow
                  key={comp.id}
                  competency={comp}
                  targetCareer={targetCareer.title}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          ) : (
            <SkillGapTable
              competencies={filteredCompetencies}
              onExplore={setSelectedDrawerCompetency}
              onNavigate={onNavigate}
            />
          )}

          {/* Bottom Path Action Banner */}
          <div className="skillgap-bottom-action-banner glass-panel">
            <div className="bottom-action-copy">
              <Sparkles size={18} className="sparkle-ai" />
              <div>
                <h4>Ready to bridge your {targetCareer.title} competency gaps?</h4>
                <p>We've structured your personalized milestones in optimal prerequisite sequence.</p>
              </div>
            </div>

            <button 
              type="button" 
              className="primary-btn" 
              onClick={() => onNavigate('/path')}
            >
              <Route size={16} />
              <span>Build My Learning Path</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </section>

      </div>

      {/* Learning Options Slide-over Drawer */}
      {selectedDrawerCompetency && (
        <LearningOptionsDrawer
          competency={selectedDrawerCompetency}
          onClose={() => setSelectedDrawerCompetency(null)}
          onNavigate={onNavigate}
        />
      )}

    </AppShell>
  );
};

export default SkillGap;
