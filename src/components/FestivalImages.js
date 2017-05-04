import React, { Component } from 'react';
import '../styles/FestivalImages.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


class FestivalImages extends Component {

  constructor(props) {
    super(props);
    this.state = {images : this.props.images};
  }

  handleImageLoad(event) {
     console.log('Image loaded ', event.target)
   }

   render() {
     var images = [];
     this.props.images.map((image, index) => {
       images.push({original: image});
     });

     /*const images = [
       {
         original: 'http://placekitten.com/g/400/200',
         thumbnail: 'http://placekitten.com/g/40/20',
       },
       {
         original: 'http://placekitten.com/g/400/200',
         thumbnail: 'http://placekitten.com/g/40/20',
       },
       {
         original: 'http://placekitten.com/g/400/200',
         thumbnail: 'http://placekitten.com/g/40/20',
       }
     ]*/

     return (
       <ImageGallery
         items={images}
         slideInterval={2000}
         onImageLoad={this.handleImageLoad}/>
     );
   }
}

export default FestivalImages;
