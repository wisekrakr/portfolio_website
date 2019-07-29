let moons = [];

class Planet extends CelestialBody{    
  
    constructor(_radius, _distance, _orbitSpeed, _bodies, _image){
       super(TagEnum.PLANET, _radius, _distance, _orbitSpeed, _bodies, _image);         
       this.angle = Math.random() * Math.PI;  
       this.addOrbitingBodies();    
    }

    setImage(number) {  
        let image;
        switch(number){
            case 1:
                image = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/moon1.jpg");
                break;
            case 2:
                image = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/moon2.jpg");
                break;
            case 3:
                image = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/rock1.jpg");
                break;
            default:
                console.log("No image found");
        }   

        return image;
    }

    addOrbitingBodies(){

        if(this.bodies !== null){
            for(let i = this.bodies; i > 0; i--){  
                let moonRadius = Math.random() * ((this.radius / 7) + (this.radius / 4));
                let newDistance = (this.radius * 2) + Math.random() * ((this.radius * 6)) + (this.radius * 4);
                let newSpeed = (Math.random() * 0.1) + 0.05;

                moons[i] = new Moon(this.addMoonRadius(moonRadius), newDistance, newSpeed, this.setImage(i));  
                this.addToBodyList(moons[i]);          
            }   
        }    
    }       

    addMoonRadius(moonRadius){
        if(moonRadius > this.radius){
            moonRadius/=2;
        }else{
            if(moonRadius < 1){
                moonRadius *= 2;
            }
        }
        return moonRadius;
    }
    

    show() {
        push();
        
        fill('#fae');              
       
        this.orbit();
        this.render();
        

        for(let i = moons.length-1; i > 0; i--){
            moons[i].show();           
        }
        pop();
    }


 
}

