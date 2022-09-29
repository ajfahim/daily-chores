import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ActivityCard({activity}) {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={activity.image}/>
      <Card.Body>
        <Card.Title>{activity.chore}</Card.Title>
        <Card.Text>
          Time Required: {activity.time} minutes
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ActivityCard;