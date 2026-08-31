import React from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ProfileCredentials = () => {
  const credentials = [
    {
      id: 'cred-1',
      title: 'Python Foundations Competency Credential',
      issuer: 'Margdarshak NCrF Diagnostic Engine',
      nsqf: 'NSQF Level 5',
      date: 'Aug 2026',
      verified: true
    },
    {
      id: 'cred-2',
      title: 'Machine Learning Fundamentals Micro-Credential',
      issuer: 'Margdarshak Evaluator & Milestone Verification',
      nsqf: 'NSQF Level 6',
      date: 'Aug 2026',
      verified: true
    },
    {
      id: 'cred-3',
      title: 'Introduction to Machine Learning Courseware',
      issuer: 'NPTEL • Swayam Open Education',
      nsqf: 'Verified External Resource',
      date: 'Jul 2026',
      verified: true,
      externalUrl: 'https://swayam.gov.in'
    }
  ];

  return (
    <div className="profile-credentials-section glass-panel">
      
      <div className="card-header-line">
        <div className="header-left">
          <ShieldCheck size={15} className="text-emerald" />
          <span className="micro">VERIFIED CREDENTIALS & MICRO-CREDENTIALS</span>
        </div>
        <span className="micro text-brand-300">NCrF ACCREDITED FORMAT</span>
      </div>

      <div className="credentials-list-grid">
        {credentials.map((c) => (
          <div key={c.id} className="credential-card-item glass-panel">
            <div className="cred-top-row">
              <div className="cred-icon-box">
                <Award size={18} className="text-emerald" />
              </div>
              <span className="nsqf-badge level-6">{c.nsqf}</span>
            </div>

            <div className="cred-main-info">
              <h4>{c.title}</h4>
              <span className="cred-issuer-text">{c.issuer}</span>
            </div>

            <div className="cred-footer-row">
              <div className="cred-verified-tag">
                <CheckCircle2 size={12} className="text-emerald" />
                <span className="mono">Verified {c.date}</span>
              </div>

              {c.externalUrl && (
                <a 
                  href={c.externalUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="external-cred-link"
                >
                  <span>Verify</span>
                  <ExternalLink size={11} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProfileCredentials;
