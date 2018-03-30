import React, { Component } from 'react';
import StackGrid from "react-stack-grid";
class TwoByThreeGrid extends Component {

  render() {
    const images=this.props;
    return (
      <StackGrid
          columnWidth={"50%"}
        >

          <div key="key1"><img src={images.images[0]} alt="djjds" width="100%" height="205" /></div>
          <div key="key2"><img src={images.images[1]} alt="djjds" width="100%" height="100"/></div>
          <div key="key3"><img src={images.images[2]} alt="djjds" width="100%" height="100"/></div>
          <div key="key4"><img src={images.images[3]} alt="djjds" width="100%" height="100"/></div>
          <div key="key5"><img src={images.images[4]} alt="djjds" width="100%" height="100"/></div>
        </StackGrid>
    );
  }

}

export default TwoByThreeGrid;
