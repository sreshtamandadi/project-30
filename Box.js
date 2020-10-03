class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':1.0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("box.png");
        this.vis=255
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height):
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.width,this.height)
        pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.vis=this.vis-5;
          tint(255,this.vis);
          //rectMode(CENTER)
          //rect(0,0,this.width,this.height)
          pop();
     }

      }
}
