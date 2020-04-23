import {Shape} from './shape.js';

export class T extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells);
        this.template = [
            [1, 1, 1],
            [0, 1, 0]
        ]
        this.color = 'purple';
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