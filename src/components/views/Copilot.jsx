import React, { useState, useRef, useEffect } from 'react';
import { AppShell } from '../layout/AppShell';
import { CopilotHeader } from '../copilot/CopilotHeader';
import { CopilotContextPanel } from '../copilot/CopilotContextPanel';
import { CopilotMessageItem } from '../copilot/CopilotMessageItem';
import { ExplainabilityModal } from '../copilot/ExplainabilityModal';
import { ResetChatModal } from '../copilot/ResetChatModal';
import { Send, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

const INITIAL_CONVERSATION = [
  {
    id: 'msg-1',
    sender: 'ai',
    hasExplainability: true,
    formattedLines: [
      { type: 'paragraph', content: 'Hi Hemanth 👋' },
      { type: 'paragraph', content: "You're working toward AI Engineer — NSQF Level 6." },
      { type: 'paragraph', content: 'Your current readiness is 64%, and Machine Learning is currently your highest-priority competency gap (38% vs 85% target).' },
      { type: 'highlight', content: 'Next recommended milestone: Machine Learning Fundamentals · ~8h' },
      { type: 'paragraph', content: 'What would you like to explore today?' }
    ],
    actions: [
      { label: 'Why this milestone?', query: 'Why is Machine Learning Fundamentals recommended first?' },
      { label: 'Explain my skill gaps', query: 'Why is ML my biggest gap?' },
      { label: 'What should I learn today?', query: 'What should I learn today?' },
      { label: 'Am I internship-ready?', query: 'Am I ready for an AI Engineer internship?' }
    ]
  }
];

export const Copilot = ({ onNavigate }) => {
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('margdarshak-copilot-messages');
      return saved ? JSON.parse(saved) : INITIAL_CONVERSATION;
    } catch {
      return INITIAL_CONVERSATION;
    }
  });

  const [inputQuery, setInputQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isExplainModalOpen, setIsExplainModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem('margdarshak-copilot-messages', JSON.stringify(messages));
    } catch {
      // Ignore storage errors
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  // Context-aware knowledge base generator
  const generateAiResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('today') || q.includes('start today') || q.includes('learn today')) {
      return {
        hasExplainability: true,
        formattedLines: [
          { type: 'paragraph', content: 'Based on your current active roadmap, here is your optimal 2-hour study block:' },
          { 
            type: 'list', 
            items: [
              'Model training fundamentals & cost optimization — ~45 min',
              'Train / test split & cross-validation strategy — ~30 min',
              'Evaluation metrics (Precision, Recall, ROC-AUC) — ~45 min'
            ] 
          },
          { type: 'highlight', content: 'Total commitment: ~2 hours • Directly addresses your Machine Learning gap.' }
        ],
        actions: [
          { label: 'Start Today\'s Session', path: '/learn/ml-fundamentals', primary: true },
          { label: 'Open My Roadmap', path: '/path' }
        ]
      };
    }

    if (q.includes('internship') || q.includes('ready for job') || q.includes('job ready')) {
      return {
        hasExplainability: true,
        formattedLines: [
          { type: 'paragraph', content: "You're progressing steadily, but you are not fully internship-ready yet for an AI Engineer role." },
          { 
            type: 'list', 
            items: [
              'Verified Strengths: Python OOP (87%) and Algorithmic Problem Solving (85%).',
              'Active Critical Blocker: Machine Learning (38% vs 85% required benchmark).',
              'Moderate Blocker: Statistical Inference (54% vs 80% benchmark).'
            ] 
          },
          { type: 'paragraph', content: 'Current verified readiness estimate is 64%. Completing your active Machine Learning milestone and Applied Project will raise your readiness to 82%.' }
        ],
        actions: [
          { label: 'Show Skill Gaps', path: '/skill-gap', primary: true },
          { label: 'View Roadmap Path', path: '/path' }
        ]
      };
    }

    if (q.includes('why ml') || q.includes('why this milestone') || q.includes('biggest gap') || q.includes('why is ml')) {
      return {
        hasExplainability: true,
        formattedLines: [
          { type: 'paragraph', content: 'Machine Learning is your highest-priority gap for three deterministic reasons:' },
          { 
            type: 'list', 
            items: [
              'Highest Career Relevance: Machine Learning is the primary competency standard for NSQF Level 6 AI Engineers.',
              'Large Proficiency Delta: Your assessment identified a 47-point gap (38% acquired vs 85% required).',
              'Prerequisite Anchor: Loss formulations and gradient descent are strict prerequisites for Milestone 5 (Deep Learning) and Milestone 6 (Deployment).'
            ] 
          },
          { type: 'paragraph', content: 'Your verified Python knowledge (87%) allows you to bypass introductory syntax and jump straight into model training.' }
        ],
        actions: [
          { label: 'Start ML Fundamentals (~8h)', path: '/learn/ml-fundamentals', primary: true },
          { label: 'Explore Learning Options', path: '/skill-gap' }
        ]
      };
    }

    if (q.includes('deep learning') || q.includes('why not deep learning') || q.includes('neural')) {
      return {
        hasExplainability: true,
        formattedLines: [
          { type: 'paragraph', content: 'Machine Learning is sequenced strictly before Deep Learning because neural networks build directly upon cost formulation, gradient descent, and cross-validation principles.' },
          { type: 'paragraph', content: 'Starting with Deep Learning without foundational ML math leads to debugging difficulties in loss convergence and hyperparameter tuning.' },
          { type: 'highlight', content: 'Deep Learning (Milestone 05) will unlock automatically once Machine Learning Fundamentals is verified at ≥ 80%.' }
        ],
        actions: [
          { label: 'View Prerequisite Chain', path: '/path', primary: true },
          { label: 'View Skill Gaps', path: '/skill-gap' }
        ]
      };
    }

    if (q.includes('statistics') || q.includes('why do i need statistics') || q.includes('stats')) {
      return {
        hasExplainability: true,
        formattedLines: [
          { type: 'paragraph', content: 'Statistics & Probability is currently a moderate gap for you (54% vs 80% target).' },
          { type: 'paragraph', content: 'It is included in your roadmap because AI Engineers must formulate hypothesis testing and evaluate models on imbalanced datasets using Precision, Recall, and ROC-AUC curves.' },
          { type: 'paragraph', content: 'It is placed in Milestone 03 (~8h) directly following ML fundamentals.' }
        ],
        actions: [
          { label: 'Explore Statistics Bridge', path: '/skill-gap', primary: true },
          { label: 'Open My Roadmap', path: '/path' }
        ]
      };
    }

    if (q.includes('roadmap') || q.includes('explain my roadmap') || q.includes('how long') || q.includes('duration')) {
      return {
        hasExplainability: true,
        formattedLines: [
          { type: 'paragraph', content: 'Your personalized roadmap consists of 6 sequenced milestones totaling ~46 hours of targeted learning:' },
          { 
            type: 'list', 
            items: [
              'Step 01: Python Foundations (COMPLETED ✓ • 87%)',
              'Step 02: Machine Learning Fundamentals (IN PROGRESS • ~8h)',
              'Step 03: Statistics & Applied Probability (RECOMMENDED • ~8h)',
              'Step 04: Applied ML Portfolio Project (RECOMMENDED • ~10h)',
              'Step 05: Deep Learning & Neural Nets (LOCKED • ~12h)',
              'Step 06: Production Capstone & Deployment (LOCKED • ~8h)'
            ] 
          },
          { type: 'highlight', content: 'At your configured pace of 10 hours / week, you will reach full role readiness in approximately 5 weeks.' }
        ],
        actions: [
          { label: 'Open Roadmap', path: '/path', primary: true },
          { label: 'Adjust Pace (10h/wk)', path: '/path' }
        ]
      };
    }

    // Default Context-Aware Fallback
    return {
      hasExplainability: true,
      formattedLines: [
        { type: 'paragraph', content: `Regarding "${query}":` },
        { type: 'paragraph', content: "Your target career is AI Engineer (NSQF Level 6). With a current assessed readiness of 64%, the fastest acceleration comes from closing your 47-point Machine Learning deficit." },
        { type: 'highlight', content: "Recommended action: Complete Milestone 02 (Machine Learning Fundamentals) to unlock your portfolio project." }
      ],
      actions: [
        { label: 'Continue Active Milestone', path: '/learn/ml-fundamentals', primary: true },
        { label: 'View Roadmap Path', path: '/path' }
      ]
    };
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputQuery.trim();
    if (!text) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsThinking(true);

    setTimeout(() => {
      const aiResponse = generateAiResponse(text);
      const newAiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        ...aiResponse
      };
      setMessages((prev) => [...prev, newAiMsg]);
      setIsThinking(false);
    }, 450);
  };

  const handleActionClick = (act) => {
    if (act.path) {
      onNavigate(act.path);
    } else if (act.query) {
      handleSendMessage(act.query);
    }
  };

  const handleResetChat = () => {
    setMessages(INITIAL_CONVERSATION);
    setIsResetModalOpen(false);
  };

  const suggestedPrompts = [
    'What should I learn today?',
    'Why is ML my biggest gap?',
    'Am I ready for an AI Engineer internship?',
    'Why not start with Deep Learning?',
    'How long will my path take?'
  ];

  return (
    <AppShell
      currentPath="/copilot"
      onNavigate={onNavigate}
      pageTitle="MARGDARSHAK AI"
      pageSubtitle="Your contextual career mentor"
    >
      <div className="copilot-page-layout animate-fadeIn">
        
        {/* 1. Top Header Banner */}
        <CopilotHeader
          targetCareer="AI Engineer"
          nsqfLevel="NSQF Level 6"
          onResetChat={() => setIsResetModalOpen(true)}
        />

        {/* 2. Workspace Two-Column Grid */}
        <div className="copilot-workspace-grid">
          
          {/* Left Column: Chat Conversation Stream */}
          <div className="copilot-chat-container glass-panel">
            
            {/* Messages Scroll Area */}
            <div className="chat-messages-stream">
              {messages.map((msg) => (
                <CopilotMessageItem
                  key={msg.id}
                  message={msg}
                  onActionClick={handleActionClick}
                  onExplainClick={() => setIsExplainModalOpen(true)}
                />
              ))}

              {isThinking && (
                <div className="chat-message-row ai animate-fadeIn">
                  <div className="ai-thinking-indicator glass-panel">
                    <Sparkles size={14} className="sparkle-ai" />
                    <span>Margdarshak AI is analyzing your competencies...</span>
                    <div className="thinking-dots">
                      <span /><span /><span />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts Strip */}
            <div className="suggested-prompts-bar">
              <span className="micro text-brand-300">SUGGESTED QUESTIONS:</span>
              <div className="prompts-chips-stack">
                {suggestedPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="prompt-chip-btn"
                    onClick={() => handleSendMessage(prompt)}
                  >
                    <span>{prompt}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input Bar */}
            <form 
              className="chat-input-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <input
                type="text"
                className="copilot-input-field"
                placeholder="Ask Margdarshak about your path, skill gaps, or milestones..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                disabled={isThinking}
              />

              <button 
                type="submit" 
                className="copilot-send-btn"
                disabled={!inputQuery.trim() || isThinking}
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </form>

          </div>

          {/* Right Column: Persistent Context Panel */}
          <CopilotContextPanel
            targetCareer="AI Engineer"
            nsqfLevel="NSQF Level 6"
            readiness={64}
            activeMilestone="Machine Learning Fundamentals"
            topGap={{ skill: 'Machine Learning', current: 38, target: 85, delta: 47 }}
            milestonesCompleted={1}
            totalMilestones={6}
            onNavigate={onNavigate}
          />

        </div>

      </div>

      {/* Explainability Drawer Modal */}
      {isExplainModalOpen && (
        <ExplainabilityModal onClose={() => setIsExplainModalOpen(false)} />
      )}

      {/* Reset Confirmation Modal */}
      {isResetModalOpen && (
        <ResetChatModal 
          onConfirm={handleResetChat} 
          onClose={() => setIsResetModalOpen(false)} 
        />
      )}

    </AppShell>
  );
};

export default Copilot;
