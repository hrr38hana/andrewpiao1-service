import React from 'react';
import { Carousel } from "react-responsive-carousel";

class Slider extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Carousel showArrows={true} showThumbs={true}>
          {this.props.images.map(image => (
            <div key={image}>
              <img src={image}/>
            </div>
          ))}
        </Carousel>
      );
  }
}


export default Slider;