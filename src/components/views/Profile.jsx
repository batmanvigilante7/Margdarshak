import React, { useState, useEffect } from 'react';
import { AppShell } from '../layout/AppShell';
import { ProfileHero } from '../profile/ProfileHero';
import { ProfileCompletionCard } from '../profile/ProfileCompletionCard';
import { ProfileCareerReadiness } from '../profile/ProfileCareerReadiness';
import { ProfileCompetencies } from '../profile/ProfileCompetencies';
import { ProfileEvidencePortfolio } from '../profile/ProfileEvidencePortfolio';
import { ProfileCredentials } from '../profile/ProfileCredentials';
import { ProfileJourneyTimeline } from '../profile/ProfileJourneyTimeline';
import { EditProfileDrawer } from '../profile/EditProfileDrawer';
import { AddSkillModal } from '../profile/AddSkillModal';
import { CheckCircle2 } from 'lucide-react';

const DEFAULT_PROFILE = {
  name: 'Hemanth Sai',
  degree: 'B.Tech Computer Science',
  institution: 'GITAM University',
  semester: 'Semester 3',
  bio: 'Computer Science learner focused on building strong foundations in software engineering, data, and applied machine learning.'
};

export const Profile = ({ onNavigate }) => {
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('margdarshak-user-profile');
      return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [isAddSkillModalOpen, setIsAddSkillModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Check if milestone was completed to dynamically compute verified readiness
  const isMlCompleted = (() => {
    try {
      return localStorage.getItem('margdarshak-milestone-ml-completed') === 'true';
    } catch {
      return false;
    }
  })();

  const readinessScore = isMlCompleted ? 74 : 64;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSaveProfile = (updated) => {
    setProfile(updated);
    try {
      localStorage.setItem('margdarshak-user-profile', JSON.stringify(updated));
    } catch {
      // Ignore
    }
    setIsEditDrawerOpen(false);
    showToast('Learner profile updated successfully.');
  };

  const handleAddSkill = (skill) => {
    showToast(`Added self-reported skill: ${skill.name}.`);
  };

  return (
    <AppShell
      currentPath="/profile"
      onNavigate={onNavigate}
      pageTitle="LEARNER PROFILE"
      pageSubtitle="Professional identity & verified competency portfolio"
    >
      <div className="profile-page-layout animate-fadeIn">
        
        {/* Toast Alert */}
        {toastMessage && (
          <div className="planner-toast-alert animate-fadeIn">
            <CheckCircle2 size={15} className="text-emerald" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* 1. Profile Hero with Identity & Destination */}
        <ProfileHero
          profile={profile}
          targetCareer="AI Engineer"
          nsqfLevel="NSQF Level 6"
          onEditClick={() => setIsEditDrawerOpen(true)}
          onNavigate={onNavigate}
        />

        {/* 2. Profile Completion Progress */}
        <ProfileCompletionCard
          onCompleteClick={() => setIsEditDrawerOpen(true)}
        />

        {/* 3. Career Readiness vs NSQF Benchmark */}
        <ProfileCareerReadiness
          targetCareer="AI Engineer"
          nsqfLevel="NSQF Level 6"
          readiness={readinessScore}
          benchmark={80}
          onNavigate={onNavigate}
        />

        {/* 4. Verified Competencies & Self-Reported Skills */}
        <ProfileCompetencies
          onNavigate={onNavigate}
          onAddSkillClick={() => setIsAddSkillModalOpen(true)}
        />

        {/* 5. Verified Evidence Portfolio */}
        <ProfileEvidencePortfolio onNavigate={onNavigate} />

        {/* 6. Credentials & Micro-Credentials */}
        <ProfileCredentials />

        {/* 7. Learner Journey Timeline */}
        <ProfileJourneyTimeline />

      </div>

      {/* Edit Profile Drawer */}
      {isEditDrawerOpen && (
        <EditProfileDrawer
          profile={profile}
          onSave={handleSaveProfile}
          onClose={() => setIsEditDrawerOpen(false)}
        />
      )}

      {/* Add Skill Modal */}
      {isAddSkillModalOpen && (
        <AddSkillModal
          onAddSkill={handleAddSkill}
          onClose={() => setIsAddSkillModalOpen(false)}
        />
      )}

    </AppShell>
  );
};

export default Profile;
