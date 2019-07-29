let img;

function preload(){
    img = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/sun.jpg");
}

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(255);
    texture(img);
    noLoop();
}