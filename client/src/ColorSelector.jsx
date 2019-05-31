import React from 'react';
import styled from 'styled-components';


const Swatch = styled.div`

  display: inline-block;
  height: 40px;
  width: 40px;
  margin: 5px;
  border-radius: 50%;
  background-color: ${(props)=> props.color};
  cursor: pointer;
  border: 3px solid grey;
`


const Text = styled.span`
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  line-height: 2;
`
const Color = styled.span`
  font-size: 26px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  color: grey;
`


const ColorSelector = (props) => {
    const colors = props.colors;
    const currColor = props.currColor.charAt(0).toUpperCase() + props.currColor.slice(1);

    return (
     <div>

      <Text> Color /</Text>
      <Color >  {currColor} </Color> <br/>
      {colors.length ? colors.map((color, i) => <Swatch key={i} id={color} color={color} onClick={props.handleClick}></Swatch>) : null}
      </div>
    )
}

export default ColorSelector;