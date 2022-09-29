import React from 'react';
import './Break.css'
const Break = ({addBreakTime}) => {
    return (
        <div className='break'>
            <h5>Add a Break</h5>
            <div className="times">
                <p onClick={()=>addBreakTime(5)}>5<span>M</span></p>
                <p onClick={()=>addBreakTime(10)}>10<span>M</span></p>
                <p onClick={()=>addBreakTime(15)}>15<span>M</span></p>
                <p onClick={()=>addBreakTime(20)}>20<span>M</span></p>
                <p onClick={()=>addBreakTime(25)}>25<span>M</span></p>
            </div>
        </div>
    );
};

export default Break;