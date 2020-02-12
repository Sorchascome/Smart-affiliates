import React from 'react'
import { Container, Column, Row } from '../Layout'

export default function index(props) {
    return (
        <Container className='Stats' style={{padding: (props.mobile) ? '6.4vw 10vw' : '10vw 10vw 5vw 10vw'}}>
            {props.mobile 
                ? 
                <Column style={{ justifyContent: 'center', margin: 'auto' }}>

                    <StatArr />

                </Column>
                :
                <Row style={{ justifyContent: 'center' }}>

                    <StatArr />

                </Row>
            }
        </Container>
    )
}


function StatArr() {
    let arr = [
        {numb: '30+', item: 'Brands'},
        {numb: '100+', item: 'Campaigns'},
        {numb: '100+', item: 'Affiliates'},
    ]

    return arr.map(stat => 
        <Column className='stat' key={stat.item} >
            
            <div className="numb">{stat.numb}</div>
            <div className="item">{stat.item}</div>

        </Column>
    )
}

