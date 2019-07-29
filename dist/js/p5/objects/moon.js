class Moon extends CelestialBody {
    
    constructor(_radius, _distance, _orbitSpeed, _image){
        super(Math.floor((Math.random() * 4) + 3), _radius, _distance, _orbitSpeed, 0, _image);         
        this.angle = Math.random() * Math.PI;  
    }


    show() {
        push(); //Begin pushing the matrix
        fill(255);        
                   
        this.orbit();
        this.render();                

        pop();//Stop pushing the matrix. This way these objects won't react towards one another
    }

}