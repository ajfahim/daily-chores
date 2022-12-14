
import "./Activities.css";
import ActivityCard from "../ActivityCard/ActivityCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Activities = ({activities , addToList}) => {
    
    return (
        <div className='activities'>
            <div className='activities-container'>
                    <div className='title'>
                        <FontAwesomeIcon className='icon' icon={faDumbbell} />
                        <h3>Daily Chores</h3>
                    </div>
                    <p>Select today's Chores</p>
                        <div className='chores'>
                            
                                {
                                    activities.map((activity)=><ActivityCard key={activity.id} addToList={addToList} activity = {activity}></ActivityCard>)
                                
                                }
                            
                            
                        </div>
                </div>
            
            
           
        </div>
    );
};

export default Activities;