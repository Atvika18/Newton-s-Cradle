
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	myWorld = engine.world;

	//Create the Bodies Here.
  bob1 = new Bob(200,600,45);
  bob2 = new Bob(290,600,45);
  bob3 = new Bob(380,600,45);
  bob4 = new Bob(470,600,45);
  bob5 = new Bob(560,600,45);

  ground = new Ground(400,200,600,25);


  rope1 = new Rope(bob1.body, ground.body, -90*2, 0);
rope2 = new Rope(bob2.body, ground.body, -90*2, 0);
rope3 = new Rope(bob3.body, ground.body, -90*2, 0);
rope4 = new Rope(bob4.body, ground.body, -90*2, 0);
rope5 = new Rope(bob5.body, ground.body, -90*2, 0);

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
ground.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}



