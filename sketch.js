
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var stone;
var hammer;
var rubber;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, height, 800, 20);

	stone = new Stone(300, 630, 110, 110);

	hammer = new Hammer(400, 500, 80, 30);

	rubber = new Rubber(56, 46, 55, 55); 

	Engine.run(engine);
}


function draw() {
	background("lightblue");
	Engine.update(engine);
 
	hammer.y = mouseY;
	hammer.x = 	mouseX;
	

	ground.display();
	stone.display();
	hammer.display();
	rubber.display();
}



