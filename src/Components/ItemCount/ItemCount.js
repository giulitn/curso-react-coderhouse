import * as React from 'react';
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";
import { Container } from "react-bootstrap";

import './ItemCount.css'


export default function itemCount({ counter, onAdd }) {
    return (

        <Container>
            <VscChromeMinimize id="controller" onClick={() => onAdd('remove')}></VscChromeMinimize>
            <span className='number'>
                {counter}
            </span>
            <VscAdd id="controller" onClick={() => onAdd('add')}></VscAdd>
        </Container>
    )
}


