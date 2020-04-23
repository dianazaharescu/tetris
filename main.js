import { Grid } from './shapes/grid.js';
import { L } from './shapes/l-shape.js';
import { I } from './shapes/i-shape.js';
import { O } from './shapes/o-shape.js';
import { S } from './shapes/s-shape.js';
import { Z } from './shapes/z-shape.js';
import { J } from './shapes/j-shape.js';
import { T } from './shapes/t-shape.js';
import {Move} from './movement.js';

const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

//TODO - why 0.
const lShape = new L(0, 3, grid.cells);
lShape.draw();

const oShape = new O(5, 3, grid.cells);
oShape.draw();

const iShape = new I(0, 7, grid.cells);
iShape.draw();

const sShape = new S(9, 2, grid.cells);
sShape.draw();

const zShape = new Z(9, 7, grid.cells);
zShape.draw();

const jShape = new J(12, 2, grid.cells);
jShape.draw();  

const tShape = new T(12, 5, grid.cells);
tShape.draw();

document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
            grid.draw();
            Move(lshape).up();
            lShape.draw();
            break;
        case 'ArrowDown':
            grid.draw();
            Move(lshape).down();
            lShape.draw();
            break;
        case 'ArrowLeft':
            grid.draw();
            Move.left();
            lShape.draw();
            break;
        case 'ArrowRight':
            grid.draw();
            Move.right();
            lShape.draw();
            break;
    }
});

document.addEventListener("keydown", event => {
    if (event.key == 'Enter') {
        console.log(lShape.color); 
        if (lShape.color == 'orange') {
            lShape.changeColorToGreen();
            lShape.draw();
        }
        else {
            lShape.changeColorToOrange();
            lShape.draw();
        }
    };
});






// setInterval(() => {
//     grid.draw();
//     lShape.moveDown();
//     lShape.draw();
// }, 500);

// function writeText(text, callback) {
//     console.log('Inainte de afisare');
//     console.log(text);
//     console.log('Dupa de afisare');
//     callback();
// }

// function writeEnd() {
//     console.log('The end.');
// }

// writeText('Salut!', writeEnd);
