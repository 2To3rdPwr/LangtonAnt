class Ant{
  constructor(x, y){
    this.coords[0] = x;
    this.coords[1] = y;
    this.coords[2] = 1;
    // facings
    // 1=^ -1=v 2=> -2=<
  }

}
module.exports = Ant;