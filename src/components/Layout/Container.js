import React from 'react'

export default function Container(props) {
    return (
        <div className={props.className} style={{height: '100%', display: 'flex', flexDirection: 'column',  padding: '4.2vw 12vw', ...props.style}}>
            {props.children}
        </div>
    )
}
