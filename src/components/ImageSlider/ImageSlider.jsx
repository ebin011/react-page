import React, { Component } from 'react';
import Slider from 'react-slick';

class ImageSlider extends Component {

  render() {
    const {images} = this.props;
    var settings = {
         autoplay:true,
         autoplaySpeed:50,
         slidesToShow: 4,
         slidesToScroll: 1,
         swipeToSlide:true,
         swipe:true,
         infinite:true,
        arrows:false

     };
    return (
    <div>
      <Slider {...settings}>
        {
            images.map((img, indx)  => (
        <div style={{paddingLeft:"3px"}} key={indx}>  <img responsive top className="footer_logo responsive-image" src={img} width ="300" height="350" alt="Logo"/></div>
      ))
        }
      </Slider>
    </div>
    );
  }
}

export default ImageSlider;
