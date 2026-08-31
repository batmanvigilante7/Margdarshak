/**
 * Centralized Route & Navigation Configuration for Margdarshak
 */

export const ROUTE_KEYS = {
  WELCOME: 'WELCOME',
  LOGIN: 'LOGIN',
  SIGNUP: 'SIGNUP',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  ONBOARDING: 'ONBOARDING',
  DASHBOARD: 'DASHBOARD',
  CAREERS: 'CAREERS',
  CAREER_DETAIL: 'CAREER_DETAIL',
  ASSESSMENT: 'ASSESSMENT',
  SKILL_GAP: 'SKILL_GAP',
  LEARNING_PATH: 'LEARNING_PATH',
  COPILOT: 'COPILOT',
  LEARNING_DETAIL: 'LEARNING_DETAIL',
  PLANNER: 'PLANNER',
  ANALYTICS: 'ANALYTICS',
  PROFILE: 'PROFILE',
  RESOURCES: 'RESOURCES',
  PREFERENCES: 'PREFERENCES',
  NOT_FOUND: 'NOT_FOUND'
};

export const ROUTE_DEFINITIONS = {
  [ROUTE_KEYS.WELCOME]: {
    path: '/welcome',
    aliases: ['/', '/Margdarshak', '/Margdarshak/'],
    title: 'The Value Gateway',
    tier: 'Tier 1',
    isPublic: true
  },
  [ROUTE_KEYS.LOGIN]: {
    path: '/login',
    title: 'Sign In & Demo Access',
    tier: 'Tier 1',
    isPublic: true
  },
  [ROUTE_KEYS.SIGNUP]: {
    path: '/signup',
    title: 'Create Account',
    tier: 'Tier 1',
    isPublic: true
  },
  [ROUTE_KEYS.FORGOT_PASSWORD]: {
    path: '/forgot-password',
    title: 'Reset Password',
    tier: 'Tier 1',
    isPublic: true
  },
  [ROUTE_KEYS.ONBOARDING]: {
    path: '/onboarding',
    title: 'Diagnostic Intake',
    tier: 'Tier 1',
    isPublic: false
  },
  [ROUTE_KEYS.DASHBOARD]: {
    path: '/dashboard',
    title: 'Command Center',
    subtitle: 'Your career journey',
    tier: 'Tier 1',
    inNav: true,
    navSection: 'core',
    icon: 'LayoutDashboard'
  },
  [ROUTE_KEYS.CAREERS]: {
    path: '/careers',
    title: 'CAREER EXPLORER',
    subtitle: 'Find your target occupational benchmark',
    tier: 'Tier 1',
    inNav: true,
    navSection: 'core',
    icon: 'Briefcase'
  },
  [ROUTE_KEYS.CAREER_DETAIL]: {
    path: '/careers/:careerId',
    title: 'CAREER TRACK DEEP-DIVE',
    subtitle: 'Occupational Requirements & Benchmarks',
    tier: 'Tier 3',
    inNav: false
  },
  [ROUTE_KEYS.ASSESSMENT]: {
    path: '/assessment',
    title: 'COMPETENCY ASSESSMENT',
    subtitle: 'Scenario-based diagnostic evaluation',
    tier: 'Tier 1',
    inNav: true,
    navSection: 'core',
    icon: 'CheckSquare'
  },
  [ROUTE_KEYS.SKILL_GAP]: {
    path: '/skill-gap',
    title: 'SKILL GAP MATRIX',
    subtitle: 'Bridge analysis against target career benchmark',
    tier: 'Tier 1',
    inNav: true,
    navSection: 'core',
    icon: 'GitCompare'
  },
  [ROUTE_KEYS.LEARNING_PATH]: {
    path: '/path',
    title: 'ADAPTIVE LEARNING PATH',
    subtitle: 'Sequenced roadmap & verified milestone checks',
    tier: 'Tier 1',
    inNav: true,
    navSection: 'core',
    icon: 'Route'
  },
  [ROUTE_KEYS.COPILOT]: {
    path: '/copilot',
    title: 'MARGDARSHAK COPILOT',
    subtitle: 'Context-aware AI career mentor',
    tier: 'Tier 1',
    inNav: true,
    navSection: 'core',
    icon: 'Bot',
    isAi: true
  },
  [ROUTE_KEYS.LEARNING_DETAIL]: {
    path: '/learn/:itemId',
    title: 'LEARNING WORKSPACE',
    subtitle: 'Active Milestone Coursework & Checkpoints',
    tier: 'Tier 2',
    inNav: false
  },
  [ROUTE_KEYS.PLANNER]: {
    path: '/planner',
    title: 'ADAPTIVE STUDY PLANNER',
    subtitle: 'Weekly schedule & study pacing',
    tier: 'Tier 2',
    inNav: true,
    navSection: 'suite',
    icon: 'Calendar'
  },
  [ROUTE_KEYS.ANALYTICS]: {
    path: '/analytics',
    title: 'LEARNING INTELLIGENCE',
    subtitle: 'Competency growth & role readiness metrics',
    tier: 'Tier 2',
    inNav: true,
    navSection: 'suite',
    icon: 'BarChart3'
  },
  [ROUTE_KEYS.PROFILE]: {
    path: '/profile',
    title: 'LEARNER PROFILE',
    subtitle: 'Professional identity & verified competency portfolio',
    tier: 'Tier 2',
    inNav: true,
    navSection: 'suite',
    icon: 'User'
  },
  [ROUTE_KEYS.RESOURCES]: {
    path: '/resources',
    title: 'LEARNING RESOURCES',
    subtitle: 'Curated open courseware & skill-gap bridges',
    tier: 'Tier 3',
    inNav: true,
    navSection: 'suite',
    icon: 'FolderOpen'
  },
  [ROUTE_KEYS.PREFERENCES]: {
    path: '/preferences',
    title: 'PREFERENCES & SETTINGS',
    subtitle: 'Adaptive learning parameters & data controls',
    tier: 'Tier 3',
    inNav: true,
    navSection: 'suite',
    icon: 'Settings'
  },
  [ROUTE_KEYS.NOT_FOUND]: {
    path: '*',
    title: 'PAGE NOT FOUND',
    subtitle: 'Page not found',
    tier: 'System',
    isPublic: true
  }
};

