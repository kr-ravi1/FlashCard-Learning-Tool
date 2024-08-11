import React, { useState } from 'react';
import './FlashCard.css';

const FlashCard = ({ quesNumber, question, answer }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flashcard" onClick={handleFlip}>
            <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="card-front flex-col">
                    <div className='text-violet-600'>#{quesNumber}</div>
                    <div className='text-xl font-semibold h-full flex items-center overflow-auto'>{question}</div>
                    <div className='text-gray-400 text-sm'>Click to flip</div>
                </div>
                <div className="card-back">
                    <div className='h-full w-full overflow-auto'>{answer}</div>
                </div>
            </div>
        </div>
    );
};

export default FlashCard;
