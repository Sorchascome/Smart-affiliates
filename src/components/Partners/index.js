import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  FormFeedback, Form, FormGroup, Label, Input, Button
} from 'reactstrap'


import { Container, Column, Row } from '../Layout'

import { items, mobitems } from './paths'

const Partners = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = !props.mobile ? items.map((step, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <Row className='carousel-row'>
          {step.first.map((logo, index) => 
          <div className='logo' key={index}>
            <img src={logo} alt={index}></img>
          </div>)}
        </Row>
        <Row className='carousel-row'>
          {step.second.map((logo, index) => 
          <div className='logo' key={index}>
            <img src={logo} alt={index}></img>
          </div>)}
        </Row>
        
      </CarouselItem>
    )})
    : mobitems.map((step, index) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={index}
        >
          <Column style={{display: 'inline-flex', margin: 'auto 3vw'}} className='carousel-column'>
            {step.first.map((logo, index) => 
            <div className='logo' key={index}>
              <img src={logo} alt={index}></img>
            </div>)}
          </Column>
          <Column style={{display: 'inline-flex', margin: 'auto 3vw'}} className='carousel-column'>
            {step.second.map((logo, index) => 
            <div className='logo' key={index}>
              <img src={logo} alt={index}></img>
            </div>)}
          </Column>
          
        </CarouselItem>
      )})

  return (
    <div className="Partners">
      <Container>

        <div className="title">Our Partners</div>

        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >

          {slides}

          <CarouselControl class direction="prev" directionText="Previous" onClickHandler={previous} />

          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />

        </Carousel>

        {!props.mobile
        ?
        <Row>

          <Regform />
          <LastTitle titleStyle={{width: '34%', margin: '1vw 6vw', textAlign: 'left'}}/>

        </Row>
        :
          <Column>

            <LastTitle titleStyle={{width: '100%', margin: '4vw auto'}}/>
            <Regform />

          </Column>
        }


      </Container>

      <div className="footer"><span>© Copyright 2019 - Atenika - Privacy Policy - Terms and Conditions</span></div>
    </div>

  )
}

export default Partners


function LastTitle(props) {
  return (
    <Column style={props.titleStyle}>

      <div className="subtitle">You are just one step away</div>
      <div className="desc">Building long-term relationships with publishers, as well as advertisers, is at the core of our vision. We truly want to be in contact with you, so please don’t hesitate to get in touch with our hard working team today!</div>

    </Column>
  )
}

function Regform() {
  return (
    <Form className='regform'>

      <FormGroup>
          <Label for="fname">Name*</Label>
          <Input name="fname" id="fname" />
      </FormGroup>

      <FormGroup>
          <Label for="email">Email*</Label>
          <Input type="email" name="email" id="email" />
      </FormGroup>

      <FormGroup>
          <Label for="company">Company</Label>
          <Input name="company" id="company" />
      </FormGroup>
      
      <FormGroup>
          <Label for="company">Message</Label>
          <Input type="textarea" name="message" id="textArea" />
      </FormGroup>

      <Button className="send outline hvr-sweep-to-top"><span>Send</span></Button>

  </Form>
  )
}

