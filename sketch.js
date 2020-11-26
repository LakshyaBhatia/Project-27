
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

      
	engine = Engine.create();
	world = engine.world;

	bob1 = new BOB(250,450,70);
	rope1 =new CHAIN(bob1.body,roof,2,0);
	bob2 = new BOB(320,450,70);
	bob3 = new BOB(390,450,70);
	bob4 = new BOB(460,450,70);
	bob5 = new BOB(530,450,70);
	roof = new ROOF(390,100,370,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}



