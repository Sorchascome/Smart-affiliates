import React from 'react'
import { Container, Row, Column } from '../Layout'
import { Card } from 'reactstrap'
import Arr from './obj'

export default function Offers(props) {
    return (
        <div className='Offers'>
            <Container style={{padding: '4.4vw 10vw'}}>
                {!props.mobile 
                    ? 
                    <Row style={{justifyContent: 'space-between'}}><OfferArr style={{position: 'absolute'}}/></Row>
                    :
                    <Column style={{justifyContent: 'space-between'}}><OfferArrMob /></Column>
                }
            </Container>
        </div>
    )
}

function OfferArr() {

    return Arr.map(offer => 
        <Card className='offer' key={offer.title} style={{borderRadius: '0', boxShadow: '0px 0px 5px 3px rgba(0,0,0,0.25'}}>
            <Column style={{margin: '0'}}>

                <div className="title">{offer.title}</div>
                <div className="text">
                    {offer.text.map(p => <p>{p}</p>)}
                </div>

            </Column>
        </Card>
        )
}

function OfferArrMob() {

    return Arr.map(offer => 
        <Column className='offer' key={offer.title}>

            <img src={offer.src} alt={offer.title}/>
            <div className="title">{offer.title}</div>
            <div className="text">
                    {offer.text.map(p => <p>{p}</p>)}
            </div>

        </Column>
        )
}


