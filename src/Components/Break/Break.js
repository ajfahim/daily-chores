import React from 'react';
import './Break.css'
const Break = () => {
    return (
        <div className='break'>
            <h5>Add a Break</h5>
            <div className="times">
                <p>10<span>M</span></p>
                <p>20<span>M</span></p>
                <p>30<span>M</span></p>
                <p>40<span>M</span></p>
                <p>50<span>M</span></p>
            </div>
        </div>
    );
};

export default Break;