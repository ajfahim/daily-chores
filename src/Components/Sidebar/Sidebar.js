import React from 'react';
import BodyMeasurement from '../BodyMeasurement/BodyMeasurement';
import User from '../User/User';
import "./Sidebar.css";


const Sidebar = () => {
    return (
        <div className='sidebar'>
           <User></User>
           <BodyMeasurement></BodyMeasurement>
        </div>
    );
};

export default Sidebar;