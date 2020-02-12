import React from 'react'

import { Container, Column, Row } from '../Layout'

import bag from './bag.svg'
import plane from './plane.svg'
import fb from './football.svg'
import stat from './stat.svg'
import tickets from './tickets.svg'
import dice from './dice.svg'

export default function Verticals() {
    const vert = [
        {image: fb, text: 'Sports Betting'},
        {image: stat, text: 'Financial Investments'},
        {image: bag, text: 'Ecommerce'},
        {image: tickets, text: 'Tickets for Events'},
        {image: dice, text: 'Casino'},
        {image: plane, text: 'Travel'}
    ]

    return (
        <div className='Verticals'>
            
            <div className="title">Our Top Verticals</div>

            <Container style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {vert.map((cell, index) => <Cell {...cell} key={index} index={index}/>)}
            </Container>
        </div>
    )
}

function Cell(props) {
    let cellstyle = {border: '0.02vw solid #D6D6D6'}

    switch (props.index) {
        case 0:
            cellstyle.borderLeft = 'none'
            cellstyle.borderTop = 'none'
            break
        case 1:
            cellstyle.borderTop = 'none'
            break
        case 2:
            cellstyle.borderTop = 'none'
            cellstyle.borderRight = 'none'
            break
        case 3:
            cellstyle.borderBottom = 'none'
            cellstyle.borderLeft = 'none'
            break
        case 4:
            cellstyle.borderBottom = 'none'
            break
        case 5:
            cellstyle.borderBottom = 'none'
            cellstyle.borderRight = 'none'
            break
        default: 
            break
    }
    
    return (
        <div className='cell' style={cellstyle}>

            <Column className='inner' style={{width: '14vw', height: '10vw', margin: 'auto'}}>
                <img src={props.image} alt="image"/>
                <div className='text'>{props.text}</div>
            </Column>

        </div>
    ) 
}
