
let cam;
let P;

let image;

function preload() {
  image = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/sun.jpg");
  
}

function setup() {
    cam = new Dw.EasyCam(this.WEBGL, 100);
    createCanvas(windowWidth,windowHeight, WEBGL); 
    if(true){
      console.log(cam);
    }

    P = new Star(50,5, image);   
}
  
function draw() {
    background(0);
    lights();
    
    P.show();  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cam.setViewport([0,0,windowWidth, windowHeight]);
}