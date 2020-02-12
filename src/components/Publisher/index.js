import React from 'react'
import { Container,  Column } from '../Layout'
import { Button } from 'reactstrap'

export default function Publisher(props) {
    return (
        <div className='Publishers'>
            <Container>

                <Column className='column' style={props.mobile ? {margin: '10vw auto'} : {margin: '1.4vw', marginLeft: 'auto'}}>

                    <div className="title">Publisher</div>
                    <div className="sub">Partner with the Best Brands</div>

                    <ul>
                        <li>Earn commissions by partnering with the most recognized brands and start seeing an increase in your monthly revenues.</li>
                        <li>Automatically receive your revenues on your preferred payment method.</li>
                        <li>Smart link rotation to highest converting brand per GEO</li>
                        <li>Easy to use tracking links and set up postabck/api</li>
                        <li>Real time and detailed reporting platform</li>
                    </ul>
                    <Button className='join outline-alt hvr-sweep-to-top'>Join now</Button>

                </Column>

            </Container>
        </div>
    )
}
