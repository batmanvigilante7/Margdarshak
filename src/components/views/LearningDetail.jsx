import React, { useState } from 'react';
import { AppShell } from '../layout/AppShell';
import { LearnHeader } from '../learn/LearnHeader';
import { LearnWhyItMatters } from '../learn/LearnWhyItMatters';
import { LearnObjectives } from '../learn/LearnObjectives';
import { LearnResources } from '../learn/LearnResources';
import { LearnPracticeModal } from '../learn/LearnPracticeModal';
import { LearnProjectBrief } from '../learn/LearnProjectBrief';
import { LearnCheckpointModal } from '../learn/LearnCheckpointModal';
import { LearnAIHelpDrawer } from '../learn/LearnAIHelpDrawer';
import { 
  FlaskConical, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  ArrowRight, 
  MessageSquare,
  TrendingUp,
  Award
} from 'lucide-react';
import { useAppStore } from '../../context/AppContext';

const INITIAL_OBJECTIVES = [
  { id: 'obj-1', text: 'Explain supervised vs unsupervised learning paradigms', completed: true },
  { id: 'obj-2', text: 'Prepare and scale dataset features avoiding data leakage', completed: true },
  { id: 'obj-3', text: 'Train a classification model using Scikit-Learn', completed: true },
  { id: 'obj-4', text: 'Evaluate model performance using cross-validation', completed: false },
  { id: 'obj-5', text: 'Interpret precision, recall, and ROC-AUC evaluation metrics', completed: false }
];

const CURATED_RESOURCES = [
  {
    id: 'res-1',
    title: 'Introduction to Machine Learning & Cost Formulations',
    provider: 'NPTEL • IIT Madras',
    durationMinutes: 20,
    description: 'Understand loss functions, convex optimization, and gradient descent convergence fundamentals.'
  },
  {
    id: 'res-2',
    title: 'Supervised Classification & Logistic Regression',
    provider: 'Swayam Open Courseware',
    durationMinutes: 35,
    description: 'Learn how log-loss functions map features into probabilistic decision boundaries.'
  },
  {
    id: 'res-3',
    title: 'Model Training & Overfitting Diagnostics in Python',
    provider: 'Hands-on Interactive Lab',
    durationMinutes: 45,
    description: 'Practice train/test splitting, k-fold cross-validation, and variance reduction techniques.'
  },
  {
    id: 'res-4',
    title: 'Evaluation Metrics: Precision, Recall & ROC-AUC',
    provider: 'Applied ML Case Studies',
    durationMinutes: 40,
    description: 'Analyze confusion matrices, sensitivity-specificity tradeoffs, and optimal threshold selection.'
  }
];

