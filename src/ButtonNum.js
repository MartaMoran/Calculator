import React from 'react';
import { Button } from 'reactstrap';

const ButtonNum =(props)=>{
    return (<>
     <Button  color={props.color} value={props.value} onClick={props.handleNum} >{props.text}</Button>

    </>
    )
}

export {ButtonNum}