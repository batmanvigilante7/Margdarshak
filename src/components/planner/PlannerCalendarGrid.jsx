import React from 'react';
import { 
  BookOpen, 
  FlaskConical, 
  Award, 
  ShieldCheck, 
  Clock, 
  MoreVertical, 
  CheckCircle2, 
  Square, 
  ArrowRight,
  Coffee
} from 'lucide-react';

export const PlannerCalendarGrid = ({ 
  schedule, 
  onToggleTask, 
  onRescheduleTask, 
  onStartTask 
}) => {
  const getTaskIcon = (type) => {
    switch (type) {
      case 'learn':
        return <BookOpen size={13} className="text-brand-300" />;
      case 'practice':
        return <FlaskConical size={13} className="text-brand-300" />;
      case 'build':
        return <Award size={13} className="text-purple" />;
      case 'checkpoint':
        return <ShieldCheck size={13} className="text-emerald" />;
      default:
        return <BookOpen size={13} className="text-brand-300" />;
    }
  };

  const getTaskTag = (type) => {
    switch (type) {
      case 'learn': return '📚 LEARN';
      case 'practice': return '🧪 PRACTICE';
      case 'build': return '🛠 BUILD';
      case 'checkpoint': return '✓ PROVE';
      default: return 'TASK';
    }
  };

  return (
    <section className="planner-calendar-section">
      <div className="section-title-line">
        <h3 className="section-title">7-Day Adaptive Schedule</h3>
        <span className="section-subtext">Click task to toggle completion or reschedule</span>
      </div>

      <div className="calendar-week-grid">
        {schedule.map((day) => (
          <div 
            key={day.dayKey} 
            className={`day-column-card glass-panel ${day.isToday ? 'is-today' : ''}`}
          >
            {/* Day Header */}
            <div className="day-header-strip">
              <div className="day-name-block">
                <span className="day-name">{day.dayName}</span>
                <span className="day-date mono">{day.dateStr}</span>
              </div>
              {day.isToday && <span className="today-badge">TODAY</span>}
            </div>

            {/* Day Tasks Area */}
            <div className="day-tasks-container">
              {day.tasks && day.tasks.length > 0 ? (
                day.tasks.map((task) => (
                  <div 
                    key={task.id} 
                    className={`study-task-card ${task.completed ? 'completed' : ''}`}
                  >
                    <div className="task-top-row">
                      <div className="task-type-badge mono">
                        {getTaskIcon(task.type)}
                        <span>{getTaskTag(task.type)}</span>
                      </div>

                      <button 
                        type="button" 
                        className="task-options-btn"
                        onClick={() => onRescheduleTask(task)}
                        title="Reschedule task"
                      >
                        <MoreVertical size={13} />
                      </button>
                    </div>

                    <div className="task-title-area">
                      <h4>{task.title}</h4>
                      <span className="task-subtext">{task.topic}</span>
                    </div>

                    <div className="task-bottom-row">
                      <div className="task-time-pill mono">
                        <Clock size={11} />
                        <span>{task.timeStr} • ~{task.durationMin}m</span>
                      </div>

                      <button
                        type="button"
                        className="task-complete-toggle"
                        onClick={() => onToggleTask(task.id)}
                        title={task.completed ? 'Mark pending' : 'Mark completed'}
                      >
                        {task.completed ? (
                          <CheckCircle2 size={16} className="text-emerald" />
                        ) : (
                          <Square size={16} className="text-tertiary" />
                        )}
                      </button>
                    </div>

                    {!task.completed && (
                      <button
                        type="button"
                        className="quick-start-task-btn"
                        onClick={() => onStartTask(task)}
                      >
                        <span>Start</span>
                        <ArrowRight size={11} />
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <div className="rest-day-card">
                  <Coffee size={18} className="text-tertiary" />
                  <span>Rest / Catch-up buffer</span>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default PlannerCalendarGrid;
