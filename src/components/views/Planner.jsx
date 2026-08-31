import React, { useState, useEffect } from 'react';
import { AppShell } from '../layout/AppShell';
import { PlannerHeader } from '../planner/PlannerHeader';
import { PlannerSummaryHero } from '../planner/PlannerSummaryHero';
import { PlannerHoursSelector } from '../planner/PlannerHoursSelector';
import { PlannerTodayFocus } from '../planner/PlannerTodayFocus';
import { PlannerCalendarGrid } from '../planner/PlannerCalendarGrid';
import { PlannerPriorityBreakdown } from '../planner/PlannerPriorityBreakdown';
import { PlannerAIExplanation } from '../planner/PlannerAIExplanation';
import { PlannerRescheduleModal } from '../planner/PlannerRescheduleModal';
import { CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

const INITIAL_SCHEDULE = [
  {
    dayKey: 'mon',
    dayName: 'Monday',
    dateStr: 'Aug 31',
    isToday: true,
    tasks: [
      {
        id: 't-1',
        type: 'learn',
        title: 'ML Fundamentals',
        topic: 'Model Training & Loss Functions',
        timeStr: '6:00 PM',
        durationMin: 45,
        completed: false
      }
    ]
  },
  {
    dayKey: 'tue',
    dayName: 'Tuesday',
    dateStr: 'Sep 01',
    isToday: false,
    tasks: []
  },
  {
    dayKey: 'wed',
    dayName: 'Wednesday',
    dateStr: 'Sep 02',
    isToday: false,
    tasks: [
      {
        id: 't-2',
        type: 'learn',
        title: 'Model Evaluation',
        topic: 'Precision, Recall & ROC-AUC',
        timeStr: '7:00 PM',
        durationMin: 45,
        completed: false
      }
    ]
  },
  {
    dayKey: 'thu',
    dayName: 'Thursday',
    dateStr: 'Sep 03',
    isToday: false,
    tasks: [
      {
        id: 't-3',
        type: 'practice',
        title: 'Evaluation Quiz',
        topic: 'Data Leakage & Cross-Validation',
        timeStr: '6:30 PM',
        durationMin: 30,
        completed: false
      }
    ]
  },
  {
    dayKey: 'fri',
    dayName: 'Friday',
    dateStr: 'Sep 04',
    isToday: false,
    tasks: []
  },
  {
    dayKey: 'sat',
    dayName: 'Saturday',
    dateStr: 'Sep 05',
    isToday: false,
    tasks: [
      {
        id: 't-4',
        type: 'build',
        title: 'Customer Churn Predictor',
        topic: 'Portfolio Classification Pipeline',
        timeStr: '10:00 AM',
        durationMin: 90,
        completed: false
      }
    ]
  },
  {
    dayKey: 'sun',
    dayName: 'Sunday',
    dateStr: 'Sep 06',
    isToday: false,
    tasks: [
      {
        id: 't-5',
        type: 'checkpoint',
        title: 'ML Competency Check',
        topic: 'Milestone 02 Verification Check',
        timeStr: '4:00 PM',
        durationMin: 45,
        completed: false
      }
    ]
  }
];

export const Planner = ({ onNavigate }) => {
  const [weeklyHours, setWeeklyHours] = useState(() => {
    try {
      const saved = localStorage.getItem('margdarshak-planner-hours');
      return saved ? parseInt(saved, 10) : 8;
    } catch {
      return 8;
    }
  });

  const [schedule, setSchedule] = useState(INITIAL_SCHEDULE);
  const [activeRescheduleTask, setActiveRescheduleTask] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('margdarshak-planner-hours', weeklyHours.toString());
    } catch {
      // Ignore
    }
  }, [weeklyHours]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSelectHours = (hours) => {
    setWeeklyHours(hours);
    recalculateSchedule(hours);
    showToast(`Pace recalculated for ${hours} hours/week.`);
  };

  const recalculateSchedule = (hours) => {
    if (hours <= 5) {
      setSchedule([
        {
          dayKey: 'mon',
          dayName: 'Monday',
          dateStr: 'Aug 31',
          isToday: true,
          tasks: [
            { id: 't-1', type: 'learn', title: 'ML Fundamentals', topic: 'Model Training Concepts', timeStr: '6:00 PM', durationMin: 60, completed: false }
          ]
        },
        { dayKey: 'tue', dayName: 'Tuesday', dateStr: 'Sep 01', isToday: false, tasks: [] },
        {
          dayKey: 'wed',
          dayName: 'Wednesday',
          dateStr: 'Sep 02',
          isToday: false,
          tasks: [
            { id: 't-3', type: 'practice', title: 'Evaluation Practice Quiz', topic: 'Leakage Prevention', timeStr: '7:00 PM', durationMin: 45, completed: false }
          ]
        },
        { dayKey: 'thu', dayName: 'Thursday', dateStr: 'Sep 03', isToday: false, tasks: [] },
        { dayKey: 'fri', dayName: 'Friday', dateStr: 'Sep 04', isToday: false, tasks: [] },
        {
          dayKey: 'sat',
          dayName: 'Saturday',
          dateStr: 'Sep 05',
          isToday: false,
          tasks: [
            { id: 't-4', type: 'build', title: 'Customer Churn Predictor', topic: 'Classification Script', timeStr: '10:00 AM', durationMin: 90, completed: false }
          ]
        },
        {
          dayKey: 'sun',
          dayName: 'Sunday',
          dateStr: 'Sep 06',
          isToday: false,
          tasks: [
            { id: 't-5', type: 'checkpoint', title: 'ML Competency Check', topic: 'Milestone 02 Verification', timeStr: '4:00 PM', durationMin: 45, completed: false }
          ]
        }
      ]);
    } else if (hours >= 12) {
      setSchedule([
        {
          dayKey: 'mon',
          dayName: 'Monday',
          dateStr: 'Aug 31',
          isToday: true,
          tasks: [
            { id: 't-1', type: 'learn', title: 'ML Fundamentals', topic: 'Loss Formulations & Convexity', timeStr: '6:00 PM', durationMin: 90, completed: false }
          ]
        },
        {
          dayKey: 'tue',
          dayName: 'Tuesday',
          dateStr: 'Sep 01',
          isToday: false,
          tasks: [
            { id: 't-2a', type: 'learn', title: 'Applied Statistics', topic: 'Hypothesis Testing & Variance', timeStr: '6:00 PM', durationMin: 90, completed: false }
          ]
        },
        {
          dayKey: 'wed',
          dayName: 'Wednesday',
          dateStr: 'Sep 02',
          isToday: false,
          tasks: [
            { id: 't-2', type: 'learn', title: 'Model Evaluation', topic: 'ROC-AUC & F1 Diagnostics', timeStr: '6:00 PM', durationMin: 90, completed: false }
          ]
        },
        {
          dayKey: 'thu',
          dayName: 'Thursday',
          dateStr: 'Sep 03',
          isToday: false,
          tasks: [
            { id: 't-3', type: 'practice', title: 'Diagnostic Lab', topic: 'Stratified Split Validation', timeStr: '6:30 PM', durationMin: 60, completed: false }
          ]
        },
        {
          dayKey: 'fri',
          dayName: 'Friday',
          dateStr: 'Sep 04',
          isToday: false,
          tasks: [
            { id: 't-3b', type: 'learn', title: 'Deep Learning Preview', topic: 'PyTorch Tensor Foundations', timeStr: '6:00 PM', durationMin: 60, completed: false }
          ]
        },
        {
          dayKey: 'sat',
          dayName: 'Saturday',
          dateStr: 'Sep 05',
          isToday: false,
          tasks: [
            { id: 't-4', type: 'build', title: 'Customer Churn Predictor', topic: 'Full Pipeline Deployment', timeStr: '10:00 AM', durationMin: 150, completed: false }
          ]
        },
        {
          dayKey: 'sun',
          dayName: 'Sunday',
          dateStr: 'Sep 06',
          isToday: false,
          tasks: [
            { id: 't-5', type: 'checkpoint', title: 'ML Competency Check', topic: 'Milestone 02 Checkpoint', timeStr: '4:00 PM', durationMin: 60, completed: false }
          ]
        }
      ]);
    } else {
      setSchedule(INITIAL_SCHEDULE);
    }
  };

  const handleToggleTask = (taskId) => {
    setSchedule(prev => prev.map(day => ({
      ...day,
      tasks: day.tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t)
    })));
  };

  const handleConfirmReschedule = (taskId, targetDayKey) => {
    let movingTask = null;

    // Remove from source day
    const updatedDays = schedule.map(day => {
      const found = day.tasks.find(t => t.id === taskId);
      if (found) {
        movingTask = found;
        return {
          ...day,
          tasks: day.tasks.filter(t => t.id !== taskId)
        };
      }
      return day;
    });

    // Add to target day
    if (movingTask) {
      const finalDays = updatedDays.map(day => {
        if (day.dayKey === targetDayKey) {
          return {
            ...day,
            tasks: [...day.tasks, movingTask]
          };
        }
        return day;
      });
      setSchedule(finalDays);
      showToast(`Task moved to ${targetDayKey.toUpperCase()}.`);
    }
  };

  // Calculate planned & completed hours from schedule
  let totalMinPlanned = 0;
  let totalMinCompleted = 0;
  schedule.forEach(day => {
    day.tasks.forEach(t => {
      totalMinPlanned += t.durationMin;
      if (t.completed) totalMinCompleted += t.durationMin;
    });
  });

  const plannedHours = Math.round((totalMinPlanned / 60) * 10) / 10;
  const completedHours = Math.round((totalMinCompleted / 60) * 10) / 10;

  const priorityBreakdown = [
    {
      skill: 'Machine Learning Core',
      hours: Math.round(weeklyHours * 0.5),
      percentage: 50,
      tone: 'brand',
      reasonTag: 'CRITICAL GAP +3',
      reason: 'Addresses highest leverage 47-point competency delta'
    },
    {
      skill: 'Model Evaluation & Statistics',
      hours: Math.round(weeklyHours * 0.25),
      percentage: 25,
      tone: 'brand-300',
      reasonTag: 'PREREQUISITE +2',
      reason: 'Required for diagnostic validation of downstream models'
    },
    {
      skill: 'Practical Projects & Lab',
      hours: Math.round(weeklyHours * 0.25),
      percentage: 25,
      tone: 'purple',
      reasonTag: 'PORTFOLIO +1',
      reason: 'Produces customer churn classification notebook artifact'
    }
  ];

  return (
    <AppShell
      currentPath="/planner"
      onNavigate={onNavigate}
      pageTitle="WEEKLY STUDY PLAN"
      pageSubtitle="Adaptive calendar and time allocation"
    >
      <div className="planner-page-layout animate-fadeIn">
        
        {/* Toast Alert */}
        {toastMessage && (
          <div className="planner-toast-alert animate-fadeIn">
            <CheckCircle2 size={15} className="text-emerald" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* 1. Planner Header */}
        <PlannerHeader
          weekRange="Aug 31 — Sep 6, 2026"
          onRegeneratePlan={() => {
            recalculateSchedule(weeklyHours);
            showToast('Schedule regenerated based on current competency priorities.');
          }}
        />

        {/* 2. Weekly Summary Hero */}
        <PlannerSummaryHero
          availableHours={weeklyHours}
          plannedHours={plannedHours}
          completedHours={completedHours}
          prioritySkill="Machine Learning"
          gapPoints={47}
        />

        {/* 3. Available Hours Selector */}
        <PlannerHoursSelector
          selectedHours={weeklyHours}
          onSelectHours={handleSelectHours}
        />

        {/* 4. Today's Focus Card */}
        <PlannerTodayFocus
          taskTitle="Model Training Fundamentals & Loss Formulations"
          taskDuration="45 min"
          taskCategory="Machine Learning"
          isCompleted={false}
          onStartTask={() => onNavigate('/learn/ml-fundamentals')}
        />

        {/* 5. 7-Day Weekly Calendar Grid */}
        <PlannerCalendarGrid
          schedule={schedule}
          onToggleTask={handleToggleTask}
          onRescheduleTask={(task) => setActiveRescheduleTask(task)}
          onStartTask={() => onNavigate('/learn/ml-fundamentals')}
        />

        {/* 6. Bottom Row: Priority Breakdown & AI Plan Explanation */}
        <div className="planner-bottom-grid">
          <PlannerPriorityBreakdown breakdown={priorityBreakdown} />
          <PlannerAIExplanation onNavigate={onNavigate} />
        </div>

      </div>

      {/* Reschedule Modal */}
      {activeRescheduleTask && (
        <PlannerRescheduleModal
          task={activeRescheduleTask}
          onConfirmMove={handleConfirmReschedule}
          onClose={() => setActiveRescheduleTask(null)}
        />
      )}

    </AppShell>
  );
};

export default Planner;
