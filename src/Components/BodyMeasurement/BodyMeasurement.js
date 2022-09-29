import React from 'react';
import './BodyMeasurement.css'

const BodyMeasurement = () => {
    return (
        <div className="body-measure">
            <div className="weight">
                <p className='bold'> 55<small>kg</small></p>
                <p>Weight</p>
            </div>
            <div className="height">
                <p className='bold'> 4.9</p>
                <p>Height</p>
            </div>
            <div className="age">
                <p className='bold'> 29</p>
                <p>Weight</p>
            </div>
        
        </div>
    );
};

export default BodyMeasurement;