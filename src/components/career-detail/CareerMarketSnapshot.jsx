import React from 'react';
import { Briefcase, TrendingUp, Building2, DollarSign } from 'lucide-react';

export const CareerMarketSnapshot = () => {
  const hiringSectors = [
    'Technology & SaaS Platforms',
    'Financial Services & FinTech',
    'Healthcare & Clinical Diagnostics',
    'E-Commerce & Retail AI',
    'Automotive & Autonomous Systems',
    'DeepTech & Applied Research Labs'
  ];

  return (
    <div className="career-market-section glass-panel">
      
      <div className="card-header-line">
        <div className="header-left">
          <Briefcase size={15} className="text-sky-400" />
          <span className="micro text-sky-400">INDUSTRY MARKET SNAPSHOT</span>
        </div>
        <span className="market-live-tag mono">✦ Real-time aggregated industry signals</span>
      </div>

      <div className="market-metrics-grid">
        <div className="market-metric-box">
          <span className="micro">EMPLOYMENT DEMAND</span>
          <strong className="mono text-sky-400">HIGH DEMAND</strong>
          <span className="subtext">2,400+ open enterprise openings</span>
        </div>

        <div className="market-metric-box">
          <span className="micro">ANNUAL COMPENSATION BAND</span>
          <strong className="mono text-emerald">₹8L – ₹18L</strong>
          <span className="subtext">Entry-to-mid career baseline</span>
        </div>

        <div className="market-metric-box">
          <span className="micro">YEAR-OVER-YEAR GROWTH</span>
          <strong className="mono text-brand-300">↑ +28% YoY</strong>
          <span className="subtext">Accelerating enterprise adoption</span>
        </div>
      </div>

      {/* Typical Hiring Sectors */}
      <div className="hiring-sectors-block">
        <span className="micro text-sky-400">KEY HIRING INDUSTRY SECTORS:</span>
        <div className="sectors-chips-grid">
          {hiringSectors.map((sec, idx) => (
            <div key={idx} className="sector-chip">
              <Building2 size={12} className="text-sky-400" />
              <span>{sec}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CareerMarketSnapshot;
