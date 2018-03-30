import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TwoByThreeGrid from '../../components/TwoByThreeGrid/TwoByThreeGrid.jsx';
import Photo from '../../assets/images/first_slider.jpg'
import { Button } from 'reactstrap';

import './LoremPage.css'
const images=[Photo,Photo,Photo,Photo,Photo];
class TwoByThreePage extends Component {
  render() {
    console.log("images");
    return (
    <Container>
      <div style={{paddingTop:"5%"}}>
        <div style={{textAlign:"center"}}>
          <h3 className="heading">Lorem Ipsum</h3>
          <hr />
          <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <Row>
        <Col md="6" xs="12" sm="12">
          <TwoByThreeGrid images={images}/>
         </Col>
         <Col md="6" xs="12" sm="12">
              <h3 className="heading">Lorem Ipsum</h3>
          <div style={{textAlign:"left"}}>
           <Row >
             <p className="description" >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
            </p>
          </Row>
          <Row>
            <Button className="lorem_page_btn">View all</Button>
          </Row>
        </div>
        </Col>
       </Row>
       </div>
     </div>
   </Container>
    );
  }
}

export default TwoByThreePage;
