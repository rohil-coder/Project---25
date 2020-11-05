// Ma'am the class is not working.
// I think that there could be some error.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dusbinObj, paperObj, groundObj, world; 

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
    engine = Engine.create();
	world = engine.world;
	dustbinObj = new Dustbin(1200, 650);
	paperObj = new Paper(200, 450, 40);
	groundObj = new Ground(width/2, 670, width, 20);
	//create ground
	var render = Render.create
	({
		element:document.body, 
		engine:engine,
		options:
		{
			width:1200,
			height:700, 
			wireframes:false
		}
	});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  dusbinObj.display();
  paperObj.display();
  groundObj.display();
  keyPressed(); 
  drawSprites();
 }
 function keyPressed()
 {
	 if(keyCode === UP_ARROW)
	 {
		 Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x:85, y:-85})
	 }
 }