/**
 * Normalizes browser pathname for local and GitHub Pages environments
 */
export const normalizePath = (rawPath) => {
  if (!rawPath) return '/';
  
  let p = rawPath.trim();
  
  // Strip origin or domain if present
  if (p.startsWith('http://') || p.startsWith('https://')) {
    try {
      p = new URL(p).pathname;
    } catch {
      // Fallback
    }
  }

  // Strip GitHub Pages base repo name '/Margdarshak'
  if (p.startsWith('/Margdarshak/')) {
    p = p.substring('/Margdarshak'.length);
  } else if (p === '/Margdarshak') {
    p = '/';
  }

  // Normalize root aliases
  if (p === '' || p === '/index.html') {
    return '/';
  }

  // Remove trailing slashes
  if (p.length > 1 && p.endsWith('/')) {
    p = p.slice(0, -1);
  }

  return p;
};

/**
 * Matches a normalized path to a route definition
 */
export const matchRoute = (path) => {
  const norm = normalizePath(path);

  // Exact matches
  for (const [key, def] of Object.entries(ROUTE_DEFINITIONS)) {
    if (def.path === norm) {
      return { key, def, params: {} };
    }
    if (def.aliases && def.aliases.includes(norm)) {
      return { key, def, params: {} };
    }
  }

  // Parametric match: /careers/:careerId
  if (norm.startsWith('/careers/')) {
    const careerId = norm.replace('/careers/', '').split('/')[0];
    if (careerId) {
      return {
        key: ROUTE_KEYS.CAREER_DETAIL,
        def: ROUTE_DEFINITIONS[ROUTE_KEYS.CAREER_DETAIL],
        params: { careerId }
      };
    }
  }

  // Parametric match: /learn/:itemId
  if (norm.startsWith('/learn/')) {
    const itemId = norm.replace('/learn/', '').split('/')[0];
    if (itemId) {
      return {
        key: ROUTE_KEYS.LEARNING_DETAIL,
        def: ROUTE_DEFINITIONS[ROUTE_KEYS.LEARNING_DETAIL],
        params: { itemId }
      };
    }
  }

  // Fallback: Not Found
  return {
    key: ROUTE_KEYS.NOT_FOUND,
    def: null,
    params: {}
  };
};
