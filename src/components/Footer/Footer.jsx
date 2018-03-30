import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import Logo from '../../assets/images/logo.png';
import Facebook from 'react-icons/lib/fa/facebook-square';
import Instagram from 'react-icons/lib/fa/instagram';
import Pinterest from 'react-icons/lib/fa/pinterest-square';
import Twitter from 'react-icons/lib/fa/twitter-square';

import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div className="footer">
      <Container >
        <Row>
          <Col>
            <Row>
              <Col xs="6" md="6" className="company_logo_footer">
                <img responsive top className="footer_logo responsive-image" src={Logo} alt="Logo"/>
              </Col>
              <Col xs="6" md="6" style={{paddingLeft:0}}>
                <p className="company_name_footer">Company Name</p>
              </Col>
              <Col xs="12" md="12" style={{paddingLeft:0}}>
                <Button className="footer_btn">LOREM IPSUM US</Button>
              </Col>
            </Row>
          </Col>
          <Col style={{textAlign:"center"}}>
            <Row>
              <Col xs="12" md="12"><h6>LOREM</h6></Col>
              <Col xs="12" md="12"><p className="footer_des">LOREM</p></Col>
              <Col xs="12" md="12"><p className="footer_des">LOREM</p></Col>
              <Col xs="12" md="12"><p className="footer_des">LOREM</p></Col>
              <Col xs="12" md="12"><p className="footer_des">LOREM</p></Col>
              <Col xs="12" md="12"><p className="footer_des">LOREM</p></Col>
            </Row>
          </Col>
          <Col style={{textAlign:"center"}}>
            <Row>
              <Col xs="12" md="12"><h6>LOREM</h6></Col>
              <Col xs="12" md="12"><p className="footer_des">LOREM</p></Col>
              <Col xs="12" md="12"><p className="footer_des">LOREM</p></Col>
              <Col xs="12" md="12"><p className="footer_des">LOREM</p></Col>
              <Col xs="12" md="12"><p className="footer_des">LOREM</p></Col>
              <Col xs="12" md="12"><p className="footer_des">LOREM</p></Col>
            </Row>
          </Col>
          <Col>
          <Row className="footer_icons">
            <Col xs="3" md="3" className="footer_icon"><Facebook  size={30} color="#839192"/></Col>
            <Col xs="3" md="3" className="footer_icon"><Instagram  size={30} color="#839192"/></Col>
            <Col xs="3" md="3" className="footer_icon"><Pinterest size={30} color="#839192"/></Col>
            <Col xs="3" md="3" className="footer_icon"><Twitter size={30} color="#839192"/></Col>
          </Row>
          </Col>
        </Row>

      </Container>
    </div>
    );
  }
}

export default Footer;
