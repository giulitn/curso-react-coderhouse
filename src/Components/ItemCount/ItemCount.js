import * as React from 'react';
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline } from 'react-icons/io';
import { Button, ButtonGroup } from 'react-bootstrap';
import './ItemCount.css'


export default function itemCount({ counter, onAdd, onClick }) {
    return (
        
                <ButtonGroup>
                    <Button onClick={() => onAdd('remove')}>
                        <IoIosRemoveCircleOutline />
                    </Button>
                    <span className='number'>
                        {counter}
                    </span>
                    <Button onClick={() => onAdd('add')}>
                        <IoIosAddCircleOutline />
                    </Button>
                </ButtonGroup>
         

    )
}


// Si usamos export default, no es necesario importarlo como { componente } en App.js