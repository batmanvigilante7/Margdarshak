import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const AppContext = createContext(null);

const DEFAULT_USER = {
  name: 'Hemanth Sai',
  email: 'hemanth@margdarshak.in',
  degree: 'B.Tech Computer Science',
  institution: 'GITAM University',
  semester: 'Semester 3',
  bio: 'Computer Science learner focused on building strong foundations in software engineering, data, and applied machine learning.'
};

const DEFAULT_TARGET_CAREER = {
  id: 'machine-learning-engineer',
  title: 'Machine Learning Engineer',
  nsqfLevel: 'NSQF Level 6',
  trackType: 'Core Competency Track',
  description: 'Design, train, evaluate and deploy machine learning systems for real-world predictive applications.',
  about: 'Machine Learning Engineers build and operationalize algorithms that learn from data to support predictive classification, recommendation systems, automated reasoning, and enterprise intelligence.',
  salaryRange: '₹8L – ₹18L',
  marketDemand: 'HIGH',
  openRoles: '2,400+',
  matchScore: 72
};

const DEFAULT_COMPETENCIES = [
  { id: 'python', name: 'Python Programming', acquired: 82, target: 90, delta: 8, status: 'On Track', tone: 'emerald', verified: true },
  { id: 'statistics', name: 'Statistical Inference', acquired: 74, target: 80, delta: 6, status: 'On Track', tone: 'emerald', verified: true },
  { id: 'data-structures', name: 'Data Structures & Algorithms', acquired: 71, target: 85, delta: 14, status: 'On Track', tone: 'emerald', verified: true },
  { id: 'machine-learning', name: 'Machine Learning Core', acquired: 67, target: 85, delta: 18, status: 'Developing', tone: 'brand', verified: true },
  { id: 'model-evaluation', name: 'Model Evaluation & Tuning', acquired: 42, target: 80, delta: 38, status: 'Critical Gap', tone: 'rose', verified: false },
  { id: 'data-engineering', name: 'Data Engineering & ETL', acquired: 50, target: 70, delta: 20, status: 'Moderate Gap', tone: 'amber', verified: false },
  { id: 'deep-learning', name: 'Deep Learning & Neural Nets', acquired: 22, target: 75, delta: 53, status: 'Critical Gap', tone: 'rose', verified: false }
];

const DEFAULT_PREFERENCES = {
  weeklyHours: 7,
  learningStyle: 'balanced',
  preferredFormats: ['video', 'practice'],
  language: 'en',
  notifications: {
    learningReminders: true,
    milestoneUpdates: true,
    skillGapAlerts: true,
    weeklySummary: true
  },
  reminderFrequency: 'three_per_week',
  theme: 'dark',
  accent: 'indigo',
  accessibility: {
    reduceMotion: false,
    highContrast: false,
    largerText: false
  }
};

