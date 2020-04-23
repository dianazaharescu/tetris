import {Shape} from './shape.js';

export class J extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells);
        this.template = [
            [0, 1],
            [0, 1],
            [1, 1]
        ]
        this.color = 'fuchsia';
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