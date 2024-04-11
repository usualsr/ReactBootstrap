import React from 'react'
import {Badge,Button} from 'react-bootstrap';



const ButtonExample = () => {
  return (
    <div className='container my-3'>

         <Button variant="primary">
      Profile <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
    <Badge className='mx-4 py-2 px-5' pill >okay</Badge>
      
    </div>
  )
}

export default ButtonExample

