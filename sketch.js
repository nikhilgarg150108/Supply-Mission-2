var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxLeft,boxRight,boxBottom;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxBottom = Bodies.rectangle(width/2, 650, 200, 20, {isStatic:true});
	World.add(world, boxBottom);

	boxLeft = Bodies.rectangle(290, 610, 20, 100, {isStatic:true});
	World.add(world, boxLeft);
	
	boxRight = Bodies.rectangle(510, 610, 20, 100, {isStatic:true});
	World.add(world, boxLeft);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  fill ("red");
  rect(boxBottom.position.x, boxBottom.position.y, 200, 20);
  rect(boxLeft.position.x, boxLeft.position.y, 20, 100);
  rect(boxRight.position.x, boxRight.position.y, 20, 100);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
  }
}