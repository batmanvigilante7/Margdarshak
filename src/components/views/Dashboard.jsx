import React from 'react';
import { AppShell } from '../layout/AppShell';
import { ReadinessRadial } from '../dashboard/ReadinessRadial';
import { NextMilestoneCard } from '../dashboard/NextMilestoneCard';
import { PriorityGapsCard } from '../dashboard/PriorityGapsCard';
import { WeeklyGoalCard } from '../dashboard/WeeklyGoalCard';
import { CareerTargetCard } from '../dashboard/CareerTargetCard';
import { CopilotTeaserCard } from '../dashboard/CopilotTeaserCard';
import { Sparkles, Award } from 'lucide-react';
import { useAppStore } from '../../context/AppContext';

export const Dashboard = ({ onNavigate }) => {
  const { user, targetCareer, readinessScore } = useAppStore();

  return (
    <AppShell 
      currentPath="/dashboard" 
      onNavigate={onNavigate}
      pageTitle="COMMAND CENTER"
      pageSubtitle="Your career journey"
    >
      <div className="dashboard-content-wrapper animate-fadeIn">
        
        {/* 1. Hero Greeting Banner */}
        <section className="dashboard-greeting-hero">
          <div className="greeting-text">
            <div className="greeting-eyebrow">
              <Sparkles size={13} />
              <span>NAVIGATOR COMMAND CENTER</span>
            </div>
            <h2>Good morning, {user.name}.</h2>
            <p>
              You're building toward <strong className="text-white">{targetCareer.title}</strong>.
            </p>
          </div>

          <div className="greeting-badge">
            <span className="badge-label">TARGET BENCHMARK</span>
            <span className="badge-value mono">
              <Award size={14} />
              <span>{targetCareer.nsqfLevel}</span>
            </span>
          </div>
        </section>

        {/* 2. Top Metric & Active Milestone Grid */}
        <section className="dashboard-grid-row top-row">
          <ReadinessRadial 
            score={readinessScore} 
            targetCareer={targetCareer.title} 
            currentNsqf="NSQF 5" 
            targetNsqf={targetCareer.nsqfLevel}
            onNavigate={onNavigate} 
          />

          <NextMilestoneCard 
            onNavigate={onNavigate} 
          />
        </section>

        {/* 3. Skill Gaps & Secondary Metrics Grid */}
        <section className="dashboard-grid-row middle-row">
          <PriorityGapsCard 
            onNavigate={onNavigate} 
          />

          <div className="dashboard-secondary-column">
            <WeeklyGoalCard 
              onNavigate={onNavigate} 
            />
            
            <CareerTargetCard 
              career={{
                title: targetCareer.title,
                nsqfLevel: targetCareer.nsqfLevel,
                alignment: targetCareer.matchScore || 72,
                domain: targetCareer.trackType || 'Artificial Intelligence'
              }}
              onNavigate={onNavigate} 
            />
          </div>
        </section>

        {/* 4. AI Copilot Teaser Strip */}
        <section className="dashboard-grid-row bottom-row">
          <CopilotTeaserCard 
            onNavigate={onNavigate} 
          />
        </section>

      </div>
    </AppShell>
  );
};

export default Dashboard;
