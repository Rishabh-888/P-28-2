class Tree{
  constructor(x,y,width,height){
    var options = {
      'isStatic':true
    }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("sprites/tree.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, -this.width/2, this.height);
        pop();
    }
  }