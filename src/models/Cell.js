class Cell{
  constructor(){
    this.state = true;
    this.antFacing = 4;
  }
  setState(newState){
    this.state = newState;
  }
  putAnt(ant){
    this.antFacing = ant;
    if(ant === 4)
      this.state = !this.state;
  }
}
module.exports = Cell;