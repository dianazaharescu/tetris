export class Move {
    constructor(shape) {
        this.shape = shape;
    }

    static up() {
        return this.row--;
    }

    static down() {
        return this.row++;
    }

    static left() {
        return this.column--;
    }

    static right() {
        return this.column++;
    }

}