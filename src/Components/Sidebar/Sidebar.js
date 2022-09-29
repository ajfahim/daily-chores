import React from 'react';
import BodyMeasurement from '../BodyMeasurement/BodyMeasurement';
import Break from '../Break/Break';
import ExcersiseDetails from '../ExcersiseDetails/ExcersiseDetails';
import User from '../User/User';
import "./Sidebar.css";


const Sidebar = ({exerciseTime}) => {
    return (
        <div className='sidebar'>
           <User></User>
           <BodyMeasurement></BodyMeasurement>
           <Break></Break>
           <ExcersiseDetails exerciseTime={exerciseTime} ></ExcersiseDetails>
        </div>
    );
};

export default Sidebar;