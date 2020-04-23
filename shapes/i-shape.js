import {Shape} from './shape.js';

export class I extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells);
        this.template = [
            [1, 0],
            [1, 0],
            [1, 0],
            [1, 0]
        ]
        this.color = 'blue';
    }

    moveUp() {
        this.row--;
    }

    moveDown() {
        this.row++;
    }

    moveLeft() {
        this.column--;
    }

    moveRight() {
        this.column++;
    }
}