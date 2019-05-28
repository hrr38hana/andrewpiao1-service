import React from 'react';
import ReactDOM from 'react-dom';
import Slider from "./Slider.jsx";
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ]
    }
  }

  componentDidMount(){
    $.get('/images')
      .then(res => {
        var i = Math.floor(5 * Math.random())

        var colorGroup = res[i].colorGroup
        // console.log("--- RES from GET", res[0].imagePaths)
        var imagesByColor = res[i].imagePaths[colorGroup]

        this.setState({images: imagesByColor})
        console.log('STATE: ', this.state.images)
      })
  }

  render() {
    // if (!this.state.images){
    //   return <span>not yet loaded!</span>
    // }

    return (

      <div>
      <Slider images={this.state.images} />
    </div>
    );
  }
}

ReactDOM.render( <App />,  document.getElementById('app'))