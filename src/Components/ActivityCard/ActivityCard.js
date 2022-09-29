
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ActivityCard({activity, addToList}) {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={activity.image}/>
      <Card.Body>
        <Card.Title>{activity.chore}</Card.Title>
        <Card.Text>
          Time Required: {activity.time} minutes
        </Card.Text>
        <Button variant="primary" onClick={()=>addToList(activity.time)}>Add to List</Button>
      </Card.Body>
    </Card>
  );
}

export default ActivityCard;