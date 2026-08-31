import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { BrandNav } from '../auth/BrandNav';

export const ForgotPassword = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !email.includes('@')) {
      setError('Enter a valid email address.');
      return;
    }

    setSent(true);
  };

  return (
    <main className="auth-page">
      <div className="auth-glow" />
      <BrandNav onNavigate={onNavigate} backPath="/login" backLabel="← Back to sign in" />

      <div className="forgot-wrap">
        <div className="auth-card glass-panel">
          
          {sent ? (
            <div className="forgot-success-state">
              <div className="success-orb">
                <CheckCircle2 size={24} />
              </div>
              <span className="micro">CHECK YOUR INBOX</span>
              <h2>Reset link sent</h2>
              <p className="muted">
                If an account exists for <strong className="text-white">{email}</strong>, we've sent password reset instructions.
              </p>
              <button 
                className="primary-btn auth-submit" 
                onClick={() => onNavigate('/login')}
              >
                <span>Return to Sign In</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <>
              <span className="micro">ACCOUNT RECOVERY</span>
              <h2>Forgot your password?</h2>
              <p className="muted">
                Enter your registered email address and we'll send you a recovery link to restore your journey.
              </p>

              <form onSubmit={handleSubmit}>
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
                      required
                    />
                  </div>
                </label>

                {error && (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    <span>{error}</span>
                  </div>
                )}

                <button type="submit" className="primary-btn auth-submit">
                  <span>Send Recovery Link</span>
                  <ArrowRight size={16} />
                </button>
              </form>

              <div className="auth-switch" style={{ marginTop: '20px' }}>
                Remember your password?{' '}
                <button type="button" onClick={() => onNavigate('/login')}>
                  Back to Sign In
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
