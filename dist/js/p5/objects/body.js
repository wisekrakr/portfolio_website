

let planetsMaps = [];

function preload() {
  planetsMaps[0] = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/sun.jpg");
  planetsMaps[1] = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/mercury.jpg");
  planetsMaps[2] = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/venus.jpg");
  planetsMaps[3] = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/earth.jpg");
  planetsMaps[4] = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/mars.jpg");
  planetsMaps[5] = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/jupiter.jpg");
  //planetsMaps[6] = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/moon1.jpg");
  //planetsMaps[7] = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/moon2.jpg");
  //planetsMaps[8] = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/rock1.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL); 
  sun = new Star(50, 0, 0, planetsMaps[0]);
  sun.createMoons(4, 1);
}

function draw() {
  background(0);
  noStroke();
  //rectionalLight(0, 255, 25, -300, -200, 0);
  //rectionalLight(0, 25, 255, 500, 500, 0);
  let z = 75;
  pointLight(255, 255, 255, -50, -50, z);
  pointLight(255, 255, 255, 50, -50, z);
  pointLight(255, 255, 255, 50, 50, z);
  pointLight(255, 255, 255, -50, 50, z);
  
  //specularMaterial(255);

  sun.show();
  sun.orbit();
}

class Star {
  constructor(_radius, _distance, _orbitSpeed, _image) {
    this.radius = _radius;
    this.distance = _distance;
    this.angle = Math.random() * Math.PI;
    this.vect = p5.Vector.random3D();
    this.vect.mult(this.distance);
    this.moons = [];
    this.orbitSpeed = _orbitSpeed;
    this.img = _image;
    noStroke();
  }
  
  createMoons(total, level) {
    for(let i = 0; i < total; i++) {
      let r = this.radius*random(0.25, 0.5);
      let d = random((this.radius + r), (this.radius + r * 2));
      let o = random(-0.035, 0.05);
      this.moons[i] = new Star(r, d, o, planetsMaps[~~random(1,5)]);
      if( level < 2 ) {
        let num = random(0, 4);
        this.moons[i].createMoons(num, level+1)
      }
    }
  }
  
  orbit() {
    this.angle += this.orbitSpeed;
    if ( this.moons != null) {
      for(let moon of this.moons) {
        moon.orbit();
      }
    }
  }
  
  show() {
    push();
    let v = createVector(1, 0, 1);
    let p = this.vect.cross(v);
    rotate(this.angle, [p.x, p.y, p.z+1]); // I cannot get p.z to work!
    stroke(255);
    //line(0, 0, 0, this.vect.x*10, this.vect.y*10, this.vect.z*10);
    //line(0, 0, 0, p.x*10, p.y*10, p.z+1*10);
    translate(this.vect.x, this.vect.y, this.vect.z);
    noStroke();
    texture(this.img);
    sphere(this.radius)
    if ( this.moons != null) {
      for(let moon of this.moons) {
        moon.show();
      }
    }
    pop();
  }
}