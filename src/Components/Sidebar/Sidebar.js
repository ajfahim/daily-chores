import React from 'react';
import BodyMeasurement from '../BodyMeasurement/BodyMeasurement';
import Break from '../Break/Break';
import ExcersiseDetails from '../ExcersiseDetails/ExcersiseDetails';
import User from '../User/User';
import "./Sidebar.css";


const Sidebar = () => {
    return (
        <div className='sidebar'>
           <User></User>
           <BodyMeasurement></BodyMeasurement>
           <Break></Break>
           <ExcersiseDetails></ExcersiseDetails>
        </div>
    );
};

export default Sidebar;