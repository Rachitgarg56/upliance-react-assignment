import React, { useState } from 'react';
import './FlipCard.css';

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="scene">
      <div
        className={`card ${isFlipped ? 'is-flipped' : ''}`}
        onClick={handleCardClick}
      >
        <div className="card__face card__face--front text-center p-2">{frontContent}</div>
        <div className="card__face card__face--back text-center">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
