import React from 'react';
import styled from 'styled-components';


const Swatch = styled.div`
  display: inline-block;
  margin: 5px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${(props)=> props.color};
  cursor: pointer;
`


const ColorSelector = (props) => {
    const colors = props.colors
    return (
      <div className='swatches'>
      {colors.length ? colors.map((color, i) => <Swatch key={i} id={color} color={color} onClick={props.handleClick}></Swatch>) : null}

      </div>
    )
}

export default ColorSelector;