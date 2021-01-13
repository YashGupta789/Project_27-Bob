const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;


function preload()
{
	
}

function setup() {
	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof();
	bob1 = new Bob(300,450);
	bob2 = new Bob(370,450);
	bob3 = new Bob(440,450);
	bob4 = new Bob(510,450);
	bob5 = new Bob(580,450);

	rope1 = new Rope(bob1.body,{x:300,y:200});
	rope2 = new Rope(bob2.body,{x:370,y:200});
	rope3 = new Rope(bob3.body,{x:440,y:200});
	rope4 = new Rope(bob4.body,{x:510,y:200});
	rope5 = new Rope(bob5.body,{x:580,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50,190,237);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display(); 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


}

function keyPressed(){
  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:-100});
  }
}
