import React from 'react';
import './ExcersiseDetails.css'
const ExcersiseDetails = () => {
    return (
        <div className='exercise-details'>
            <h5>Exercise Details</h5>
            <div className="exercise-time-detalis">
                <p className='bold-p'>Exercise Time</p>
                <p className='light'>200 second</p>
            </div>
            <div className="exercise-time-detalis exercise-time">
                <p className='bold-p'>Break Time</p>
                <p className='light'>200 second</p>
            </div>
            <button className='complete-btn'>Activity Completed</button>
        </div>
    );
};

export default ExcersiseDetails;