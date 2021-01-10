import React from 'react';
import './Slider.css'
import { Carousel } from "react-bootstrap";

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/1791/7101/files/dog-beach_2560x1432_0fb412d2-354a-4b68-94a6-2e3294d8cc4c.jpg?v=1566488367"
                    alt="Foto carrusel de imágenes"
                />
                <Carousel.Caption>
                    <h2> <mark> ¡Sentí orgullo de quien sos! </mark></h2>
                    <p>Envíos a toda Argentina, para que llegue el orgullo a todas las provincias</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;