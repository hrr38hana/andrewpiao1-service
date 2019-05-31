import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Slider from "./Slider.jsx";
import ColorSelector from './ColorSelector.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.allImages = {}

    this.state = {
      colorGroup: '',
      currImages: [],
      colorsAvailable: [],
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    $.get('/images')
      .then(res => {
        var i = Math.floor(5 * Math.random())

        var colorGroup = res[i].colorGroup
        var colorsAvailable = Object.keys(res[i].imagePaths)
        var allImages = res[i].imagePaths

        this.allImages = allImages

        this.setState({colorGroup, colorsAvailable, currImages: allImages[colorGroup]})
        console.log('ALL IMAGES: ',  this.allImages)
        console.log('STATE: ', this.state)
    })
  }

  handleClick(e){
    e.preventDefault();
    var color = e.target.id

    this.setState({colorGroup: color})
    this.forceUpdate();

    console.log('NEW STATE: ', this.state)
  }

  render() {
    if (!Object.keys(this.state.currImages).length){
      return <span>loading...</span>
    }

    const images = this.allImages[this.state.colorGroup]

    return (
      <div>
        <Slider images={images} colorGroup={this.state.colorGroup}/>
        <ColorSelector colors={this.state.colorsAvailable} currColor={this.state.colorGroup} handleClick={this.handleClick}/>
      </div>
    );
  }
}

ReactDOM.render( <App />,  document.getElementById('app'))