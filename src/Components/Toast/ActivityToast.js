

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function ActivityToast({show,onClose}) {
  

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={onClose} show={show} delay={3000} autohide>
        <Toast.Header>
           
            
          </Toast.Header>
          <Toast.Body> YaY!!! All activities are completed!</Toast.Body>
        </Toast>
      </Col>
      
    </Row>
  );
}

export default ActivityToast;