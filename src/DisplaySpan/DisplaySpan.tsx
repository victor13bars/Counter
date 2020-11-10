import React from 'react';
import './DisplaySpan.css';

type DisplayType = {
    count: number
    text:string
    max:number
}

export function DisplaySpan(props: DisplayType) {
    return (
        <div className="displaySpan">

            {props.text ?  <span className={props.text[0] ==="e" ? "textNorm" : "textRed"}>{props.text}</span>:<span className={props.count === props.max ? "red" : "main"}>{props.count}</span>}
        </div>
    )
}