import React from 'react';
import classes from './Square.module.css';
import WithClass from '../../../hoc/WithClass';

const square = (props) => {
  var stateClass;
  var antClass;

  switch(props.cell.antFacing){
    case 0:
      antClass = classes.AntLeft;
      break;
    case 1:
      antClass = classes.AntUp;
      break;
    case 2:
      antClass = classes.AntRight;
      break;
    case 3:
      antClass = classes.AntDown;
      break;
    default:
      antClass = classes.NoAnt;
  }

  if(props.cell.state)
    stateClass = classes.SquareWhite;
  else
    stateClass = classes.SquareBlack;
    
  return (
    <WithClass classes={stateClass}>
      <WithClass classes={antClass}/>
    </WithClass>
  )
};

export default square;