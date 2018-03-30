import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import GridLayout from '../../components/GridLayout/GridLayout.jsx';
import ThreeByTwoGrid from '../../components/ThreeByTwoGrid/ThreeByTwoGrid.jsx';

import Grid1 from '../../assets/images/grid1.jpg';


import './OurLorem.css';
class OurLorem extends Component {

  render() {
    const images = [
      Grid1,
      Grid1,
      Grid1
    ];
    const imagesSecond=[Grid1,Grid1,Grid1,Grid1,Grid1];
    return (
        <Container >
      <div style={{paddingTop:"5%"}}>
        <div style={{textAlign:"center"}}>
          <h3 className="heading">Our Lorem</h3>
          <hr />
          <p className="description">Lorem Ipsum dolor sit amet,consectetur,adipiscing elit,sed doeiusmod tempor incididumtut labour et</p>
        </div>
      <div>
    <Row >
      <Col lg ="5" md="12" xs="12" sm="12" style={{paddingRight:"1px",paddingLeft:"1px"}}  >
        <GridLayout images={images}/>
      </Col>
      <Col lg="6" md="12" xs="12" sm="12" style={{paddingRight:"1px",paddingLeft:"1px"}} >
        <ThreeByTwoGrid images={imagesSecond} style={{padding:0,margin:0}} />
      </Col>
    </Row>
  </div>

      </div>
    </Container>
    );
  }
}

export default OurLorem;
