import React from 'react'
import { Container,  Column } from '../Layout'
import { Button } from 'reactstrap'

export default function Advertiser(props) {
    return (
        <div className='Advertisers'>
            <Container>

                <Column className='column' style={props.mobile ? {margin: '10vw auto'} : {margin: '1.4vw', marginRight: 'auto'}}>

                    <div className="title">Advertiser</div>
                    <div className="sub">Expand Your Reach</div>
                    <ul>
                        <li>Drive more sales with highly respected publishers for successfully promoting your products/services.</li>
                        <li>High quality traffic</li>
                        <li>The leading affiliates in the industry</li>
                        <li>Working in a variety of GEOs</li>
                    </ul>
                    <Button className='join hvr-sweep-to-top outline-alt'>Join now</Button>

                </Column>

            </Container>
        </div>
    )
}
