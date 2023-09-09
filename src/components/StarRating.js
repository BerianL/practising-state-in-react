import React, { useState } from 'react';
import Star from './Star';

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleSetRating = (newRating) => {
        // Toggle the rating if the clicked star is the same as the current rating
        const updatedRating = newRating === rating ? 0 : newRating;
        setRating(updatedRating);
    };

    return (
        <ul className='course--stars'>
            {[1, 2, 3, 4, 5].map((value) => (
                <Star
                    key={value}
                    selected={value <= rating}
                    onClick={() => handleSetRating(value)}
                />
            ))}
        </ul>
    );
};

export default StarRating;
