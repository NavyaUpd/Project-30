const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base1, base2, ground, polygon, rope;
var block1, block2, block3, block4, block5, block6, block7, block8, block9,
block10, block11, block12, block13, block14, block15;
var Block1, Block2, Block3, Block4, Block5, Block6, Block7, Block8, Block9,
Block10, Block11, Block12, Block13, Block14, Block15;

function setup(){
    createCanvas(800, 400);

    engine = Engine.create();
    world = engine.world;

    base1 = new Base(350, 300, 200, 10);
    base2 = new Base(650, 200, 200, 10);
    ground = new Base(400, 390, 800, 10);

    polygon = new Polygon(100, 300);
    rope = new SlingShot(polygon.body, {x:100,y:250});

    // 1st pile
    block1 = new Block(300, 250, 25, 25, "aqua");
    block2 = new Block(325, 250, 25, 25, "aqua");
    block3 = new Block(350, 250, 25, 25, "aqua");
    block4 = new Block(375, 250, 25, 25, "aqua");
    block5 = new Block(400, 250, 25, 25, "aqua");

    block6 = new Block(312, 225, 25, 25, "greenyellow");
    block7 = new Block(312+25, 225, 25, 25, "greenyellow");
    block8 = new Block(312+25+25, 225, 25, 25, "greenyellow");
    block9 = new Block(312+25+25+25, 225, 25, 25, "greenyellow");

    block10 = new Block(325, 225-25, 25, 25, "lightcoral");
    block11 = new Block(325+25, 225-25, 25, 25, "lightcoral");
    block12 = new Block(325+25+25, 225-25, 25, 25, "lightcoral");

    block13 = new Block(312+25, 225-50, 25, 25, "lightsalmon");
    block14 = new Block(312+50, 225-50, 25, 25, "lightsalmon");

    block15 = new Block(350, 125+20, 25, 25, "indigo");

    // 2nd pile
    Block1 = new Block(300+300, 250-100, 25, 25, "aqua");
    Block2 = new Block(325+300, 250-100, 25, 25, "aqua");
    Block3 = new Block(350+300, 250-100, 25, 25, "aqua");
    Block4 = new Block(375+300, 250-100, 25, 25, "aqua");
    Block5 = new Block(400+300, 250-100, 25, 25, "aqua");

    Block6 = new Block(312+300, 225-100, 25, 25, "greenyellow");
    Block7 = new Block(312+25+300, 225-100, 25, 25, "greenyellow");
    Block8 = new Block(312+25+25+300, 225-100, 25, 25, "greenyellow");
    Block9 = new Block(312+25+25+25+300, 225-100, 25, 25, "greenyellow");

    Block10 = new Block(325+300, 225-25-100, 25, 25, "lightcoral");
    Block11 = new Block(325+25+300, 225-25-100, 25, 25, "lightcoral");
    Block12 = new Block(325+25+25+300, 225-25-100, 25, 25, "lightcoral");

    Block13 = new Block(312+25+300, 225-50-100, 25, 25, "lightsalmon");
    Block14 = new Block(312+50+300, 225-50-100, 25, 25, "lightsalmon");

    Block15 = new Block(350+300, 125-100+20, 25, 25, "indigo");

}

function draw(){
    background("mediumturquoise");
    Engine.update(engine);

    textSize(15);
    fill("white");
    text("Drag the Hexagon and aim to topple the boxes", 50, 50);
    text("Press space to aim again", 50, 70);
    base1.display();
    base2.display();
    ground.display();
    polygon.display();
    rope.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();

    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();

    Block6.display();
    Block7.display();
    Block8.display();
    Block9.display();
    Block10.display();

    Block11.display();
    Block12.display();
    Block13.display();
    Block14.display();
    Block15.display();

    //console.log(Block1.body.speed);

    if (keyWentDown("SPACE")){
        rope.reset();
    }

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

