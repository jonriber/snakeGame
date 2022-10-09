

class Apple {
    constructor(canvas, snake) {
        this.canvas = canvas;
        this.snake = snake;
        let isTouching;
        while(true){
            isTouching =false;
            this.x = Math.floor(Math.random() * this.canvas.width / this.snake.size) * this.snake.size
            this.y = Math.floor(Math.random() * this.canvas.heigth / this.snake.size) * this.snake.size
            for( let i = 0; i < this.snake.tail.length; i++){
                if(this.x === this.snake.tail[i].x && this.y === this.snake.tail[i].y){
                    isTouching = true;
                }
            }
            if(!isTouching){
                break;
            }
            this.color = "pink";
            this.size = this.snake.size
        }
    }
};

export default Apple;