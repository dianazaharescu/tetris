import { Grid } from './grid.js';
import { Movement } from './shapes/utils/movement.js';
import { generateNewShape, getRandomInt } from './shapes/utils/shape-generator.js';
import {Score} from './shapes/utils/score.js';

const rows = 20;
const columns = 10;
let points = 0;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

let shape = generateNewShape(grid.cells);
let movement = new Movement(shape, grid.cells);

document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
            movement.rotate();
            break;
        case 'ArrowDown':
            movement.down();
            break;
        case 'ArrowLeft':
            movement.left();
            break;
        case 'ArrowRight':
            movement.right();
            break;
        case 'Enter':
            const colors = ['blue', 'green', 'red'];
            //console.log(getRandomInt(colors.length - 1));
            shape.color = colors[getRandomInt(colors.length - 1)];
            shape.draw();
            break;
    }
});

let score = new Score (points, shape, grid.cells);
score.draw();

const animate = () => {
    if(movement.canMove) {
        movement.down();
    } else {
        //console.log('Stopped');
        score.calculate();
        score.draw();
       // scoreCalculator.calculateScore();
        clearInterval(intervalId);
        shape = generateNewShape(grid.cells);
        movement = new Movement(shape, grid.cells);
        score = new Score(points, shape, grid.cells);
        intervalId = setInterval(animate, 200);
    }
}

let intervalId = setInterval(animate, 200);
