let bodyList = [];

class CelestialBody{
    constructor(_tag, _radius, _distance, _orbitSpeed, _bodies, _image){
        this.vector = p5.Vector.random3D();

        this.tag = _tag;
        this.radius = _radius;        
        this.distance = _distance;

        this.vector.mult(this.distance);

        this.orbitSpeed = _orbitSpeed;   
        this.bodies = _bodies;  
        this.image = _image;
                       
        noStroke();
        noFill();
    }

    orbit(){       
      
        this.angle += this.orbitSpeed / (this.distance / this.radius);
        
        let newVector = new p5.Vector(0,0,1);
        let bestVector = this.vector.cross(newVector);

        rotate(this.angle, [bestVector.x, bestVector.y, bestVector.z+1]);

        translate(this.vector.x, this.vector.y, this.vector.z);  
    }  

    render() {        
        noStroke();
        texture(this.image);
        sphere(this.radius);
        
    }

    addToBodyList(object){
        bodyList.push(object);
    }

    getBodyList(){
        return bodyList;
    }

    getBodies(){
        return this.bodies;
    }

    getTag(){
        return this.tag;
    }
}

var TagEnum = {
    STAR:1,
    PLANET:2,
    MOON_LEFT:3,
    MOON_RIGHT:4
}