import React from 'react';

type ButtonType = {
    name: string
    disabled: boolean
    reset: () => void
}

export function Button(props: ButtonType) {

    return <button disabled={props.disabled} onClick={props.reset}>{props.name}</button>
}