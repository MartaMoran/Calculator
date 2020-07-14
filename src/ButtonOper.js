import React from "react";

const ButtonOper=(props)=>{
    return <>
        <button onClick={props.handleEqual} value={props.value}>{props.text}</button>
    </>
}

export{ButtonOper}