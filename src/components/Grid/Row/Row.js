import React from 'react';
import Square from './Square/Square';

const row = (props) => (
  props.cells.map((cell) => {
    return <Square cell={cell}/>
  })
);

export default row;