import React, { useState, useMemo } from 'react';
import { AppShell } from '../layout/AppShell';
import { ResourcesHeader } from '../resources/ResourcesHeader';
import { ResourceSearch } from '../resources/ResourceSearch';
import { PersonalizationBanner } from '../resources/PersonalizationBanner';
import { ResourceTabs } from '../resources/ResourceTabs';
import { ResourceFilterBar } from '../resources/ResourceFilterBar';
import { CurrentMilestoneResources } from '../resources/CurrentMilestoneResources';
import { ResourceCard } from '../resources/ResourceCard';
import { SkillExplorer } from '../resources/SkillExplorer';
import { ResourceDrawer } from '../resources/ResourceDrawer';
import { CheckCircle2, SearchX } from 'lucide-react';
import { useAppStore } from '../../context/AppContext';

const RESOURCES_CATALOG = [
  {
    id: 'res-ml-eval-01',
    title: 'Machine Learning Model Evaluation & Validation',
    provider: 'NPTEL',
    type: 'course',
    skill: 'Model Evaluation',
    difficulty: 'Intermediate',
    duration: '6 weeks (18h)',
    nsqfLevel: 6,
    matchScore: 94,
    url: 'https://nptel.ac.in',
    description: 'Comprehensive study of holdout validation, confusion matrices, ROC-AUC metrics, and cross-validation strategies for high-stakes classifiers.',
    milestoneTitle: 'Model Evaluation & Tuning',
    recommendationReason: 'Directly addresses your 38-point Model Evaluation deficit to unlock NSQF Level 6 interview readiness.'
  },
  {
    id: 'res-ml-eval-02',
    title: 'ROC-AUC & Precision-Recall Curves Visualized',
    provider: 'YouTube',
    type: 'video',
    skill: 'Model Evaluation',
    difficulty: 'Beginner',
    duration: '45 mins',
    nsqfLevel: 6,
    matchScore: 93,
    url: 'https://youtube.com',
    description: 'Intuitive geometric walkthrough of cost curves, sensitivity/specificity tradeoffs, and decision threshold calibration.',
    milestoneTitle: 'Model Evaluation & Tuning',
    recommendationReason: 'Fast visual primer recommended before attempting the Milestone 02 Checkpoint quiz.'
  },
  {
    id: 'res-ml-eval-03',
    title: 'Diagnostic Evaluation Metrics Lab',
    provider: 'SWAYAM',
    type: 'practice',
    skill: 'Model Evaluation',
    difficulty: 'Intermediate',
    duration: '4 hours',
    nsqfLevel: 6,
    matchScore: 91,
    url: 'https://swayam.gov.in',
    description: 'Hands-on Jupyter notebook lab comparing log-loss, F1-scores, and classification reports on imbalanced churn data.',
    milestoneTitle: 'Model Evaluation & Tuning',
    recommendationReason: 'Practical coding exercises designed to reinforce metric calculation.'
  },
  {
    id: 'res-ml-core-01',
    title: 'Supervised Learning Fundamentals with Scikit-Learn',
    provider: 'NPTEL',
    type: 'course',
    skill: 'Machine Learning',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    nsqfLevel: 6,
    matchScore: 90,
    url: 'https://nptel.ac.in',
    description: 'Foundations of linear regression, decision trees, random forests, and gradient boosting with mathematical convergence proofs.',
    milestoneTitle: 'Machine Learning Fundamentals',
    recommendationReason: 'Core theoretical foundation for your active Milestone 02.'
  },
  {
    id: 'res-proj-churn-01',
    title: 'Customer Churn Predictor Pipeline Project',
    provider: 'Margdarshak Labs',
    type: 'project',
    skill: 'Machine Learning',
    difficulty: 'Intermediate',
    duration: '10 hours',
    nsqfLevel: 6,
    matchScore: 95,
    url: 'https://github.com',
    description: 'End-to-end portfolio artifact: feature engineering, hyperparameter tuning, model persistence, and evaluation deliverable.',
    milestoneTitle: 'Machine Learning Fundamentals',
    recommendationReason: 'Required portfolio artifact for NSQF Level 6 competency verification.'
  },
  {
    id: 'res-stats-01',
    title: 'Statistical Inference for Data & Machine Learning',
    provider: 'SWAYAM',
    type: 'course',
    skill: 'Statistics',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    nsqfLevel: 6,
    matchScore: 89,
    url: 'https://swayam.gov.in',
    description: 'Hypothesis testing, p-values, Bayes theorem, confidence intervals, and multivariate probability distributions.',
    milestoneTitle: 'Statistics & Probability',
    recommendationReason: 'Reinforces foundational statistical math behind loss functions.'
  },
  {
    id: 'res-py-01',
    title: 'Advanced Python for Scientific Computing & Data',
    provider: 'Coursera',
    type: 'course',
    skill: 'Python',
    difficulty: 'Intermediate',
    duration: '5 weeks',
    nsqfLevel: 5,
    matchScore: 86,
    url: 'https://coursera.org',
    description: 'Vectorized operations in NumPy, high-performance Pandas manipulations, and object-oriented ML pipeline architecture.',
    milestoneTitle: 'Python Foundations',
    recommendationReason: 'Accelerated syntax bypass track for experienced engineers.'
  },
  {
    id: 'res-data-eng-01',
    title: 'Data Pipeline Engineering & ETL Workflows',
    provider: 'Skill India',
    type: 'course',
    skill: 'Data Engineering',
    difficulty: 'Intermediate',
    duration: '7 weeks',
    nsqfLevel: 6,
    matchScore: 85,
    url: 'https://skillindia.gov.in',
    description: 'Building automated ETL pipelines, SQL transformations, data validation schemas, and feature stores for ML.',
    milestoneTitle: 'Data Engineering Foundations',
    recommendationReason: 'Helps resolve your 20-point Data Engineering gap.'
  },
  {
    id: 'res-dl-01',
    title: 'Deep Learning & Neural Networks Architecture',
    provider: 'NPTEL',
    type: 'course',
    skill: 'Deep Learning',
    difficulty: 'Advanced',
    duration: '10 weeks',
    nsqfLevel: 7,
    matchScore: 82,
    url: 'https://nptel.ac.in',
    description: 'Backpropagation calculus, CNNs, RNNs, Transformer self-attention, and PyTorch deep neural networks.',
    milestoneTitle: 'Deep Learning Architectures',
    recommendationReason: 'Advanced Level 7 progression track unlocked after Level 6 completion.'
  }
];

