import React from 'react';
import { Bell, Clock } from 'lucide-react';

export const NotificationPreferences = ({ notifications, reminderFrequency, onChange }) => {
  const toggleItems = [
    {
      key: 'learningReminders',
      title: 'Study Session Reminders',
      desc: 'Gentle nudges when your planned study sessions are scheduled.'
    },
    {
      key: 'milestoneUpdates',
      title: 'Milestone Progression Alerts',
      desc: 'Notifications when roadmap milestones are unlocked or verified.'
    },
    {
      key: 'skillGapAlerts',
      title: 'Competency & Gap Updates',
      desc: 'Alerts when your priority gap deficits shrink or change priority.'
    },
    {
      key: 'weeklySummary',
      title: 'Weekly Progress Digest',
      desc: 'End-of-week summary of verified competency velocity and hours logged.'
    }
  ];

  const frequencies = [
    { id: 'daily', label: 'Daily' },
    { id: 'weekdays', label: 'Weekdays' },
    { id: 'three_per_week', label: '3 Times a Week' },
    { id: 'weekly', label: 'Weekly' }
  ];

  const handleToggle = (key) => {
    const updated = {
      ...notifications,
      [key]: !notifications[key]
    };
    onChange('notifications', updated);
  };

  return (
    <div id="notifications" className="preferences-section-card glass-panel">
      
      <div className="section-title-line">
        <div className="title-left">
          <Bell size={16} className="text-brand-300" />
          <h3>Notifications & Communication Cadence</h3>
        </div>
        <span className="micro text-brand-300">DISCRETIONARY ALERTS</span>
      </div>

      {/* Toggle Rows */}
      <div className="toggles-stack">
        {toggleItems.map((item) => {
          const isEnabled = notifications[item.key] ?? true;
          return (
            <div key={item.key} className="toggle-setting-row">
              <div className="toggle-label-col">
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>

              <button
                type="button"
                className={`switch-toggle-btn ${isEnabled ? 'on' : 'off'}`}
                onClick={() => handleToggle(item.key)}
                aria-label={`Toggle ${item.title}`}
              >
                <span className="switch-thumb" />
                <span className="switch-state-text mono font-bold">
                  {isEnabled ? 'ON' : 'OFF'}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Frequency Row */}
      <div className="pref-setting-block reminder-freq-block">
        <div className="setting-header-row">
          <div className="setting-label-col">
            <strong>Study Reminder Frequency</strong>
            <p>Controls how often study cadence notifications are delivered.</p>
          </div>

          <div className="freq-pills-row">
            {frequencies.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`freq-pill-btn ${reminderFrequency === f.id ? 'active' : ''}`}
                onClick={() => onChange('reminderFrequency', f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default NotificationPreferences;
