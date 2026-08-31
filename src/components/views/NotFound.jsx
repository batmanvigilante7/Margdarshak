import React from 'react';
import { Compass, ArrowRight, Home, LogIn } from 'lucide-react';

export const NotFound = ({ onNavigate, isAuthenticated = false }) => {
  return (
    <main className="auth-page">
      <div className="auth-glow" />

      <header className="auth-nav">
        <button 
          className="brand" 
          onClick={() => onNavigate(isAuthenticated ? '/dashboard' : '/welcome')} 
          aria-label="Margdarshak Home"
        >
          <span className="brand-mark">
            <Compass size={18} />
          </span>
          <span className="brand-text">
            <span>Margdarshak</span>
            <span className="brand-hindi">मार्गदर्शक</span>
          </span>
        </button>
      </header>

      <div className="forgot-wrap">
        <div className="auth-card glass-panel">
          <div className="forgot-success-state">
            <div className="success-orb" style={{ background: 'var(--color-rose-500, #e11d48)', opacity: 0.15 }}>
              <span style={{ fontSize: '32px' }}>404</span>
            </div>
            <span className="micro">PAGE NOT FOUND</span>
            <h2>This page doesn't exist</h2>
            <p className="muted">
              The page you're looking for may have been moved, deleted, or never existed. 
              Let's get you back on track.
            </p>

            <button 
              className="primary-btn auth-submit" 
              onClick={() => onNavigate(isAuthenticated ? '/dashboard' : '/welcome')}
            >
              {isAuthenticated ? (
                <>
                  <Home size={16} />
                  <span>Go to Dashboard</span>
                </>
              ) : (
                <>
                  <Home size={16} />
                  <span>Go to Home</span>
                </>
              )}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
