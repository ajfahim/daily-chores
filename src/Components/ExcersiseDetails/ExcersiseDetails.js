import React from 'react';
import ActivityToast from '../Toast/ActivityToast';
import './ExcersiseDetails.css'
const ExcersiseDetails = ({exerciseTime, breakTime, handleToast, show, onClose}) => {
    return (
        <div className='exercise-details'>
            <h5>Exercise Details</h5>
            <div className="exercise-time-detalis">
                <p className='bold-p'>Exercise Time</p>
                <p className='light'>{exerciseTime} Munites</p>
            </div>
            <div className="exercise-time-detalis exercise-time">
                <p className='bold-p'>Break Time</p>
                <p className='light'>{breakTime} Munites</p>
            </div>
            <button onClick={() => handleToast(true)} className='complete-btn'>Activity Completed</button>
            <ActivityToast show={show} onClose={onClose}></ActivityToast>
        </div>
    );
};

export default ExcersiseDetails;