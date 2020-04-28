# Langton's Ant
This is a simple implementation of [Langton's ant](https://en.wikipedia.org/wiki/Langton%27s_ant) using React.

Langton's ant is a two-dimensional universal Turing machine with a very simple set of rules but complex emergent behavior.
Squares on a plane are colored variously either black or white. We arbitrarily identify one square as the "ant". The ant can travel in any of the four cardinal directions at each step it takes. The "ant" moves according to the rules below:

* At a white square, turn 90° clockwise, flip the color of the square, move forward one unit
* At a black square, turn 90° counter-clockwise, flip the color of the square, move forward one unit

### Runing the code
```
npm install
npm start
```
The demo will be running at http://localhost:8080/
