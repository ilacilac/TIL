/**
 * Let's make a game 🕹
 */
interface Pos {
  x: number;
  y: number
}
const position:Pos = {
  x: 0,
  y: 0
}

function move(direction: 'up' | 'down' | 'left' | 'right') {
  switch (direction) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    default:
      throw new Error(`Unknown direction ${direction}`);
  }
}
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
