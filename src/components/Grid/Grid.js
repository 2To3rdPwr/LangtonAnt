import React from 'react';
import Row from './Row/Row';

const rowStyle = {
  height: 25,
}

const grid = (props) => (
  props.grid.map((row) => {
    return <div style={rowStyle}><Row cells={row}/></div>
  })
);

export default grid;