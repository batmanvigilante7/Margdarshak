import React from 'react';
import { Compass, ArrowLeft } from 'lucide-react';

export const BrandNav = ({ 
  onNavigate, 
  backPath = '/welcome', 
  backLabel = '← Back to home' 
}) => {
  return (
    <header className="auth-nav">
      <button 
        className="brand" 
        onClick={() => onNavigate('/welcome')} 
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

      <button 
        className="back-link" 
        onClick={() => onNavigate(backPath)}
      >
        {backLabel}
      </button>
    </header>
  );
};

export default BrandNav;
