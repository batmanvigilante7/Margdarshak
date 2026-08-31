import React, { useState, useEffect, createContext, useContext } from 'react';
import { matchRoute, normalizePath, ROUTE_KEYS, ROUTE_DEFINITIONS } from '../types/navigation';
import { AppProvider, useAppStore } from '../context/AppContext';
import { ParallaxProvider } from '../context/ParallaxContext';

// Views
import { Welcome } from '../components/views/Welcome';
import { Login } from '../components/views/Login';
import { Signup } from '../components/views/Signup';
import { ForgotPassword } from '../components/views/ForgotPassword';
import { Onboarding } from '../components/views/Onboarding';
import { Dashboard } from '../components/views/Dashboard';
import { Careers } from '../components/views/Careers';
import { CareerDetail } from '../components/views/CareerDetail';
import { Assessment } from '../components/views/Assessment';
import { SkillGap } from '../components/views/SkillGap';
import { LearningPath } from '../components/views/LearningPath';
import { Copilot } from '../components/views/Copilot';
import { LearningDetail } from '../components/views/LearningDetail';
import { Planner } from '../components/views/Planner';
import { Analytics } from '../components/views/Analytics';
import { Profile } from '../components/views/Profile';
import { Resources } from '../components/views/Resources';
import { Preferences } from '../components/views/Preferences';
import { NotFound } from '../components/views/NotFound';

const NavigationContext = createContext(null);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationController');
  }
  return context;
};

