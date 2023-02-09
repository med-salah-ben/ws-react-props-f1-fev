import React from 'react';
import {Card , Button} from "react-bootstrap"

const Car = (props) => {
    console.log(props)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.OneCar.imgSrc} />
      <Card.Body>
        <Card.Title>   {props.OneCar.name} </Card.Title>
        <Card.Text>
          {props.OneCar.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>props.handleMsg(props.OneCar.name , props.OneCar.price)} >Buy it</Button>
      </Card.Body>
    </Card>
  )
}

export default Car