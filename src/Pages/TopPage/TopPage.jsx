import React, { Component } from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider.jsx';

import FirstSlider from '../../assets/images/first_slider.jpg';

import './TopPage.css';
class TopPage extends Component {

  render() {
    const images = [
      FirstSlider,
      FirstSlider,
      FirstSlider,
      FirstSlider,
      FirstSlider,
      FirstSlider,
      FirstSlider
    ];
    return (
      <div style={{paddingTop:"5%",paddingBottom:"5%"}}>
        <div style={{textAlign:"center"}}>
          <h3 className="heading">Top Lorem Ipsum</h3>
          <hr />
          <p className="description">Lorem Ipsum dolor sit amet,consectetur,adipiscing elit,sed doeiusmod tempor incididumtut labour et</p>
        </div>
        <ImageSlider images={images} />

      </div>
    );
  }
}

export default TopPage;
