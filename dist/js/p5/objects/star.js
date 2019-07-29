let planets = [];

class Star extends CelestialBody{    
  
    constructor(_radius, _bodies, _image){
       super(TagEnum.STAR, _radius, 0, 0, _bodies, _image);   

       this.addToBodyList(this);
       this.addOrbitingBodies();
    }

    setImage(number) {  
        let image;
        switch(number){
            case 1:
                image = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/mercury.jpg");
                break;
            case 2:
                image = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/venus.jpg");
                break;
            case 3:
                image = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/earth.jpg");
                break;
            case 4:
                image= loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/mars.jpg");
                break;
            case 5:
                image = loadImage("https://raw.githubusercontent.com/typedeaf/p5js/master/jupiter.jpg");
                break;
            default:
                console.log("No image found");
        }   

        return image;
    }

    addOrbitingBodies(){
        if (this.bodies !== null) {           
            for (let i = this.bodies; i > 0; i--) {                
                planets[i] = new Planet(
                    Math.random() * ((this.radius / 5) + (this.radius / 3)), 
                    (this.radius * 2) + Math.random() * ((this.radius * 10) + (this.radius * 5)), 
                    (Math.random() * 0.05) + 0.01,
                    Math.round(Math.random() * 4),
                    this.setImage(i)
                );
                this.addToBodyList(planets[i]);   
                console.log(this.setImage(i));             
            }
        }     
    }
     
    show() {     
        fill(255, 204, 0);       
        this.render();
        
        for(let i = planets.length -1; i > 0; i--){
            planets[i].show();
        }
    }
}