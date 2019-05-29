import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Slider from "./Slider.jsx";
import ColorSelector from './ColorSelector.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colorGroup: '',
      images: [],
      colorsAvailable: [],
    }

    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick(e){
    e.preventDefault();
    var color = e.target.id

    await this.setState({colorGroup: color, banana: color})
    this.forceUpdate();
    // this.setState({banana: color})
    console.log('NEW STATE: ', this.state)
  }

  componentDidMount(){
    $.get('/images')
      .then(res => {
        var i = Math.floor(5 * Math.random())

        var colorGroup = res[i].colorGroup
        var colorsAvailable = Object.keys(res[i].imagePaths)
        var images = res[i].imagePaths

        this.setState({colorGroup, images, colorsAvailable})

        console.log('STATE: ', this.state)
      })
  }

  render() {
    if (!Object.keys(this.state.images).length){
      return <span>loading...</span>
    }

    const images = this.state.images[this.state.colorGroup]
    // console.log('these IMAGES: ', images)

    return (
      <div>

      <Slider images={images} colorGroup={this.state.colorGroup}/>

      <h2>color selector:</h2>
      <ColorSelector colors={this.state.colorsAvailable} handleClick={this.handleClick}/>

    </div>
    );
  }
}

ReactDOM.render( <App />,  document.getElementById('app'))