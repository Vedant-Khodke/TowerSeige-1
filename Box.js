class Box {
    constructor(x,y){
        var options = {
            density: 0.5,
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 30, 50, options);
        this.width = 30;
        this.height = 50;
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(random(10, 250), 100, 100);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

}