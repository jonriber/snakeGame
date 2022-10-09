import Snake from "./classes/Snake";
import Apple from "./classes/Apple";

let 
    canvas = document.getElementById("canvas"),
    snake = new Snake(),
    apple = new Apple(),
    canvasContext = canvas.getContext("2d");

window.onload = () => {
    gameLoop();
};

function gameLoop () {
    setInterval(show, 1000/15)
};

function show() {
    update()
    draw()
};

