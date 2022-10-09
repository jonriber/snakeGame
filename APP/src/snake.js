import {Snake} from "./classes/Snake.js";
import {Apple} from "./classes/Apple.js";

let 
    canvas = document.getElementById("canvas"),
    snake = new Snake(20,20,20),
    apple = new Apple(canvas,snake),
    canvasContext = canvas.getContext("2d");
window.onload = () => {
    gameLoop();
};

function gameLoop () {
    setInterval(show, 1000/10) //game fps
};

function show() {
    update()
    draw()
};

function update(){
    canvasContext.clearRect(0,0,canvas.width,canvas.height);
    snake.move();
    eatApple();
    checkHitWall();

};

function checkHitWall(){
    let headTail = snake.tail[snake.tail.length-1];
    if(headTail.x === -snake.size){
        headTail.x = canvas.width - snake.size
    }else if(headTail.x === canvas.width){
        headTail.x = 0
    }else if(headTail.y === -snake.size){
        headTail.y = canvas.height - snake.size
    }else if(headTail.y === canvas.height ){
        headTail.y = 0;
    }
}

function eatApple(){
    if(snake.tail[snake.tail.length-1].x === apple.x && 
        snake.tail[snake.tail.length-1].y === apple.y){
            snake.tail[snake.tail.length] = {x: apple.x, y: apple.y}
            apple = new Apple(canvas,snake);
        }
}

function draw(){
    createRect(0,0,canvas.width, canvas.height,"black")
    createRect(0,0,canvas.width, canvas.height);
    for(let i = 0; i< snake.tail.length;i++){
        createRect(snake.tail[i].x + 2.5,snake.tail[i].y+2.5,
            snake.size - 5,snake.size-5,"white")
    }
    canvasContext.font = "20px Arial";
    canvasContext.fillStyle = "#00FF42"
    canvasContext.fillText("Score: "+(snake.tail.length-1),
        canvas.width - 120, 18)
    createRect(apple.x, apple.y, apple.size, apple.size, apple.color)
};

function createRect(x,y,width,height,color){
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x,y,width,height)

}

window.addEventListener("keydown",(event) => {
    setTimeout(() => {
        if(event.keyCode === 37 && snake.rotateX !==1){
            snake.rotateX = -1;
            snake.rotateY = 0;
        }else if(event.keyCode === 38 && snake.rotateY !== 1){
            snake.rotateX = 0;
            snake.rotateY = -1;
        }else if(event.keyCode === 39 && snake.rotateX !== -1){
            snake.rotateX = 1;
            snake.rotateY = 0;
        }else if(event.keyCode === 40 && snake.rotateY !== -1){
            snake.rotateX = 0;
            snake.rotateY = 1;
        }
    },1)
})

