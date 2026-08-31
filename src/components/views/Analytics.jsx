import React, { useState } from 'react';
import { AppShell } from '../layout/AppShell';
import { AnalyticsHeader } from '../analytics/AnalyticsHeader';
import { AnalyticsKPIGrid } from '../analytics/AnalyticsKPIGrid';
import { AnalyticsReadinessHero } from '../analytics/AnalyticsReadinessHero';
import { AnalyticsGrowthChart } from '../analytics/AnalyticsGrowthChart';
import { AnalyticsSkillBreakdown } from '../analytics/AnalyticsSkillBreakdown';
import { AnalyticsNSQFProgression } from '../analytics/AnalyticsNSQFProgression';
import { AnalyticsEvidencePanel } from '../analytics/AnalyticsEvidencePanel';
import { AnalyticsAIInsight } from '../analytics/AnalyticsAIInsight';

export const Analytics = ({ onNavigate }) => {
  const [timeRange, setTimeRange] = useState('30d');

  // Check if milestone was marked completed in localStorage
  const isMlCompleted = (() => {
    try {
      return localStorage.getItem('margdarshak-milestone-ml-completed') === 'true';
    } catch {
      return false;
    }
  })();

  const readinessScore = isMlCompleted ? 74 : 64;
  const growthPoints = isMlCompleted ? 22 : 12;

  return (
    <AppShell
      currentPath="/analytics"
      onNavigate={onNavigate}
      pageTitle="LEARNING INTELLIGENCE"
      pageSubtitle="Competency growth & role readiness metrics"
    >
      <div className="analytics-page-layout animate-fadeIn">
        
        {/* 1. Page Header with Time Filters */}
        <AnalyticsHeader
          timeRange={timeRange}
          onSelectTimeRange={(t) => setTimeRange(t)}
        />

        {/* 2. Top KPI Cards Grid */}
        <AnalyticsKPIGrid
          readiness={readinessScore}
          readinessGrowth={growthPoints}
          competencyGrowth={18}
          activeSkills={7}
          totalSkills={12}
          learningVelocity={2.4}
        />

        {/* 3. Hero Readiness Card */}
        <AnalyticsReadinessHero
          readiness={readinessScore}
          growth={growthPoints}
          targetCareer="AI Engineer"
          nsqfLevel="NSQF Level 6"
          onNavigate={onNavigate}
        />

        {/* 4. Competency Growth Chart */}
        <AnalyticsGrowthChart />

        {/* 5. Skill Competencies & Gap Reduction Meters */}
        <AnalyticsSkillBreakdown onNavigate={onNavigate} />

        {/* 6. NSQF Level 5-7 Progression Stepper */}
        <AnalyticsNSQFProgression />

        {/* 7. Assessment Performance & Verified Evidence */}
        <AnalyticsEvidencePanel onNavigate={onNavigate} />

        {/* 8. AI Contextual Insight Card */}
        <AnalyticsAIInsight onNavigate={onNavigate} />

      </div>
    </AppShell>
  );
};

export default Analytics;
