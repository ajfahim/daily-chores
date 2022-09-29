import React from 'react';
import profile from './images/profile.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faLocation } from '@fortawesome/free-solid-svg-icons'
import './User.css'

const User = () => {
    return (
        <div className="user">
            <img src={profile} alt="" />
            <div className="details">
                <h5>Cat Women</h5>
                <FontAwesomeIcon icon ={faLocation}></FontAwesomeIcon>
                <span>Gulshan, Dhaka</span>
            </div>
           </div>
    );
};

export default User;