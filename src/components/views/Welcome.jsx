import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  ArrowRight, 
  Check, 
  Sparkles, 
  LockKeyhole, 
  GitCompare, 
  Route, 
  Sun, 
  Moon,
  Award,
  Layers,
  BookOpen
} from 'lucide-react';
import { ParallaxLayer } from '../../context/ParallaxContext';

const STAGES = [
  { id: 0, label: 'Where I am', number: '01' },
  { id: 1, label: 'Skill gap', number: '02' },
  { id: 2, label: "What's next", number: '03' }
];

export const Welcome = ({ onNavigate }) => {
  const [activeStage, setActiveStage] = useState(0);
  const [theme, setTheme] = useState(() => localStorage.getItem('margdarshak-theme') || 'dark');

  // Auto-progress through the 3 states every 3.5s with pause on hover
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  // Theme synchronization
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('margdarshak-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <main className="welcome">
      {/* Plane 1: Background Subtle Editorial Gradients */}
      <ParallaxLayer depth={1} scrollFactor={-0.03} className="ambient-wrap">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
      </ParallaxLayer>

      {/* 1. Navigation Bar */}
      <header className="nav">
        <button className="brand" onClick={() => onNavigate('/welcome')} aria-label="Margdarshak Home">
          <span className="brand-mark">
            <Compass size={18} />
          </span>
          <span className="brand-text">
            <span>Margdarshak</span>
            <span className="brand-hindi">मार्गदर्शक</span>
          </span>
        </button>

        <nav>
          <button className="nav-link" onClick={() => onNavigate('/careers')}>
            Explore Careers
          </button>
          <button className="nav-link" onClick={() => onNavigate('/login')}>
            Sign In
          </button>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </header>

      {/* Plane 2 & 3: Hero Section & Layered Atlas Header */}
      <ParallaxLayer depth={3} className="hero-parallax-layer">
        <section className="hero">
          <div className="eyebrow">
            <Sparkles size={13} />
            <span>AI-Powered Career & Learning Navigator</span>
          </div>

          <h1 className="hero-heading-editorial">
            Know where you're going.<br />
            <em className="serif">Know what to learn next.</em>
          </h1>

          <p className="hero-copy">
            Margdarshak maps your skills to your career goal, identifies the gaps that matter, and builds an adaptive learning path aligned with competency standards and industry needs.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => onNavigate('/signup')}>
              <span>Build My Learning Path</span>
              <ArrowRight size={17} />
            </button>
            <button className="secondary-btn" onClick={() => onNavigate('/careers')}>
              Explore Careers
            </button>
          </div>
        </section>
      </ParallaxLayer>

      {/* 3. Interactive Path Engine Preview with Restrained Depth */}
      <ParallaxLayer depth={2} className="engine-parallax-layer">
        <section className="engine glass-panel">
          
          {/* Engine Header */}
          <div className="engine-top">
            <div>
              <span className="micro">MARGDARSHAK PATH ENGINE</span>
              <span className="engine-caption">Competency-oriented career navigation</span>
            </div>
            <span className="sync">
              <i /> Context synchronized
            </span>
          </div>

          {/* Stage Tabs */}
          <div className="stage-tabs">
            {STAGES.map((s) => (
              <button
                key={s.id}
                className={`stage-tab ${activeStage === s.id ? 'active' : ''}`}
                onClick={() => setActiveStage(s.id)}
              >
                <span>{s.number}</span>
                {s.label}
              </button>
            ))}
          </div>

          {/* Engine Interactive Stage Content */}
          <div className="engine-body">
            
            {/* Stage 01: Where I am (Competency Assessment & Prior Learning) */}
            {activeStage === 0 && (
              <div className="preview-grid">
                <div>
                  <span className="micro">YOUR CURRENT COMPETENCY</span>
                  <h2>Where you are right now</h2>
                  <div className="bars">
                    <div className="skill-row">
                      <div>
                        <span>Python Programming</span>
                        <span className="mono">80%</span>
                      </div>
                      <div className="meter">
                        <span className="meter-fill emerald" style={{ width: '80%' }} />
                      </div>
                    </div>
                    <div className="skill-row">
                      <div>
                        <span>SQL & Data Modeling</span>
                        <span className="mono">60%</span>
                      </div>
                      <div className="meter">
                        <span className="meter-fill emerald" style={{ width: '60%' }} />
                      </div>
                    </div>
                    <div className="skill-row">
                      <div>
                        <span>Statistics Fundamentals</span>
                        <span className="mono">30%</span>
                      </div>
                      <div className="meter">
                        <span className="meter-fill amber" style={{ width: '30%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="state-card">
                  <div className="state-icon verified">
                    <Check size={18} />
                  </div>
                  <span className="micro">VERIFIED PROGRESS</span>
                  <strong>Strong Programming Base</strong>
                  <p>
                    Your verified prior learning becomes the foundational launchpad for your career transition.
                  </p>
                </div>
              </div>
            )}

            {/* Stage 02: Skill Gap Analysis */}
            {activeStage === 1 && (
              <div className="preview-grid">
                <div>
                  <span className="micro">TARGET BENCHMARK • NSQF LEVEL 6</span>
                  <h2>What stands between you and AI Engineer</h2>
                  <div className="bars">
                    <div className="skill-row">
                      <div>
                        <span>Machine Learning Fundamentals</span>
                        <span className="tone-rose">34% • CRITICAL</span>
                      </div>
                      <div className="meter">
                        <span className="meter-fill rose" style={{ width: '34%' }} />
                      </div>
                    </div>
                    <div className="skill-row">
                      <div>
                        <span>Statistics for ML</span>
                        <span className="tone-amber">42% • MODERATE</span>
                      </div>
                      <div className="meter">
                        <span className="meter-fill amber" style={{ width: '42%' }} />
                      </div>
                    </div>
                    <div className="skill-row">
                      <div>
                        <span>Deep Learning & PyTorch</span>
                        <span className="tone-rose">25% • CRITICAL</span>
                      </div>
                      <div className="meter">
                        <span className="meter-fill rose" style={{ width: '25%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="state-card">
                  <div className="state-icon gap">
                    <Sparkles size={18} />
                  </div>
                  <span className="micro">BRIDGE EFFORT</span>
                  <strong>42 Learning Hours</strong>
                  <p>
                    Margdarshak prioritizes high-impact prerequisite gaps before advanced modules.
                  </p>
                </div>
              </div>
            )}

            {/* Stage 03: Adaptive Roadmap */}
            {activeStage === 2 && (
              <div className="path-preview">
                <span className="micro">YOUR ADAPTIVE ROADMAP</span>
                <h2>What you should do next</h2>
                <div className="roadmap">
                  <div className="roadmap-item done">
                    <div className="node">
                      <Check size={14} />
                    </div>
                    <div className="roadmap-copy">
                      <strong>Python Foundations</strong>
                      <span>Completed & Verified</span>
                    </div>
                  </div>

                  <div className="roadmap-item active">
                    <div className="node">
                      <span>▶</span>
                    </div>
                    <div className="roadmap-copy">
                      <strong>Machine Learning Fundamentals</strong>
                      <span>Continue Milestone • 4h remaining</span>
                    </div>
                  </div>

                  <div className="roadmap-item next">
                    <div className="node">
                      <span>◇</span>
                    </div>
                    <div className="roadmap-copy">
                      <strong>Statistics for ML</strong>
                      <span>Recommended Next • Stage 3</span>
                    </div>
                  </div>

                  <div className="roadmap-item locked">
                    <div className="node">
                      <LockKeyhole size={13} />
                    </div>
                    <div className="roadmap-copy">
                      <strong>Deep Learning & Transformers</strong>
                      <span>Unlocks after Stage 3</span>
                    </div>
                  </div>

                  <div className="roadmap-item locked">
                    <div className="node">
                      <LockKeyhole size={13} />
                    </div>
                    <div className="roadmap-copy">
                      <strong>AI Engineering Capstone Project</strong>
                      <span>Final Industry Deliverable</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Engine Footer */}
          <div className="engine-footer">
            <span>
              CURRENT <span className="mono">NSQF 5</span> → TARGET <span className="mono accent-text">NSQF 6</span>
            </span>
            <span className="target">
              TARGET CAREER: <strong>AI Engineer</strong>
            </span>
          </div>

        </section>
      </ParallaxLayer>

      {/* 4. Three Value Principles */}
      <section className="value-principles">
        
        <div className="principle-card">
          <div className="principle-icon">
            <Compass size={17} />
          </div>
          <div>
            <h3>Understand</h3>
            <p>Know your current skills, verified competencies, and recognized prior learning.</p>
          </div>
        </div>

        <div className="principle-card">
          <div className="principle-icon">
            <GitCompare size={17} />
          </div>
          <div>
            <h3>Navigate</h3>
            <p>See exactly which skills and credentials separate you from your target career.</p>
          </div>
        </div>

        <div className="principle-card">
          <div className="principle-icon">
            <Route size={17} />
          </div>
          <div>
            <h3>Progress</h3>
            <p>Follow an adaptive roadmap that evolves dynamically as you learn and grow.</p>
          </div>
        </div>

      </section>

      {/* 5. Minimal Footer Note */}
      <footer className="footer-note">
        Built around competency • learning outcomes • career progression • Aligned with India's evolving skilling ecosystem
      </footer>

    </main>
  );
};

export const defaultExport = Welcome;
export default Welcome;

