import React, { useState } from 'react';
import { 
  Mail, 
  LockKeyhole, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2 
} from 'lucide-react';
import { BrandNav } from '../auth/BrandNav';
import { AuthIntro } from '../auth/AuthIntro';

export const Login = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(false);

  // Compute password strength
  const getPasswordStrength = (pwd) => {
    if (!pwd) return null;
    if (pwd.length < 8) return { label: 'Too short', level: 'weak' };
    if (pwd.length >= 12 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) {
      return { label: 'Strong', level: 'strong' };
    }
    return { label: 'Good', level: 'medium' };
  };

  const strength = getPasswordStrength(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setNotice('');

    // Validation rules
    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setLoading(true);

    // Simulate fast authenticated session initialization
    setTimeout(() => {
      localStorage.setItem('margdarshak-session', JSON.stringify({
        authenticated: true,
        user: { email, name: email.split('@')[0] },
        timestamp: Date.now()
      }));

      setLoading(false);
      setNotice('Welcome back. Preparing your personalized journey…');

      // Check if profile was previously completed
      const hasCompletedProfile = localStorage.getItem('margdarshak-profile-completed') === 'true';

      setTimeout(() => {
        if (hasCompletedProfile) {
          onNavigate('/dashboard');
        } else {
          onNavigate('/onboarding');
        }
      }, 500);
    }, 700);
  };

  const handleUseDemo = () => {
    setEmail('demo@margdarshak.in');
    setPassword('Margdarshak@123');
    setNotice('Demo credentials loaded. Click "Sign In" to proceed.');
    setError('');
  };

  return (
    <main className="auth-page">
      <div className="auth-glow" />
      <BrandNav onNavigate={onNavigate} backPath="/welcome" backLabel="← Back to home" />

      <section className="auth-wrap">
        
        {/* Left Value Introduction */}
        <AuthIntro
          eyebrow="YOUR CAREER NAVIGATOR"
          headlineMain="Turn your ambition into a "
          headlineHighlight="clear path."
          description="Continue your personalized journey across skills, career targets, competency benchmarks, and learning milestones."
          proofPoints={[
            'Personalized skill mapping',
            'Career-aligned recommendations',
            'Adaptive learning paths'
          ]}
        />

        {/* Right Authentication Card */}
        <div className="auth-card glass-panel">
          
          <div className="auth-card-head">
            <span className="micro">WELCOME BACK</span>
            <h2>Sign in to Margdarshak</h2>
            <p>Continue where your career journey left off.</p>
          </div>

          <form onSubmit={handleSubmit}>
            
            {/* Email Field */}
            <label>
              Email address
              <div className={`input-wrap ${error && !email ? 'error' : ''}`}>
                <Mail size={16} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </label>

            {/* Password Field */}
            <label>
              Password
              <div className={`input-wrap ${error && password.length < 8 ? 'error' : ''}`}>
                <LockKeyhole size={16} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="input-action"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </label>

            {/* Password Strength Indicator */}
            {strength && (
              <div className="strength">
                <div className="strength-bar">
                  <i className={strength.level} />
                </div>
                <span>{strength.label}</span>
              </div>
            )}

            {/* Forgot Password Link */}
            <button
              type="button"
              className="forgot"
              onClick={() => onNavigate('/forgot-password')}
            >
              Forgot password?
            </button>

            {/* Error and Success Notices */}
            {error && (
              <div className="form-error">
                <AlertCircle size={14} />
                <span>{error}</span>
              </div>
            )}

            {notice && (
              <div className="form-success">
                <CheckCircle2 size={14} />
                <span>{notice}</span>
              </div>
            )}

            {/* Primary Auth CTA */}
            <button 
              type="submit" 
              className="primary-btn auth-submit" 
              disabled={loading}
            >
              <span>{loading ? 'Preparing your journey…' : 'Sign In'}</span>
              {!loading && <ArrowRight size={16} />}
            </button>

          </form>

          {/* Hackathon Demo Credentials Button */}
          <button 
            type="button" 
            className="demo-btn" 
            onClick={handleUseDemo}
          >
            <Sparkles size={15} />
            <span>Use demo credentials</span>
          </button>

          {/* New to Margdarshak Switch */}
          <div className="auth-switch">
            New to Margdarshak?{' '}
            <button type="button" onClick={() => onNavigate('/signup')}>
              Create account
            </button>
          </div>

        </div>

      </section>

    </main>
  );
};

export default Login;