export const Resources = ({ onNavigate }) => {
  const { 
    targetCareer, 
    savedResourceIds: savedIds, 
    pathResourceIds, 
    toggleSaveResource, 
    toggleAttachResourceToPath 
  } = useAppStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('for-you');
  const [selectedSkill, setSelectedSkill] = useState('All Skills');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Difficulties');
  const [selectedProvider, setSelectedProvider] = useState('All Providers');
  const [selectedResource, setSelectedResource] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleSave = (id) => {
    setSavedIds(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem('margdarshak-saved-resources', JSON.stringify(next));
      } catch {
        // Ignore
      }
      showToast(prev.includes(id) ? 'Resource removed from saved list.' : 'Resource saved to your bookmarks.');
      return next;
    });
  };

  const handleAddToPath = (res) => {
    setPathResourceIds(prev => {
      const next = prev.includes(res.id) ? prev.filter(x => x !== res.id) : [...prev, res.id];
      try {
        localStorage.setItem('margdarshak-path-resources', JSON.stringify(next));
      } catch {
        // Ignore
      }
      showToast(prev.includes(res.id) ? `Removed "${res.title}" from your path.` : `Attached "${res.title}" to ${res.milestoneTitle}.`);
      return next;
    });
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedSkill('All Skills');
    setSelectedDifficulty('All Difficulties');
    setSelectedProvider('All Providers');
  };

  const handleFilterByPriorityGap = (gapName) => {
    setSelectedSkill(gapName);
    setActiveTab('for-you');
    showToast(`Filtered library to priority gap: ${gapName}`);
  };

  // Filter and sort catalog
  const filteredResources = useMemo(() => {
    return RESOURCES_CATALOG.filter(res => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = res.title.toLowerCase().includes(q);
        const matchesDesc = res.description.toLowerCase().includes(q);
        const matchesSkill = res.skill.toLowerCase().includes(q);
        const matchesProv = res.provider.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesSkill && !matchesProv) return false;
      }

      // 2. Active Tab
      if (activeTab === 'courses' && res.type !== 'course') return false;
      if (activeTab === 'videos' && res.type !== 'video') return false;
      if (activeTab === 'projects' && res.type !== 'project') return false;
      if (activeTab === 'practice' && res.type !== 'practice') return false;
      if (activeTab === 'saved' && !savedIds.includes(res.id)) return false;

      // 3. Dropdowns
      if (selectedSkill !== 'All Skills' && res.skill !== selectedSkill) return false;
      if (selectedDifficulty !== 'All Difficulties' && res.difficulty !== selectedDifficulty) return false;
      if (selectedProvider !== 'All Providers' && res.provider !== selectedProvider) return false;

      return true;
    }).sort((a, b) => b.matchScore - a.matchScore);
  }, [searchQuery, activeTab, selectedSkill, selectedDifficulty, selectedProvider, savedIds]);

  // Current milestone items
  const milestoneResources = useMemo(() => {
    return RESOURCES_CATALOG.filter(r => r.milestoneTitle === 'Machine Learning Fundamentals').slice(0, 3);
  }, []);

  return (
    <AppShell
      currentPath="/resources"
      onNavigate={onNavigate}
      pageTitle="LEARNING RESOURCES"
      pageSubtitle="Curated open courseware & skill-gap bridges"
    >
      <div className="resources-page-layout animate-fadeIn">
        
        {/* Toast Alert */}
        {toastMessage && (
          <div className="planner-toast-alert animate-fadeIn">
            <CheckCircle2 size={15} className="text-emerald" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* 1. Header */}
        <ResourcesHeader />

        {/* 2. Search Bar */}
        <ResourceSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />

        {/* 3. Personalization Banner */}
        <PersonalizationBanner
          targetCareer="Machine Learning Engineer"
          priorityGap="Model Evaluation"
          onFilterByGap={handleFilterByPriorityGap}
          onNavigate={onNavigate}
        />

        {/* 4. Filter Tabs & Dropdowns */}
        <div className="resources-filtering-section">
          <ResourceTabs
            activeTab={activeTab}
            onSelectTab={setActiveTab}
            savedCount={savedIds.length}
          />

          <ResourceFilterBar
            selectedSkill={selectedSkill}
            onSelectSkill={setSelectedSkill}
            selectedDifficulty={selectedDifficulty}
            onSelectDifficulty={setSelectedDifficulty}
            selectedProvider={selectedProvider}
            onSelectProvider={setSelectedProvider}
            onResetFilters={handleResetFilters}
          />
        </div>

        {/* 5. Currently Learning Active Milestone Section (Visible on 'For You' with no search) */}
        {activeTab === 'for-you' && !searchQuery && selectedSkill === 'All Skills' && (
          <CurrentMilestoneResources
            milestoneTitle="Machine Learning Fundamentals"
            resources={milestoneResources}
            savedIds={savedIds}
            pathResourceIds={pathResourceIds}
            onToggleSave={handleToggleSave}
            onAddToPath={handleAddToPath}
            onClickCard={(res) => setSelectedResource(res)}
            onNavigate={onNavigate}
          />
        )}

        {/* 6. Recommended Resources Grid */}
        <div className="recommended-resources-container">
          <div className="section-title-line">
            <div className="title-left">
              <span className="micro">
                {activeTab === 'saved' ? 'SAVED RESOURCES' : 'RECOMMENDED LEARNING MATERIAL'}
              </span>
              <h3>
                {selectedSkill !== 'All Skills' 
                  ? `Resources for ${selectedSkill}` 
                  : activeTab === 'saved' 
                    ? 'Your Bookmarked Materials' 
                    : 'Personalized Recommendations'}
              </h3>
            </div>
            <span className="results-count mono font-bold text-brand-300">
              {filteredResources.length} {filteredResources.length === 1 ? 'Resource' : 'Resources'}
            </span>
          </div>

          {filteredResources.length > 0 ? (
            <div className="resources-cards-grid">
              {filteredResources.map((res) => (
                <ResourceCard
                  key={res.id}
                  resource={res}
                  isSaved={savedIds.includes(res.id)}
                  isAddedToPath={pathResourceIds.includes(res.id)}
                  onToggleSave={handleToggleSave}
                  onAddToPath={handleAddToPath}
                  onClickCard={(r) => setSelectedResource(r)}
                />
              ))}
            </div>
          ) : (
            <div className="empty-resources-state glass-panel">
              <SearchX size={32} className="text-tertiary" />
              <h4>No Resources Found</h4>
              <p>We couldn't find learning materials matching your current search or filter combination.</p>
              <button 
                type="button" 
                className="primary-btn"
                onClick={handleResetFilters}
              >
                <span>Reset All Filters</span>
              </button>
            </div>
          )}
        </div>

        {/* 7. Explore by Skill Section */}
        <SkillExplorer
          onSelectSkill={(skill) => {
            setSelectedSkill(skill);
            showToast(`Filtered by ${skill}`);
          }}
          currentSkill={selectedSkill}
        />

      </div>

      {/* Resource Detail Slide-Over Drawer */}
      {selectedResource && (
        <ResourceDrawer
          resource={selectedResource}
          isAddedToPath={pathResourceIds.includes(selectedResource.id)}
          onAddToPath={handleAddToPath}
          onClose={() => setSelectedResource(null)}
          onNavigate={onNavigate}
        />
      )}

    </AppShell>
  );
};

export default Resources;
