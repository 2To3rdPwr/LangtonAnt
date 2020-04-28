import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Cell from './models/Cell.js';

class App extends Component {
  state ={
    grid: [[false]],
    ant: []
  };

  render() {
    return <Grid grid={this.state.grid}/>
  }

  componentDidMount() {
    this.buildGrid(11);
    setTimeout(() => { 
      this.step();
    }, 2000);
  }

  buildGrid(n){
    // Initialize grid of size nXn with ant at center
    let newGrid = [];
    for(var i = 0; i < n; i++){
      let newRow = [];
      for (var j = 0; j < n; j++){
        newRow.push(new Cell());
      }
      newGrid.push(newRow);
    }

    var mid = Math.floor(n / 2);
    var newAnt = [mid, mid, 0];
    this.setState({ ant: newAnt });

    newGrid[mid][mid].putAnt(0);

    this.setState({ grid: newGrid });
  }

  step() {
    var nextGrid = [...this.state.grid];
    
    //Ant time
    var newAnt = [0, 0, this.state.ant[2]];

     //determine new ant facing
     if(this.state.grid[this.state.ant[0]][this.state.ant[1]].state){
      newAnt[2] = (newAnt[2] + 1);
      if(newAnt[2] > 3)
        newAnt[2] = 0;
    }
    else {
      newAnt[2] = (newAnt[2] - 1);
      if(newAnt[2] < 0)
        newAnt[2] = 3;
    }

    //First, move new ant
    switch (newAnt[2]){
      case 0:
        newAnt[0] = this.state.ant[0];
        newAnt[1] = this.state.ant[1] - 1;
        break;
      case 1:
        newAnt[0] = this.state.ant[0] - 1;
        newAnt[1] = this.state.ant[1];
        break;
      case 2:
        newAnt[0] = this.state.ant[0];
        newAnt[1] = this.state.ant[1] + 1;
        break;
      case 3:
        newAnt[0] = this.state.ant[0] + 1;
        newAnt[1] = this.state.ant[1];
        break;
    }
    
    //Next, scrap old ant
    nextGrid[this.state.ant[0]][this.state.ant[1]].putAnt(4);
    
    //put new ant on grid
    nextGrid[newAnt[0]][newAnt[1]].putAnt(newAnt[2]);
    this.setState({ grid: nextGrid, ant: newAnt });

    setTimeout(() => { 
      this.step();
    }, 250);
  }
}

export default App;
