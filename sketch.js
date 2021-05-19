const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var launcherObject;
var launchForce = 100;
var backgroundImg, ground;
var tree;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;
var boyImg;
var stone;

function preload()
{
	backgroundImg = loadImage("sprites/background.jpg");
  boyImg = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1350, 650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  stone = new Stone(156, 480, 25);

  tree = new Tree(1050, 300, 50, 500);

	ground = new Ground(600,height,1800,20);

  mango1 = new Mango(950, 60, 40);
  mango2 = new Mango(1020, 120, 35);
  mango3 = new Mango(1100, 60, 30);
  mango4 = new Mango(1150, 150, 40);
  mango5 = new Mango(930, 180, 45);
  mango6 = new Mango(1180, 60, 35);
  mango7 = new Mango(1050, 200, 40);
  mango8 = new Mango(1230, 200, 25);
  mango9 = new Mango(1230, 140, 35);
  mango10 = new Mango(1140, 220, 30);
  mango11 = new Mango(1020, 45, 40);
  
  launcherObject = new Launcher(stone.body, {x: 170, y: 500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  Engine.update(engine);
  console.log(mouseX, mouseY)
  fill("#FF0000")
  textSize(25);
  textFont("Arial Black");
  text("Press Space to get a second Chance to Play!!", 10, 30);

  image (boyImg, 130, 418, 200, 300);

  stone.display();
  
  ground.display();
  
  tree.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  launcherObject.display();

  collision(stone, mango1);
  collision(stone, mango2);
  collision(stone, mango3);
  collision(stone, mango4);
  collision(stone, mango5);
  collision(stone, mango6);
  collision(stone, mango7);
  collision(stone, mango8);
  collision(stone, mango9);
  collision(stone, mango10);
  collision(stone, mango11);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
  launcherObject.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:156, y:480})
    launcherObject.attach(stone.body);
  }
}

//function detectCollision(lstone, lmango){
  //stoneBodyPosition = lstone.body.position;
  //mangoBodyPosition = lmango.body.position;
//}

function collision(a, b){
var distance = dist(a.body.position.x, a.body.position.y, b.body.position.x, b.body.position.y);
if(distance<=50){
 Body.setStatic(b.body, false);
}
}

function isTouching(){
  if(stone.isTouching(tree)){
    stone.visible = true;
  }
}