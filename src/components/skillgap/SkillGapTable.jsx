import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export const SkillGapTable = ({ competencies, onExplore, onNavigate }) => {
  return (
    <div className="compact-matrix-table-wrap glass-panel animate-fadeIn">
      <table className="compact-matrix-table">
        <thead>
          <tr>
            <th>COMPETENCY</th>
            <th>CATEGORY</th>
            <th>CURRENT</th>
            <th>TARGET</th>
            <th>GAP DELTA</th>
            <th>ESTIMATED EFFORT</th>
            <th>STATUS</th>
            <th style={{ textAlign: 'right' }}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {competencies.map((comp) => {
            const gap = Math.max(0, comp.benchmarkScore - comp.currentScore);
            return (
              <tr key={comp.id}>
                <td>
                  <strong>{comp.name}</strong>
                </td>
                <td>
                  <span className="table-cat-badge">{comp.category}</span>
                </td>
                <td className="mono font-bold">{comp.currentScore}%</td>
                <td className="mono text-brand-300 font-bold">{comp.benchmarkScore}%</td>
                <td className="mono">
                  {gap === 0 ? (
                    <span className="text-emerald">0 pts</span>
                  ) : (
                    <span className="text-rose font-bold">-{gap} pts</span>
                  )}
                </td>
                <td className="mono">
                  <span className="table-effort-pill">
                    <Clock size={11} />
                    <span>~{comp.bridgeHours}h</span>
                  </span>
                </td>
                <td>
                  <span className={`status-pill ${comp.status}`}>
                    {comp.statusLabel}
                  </span>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <button 
                    type="button" 
                    className="table-action-btn"
                    onClick={() => onExplore(comp)}
                  >
                    <span>Options</span>
                    <ArrowRight size={12} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SkillGapTable;
