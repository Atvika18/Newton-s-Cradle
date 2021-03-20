class Bob {
    constructor(x, y, radius) {
        var bobOptions = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }

        this.bob = Bodies.circle(x, y, radius/2, bobOptions);
       World.add(myWorld, this.bob);
        this.radius = radius;
        

    }

    display() {
        var pos = this.bob.position;
        var angle = this.bob.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
     
}
