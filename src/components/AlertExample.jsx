import React from 'react'
import {Alert, Container ,Card} from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert show={true} variant="danger" onClose={() => setShow(false)} dismissible className='container my-3'>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)} className='my-5'>Show Alert</Button>;
}

export default AlertDismissibleExample;


