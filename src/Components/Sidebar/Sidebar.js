import React, { useEffect, useState } from 'react';
import BodyMeasurement from '../BodyMeasurement/BodyMeasurement';
import Break from '../Break/Break';
import ExcersiseDetails from '../ExcersiseDetails/ExcersiseDetails';
import User from '../User/User';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import "./Sidebar.css";


const Sidebar = ({exerciseTime, handleToast}) => {
    const [breakTime, setBreakTime] = useState(0);

    

    const addBreakTime = (time)=>{
        setBreakTime(time);
        setLocalStorage(time)
    }

    useEffect(()=>{
        const storedTime = getLocalStorage();
        storedTime ? setBreakTime(storedTime) : setBreakTime(0) 
    },[])

    return (
        <div className='sidebar'>
           <User></User>
           <BodyMeasurement></BodyMeasurement>
           <Break addBreakTime={addBreakTime}></Break>
           <ExcersiseDetails handleToast={handleToast} exerciseTime={exerciseTime} breakTime = {breakTime}></ExcersiseDetails>
        </div>
    );
};

export default Sidebar;