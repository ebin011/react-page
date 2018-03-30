import React, { Component } from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider.jsx';
import { Button } from 'reactstrap';

import SecondSlider from '../../assets/images/second_slider.jpg';

import './FeaturedPage.css';
class FeaturedPage extends Component {

  render() {
    const images = [
      SecondSlider,
      SecondSlider,
      SecondSlider,
      SecondSlider,
      SecondSlider,
      SecondSlider,
      SecondSlider
    ];
    return (
      <div style={{paddingTop:"5%"}}>
        <div style={{textAlign:"center"}}>
          <h3 className="heading">Featured</h3>
          <hr />
          <p className="description">Lorem Ipsum dolor sit amet,consectetur,adipiscing elit,sed doeiusmod tempor incididumtut labour et</p>
        </div>
        <ImageSlider images={images} />
         <div style={{textAlign:"center",  padding:"1%"}}><Button className="featured_btn">View All</Button>{' '}</div>
      </div>
    );
  }
}

export default FeaturedPage;
