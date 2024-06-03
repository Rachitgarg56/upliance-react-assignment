import React from 'react';
import './FlipCard.css';

const FlipCard = ({ frontContent, backContent }) => {
  return (
    <div className="scene">
      <div className="card">
        <div className="card__face card__face--front text-center p-4">{frontContent}</div>
        <div className="card__face card__face--back text-center p-4">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
