import React, { Component } from 'react';
import StackGrid from "react-stack-grid";
import { Container, Row, Col } from 'reactstrap';

import './ThreeByTwoGrid.css'
class ThreeByTwoGrid extends Component {

  render() {
        const images=this.props;
    return (

      <StackGrid
          columnWidth={"50%"}
          className="grid_setting"
        >
          <div  key="key1"><img src={images.images[0]} alt="djjds" width="100%" height="117"/></div>
          <div key="key2"><img src={images.images[1]} alt="djjds" width="100%" height="130"/></div>
          <div key="key3"><img src={images.images[2]} alt="djjds" width="100%" height="120"/></div>
          <div key="key4"><img src={images.images[3]} alt="djjds" width="100%" height="230"/></div>
          <div key="key5"><img src={images.images[4]} alt="djjds" width="100%" height="119" /></div>
        </StackGrid>

    );
  }

}

export default ThreeByTwoGrid;
