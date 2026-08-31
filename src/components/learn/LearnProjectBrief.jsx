import React, { useState } from 'react';
import { Award, CheckCircle2, Code2, FileCode, CheckSquare, Square, ArrowRight } from 'lucide-react';

export const LearnProjectBrief = ({ onCompleteProject, isCompleted }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Load and inspect customer telecom dataset', done: true },
    { id: 2, text: 'Prepare categorical encodings & standard feature scaling', done: true },
    { id: 3, text: 'Split train/test data using stratified 80/20 split', done: true },
    { id: 4, text: 'Train classification models (Logistic Regression & Random Forest)', done: isCompleted },
    { id: 5, text: 'Calculate evaluation metrics (Precision, Recall, ROC-AUC > 0.82)', done: isCompleted },
    { id: 6, text: 'Write concise business interpretation of churn drivers', done: isCompleted }
  ]);

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const allDone = tasks.every(t => t.done);

  return (
    <section className="learn-section-block">
      <div className="learn-section-title-line">
        <div className="title-left">
          <Award size={16} className="text-purple" />
          <h3>3. BUILD — Practical Project Brief</h3>
        </div>
        <span className="section-subtext">Hands-on portfolio deliverable</span>
      </div>

      <div className="project-brief-card glass-panel">
        
        {/* Project Header */}
        <div className="project-top-row">
          <div>
            <span className="micro text-brand-300">PORTFOLIO ARTIFACT</span>
            <h4>Customer Churn Predictor</h4>
          </div>
          <span className={`project-status-pill ${isCompleted ? 'completed' : 'active'}`}>
            {isCompleted ? '✓ DELIVERABLE COMPLETED' : '● READY TO SUBMIT'}
          </span>
        </div>

        <p className="project-desc">
          Build an end-to-end classification pipeline that predicts whether a customer is likely to cancel their service subscription based on billing history, support tickets, and usage patterns.
        </p>

        {/* Requirements Checklist */}
        <div className="project-reqs-box">
          <span className="micro">PROJECT CHECKLIST REQUIREMENTS:</span>
          
          <div className="reqs-items-grid">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className={`project-task-item ${task.done ? 'done' : ''}`}
                onClick={() => toggleTask(task.id)}
              >
                {task.done ? (
                  <CheckCircle2 size={15} className="text-emerald" />
                ) : (
                  <Square size={15} className="text-tertiary" />
                )}
                <span>{task.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverable Format Spec */}
        <div className="deliverable-format-box">
          <FileCode size={16} className="text-brand-300" />
          <div>
            <strong>DELIVERABLE ARTIFACT</strong>
            <p>A Jupyter notebook with dataset cleaning, model training, ROC-AUC evaluation plots, and feature importance interpretations.</p>
          </div>
        </div>

        {/* Project Action Row */}
        <div className="project-actions-row">
          {!isCompleted ? (
            <button 
              type="button" 
              className="primary-btn project-submit-btn"
              onClick={onCompleteProject}
            >
              <CheckCircle2 size={15} />
              <span>Verify & Complete Project</span>
            </button>
          ) : (
            <div className="project-verified-tag">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>Project Deliverable Verified by Margdarshak Evaluator</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default LearnProjectBrief;
