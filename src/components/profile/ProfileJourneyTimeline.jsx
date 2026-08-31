import React from 'react';
import { Route, CheckCircle2, Clock } from 'lucide-react';

export const ProfileJourneyTimeline = () => {
  const steps = [
    { title: 'Joined Margdarshak Platform', date: 'Aug 10, 2026', done: true },
    { title: 'Completed Initial Diagnostic Assessment', date: 'Aug 12, 2026', done: true },
    { title: 'First Verified Benchmark: Python Foundations (84%)', date: 'Aug 15, 2026', done: true },
    { title: 'Achieved 50% Role Readiness Threshold', date: 'Aug 21, 2026', done: true },
    { title: 'Passed Machine Learning Competency Checkpoint', date: 'Aug 31, 2026', done: true },
    { title: 'Active Milestone: Model Evaluation & Metrics', date: 'In Progress', active: true }
  ];

  return (
    <div className="profile-journey-card glass-panel">
      
      <div className="card-header-line">
        <div className="header-left">
          <Route size={15} className="text-brand-300" />
          <span className="micro">LEARNER JOURNEY TIMELINE</span>
        </div>
        <span className="micro text-brand-300">PROGRESS LOG</span>
      </div>

      <div className="journey-timeline-stack">
        {steps.map((st, idx) => (
          <div key={idx} className={`journey-step-item ${st.active ? 'active' : 'done'}`}>
            <div className="journey-node-line">
              <div className={`journey-circle ${st.active ? 'active' : 'done'}`}>
                {st.done && <CheckCircle2 size={13} className="text-emerald" />}
                {st.active && <span className="active-dot" />}
              </div>
              {idx < steps.length - 1 && <div className="journey-connector" />}
            </div>

            <div className="journey-step-copy">
              <strong>{st.title}</strong>
              <span className="journey-date mono">{st.date}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProfileJourneyTimeline;
