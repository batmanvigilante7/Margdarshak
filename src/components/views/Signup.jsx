import React, { useState } from 'react';
import { 
  Mail, 
  LockKeyhole, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  AlertCircle, 
  User 
} from 'lucide-react';
import { BrandNav } from '../auth/BrandNav';
import { AuthIntro } from '../auth/AuthIntro';

export const Signup = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

    if (!name.trim()) {
      setError('Please enter your full name.');
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

    setTimeout(() => {
      localStorage.setItem('margdarshak-session', JSON.stringify({
        authenticated: true,
        user: { email, name },
        timestamp: Date.now()
      }));

      setLoading(false);
      onNavigate('/onboarding');
    }, 700);
  };

  return (
    <main className="auth-page">
      <div className="auth-glow" />
      <BrandNav onNavigate={onNavigate} backPath="/login" backLabel="← Back to sign in" />

      <section className="auth-wrap signup-wrap">
        
        <AuthIntro
          eyebrow="START YOUR JOURNEY"
          headlineMain="Build a path that "
          headlineHighlight="fits you."
          description="Tell Margdarshak where you want to go. We'll help map the competencies, benchmarks, and milestones to get you there."
          proofPoints={[
            'Recognize prior learning & existing skills',
            'Target verified NSQF Levels 4 to 8',
            'Dynamic milestones with real project deliverables'
          ]}
        />

        <div className="auth-card glass-panel">
          
          <div className="auth-card-head">
            <span className="micro">NEW LEARNER</span>
            <h2>Create your account</h2>
            <p>Your career journey starts with a few simple details.</p>
          </div>

          <form onSubmit={handleSubmit}>
            
            {/* Full Name Field */}
            <label>
              Full name
              <div className="input-wrap">
                <User size={16} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aarav Sharma"
                  autoComplete="name"
                />
              </div>
            </label>

            {/* Email Field */}
            <label>
              Email address
              <div className="input-wrap">
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
              <div className="input-wrap">
                <LockKeyhole size={16} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  autoComplete="new-password"
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

            {strength && (
              <div className="strength">
                <div className="strength-bar">
                  <i className={strength.level} />
                </div>
                <span>{strength.label}</span>
              </div>
            )}

            {error && (
              <div className="form-error">
                <AlertCircle size={14} />
                <span>{error}</span>
              </div>
            )}

            <button 
              type="submit" 
              className="primary-btn auth-submit" 
              disabled={loading}
            >
              <span>{loading ? 'Creating your account…' : 'Create Account'}</span>
              {!loading && <ArrowRight size={16} />}
            </button>

          </form>

          <div className="auth-switch">
            Already have an account?{' '}
            <button type="button" onClick={() => onNavigate('/login')}>
              Sign in
            </button>
          </div>

        </div>

      </section>

    </main>
  );
};

export default Signup;
