import React, { useState } from 'react';
import { AppShell } from '../layout/AppShell';
import { CareerDetailHeader } from '../career-detail/CareerDetailHeader';
import { CareerDetailMetrics } from '../career-detail/CareerDetailMetrics';
import { CareerDetailOverview } from '../career-detail/CareerDetailOverview';
import { CareerCompetencyComparison } from '../career-detail/CareerCompetencyComparison';
import { CareerNSQFBenchmark } from '../career-detail/CareerNSQFBenchmark';
import { CareerMarketSnapshot } from '../career-detail/CareerMarketSnapshot';
import { CareerAIRecommendation } from '../career-detail/CareerAIRecommendation';
import { CheckCircle2 } from 'lucide-react';
import { useAppStore } from '../../context/AppContext';

export const CareerDetail = ({ careerId, onNavigate }) => {
  const { targetCareer: appTargetCareer, setTargetCareer, readinessScore, readinessGrowth } = useAppStore();
  const [toastMessage, setToastMessage] = useState(null);

  const career = {
    id: careerId || 'machine-learning-engineer',
    title: careerId === 'data-scientist' 
      ? 'Data Scientist & Analytics Specialist' 
      : careerId === 'fullstack-ai-dev'
        ? 'Full Stack AI Application Developer'
        : 'Machine Learning Engineer',
    description: 'Design, train, evaluate and deploy machine learning systems for real-world predictive applications.',
    nsqfLevel: 'NSQF Level 6',
    trackType: 'Core Competency Track',
    about: 'Machine Learning Engineers build and operationalize algorithms that learn from data to support predictive classification, recommendation systems, automated reasoning, and enterprise intelligence.',
    readiness: readinessScore,
    readinessGrowth: readinessGrowth,
    marketDemand: 'HIGH',
    openRoles: '2,400+',
    salaryRange: '₹8L – ₹18L',
    priorityGapsCount: 5,
    bridgeHours: 42
  };

  const isCurrentTarget = appTargetCareer?.id === career.id || appTargetCareer?.id === 'ai-engineer';

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSelectCareer = () => {
    setTargetCareer({
      id: career.id,
      title: career.title,
      nsqfLevel: career.nsqfLevel,
      trackType: career.trackType,
      description: career.description
    });
    showToast(`Career destination updated to ${career.title}. Roadmap recalculated.`);
  };

  return (
    <AppShell
      currentPath="/careers"
      onNavigate={onNavigate}
      pageTitle="CAREER TRACK DEEP-DIVE"
      pageSubtitle={`Occupational Benchmark: ${career.title}`}
    >
      <div className="career-detail-page-layout animate-fadeIn">
        
        {/* Toast Alert */}
        {toastMessage && (
          <div className="planner-toast-alert animate-fadeIn">
            <CheckCircle2 size={15} className="text-emerald" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* 1. Career Detail Header */}
        <CareerDetailHeader
          career={career}
          isCurrentTarget={isCurrentTarget}
          onSelectCareer={handleSelectCareer}
          onNavigate={onNavigate}
        />

        {/* 2. Key Metrics Row */}
        <CareerDetailMetrics
          readiness={career.readiness}
          readinessGrowth={career.readinessGrowth}
          marketDemand={career.marketDemand}
          openRoles={career.openRoles}
          salaryRange={career.salaryRange}
          priorityGapsCount={career.priorityGapsCount}
          bridgeHours={career.bridgeHours}
        />

        {/* 3. Career Overview & Responsibilities */}
        <CareerDetailOverview career={career} />

        {/* 4. Required Competencies & Dual-Meters */}
        <CareerCompetencyComparison onNavigate={onNavigate} />

        {/* 5. NSQF Level 6 Benchmark & Career Ladder */}
        <CareerNSQFBenchmark />

        {/* 6. Market Signals & Hiring Sectors */}
        <CareerMarketSnapshot />

        {/* 7. Margdarshak AI Recommendation */}
        <CareerAIRecommendation onNavigate={onNavigate} />

      </div>
    </AppShell>
  );
};

export default CareerDetail;