// Global navigateTo function that works both with React and direct triggers
export const navigateTo = (path, state = {}) => {
  let targetUrl = path;

  // If on GitHub Pages, preserve /Margdarshak prefix if not already present
  if (window.location.pathname.startsWith('/Margdarshak')) {
    const clean = path.startsWith('/') ? path : `/${path}`;
    targetUrl = `/Margdarshak${clean}`;
  }

  window.history.pushState(state, '', targetUrl);
  window.dispatchEvent(new PopStateEvent('popstate', { state }));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Check if user has a valid session in localStorage
 */
const isAuthenticated = () => {
  try {
    const session = localStorage.getItem('margdarshak-session');
    if (session) {
      const parsed = JSON.parse(session);
      return parsed && parsed.authenticated === true;
    }
    return false;
  } catch {
    return false;
  }
};

/**
 * Clear session on logout
 */
const clearSession = () => {
  try {
    localStorage.removeItem('margdarshak-session');
  } catch {
    // Ignore
  }
};

// Public routes that don't require authentication
const PUBLIC_ROUTE_KEYS = new Set([
  ROUTE_KEYS.WELCOME,
  ROUTE_KEYS.LOGIN,
  ROUTE_KEYS.SIGNUP,
  ROUTE_KEYS.FORGOT_PASSWORD
]);

// Routes that authenticated users should be redirected away from
const AUTH_REDIRECT_ROUTES = new Set([
  ROUTE_KEYS.LOGIN,
  ROUTE_KEYS.SIGNUP,
  ROUTE_KEYS.WELCOME
]);

const NavigationRouter = () => {
  const { hasCompletedOnboarding } = useAppStore();
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      const normalized = normalizePath(window.location.pathname);
      setCurrentPath(normalized);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const authed = isAuthenticated();

  // Handle root path: auth-aware redirect
  let effectivePath = currentPath;
  if (currentPath === '/') {
    effectivePath = authed ? '/dashboard' : '/welcome';
  }

  const routeMatch = matchRoute(effectivePath);
  let { key: activeRouteKey, params } = routeMatch;

  // Auth guards: redirect unauthenticated users away from private routes
  if (!PUBLIC_ROUTE_KEYS.has(activeRouteKey) && activeRouteKey !== ROUTE_KEYS.NOT_FOUND && activeRouteKey !== ROUTE_KEYS.ONBOARDING && !authed) {
    activeRouteKey = ROUTE_KEYS.WELCOME;
  }

  // Redirect authenticated users away from login/signup/welcome to dashboard
  if (authed && AUTH_REDIRECT_ROUTES.has(activeRouteKey)) {
    activeRouteKey = ROUTE_KEYS.DASHBOARD;
  }

  // Redirect to onboarding if authenticated but not onboarded
  // (only when trying to access app routes, not public routes)
  if (authed && !hasCompletedOnboarding && !PUBLIC_ROUTE_KEYS.has(activeRouteKey) && activeRouteKey !== ROUTE_KEYS.ONBOARDING && activeRouteKey !== ROUTE_KEYS.NOT_FOUND) {
    activeRouteKey = ROUTE_KEYS.ONBOARDING;
  }

  // Wrap navigateTo with logout handling
  const handleNavigate = (path) => {
    // If navigating to welcome or login from an authenticated state with logout intent
    // The logout button specifically navigates to /welcome
    if (path === '/logout') {
      clearSession();
      navigateTo('/welcome');
      return;
    }
    navigateTo(path);
  };

  const navContextValue = {
    currentPath: effectivePath,
    activeRouteKey,
    params,
    navigateTo: handleNavigate
  };

  const renderActiveScreen = () => {
    switch (activeRouteKey) {
      case ROUTE_KEYS.WELCOME:
        return <Welcome onNavigate={handleNavigate} />;
      case ROUTE_KEYS.LOGIN:
        return <Login onNavigate={handleNavigate} />;
      case ROUTE_KEYS.SIGNUP:
        return <Signup onNavigate={handleNavigate} />;
      case ROUTE_KEYS.FORGOT_PASSWORD:
        return <ForgotPassword onNavigate={handleNavigate} />;
      case ROUTE_KEYS.ONBOARDING:
        return <Onboarding onNavigate={handleNavigate} />;
      case ROUTE_KEYS.DASHBOARD:
        return <Dashboard onNavigate={handleNavigate} />;
      case ROUTE_KEYS.CAREERS:
        return <Careers onNavigate={handleNavigate} />;
      case ROUTE_KEYS.CAREER_DETAIL:
        return <CareerDetail careerId={params.careerId || 'machine-learning-engineer'} onNavigate={handleNavigate} />;
      case ROUTE_KEYS.ASSESSMENT:
        return <Assessment onNavigate={handleNavigate} />;
      case ROUTE_KEYS.SKILL_GAP:
        return <SkillGap onNavigate={handleNavigate} />;
      case ROUTE_KEYS.LEARNING_PATH:
        return <LearningPath onNavigate={handleNavigate} />;
      case ROUTE_KEYS.COPILOT:
        return <Copilot onNavigate={handleNavigate} />;
      case ROUTE_KEYS.LEARNING_DETAIL:
        return <LearningDetail itemId={params.itemId || 'ml-fundamentals'} onNavigate={handleNavigate} />;
      case ROUTE_KEYS.PLANNER:
        return <Planner onNavigate={handleNavigate} />;
      case ROUTE_KEYS.ANALYTICS:
        return <Analytics onNavigate={handleNavigate} />;
      case ROUTE_KEYS.PROFILE:
        return <Profile onNavigate={handleNavigate} />;
      case ROUTE_KEYS.RESOURCES:
        return <Resources onNavigate={handleNavigate} />;
      case ROUTE_KEYS.PREFERENCES:
        return <Preferences onNavigate={handleNavigate} />;
      case ROUTE_KEYS.NOT_FOUND:
        return <NotFound onNavigate={handleNavigate} isAuthenticated={authed} />;
      default:
        return <NotFound onNavigate={handleNavigate} isAuthenticated={authed} />;
    }
  };

  return (
    <NavigationContext.Provider value={navContextValue}>
      {renderActiveScreen()}
    </NavigationContext.Provider>
  );
};

export const NavigationController = () => {
  return (
    <AppProvider>
      <ParallaxProvider>
        <NavigationRouter />
      </ParallaxProvider>
    </AppProvider>
  );
};

export default NavigationController;
