import React from 'react';
import './ExcersiseDetails.css'
const ExcersiseDetails = ({exerciseTime}) => {
    return (
        <div className='exercise-details'>
            <h5>Exercise Details</h5>
            <div className="exercise-time-detalis">
                <p className='bold-p'>Exercise Time</p>
                <p className='light'>{exerciseTime} Munites</p>
            </div>
            <div className="exercise-time-detalis exercise-time">
                <p className='bold-p'>Break Time</p>
                <p className='light'>200 Munites</p>
            </div>
            <button className='complete-btn'>Activity Completed</button>
        </div>
    );
};

export default ExcersiseDetails;