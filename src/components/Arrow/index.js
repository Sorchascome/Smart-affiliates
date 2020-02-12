import React from 'react'

export default function Arrow(props) {
    return <div className='homearrow' onClick={() => props.handleScroll('Home')} style={props.arrowStyle}/>
}
  