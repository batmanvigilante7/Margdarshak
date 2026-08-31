import React from 'react';
import { Sparkles, Check } from 'lucide-react';

export const AuthIntro = ({
  eyebrow = 'YOUR CAREER NAVIGATOR',
  headlineMain = 'Turn your ambition into a ',
  headlineHighlight = 'clear path.',
  description = 'Continue your personalized journey across skills, career targets, competency benchmarks, and learning milestones.',
  proofPoints = [
    'Personalized skill mapping',
    'Career-aligned recommendations',
    'Adaptive learning paths'
  ]
}) => {
  return (
    <div className="auth-intro">
      <div className="eyebrow">
        <Sparkles size={13} />
        <span>{eyebrow}</span>
      </div>

      <h1>
        {headlineMain}
        <em>{headlineHighlight}</em>
      </h1>

      <p>{description}</p>

      {proofPoints && proofPoints.length > 0 && (
        <div className="auth-points">
          {proofPoints.map((point, i) => (
            <div key={i} className="auth-point-item">
              <span className="auth-point-icon">
                <Check size={14} />
              </span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthIntro;
