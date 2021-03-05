import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
//import './Item.css'


const Item = ({ item:
    { 
        id, 
        title, 
        description, 
        image } 
    }) => (
        <div className="col-md-4">
                    <Card style={{ width: '18rem' }} className='Card'>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <NavLink to={`/item/${id}`}>
                                <Button variant="primary" className='detailbutton'>Ver producto</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                </div>
)
export default Item;


