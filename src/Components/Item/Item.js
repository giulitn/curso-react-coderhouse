import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import './Item.css'

function Item(props) {
    return (
        <div>
            <div>
                <div>
                    <Card style={{ width: '18rem' }} className='Card'>
                        <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_2X_983745-MLA41071258804_032020-F.webp" />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                ¡Pagá con Ahora 12 y pagá dentro de 90 días!
                            </Card.Text>
                            <NavLink to={`/item/${props.id}`}>
                                <Button variant="primary" className='detailbutton'>Ver detalle</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}


export default Item;


