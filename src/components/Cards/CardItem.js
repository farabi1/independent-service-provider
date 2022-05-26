import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardItem = (props) => {
    const { name, img, text } = props.data;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Term :{name}</Card.Title>
                    <Card.Text>
                        <h3>{text}</h3>
                        <h3>{text}</h3>
                        <h3>{text}</h3>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardItem;