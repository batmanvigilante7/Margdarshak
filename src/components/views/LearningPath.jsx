import React, { useState } from 'react';
import { AppShell } from '../layout/AppShell';
import { PathHeader } from '../path/PathHeader';
import { PathSummaryHero } from '../path/PathSummaryHero';
import { AIPathExplanation } from '../path/AIPathExplanation';
import { AdaptationBanner } from '../path/AdaptationBanner';
import { MilestoneTimelineCard } from '../path/MilestoneTimelineCard';
import { LearningPaceModal } from '../path/LearningPaceModal';
import { StickyNextAction } from '../path/StickyNextAction';
import { Route, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

const ROADMAP_MILESTONES_DATA = [
  {
    id: 'python-foundations',
    stepNumber: '01',
    title: 'Python Foundations & Data Structures',
    type: 'prove',
    nsqfBadge: 'NSQF Level 5 • Foundation',
    status: 'completed',
    estimatedHours: 4,
    competenciesCount: 2,
    skills: ['Python OOP', 'Vectorized NumPy', 'Data Structures'],
    description: 'Verified syntax fluency, generator patterns, OOP principles, and computational algorithmic complexity.',
    deliverable: 'Verified Benchmark Competency (87% Diagnostic Score).',
    whyThisStep: 'Your assessment verified strong baseline Python knowledge, allowing you to skip 14 hours of remedial syntax modules.',
    unlocks: ['Machine Learning Fundamentals']
  },
  {
    id: 'ml-fundamentals',
    stepNumber: '02',
    title: 'Machine Learning Fundamentals',
    type: 'learn',
    nsqfBadge: 'NSQF Level 6 • Core Competency',
    marketDemand: 'High Market Demand',
    status: 'active',
    estimatedHours: 8,
    competenciesCount: 3,
    skills: ['Python', 'Model Training', 'Evaluation Diagnostics', 'Gradient Descent'],
    description: 'Build mathematical intuition for supervised learning algorithms, cost functions, gradient descent, and cross-validation diagnostics.',
    gapCoverage: {
      name: 'Machine Learning',
      percentage: 100
    },
    deliverable: 'Train and evaluate your first classification model with scikit-learn.',
    whyThisStep: 'This milestone addresses your largest high-impact competency gap (38% → 85%, 47 pts delta). Strengthening this core competency first reduces the difficulty of all downstream milestones.',
    unlocks: ['Statistics for ML', 'Applied ML Project', 'Deep Learning']
  },
  {
    id: 'stats-probability',
    stepNumber: '03',
    title: 'Statistics & Applied Probability',
    type: 'practice',
    nsqfBadge: 'NSQF Level 5 • Core Support',
    status: 'recommended',
    estimatedHours: 8,
    competenciesCount: 2,
    skills: ['Probability Distributions', 'Hypothesis Testing', 'ROC-AUC', 'p-Values'],
    description: 'Master empirical probability distributions, Central Limit Theorem, hypothesis testing, Bayes theorem, and statistical evaluation metrics.',
    gapCoverage: {
      name: 'Statistics & Probability',
      percentage: 80
    },
    deliverable: 'Design an A/B statistical significance evaluation script for model performance.',
    whyThisStep: 'Reinforces evaluation rigor to prevent misleading model validation on imbalanced datasets.',
    unlocks: ['Applied ML Project', 'Deep Learning']
  },
  {
    id: 'applied-ml-project',
    stepNumber: '04',
    title: 'Applied Machine Learning Project',
    type: 'build',
    nsqfBadge: 'NSQF Level 6 • Applied Skill',
    marketDemand: 'Portfolio Anchor',
    status: 'recommended',
    estimatedHours: 10,
    competenciesCount: 3,
    skills: ['Feature Engineering', 'Hyperparameter Tuning', 'Scikit-Learn Pipelines'],
    description: 'Synthesize data preprocessing, feature engineering, cross-validated tuning, and model serialization into a real-world pipeline.',
    deliverable: 'Build and deploy a Customer Churn Predictor Pipeline with model explanations.',
    whyThisStep: 'Translates theoretical algorithms into an end-to-end portfolio artifact verifiable by technical recruiters.',
    unlocks: ['Deep Learning', 'Production Deployment']
  },
  {
    id: 'deep-learning',
    stepNumber: '05',
    title: 'Deep Learning & Neural Architectures',
    type: 'learn',
    nsqfBadge: 'NSQF Level 6 • Advanced Specialist',
    status: 'locked',
    estimatedHours: 12,
    competenciesCount: 3,
    skills: ['Multi-Layer Perceptrons', 'Backpropagation', 'CNNs', 'PyTorch'],
    description: 'Multi-layer perceptrons, backpropagation, CNNs for computer vision, RNNs, and PyTorch tensor operations.',
    prereqLockDetails: [
      { name: 'Python Foundations', completed: true },
      { name: 'Machine Learning Fundamentals', completed: false },
      { name: 'Statistics for ML', completed: false }
    ],
    deliverable: 'Build a Multi-Class Computer Vision Image Classifier in PyTorch.',
    whyThisStep: 'Extends linear models into non-linear high-dimensional neural representations.',
    unlocks: ['Production Capstone & OJT']
  },
  {
    id: 'ai-deployment',
    stepNumber: '06',
    title: 'Capstone Project & OJT Production Deployment',
    type: 'prove',
    nsqfBadge: 'NSQF Level 6 • Specialist Capstone',
    status: 'locked',
    estimatedHours: 8,
    competenciesCount: 3,
    skills: ['FastAPI', 'Docker Containers', 'Model Drift Telemetry', 'Cloud CI/CD'],
    description: 'FastAPI microservices, model serialization, Docker containerization, REST inference endpoints, and telemetry monitoring.',
    prereqLockDetails: [
      { name: 'Milestones 1 through 5 Completion', completed: false }
    ],
    deliverable: 'End-to-End Containerized FastAPI ML Microservice API deployed on Cloud.',
    whyThisStep: 'Final verifiable outcome proving production deployment competency for junior-to-mid AI Engineer roles.',
    unlocks: ['NSQF Level 6 Competency Verification']
  }
];

export const LearningPath = ({ onNavigate }) => {
  const [weeklyHours, setWeeklyHours] = useState(10);
  const [isPaceModalOpen, setIsPaceModalOpen] = useState(false);

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

  const totalBridgeHours = 46;

  return (
    <AppShell
      currentPath="/path"
      onNavigate={onNavigate}
      pageTitle="LEARNING PATH"
      pageSubtitle="Personalized adaptive roadmap"
    >
      <div className="learning-path-layout animate-fadeIn">
        
        {/* 1. Header Banner */}
        <PathHeader
          targetCareer={targetCareer.title}
          nsqfLevel={targetCareer.nsqfLevel}
          onNavigate={onNavigate}
        />

        {/* 2. Top Summary Hero */}
        <PathSummaryHero
          targetCareer={targetCareer.title}
          nsqfLevel={targetCareer.nsqfLevel}
          readiness={64}
          milestonesCount={ROADMAP_MILESTONES_DATA.length}
          totalHours={totalBridgeHours}
          projectsCount={2}
          checksCount={3}
          weeklyHours={weeklyHours}
          onOpenPaceModal={() => setIsPaceModalOpen(true)}
        />

        {/* 3. AI Path Explanation Card */}
        <AIPathExplanation />

        {/* 4. Dynamic Adaptation Notice */}
        <AdaptationBanner />

        {/* 5. Vertical Connected Roadmap Timeline */}
        <section className="roadmap-timeline-section">
          <div className="roadmap-timeline-title">
            <Route size={16} className="text-brand-400" />
            <h3>Your Personalized Milestone Sequence</h3>
          </div>

          <div className="roadmap-timeline-stack">
            {ROADMAP_MILESTONES_DATA.map((milestone) => (
              <MilestoneTimelineCard
                key={milestone.id}
                milestone={milestone}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </section>

        {/* 6. Sticky / Persistent Next Action */}
        <StickyNextAction
          activeMilestoneTitle="Machine Learning Fundamentals"
          estimatedHours={8}
          skillsCount={3}
          projectsCount={1}
          onContinue={() => onNavigate('/learn/ml-fundamentals')}
          onAdjustPlan={() => setIsPaceModalOpen(true)}
        />

      </div>

      {/* Pace Adjustment Modal */}
      {isPaceModalOpen && (
        <LearningPaceModal
          currentWeeklyHours={weeklyHours}
          totalHours={totalBridgeHours}
          onSave={setWeeklyHours}
          onClose={() => setIsPaceModalOpen(false)}
        />
      )}

    </AppShell>
  );
};

export default LearningPath;
