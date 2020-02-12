import React, { Component } from 'react'
import Video from 'react-background-video-player'

import { Button, ButtonToolbar } from 'reactstrap'
import { Container, Row, Column } from '../Layout'

import vid from './bgr.mov'
import menu from './menu.png'
import logo from './logo.svg'
import typo from './typo.svg'

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            width: document.body.clientWidth*0.99,
            height: 0.556*window.innerWidth,
            menuOp: 1
        }

        this.handleResize = this.handleResize.bind(this)
        this.handleLoop = this.handleLoop.bind(this)
        this.handleMenu = this.handleMenu.bind(this)
        this.panelButtons = [ 'Home', 'Publishers', 'Advertisers', 'About', 'Partners', 'Contact' ]
        this.inner = React.createRef()
    }

    handleLoop(progress) {
        if (progress > 0.94) {
            this.setState({videoOut: true}, () => {
                setTimeout(() => {
                    this.setState({videoOut: false})
                }, 1200)
            })
        }
    }

    handleResize() {
        this.setState({ 
            width: document.body.clientWidth,
            height: 0.556*window.innerWidth
        })
    }

    handleMenu() {
        this.setState({menuOp: 0}, 
            () => setTimeout(
                () => this.setState({menu: !this.state.menu}, 
                    
                    () => setTimeout(() => this.setState({menuOp: 1}), 250

                    ), 250
            )
        ))
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    render() {
        let mobile = this.props.mobile

        return (
            <div className="Home" ref={ref => this.wrapper = ref}>
                
                {!mobile 
                    ?
                <Video
                    className={'Header-bgr ' + (this.state.videoOut && 'out') }
                    src={vid}
                    style={this.state}
                    ref={ref => this.video = ref}
                    containerWidth={this.state.width}
                    onTimeUpdate={(currentTime, progress, duration) => this.handleLoop(progress)}
                    containerHeight={this.state.height}/>
                    :
                <div/>
                }

                <Container className={(this.props.mobile) ? 'inner' : ''}>

                    <Row style={{justifyContent: 'space-between'}}>
                        <img src={logo} alt="logo" className="toplogo"/>

                        {mobile 
                            ?
                        <Button onClick={this.handleMenu} className='mob-panel'><img src={menu} alt="panel"/></Button>
                            :
                        <ButtonToolbar style={{ margin: 'auto 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', width: '52%'}}>

                            {this.panelButtons.map((button, index) => 
                                <Button key={index} className={'pannelbutton ' + ((index !== this.panelButtons.length - 1) ? 'basic hvr-underline-from-center' : 'outline hvr-sweep-to-top')} onClick={() => { if (index !== this.panelButtons.length) this.props.handleScroll(button)}}>{button}</Button>
                            )}

                        </ButtonToolbar>
                        }

                    </Row>

                
                        {this.state.menu && this.props.mobile
                        ?
                            <Panelbuttons style={{opacity: this.state.menuOp, margin: this.state.menuOp * 5 + 'vw'}} panelButtons={this.panelButtons} handleScroll={this.props.handleScroll}/>
                        :
                            <Column style={{opacity: this.state.menuOp}}>
                                <img src={typo} alt="typo" className="typo"/>
                                <div className="desc">Atenika aggregates the best offers around with AI based auto optimization</div>
                                <Button className='login outline hvr-sweep-to-top'>Log in</Button>
                            </Column>
                        }
                    

                </Container>

            </div>
        )
    }
}

function Panelbuttons(props) {

    return (
        <Column style={props.style}>
            {props.panelButtons.map((button, index) => 
                <Button key={index} className={'pannelbutton ' + ((index !== props.panelButtons.length - 1) ? 'basic hvr-underline-from-center' : 'outline hvr-sweep-to-top')} onClick={() => { if (index !== props.panelButtons.length) props.handleScroll(button)}}>{button}</Button>
            )}
        </Column>
    )
}


