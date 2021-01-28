class Block {
  constructor(x, y, width, height, color) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y+35, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color;
    this.Visibility = 255;

    this.green = loadImage("green.png");
    this.blue = loadImage("blue.png");
    this.purple = loadImage("orange.png");
    this.red = loadImage("red.png");
    this.yellow = loadImage("yellow.png");
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    if(this.color === "indigo"){
      this.colorImage = this.purple;
    } else if(this.color === "lightsalmon"){
      this.colorImage = this.red;
    } else if(this.color === "lightcoral"){
      this.colorImage = this.green;
    } else if(this.color === "greenyellow"){
      this.colorImage = this.yellow;
    } else if(this.color === "aqua"){
      this.colorImage = this.blue;
    }

    if(this.body.speed < 3){
      push();
      /*translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color);
      stroke("black");
      strokeWeight(1);
      rect(0, 0, this.width, this.height);*/
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.colorImage,0,0,this.width,this.height)
      pop();
    }else {
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      imageMode(CENTER);
      translate(pos.x, pos.y);
      rotate(angle);
      image(this.colorImage,0,0,this.width,this.height);
      pop();
    }
  }
};