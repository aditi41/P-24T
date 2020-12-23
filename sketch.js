
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1, box2, box3;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	
	engine = Engine.create();
	world = engine.world;

	box1 = new Dustbin (900,650,20,100);
	box2 = new Dustbin (1100,650,20,100);
	box3 = new Dustbin (1000,680,200,20);

	paper = new Paper (200,690,70);

	ground = new Ground (600,690,width,10);

//	Engine.update(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);  

if (keyDown ("up")){

  Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:-85});

}

  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
}