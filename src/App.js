
import { useEffect, useState } from 'react';
import './App.css';
import Activities from './Components/Activities/Activities';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {

  
  const [activities, setActivities]= useState([]);
  const [exerciseTime, setExerciseTime]= useState(0)
  const [show, setShow] = useState(false);
  const addToList = (time)=>{
    setExerciseTime (exerciseTime+time)
  }
  const handleToast = ()=>{
    setShow(true)
  }
  const onClose = ()=>{
    setShow(false)
  }
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then (data => setActivities(data))
    },[])
  return (
   
    <div className='container'>
      
      <Activities activities = {activities} addToList = {addToList}></Activities>
      <Sidebar handleToast={handleToast} exerciseTime={exerciseTime} show={show} onClose={onClose}></Sidebar>
    </div>
    
    
  );
}

export default App;
