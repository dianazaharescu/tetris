export class Score {
    constructor(points, shape, cells) {
        this.points = points;
        this.shape = shape;
        this.cells = cells;
        this.canvas = document.getElementById('canvasId');
        this.context = this.canvas.getContext("2d");
    }

    calculate() {
        for (let row = 0; row < this.shape.template.length; row++) {
            let rowComplete = true;
            for (let column = 0; column < 10; column++) {
                if (this.cells[this.shape.row + row][column].isEmpty) {
                    rowComplete = false;
                }
            }
            if (rowComplete) {
                this.points += 10;
                for (let column = 0; column < 10; column++) { //remove completed line
                    this.cells[this.shape.row + row][column] = this.cells[this.shape.row + row - 1][column];
                }
            }
        }
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = 'yellow';
        this.context.fillRect(340, 10, 160, 50);
        this.context.fillStyle = 'black';
        this.context.font = '16px Arial';
        this.context.clearRect(355, 20, 130, 30);
        this.context.fillText('Score: ' + this.points, 357, 40);
        this.context.closePath();
    }
}