export const LearningDetail = ({ itemId = 'ml-fundamentals', onNavigate }) => {
  const { isMlCompleted, completeMilestone } = useAppStore();
  const [objectives, setObjectives] = useState(INITIAL_OBJECTIVES);
  const [isProjectCompleted, setIsProjectCompleted] = useState(false);
  const [isMilestoneCompleted, setIsMilestoneCompleted] = useState(isMlCompleted);
  const [mlScore, setMlScore] = useState(isMlCompleted ? 72 : 38);

  const [isPracticeModalOpen, setIsPracticeModalOpen] = useState(false);
  const [isCheckpointModalOpen, setIsCheckpointModalOpen] = useState(false);
  const [isAiHelpOpen, setIsAiHelpOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const currentPath = `/learn/${itemId}`;

  const handleToggleObjective = (id) => {
    setObjectives(prev => prev.map(o => o.id === id ? { ...o, completed: !o.completed } : o));
  };

  const handleCompletePractice = () => {
    setObjectives(prev => prev.map(o => o.id === 'obj-4' ? { ...o, completed: true } : o));
  };

  const handleCompleteProject = () => {
    setIsProjectCompleted(true);
    setObjectives(prev => prev.map(o => o.id === 'obj-5' ? { ...o, completed: true } : o));
  };

  const handlePassCheckpoint = () => {
    setIsMilestoneCompleted(true);
    setMlScore(72);
    setObjectives(prev => prev.map(o => ({ ...o, completed: true })));
    completeMilestone('ml-fundamentals');
  };

  return (
    <AppShell
      currentPath={currentPath}
      onNavigate={onNavigate}
      pageTitle="LEARNING WORKSPACE"
      pageSubtitle="Milestone 02: Machine Learning Fundamentals"
    >
      <div className="learning-detail-page animate-fadeIn">
        
        {/* 1. Header Banner */}
        <LearnHeader
          milestoneNumber="02"
          title="Machine Learning Fundamentals"
          nsqfLevel="NSQF Level 6"
          competencyType="Core Competency"
          estimatedHours={8}
          competenciesCount={3}
          onNavigate={onNavigate}
        />

        {/* 2. Why You're Learning This Box */}
        <LearnWhyItMatters
          currentScore={mlScore}
          targetScore={85}
          gapDelta={85 - mlScore}
          unlocks={[
            'Milestone 03: Statistics & Applied Probability',
            'Milestone 04: Applied ML Portfolio Project',
            'Milestone 05: Deep Learning & Neural Architectures'
          ]}
        />

        {/* 3. Objectives Progress Card */}
        <LearnObjectives
          objectives={objectives}
          onToggleObjective={handleToggleObjective}
        />

        {/* 4. Stage 1: LEARN (Curated Resources) */}
        <LearnResources
          resources={CURATED_RESOURCES}
          onOpenResource={(res) => {
            window.open('https://swayam.gov.in', '_blank');
          }}
        />

        {/* 5. Stage 2: PRACTICE (Interactive Diagnostics) */}
        <section className="learn-section-block">
          <div className="learn-section-title-line">
            <div className="title-left">
              <FlaskConical size={16} className="text-brand-400" />
              <h3>2. PRACTICE — Diagnostic Evaluation Quiz</h3>
            </div>
            <span className="section-subtext">Interactive concept verification</span>
          </div>

          <div className="practice-trigger-card glass-panel">
            <div className="practice-trigger-left">
              <div className="practice-icon-box">
                <FlaskConical size={20} />
              </div>
              <div>
                <h4>Model Evaluation & Leakage Prevention Practice</h4>
                <p>3 diagnostic questions • ~10 minutes • Test your grasp of standard scaling, metrics, and sigmoid math.</p>
              </div>
            </div>

            <button 
              type="button" 
              className="primary-btn practice-action-btn"
              onClick={() => setIsPracticeModalOpen(true)}
            >
              <FlaskConical size={14} />
              <span>Start Practice Quiz</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </section>

        {/* 6. Stage 3: BUILD (Customer Churn Predictor Project) */}
        <LearnProjectBrief
          onCompleteProject={handleCompleteProject}
          isCompleted={isProjectCompleted}
        />

        {/* 7. Stage 4: PROVE (Competency Checkpoint) */}
        <section className="learn-section-block">
          <div className="learn-section-title-line">
            <div className="title-left">
              <ShieldCheck size={16} className="text-emerald" />
              <h3>4. PROVE — Competency Checkpoint</h3>
            </div>
            <span className="section-subtext">Formal verification for NSQF Level 6 alignment</span>
          </div>

          <div className="checkpoint-trigger-card glass-panel">
            <div className="checkpoint-trigger-left">
              <div className="checkpoint-icon-box">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4>Machine Learning Competency Verification Check</h4>
                <p>3 thorough scenario questions • 70% passing threshold • Updates your verified competency score from 38% to 72%.</p>
              </div>
            </div>

            <button 
              type="button" 
              className="primary-btn checkpoint-action-btn"
              onClick={() => setIsCheckpointModalOpen(true)}
            >
              <ShieldCheck size={14} />
              <span>Start Competency Check</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </section>

        {/* 8. Adaptive Recommendation Banner */}
        <div className="learn-adaptive-advice-card glass-panel">
          <div className="adaptive-advice-left">
            <Sparkles size={16} className="sparkle-ai" />
            <div>
              <strong>✦ MARGDARSHAK ADAPTIVE RECOMMENDATION:</strong>
              <span> You've demonstrated strong conceptual velocity. Complete today's checkpoint to unlock Milestone 03 (Statistics & Applied Probability) in your adaptive roadmap.</span>
            </div>
          </div>

          <button 
            type="button" 
            className="ai-help-trigger-btn"
            onClick={() => setIsAiHelpOpen(true)}
          >
            <MessageSquare size={13} />
            <span>Ask Margdarshak</span>
          </button>
        </div>

        {/* 9. Completion Celebration Banner (if milestone completed) */}
        {isMilestoneCompleted && (
          <div className="milestone-completed-celebration glass-panel animate-fadeIn">
            <div className="celebration-left">
              <div className="celebration-badge">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4>MILESTONE 02 COMPLETED ✓</h4>
                <p>Machine Learning competency score updated: <strong>38% ───→ 72%</strong>. Milestone 03 has been unlocked.</p>
              </div>
            </div>

            <button 
              type="button" 
              className="primary-btn"
              onClick={() => onNavigate('/path')}
            >
              <span>Continue to Next Milestone</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}

        {/* 10. Sticky Bottom Action Bar */}
        <div className="sticky-learn-action-bar glass-panel">
          <div className="sticky-learn-left">
            <span className="micro text-brand-300">NEXT LEARNING STEP</span>
            <strong>{isMilestoneCompleted ? 'Milestone Completed! Return to Roadmap' : 'Complete Model Evaluation Practice & Checkpoint'}</strong>
          </div>

          <div className="sticky-learn-right">
            <button 
              type="button" 
              className="ask-ai-pill-btn"
              onClick={() => setIsAiHelpOpen(true)}
            >
              <Sparkles size={13} className="sparkle-ai" />
              <span>Ask AI Help</span>
            </button>

            <button 
              type="button" 
              className="primary-btn"
              onClick={() => {
                if (isMilestoneCompleted) {
                  onNavigate('/path');
                } else if (!isProjectCompleted) {
                  setIsPracticeModalOpen(true);
                } else {
                  setIsCheckpointModalOpen(true);
                }
              }}
            >
              <Play size={14} fill="currentColor" />
              <span>{isMilestoneCompleted ? 'View Updated Path' : 'Continue Learning'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* Practice Modal */}
      {isPracticeModalOpen && (
        <LearnPracticeModal
          onCompletePractice={handleCompletePractice}
          onClose={() => setIsPracticeModalOpen(false)}
        />
      )}

      {/* Checkpoint Modal */}
      {isCheckpointModalOpen && (
        <LearnCheckpointModal
          onPassCheckpoint={handlePassCheckpoint}
          onClose={() => setIsCheckpointModalOpen(false)}
        />
      )}

      {/* Contextual AI Help Drawer */}
      {isAiHelpOpen && (
        <LearnAIHelpDrawer
          onNavigate={onNavigate}
          onClose={() => setIsAiHelpOpen(false)}
        />
      )}

    </AppShell>
  );
};

export default LearningDetail;
