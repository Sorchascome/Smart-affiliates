import React from 'react'

export default function Column(props) {

    return (
        <div className={props.className} style={{display: 'flex', flexDirection: 'column', margin: 'auto 0', ...props.style}}>
            {props.children}
        </div>
    )
}
