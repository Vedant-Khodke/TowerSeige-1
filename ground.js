class Ground {
    constructor(x, y, angle){
        var options = {
            density: 0.5,
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 250, 15, options);
        this.width = 250;
        this.height = 15;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

}