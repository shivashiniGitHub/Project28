
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var tree1;
var boy1;
var stone1;
var chain1;
var slingshot;

var mango1,mango2,mango3,mango4,mango5;

function preload()
{
	
}

function setup() {
	createCanvas(1250,600);
	engine = Engine.create();
	world = engine.world;

  ground1 = new ground(625,585,1300,20);

  tree1 = new tree(900,325,700,575)

  boy1 = new boy(275,475,300,400);

  stone1 = new stone(180,375,40,40);

  chain1 = new chain(stone1.body,{x:180,y:380});

  mango1 = new mango(800,325,50,50);
  mango2 = new mango(800,225,50,50);
  mango3 = new mango(800,125,50,50);
  mango4 = new mango(700,325,50,50);
  mango5 = new mango(700,225,50,50);
  mango6 = new mango(900,300,50,50);
  mango7 = new mango(900,200,50,50);
  mango8 = new mango(1000,125,50,50);
  mango9 = new mango(1000,225,50,50);
  mango10 = new mango(1100,225,50,50);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  tree1.display();
  boy1.display();
  stone1.display();
  chain1.display();

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

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango9);
  detectCollision(stone1,mango10);

 // drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   chain1.fly();
}

function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 if (distance<=lmango.r+lstone.r){
   Matter.Body.setStatic(lmango.body,false);
 }

}