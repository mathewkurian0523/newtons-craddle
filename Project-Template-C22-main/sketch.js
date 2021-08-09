const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball,ball1,ball2,ball3,ball4;
var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	rope1 = new rope(ball,roof,-80,0);
	rope2 = new rope(ball1,roof,-80,0);
	rope3 = new rope(ball2,roof,-80,0);
	rope4 = new rope(ball3,roof,-80,0);
	rope5 = new rope(ball4,roof,-80,0);
	var roof_options={
		isStatic:true			
	}
	var ball_options = {
		restitution:0.8
	}

	ball = Bodies.circle(400,250,10,ball_options);
	ball1 = Bodies.circle(430,250,10,ball_options);
	ball2 = Bodies.circle(460,250,10,ball_options);
	ball3 = Bodies.circle(490,250,10,ball_options);
	ball4 = Bodies.circle(520,250,10,ball_options);
	World.add(world,ball);
	World.add(world,ball2);
	World.add(world,ball1);
	World.add(world,ball3);
	World.add(world,ball4);


	roof = Bodies.rectangle(470,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine);
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,30,30);
  ellipse(ball1.position.x,ball1.position.y,30,30);
  ellipse(ball2.position.x,ball2.position.y,30,30);
  ellipse(ball3.position.x,ball3.position.y,30,30);
  ellipse(ball4.position.x,ball4.position.y,30,30);
 
  
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keypressed(){
	if(keyCode==RIGHT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	  }
}