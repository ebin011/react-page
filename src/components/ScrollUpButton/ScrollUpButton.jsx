import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

import AngleUp from 'react-icons/lib/fa/angle-up';

import './ScrollUpButton.css'

class ScrollUpButton extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0,
        showScroll: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }
  handleScroll() {
    if(window.pageYOffset>100){
        this.setState({showScroll:true})
      }
      else{
        this.setState({showScroll:false})
      }
}
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render () {
      return (
        <div style={{padding:"1%"}}>
          {this.state.showScroll?
        <Button title='Back to top' className='scroll'
               onClick={ () => { this.scrollToTop(); }}>
               <AngleUp  size={25} className='arrow-up' />
             </Button>:null}
        </div>   );
   }
}

export default ScrollUpButton;
