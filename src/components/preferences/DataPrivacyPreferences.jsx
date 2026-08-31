import React from 'react';
import { Database, Download, AlertTriangle, Trash2, FileJson, ShieldCheck } from 'lucide-react';

export const DataPrivacyPreferences = ({ onExportData, onOpenResetModal }) => {
  return (
    <div id="data" className="preferences-section-card glass-panel">
      
      <div className="section-title-line">
        <div className="title-left">
          <Database size={16} className="text-brand-300" />
          <h3>Data Ownership & Privacy</h3>
        </div>
        <span className="micro text-brand-300">USER SOVEREIGNTY</span>
      </div>

      {/* 1. Export Data Block */}
      <div className="pref-setting-block">
        <div className="setting-header-row">
          <div className="setting-label-col">
            <div className="item-title-wrap">
              <FileJson size={14} className="text-brand-300" />
              <strong>Export Learning & Competency Portfolio</strong>
            </div>
            <p>
              Download a complete JSON snapshot of your verified competencies, milestone deliverables, and diagnostic assessment trajectory.
            </p>
          </div>

          <button
            type="button"
            className="secondary-btn export-btn"
            onClick={onExportData}
          >
            <Download size={13} />
            <span>Export Data (JSON)</span>
          </button>
        </div>
      </div>

      {/* 2. Danger Zone: Reset Learning Progress */}
      <div className="pref-setting-block danger-zone-block">
        <div className="setting-header-row">
          <div className="setting-label-col">
            <div className="item-title-wrap text-rose-400">
              <AlertTriangle size={14} />
              <strong>Danger Zone: Reset Learning Progress</strong>
            </div>
            <p>
              Permanently clears completed milestones, quiz checkpoint scores, and practice velocity history. Your target career and account profile remain intact.
            </p>
          </div>

          <button
            type="button"
            className="danger-btn reset-progress-btn"
            onClick={onOpenResetModal}
          >
            <Trash2 size={13} />
            <span>Reset Progress</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default DataPrivacyPreferences;
