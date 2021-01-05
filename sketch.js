
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball,dustbin1,dustbin2;
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(600,height,1200,20);
dustbin1=new Dustbin(800,370,10,40);
dustbin2=new Dustbin(900,370,10,40);
ball=new Ball(350,370,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  ball.display();
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    //Matter.Body.setStatic(packageBody,false)
    Matter.Body.applyForce(ball,ball.body.position,{x:5,y:-5})
     // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
 
     
   }
 }



