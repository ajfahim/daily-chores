import React from 'react';
import './BodyMeasurement.css'

const BodyMeasurement = () => {
    return (
        <div className="body-measure">
            <div className="weight">
                <p className='bold'> 55<small>kg</small></p>
                <p className='light'>Weight</p>
            </div>
            <div className="height">
                <p className='bold'> 4.9</p>
                <p className='light'>Height</p>
            </div>
            <div className="age">
                <p className='bold'> 29</p>
                <p className='light'>Age</p>
            </div>
        
        </div>
    );
};

export default BodyMeasurement;