import React, { useState } from 'react';
import { TrendingUp, Sparkles } from 'lucide-react';

export const AnalyticsGrowthChart = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const data = [
    { week: 'Week 1', date: 'Aug 10', score: 42, label: 'Diagnostic Baseline' },
    { week: 'Week 2', date: 'Aug 17', score: 49, label: 'Python Verified' },
    { week: 'Week 3', date: 'Aug 24', score: 56, label: 'Supervised ML Lab' },
    { week: 'Week 4', date: 'Aug 31', score: 64, label: 'ML Checkpoint Passed' }
  ];

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = 180;
  const paddingX = 45;
  const paddingY = 25;

  const getX = (idx) => paddingX + (idx / (data.length - 1)) * (svgWidth - 2 * paddingX);
  const getY = (score) => svgHeight - paddingY - (score / 100) * (svgHeight - 2 * paddingY);

  const points = data.map((d, idx) => `${getX(idx)},${getY(d.score)}`).join(' ');
  const areaPoints = `${getX(0)},${svgHeight - paddingY} ${points} ${getX(data.length - 1)},${svgHeight - paddingY}`;

  return (
    <div className="competency-growth-card glass-panel animate-fadeIn">
      
      <div className="growth-chart-header">
        <div className="header-left">
          <TrendingUp size={15} className="text-brand-300" />
          <span className="micro">COMPETENCY TRAJECTORY OVER TIME</span>
        </div>
        <div className="growth-delta-badge mono">
          <strong>+22 percentage points</strong>
          <span>since onboarding baseline</span>
        </div>
      </div>

      <div className="chart-canvas-wrap">
        <svg 
          viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
          className="growth-svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="growthAreaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[20, 40, 60, 80, 100].map((val) => (
            <g key={val}>
              <line 
                x1={paddingX} 
                y1={getY(val)} 
                x2={svgWidth - paddingX} 
                y2={getY(val)} 
                stroke="rgba(255,255,255,0.06)" 
                strokeDasharray="3,3" 
              />
              <text 
                x={paddingX - 8} 
                y={getY(val) + 3} 
                fill="#64748b" 
                fontSize="9" 
                textAnchor="end" 
                className="mono"
              >
                {val}%
              </text>
            </g>
          ))}

          {/* Area Fill */}
          <polygon points={areaPoints} fill="url(#growthAreaGradient)" />

          {/* Trend Line */}
          <polyline 
            points={points} 
            fill="none" 
            stroke="#6366f1" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* Data Points */}
          {data.map((d, idx) => {
            const cx = getX(idx);
            const cy = getY(d.score);
            const isHovered = hoveredPoint === idx;

            return (
              <g 
                key={idx} 
                className="chart-data-node"
                onMouseEnter={() => setHoveredPoint(idx)}
                onMouseLeave={() => setHoveredPoint(null)}
                style={{ cursor: 'pointer' }}
              >
                <circle 
                  cx={cx} 
                  cy={cy} 
                  r={isHovered ? 6 : 4.5} 
                  fill="#ffffff" 
                  stroke="#6366f1" 
                  strokeWidth="2.5" 
                />
                
                <text 
                  x={cx} 
                  y={svgHeight - 6} 
                  fill="#94a3b8" 
                  fontSize="10" 
                  textAnchor="middle" 
                  className="mono"
                >
                  {d.week}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Hover Tooltip display */}
        {hoveredPoint !== null && (
          <div className="chart-tooltip glass-panel mono animate-fadeIn">
            <strong>{data[hoveredPoint].week} ({data[hoveredPoint].date})</strong>
            <span className="tooltip-score text-emerald font-bold">{data[hoveredPoint].score}% Readiness</span>
            <span className="tooltip-label">{data[hoveredPoint].label}</span>
          </div>
        )}
      </div>

    </div>
  );
};

export default AnalyticsGrowthChart;
