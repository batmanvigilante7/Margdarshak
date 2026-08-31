import React, { useState } from 'react';
import { AppShell } from '../layout/AppShell';
import { PreferencesHeader } from '../preferences/PreferencesHeader';
import { SettingsNavigation } from '../preferences/SettingsNavigation';
import { LearningPreferences } from '../preferences/LearningPreferences';
import { NotificationPreferences } from '../preferences/NotificationPreferences';
import { AppearancePreferences } from '../preferences/AppearancePreferences';
import { AccessibilityPreferences } from '../preferences/AccessibilityPreferences';
import { DataPrivacyPreferences } from '../preferences/DataPrivacyPreferences';
import { ResetConfirmationModal } from '../preferences/ResetConfirmationModal';
import { CheckCircle2 } from 'lucide-react';
import { useAppStore } from '../../context/AppContext';

export const Preferences = ({ onNavigate }) => {
  const { 
    user, 
    targetCareer, 
    preferences, 
    updatePreferences, 
    resetLearningProgress,
    isMlCompleted
  } = useAppStore();

  const [activeSection, setActiveSection] = useState('learning');
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handlePreferenceChange = (key, value) => {
    updatePreferences({ [key]: value });

    if (key === 'weeklyHours') {
      showToast(`Study availability updated to ${value} hours/week. Roadmap recalculated.`);
    } else if (key === 'language') {
      showToast('Preferred language updated.');
    } else if (key === 'theme') {
      showToast(`Theme mode set to ${value}.`);
    } else if (key === 'accent') {
      showToast(`Accent color set to ${value}.`);
    } else {
      showToast('Preferences saved.');
    }
  };

  const handleExportData = () => {
    try {
      const exportObject = {
        exportedAt: new Date().toISOString(),
        platform: 'Margdarshak Career Navigator (NCrF / NSQF Aligned)',
        profile: user,
        targetCareer: targetCareer,
        preferences: preferences,
        completedMilestones: {
          mlFundamentals: isMlCompleted
        }
      };

      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObject, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "margdarshak_learning_portfolio.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();

      showToast('Learning data exported successfully.');
    } catch {
      showToast('Failed to export data.');
    }
  };

  const handleConfirmReset = () => {
    resetLearningProgress();
    setIsResetModalOpen(false);
    showToast('Learning progress reset to onboarding baseline.');
  };

  const handleScrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppShell
      currentPath="/preferences"
      onNavigate={onNavigate}
      pageTitle="PREFERENCES & SETTINGS"
      pageSubtitle="Adaptive learning parameters & data controls"
    >
      <div className="preferences-page-layout animate-fadeIn">
        
        {/* Toast Alert */}
        {toastMessage && (
          <div className="planner-toast-alert animate-fadeIn">
            <CheckCircle2 size={15} className="text-emerald" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* 1. Header */}
        <PreferencesHeader />

        {/* 2. Main Two-Column Layout */}
        <div className="preferences-columns-grid">
          
          {/* Left Navigation Index */}
          <div className="pref-sidebar-column">
            <SettingsNavigation
              activeSection={activeSection}
              onSelectSection={handleScrollToSection}
            />
          </div>

          {/* Right Configuration Panels */}
          <div className="pref-content-column">
            
            {/* Learning Preferences */}
            <LearningPreferences
              preferences={preferences}
              onChange={handlePreferenceChange}
              onNavigate={onNavigate}
            />

            {/* Notifications */}
            <NotificationPreferences
              notifications={preferences.notifications}
              reminderFrequency={preferences.reminderFrequency || 'three_per_week'}
              onChange={handlePreferenceChange}
            />

            {/* Appearance */}
            <AppearancePreferences
              theme={preferences.theme || 'dark'}
              accent={preferences.accent || 'indigo'}
              onChange={handlePreferenceChange}
            />

            {/* Accessibility */}
            <AccessibilityPreferences
              accessibility={preferences.accessibility}
              onChange={handlePreferenceChange}
            />

            {/* Data & Privacy */}
            <DataPrivacyPreferences
              onExportData={handleExportData}
              onOpenResetModal={() => setIsResetModalOpen(true)}
            />

          </div>

        </div>

      </div>

      {/* Danger Zone Reset Modal */}
      {isResetModalOpen && (
        <ResetConfirmationModal
          onConfirmReset={handleConfirmReset}
          onClose={() => setIsResetModalOpen(false)}
        />
      )}

    </AppShell>
  );
};

export default Preferences;