export const AppProvider = ({ children }) => {
  // 1. User Profile State
  const [user, setUser] = useState(() => {
    try {
      const s = localStorage.getItem('margdarshak-user-profile');
      return s ? { ...DEFAULT_USER, ...JSON.parse(s) } : DEFAULT_USER;
    } catch {
      return DEFAULT_USER;
    }
  });

  // 2. Target Career State
  const [targetCareer, setTargetCareerState] = useState(() => {
    try {
      const s = localStorage.getItem('margdarshak-target-career');
      return s ? { ...DEFAULT_TARGET_CAREER, ...JSON.parse(s) } : DEFAULT_TARGET_CAREER;
    } catch {
      return DEFAULT_TARGET_CAREER;
    }
  });

  // 3. Milestone Completion State
  const [isMlCompleted, setIsMlCompleted] = useState(() => {
    try {
      return localStorage.getItem('margdarshak-milestone-ml-completed') === 'true';
    } catch {
      return false;
    }
  });

  // 4. Saved Resources & Attached Path Resources
  const [savedResourceIds, setSavedResourceIds] = useState(() => {
    try {
      const s = localStorage.getItem('margdarshak-saved-resources');
      return s ? JSON.parse(s) : ['res-ml-eval-01', 'res-proj-churn-01'];
    } catch {
      return ['res-ml-eval-01', 'res-proj-churn-01'];
    }
  });

  const [pathResourceIds, setPathResourceIds] = useState(() => {
    try {
      const p = localStorage.getItem('margdarshak-path-resources');
      return p ? JSON.parse(p) : ['res-ml-core-01', 'res-proj-churn-01'];
    } catch {
      return ['res-ml-core-01', 'res-proj-churn-01'];
    }
  });

  // 5. Preferences State
  const [preferences, setPreferences] = useState(() => {
    try {
      const s = localStorage.getItem('margdarshak_preferences');
      return s ? { ...DEFAULT_PREFERENCES, ...JSON.parse(s) } : DEFAULT_PREFERENCES;
    } catch {
      return DEFAULT_PREFERENCES;
    }
  });

  // 6. Onboarding Completion State
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(() => {
    try {
      return localStorage.getItem('margdarshak-profile-completed') === 'true';
    } catch {
      return true; // default demo resilience
    }
  });

  // Dynamic readiness and competencies computed from milestone state
  const competencies = useMemo(() => {
    return DEFAULT_COMPETENCIES.map(c => {
      if (c.id === 'machine-learning' && isMlCompleted) {
        return {
          ...c,
          acquired: 72,
          delta: 13,
          status: 'Developing',
          tone: 'brand'
        };
      }
      return c;
    });
  }, [isMlCompleted]);

  const readinessScore = isMlCompleted ? 74 : 64;
  const readinessGrowth = isMlCompleted ? 22 : 12;

  // Actions
  const setTargetCareer = (career) => {
    const next = { ...targetCareer, ...career };
    setTargetCareerState(next);
    try {
      localStorage.setItem('margdarshak-target-career', JSON.stringify(next));
    } catch {
      // Ignore
    }
  };

  const completeMilestone = (milestoneId) => {
    if (milestoneId === 'ml-fundamentals' || milestoneId === 'm2') {
      setIsMlCompleted(true);
      try {
        localStorage.setItem('margdarshak-milestone-ml-completed', 'true');
      } catch {
        // Ignore
      }
    }
  };

  const updateUserProfile = (patch) => {
    const next = { ...user, ...patch };
    setUser(next);
    try {
      localStorage.setItem('margdarshak-user-profile', JSON.stringify(next));
    } catch {
      // Ignore
    }
  };

  const updatePreferences = (patch) => {
    const next = { ...preferences, ...patch };
    setPreferences(next);
    try {
      localStorage.setItem('margdarshak_preferences', JSON.stringify(next));
    } catch {
      // Ignore
    }
  };

  const toggleSaveResource = (id) => {
    setSavedResourceIds(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem('margdarshak-saved-resources', JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const toggleAttachResourceToPath = (id) => {
    setPathResourceIds(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem('margdarshak-path-resources', JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const resetLearningProgress = () => {
    setIsMlCompleted(false);
    setSavedResourceIds([]);
    setPathResourceIds([]);
    try {
      localStorage.removeItem('margdarshak-milestone-ml-completed');
      localStorage.removeItem('margdarshak-path-resources');
      localStorage.removeItem('margdarshak-rescheduled-tasks');
    } catch {
      // Ignore
    }
  };

  const value = {
    user,
    targetCareer,
    competencies,
    readinessScore,
    readinessGrowth,
    isMlCompleted,
    savedResourceIds,
    pathResourceIds,
    preferences,
    hasCompletedOnboarding,
    setTargetCareer,
    completeMilestone,
    updateUserProfile,
    updatePreferences,
    toggleSaveResource,
    toggleAttachResourceToPath,
    resetLearningProgress,
    setHasCompletedOnboarding
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppStore must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
