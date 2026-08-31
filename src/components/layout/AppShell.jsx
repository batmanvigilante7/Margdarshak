import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  LayoutDashboard, 
  Briefcase, 
  CheckSquare, 
  GitCompare, 
  Route, 
  Bot, 
  Calendar, 
  BarChart3, 
  User, 
  FolderOpen, 
  Settings,
  Sun, 
  Moon, 
  Bell, 
  Search, 
  Menu, 
  X,
  LogOut
} from 'lucide-react';
import { useAppStore } from '../../context/AppContext';

export const AppShell = ({ 
  currentPath = '/dashboard', 
  onNavigate, 
  children,
  pageTitle = 'Command Center',
  pageSubtitle = 'Your career journey'
}) => {
  const { user, targetCareer, preferences, updatePreferences } = useAppStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theme = preferences?.theme || 'dark';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    updatePreferences({ theme: nextTheme });
  };

  const navItemsPrimary = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/careers', label: 'Careers', icon: Briefcase, matchPrefix: '/careers' },
    { path: '/assessment', label: 'Assessment', icon: CheckSquare },
    { path: '/skill-gap', label: 'Skill Gap', icon: GitCompare },
    { path: '/path', label: 'Learning Path', icon: Route, matchPrefix: '/learn' },
    { path: '/copilot', label: 'AI Copilot', icon: Bot, isAi: true }
  ];

  const navItemsSecondary = [
    { path: '/planner', label: 'Planner', icon: Calendar },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/resources', label: 'Resources', icon: FolderOpen },
    { path: '/profile', label: 'Learner Profile', icon: User },
    { path: '/preferences', label: 'Preferences', icon: Settings }
  ];

  const handleNav = (path) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  const initials = user?.name ? user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'HS';

  return (
    <div className="app-shell">
      
      {/* 1. Sidebar Navigation */}
      <aside className={`app-sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        
        {/* Brand */}
        <div className="sidebar-brand-wrap">
          <button className="brand" onClick={() => handleNav('/dashboard')} aria-label="Margdarshak Home">
            <span className="brand-mark">
              <Compass size={18} />
            </span>
            <span className="brand-text">
              <span>Margdarshak</span>
              <span className="brand-hindi">मार्गदर्शक</span>
            </span>
          </button>
        </div>

        {/* Primary Navigation */}
        <nav className="sidebar-nav">
          <span className="sidebar-section-label">CORE WORKSPACE</span>
          <div className="sidebar-links-stack">
            {navItemsPrimary.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path || 
                (item.path === '/dashboard' && currentPath === '/') ||
                (item.matchPrefix && currentPath.startsWith(item.matchPrefix));
              return (
                <button
                  key={item.path}
                  className={`sidebar-nav-item ${isActive ? 'active' : ''} ${item.isAi ? 'ai-item' : ''}`}
                  onClick={() => handleNav(item.path)}
                >
                  <Icon size={17} className="sidebar-icon" />
                  <span>{item.label}</span>
                  {isActive && <div className="active-pill-indicator" />}
                </button>
              );
            })}
          </div>

          {/* Secondary Navigation */}
          <span className="sidebar-section-label" style={{ marginTop: '20px' }}>LEARNING SUITE</span>
          <div className="sidebar-links-stack">
            {navItemsSecondary.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleNav(item.path)}
                >
                  <Icon size={17} className="sidebar-icon" />
                  <span>{item.label}</span>
                  {isActive && <div className="active-pill-indicator" />}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Sidebar Footer User Card */}
        <div className="sidebar-footer">
          <div className="user-mini-card" onClick={() => handleNav('/profile')} style={{ cursor: 'pointer' }}>
            <div className="user-avatar-circle">{initials}</div>
            <div className="user-mini-copy">
              <strong>{user?.name || 'Hemanth Sai'}</strong>
              <span>Target: {targetCareer?.title || 'AI Engineer'}</span>
            </div>
          </div>
          <button 
            className="sidebar-logout-btn" 
            onClick={() => handleNav('/logout')} 
            title="Sign out / Switch account"
          >
            <LogOut size={15} />
          </button>
        </div>

      </aside>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div className="mobile-backdrop" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* 2. Main Content View Area */}
      <div className="app-main-viewport">
        
        {/* Top Header Bar */}
        <header className="app-top-header">
          <div className="header-left">
            <button 
              className="mobile-hamburger-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="header-page-titles">
              <span className="micro">{pageTitle}</span>
              <h1>{pageSubtitle}</h1>
            </div>
          </div>

          <div className="header-right">
            {/* Quick Command Trigger */}
            <div className="header-search-trigger" onClick={() => handleNav('/copilot')}>
              <Search size={14} />
              <span>Ask or search anything…</span>
              <span className="cmd-badge">⌘ K</span>
            </div>

            {/* Notifications */}
            <button 
              className="header-icon-btn" 
              onClick={() => handleNav('/preferences')}
              aria-label="Notifications"
              title="Notifications & Settings"
            >
              <Bell size={16} />
              <span className="notification-dot" />
            </button>

            {/* Theme Toggle */}
            <button 
              className="header-icon-btn" 
              onClick={toggleTheme} 
              aria-label="Toggle Theme"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Avatar Pill */}
            <div 
              className="header-user-avatar" 
              onClick={() => handleNav('/profile')}
              title="View Learner Profile"
              style={{ cursor: 'pointer' }}
            >
              <span>{initials}</span>
            </div>
          </div>
        </header>

        {/* Slot for View Content */}
        <main className="app-page-content">
          {children}
        </main>

      </div>

    </div>
  );
};

export default AppShell;
