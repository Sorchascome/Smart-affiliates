import React, { Component } from 'react'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'hover.css'

import Header from './components/Header'
import Offers from './components/Offers'
import Publisher from './components/Publisher'
import Advertiser from './components/Advert'
import Stats from './components/Stats'
import About from './components/About'
import Partners from './components/Partners'
import Arrow from './components/Arrow'
import Verticals from './components/Verticals'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      offset: 0,
      arrowStyle: {pointerEvents: 'none', opacity: 0},
      mobile: false
    }

    this.Components = []
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(button) {
    let offset = [...this.Components.children].find(div => div.className === button)
    if (offset) {
      window.scrollTo({
        top: offset.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  componentDidMount() {
    let mobile = document.body.offsetWidth > 378 ? false : true;
    this.setState({ mobile: mobile }, () => {
      window.onscroll = () => ( !mobile && this.setState({
        arrowStyle: window.scrollY > this.home.state.height/2 ? {cursor: 'pointer', opacity: 1} : {pointerEvents: 'none', opacity: 0},
      }) )
      window.onresize = () => this.setState({mobile: document.body.offsetWidth > 378 ? false : true})        
    })
  }

  render() {
    let mobile = this.state.mobile
    return (
      <div className="Smart-Affiliates" ref={ref => this.Components = ref}>

        {(!mobile && <Arrow arrowStyle={this.state.arrowStyle} handleScroll={this.handleScroll}/>)}
        <Header handleScroll={this.handleScroll} ref={ref => this.home = ref} mobile={mobile}/>
        <Offers mobile={mobile}/>
        <Stats mobile={mobile}/>
        <Publisher mobile={mobile}/>
        <Advertiser mobile={mobile}/>
        <Verticals mobile={mobile} />
        <About mobile={mobile}/>
        <Partners mobile={mobile}/>

      </div>
    )
  }
}


