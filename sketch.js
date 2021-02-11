
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	ball = new  Paper(100, 300, 10);
	ground = new Ground(width/2,400,width,10);
	dustbin = new Dustbin(720, 390, 100, 10);
	
	
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  
  ball.display();
  dustbin.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:13,y:-13})
	}
}



