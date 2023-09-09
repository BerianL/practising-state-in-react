import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

const Course = ({ name, desc, url }) => {
    return (
        <div className="card">
            <div>
                <img src={url} alt={name} />
            </div>
            <h2>{name}</h2>
            <p>{desc}</p>
            <h3>Course Rating</h3>

            <StarRating />
        </div>
    );
};

// Define PropTypes for the component
Course.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Course;
