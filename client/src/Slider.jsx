import React from 'react';
import { Carousel } from "react-responsive-carousel";

class Slider extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {images} = this.props;
    return (
        <Carousel showArrows={true} >
          {images.map(image => (
            <div key={image}>
              <img src={image} alt=""/>

            </div>
          ))}
        </Carousel>
      );
  }
}

export default Slider;