
import { useEffect, useState } from 'react';
import './App.css';
import Activities from './Components/Activities/Activities';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {

  
  const [activities, setActivities]= useState([]);
  const [exerciseTime, setExerciseTime]= useState(0)

  const addToList = (time)=>{
    setExerciseTime (exerciseTime+time)
  }
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then (data => setActivities(data))
    },[])
  return (
    <div className='container'>
      
      <Activities activities = {activities} addToList = {addToList}></Activities>
      <Sidebar exerciseTime={exerciseTime}></Sidebar>
    </div>
  );
}

export default App;
