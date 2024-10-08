import React, { useState } from 'react';
import './FlashCard.css';

const FlashCard = ({ quesNumber, question, answer, difficulty, category }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flashcard" onClick={handleFlip}>
            <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="card-front flex-col">
                    <div className='text-violet-600'>#{quesNumber}</div>
                    <div className='flex justify-between w-full px-8 py-2'>
                        <div className='font-light text-sm bg-yellow-100 rounded-md px-3 py-1 text-yellow-700'>{difficulty}</div>
                        <div className='font-light text-sm bg-yellow-100 rounded-md px-3 py-1 text-yellow-700'>{category}</div>
                    </div>
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
