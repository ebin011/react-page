import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

import './GridLayout.css';
class GridLayout extends Component {

  render() {
    const {images} = this.props;
    const IMAGES =
[{
        src: images[0],
        thumbnail:images[0],
        thumbnailWidth:320,
        thumbnailHeight: 212,
},
{
        src: images[1],
        thumbnail: images[1],
        thumbnailWidth: 310,
        thumbnailHeight: 212,
},

{
        src: images[2],
        thumbnail: images[2],
        thumbnailWidth: 640,
        thumbnailHeight: 212
}]


    return (
            <Gallery className="grid" images={IMAGES}  backdropClosesModal={true}  enableImageSelection={false}/>
    );
  }
}

export default GridLayout;
