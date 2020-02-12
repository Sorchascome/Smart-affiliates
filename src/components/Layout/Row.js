import React from 'react'

export default function Row(props) {
    return (
        <div className={props.className} style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', ...props.style}}>
            {props.children}
        </div>
    )
}
