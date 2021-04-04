
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
    ground1 = new Ground(500, 600, 180);
	ground2 = new Ground(800, 300, 180);
	
	 ball = Bodies.circle(100 , 640 , 20);
	World.add(world, ball);

	box1 = new Box(400, 565)
	box2 = new Box(430, 565)
	box3 = new Box(460, 565)
	box4 = new Box(490, 565)
	box5 = new Box(520, 565)
	box6 = new Box(550, 565)
	box7 = new Box(580, 565)
	box8 = new Box(610, 565)
	box9 = new Box(460, 565-50)
	box10 = new Box(490, 565-50)
	box11 = new Box(520, 565-50)
	box12 = new Box(550, 565-50)	
	box13 = new Box(520, 565-100)
	box14 = new Box(490, 565-100)
	box15 = new Box(505, 565-150)

	box21 = new Box(700, 565-297)
	box22 = new Box(730, 565-297)
	box23 = new Box(760, 565-297)
	box24 = new Box(790, 565-297)
	box25 = new Box(820, 565-297)
	box26 = new Box(850, 565-297)
	box27 = new Box(880, 565-297)
	box28 = new Box(910, 565-297)
	box29 = new Box(760, 565-347)
	box210 = new Box(790, 565-347)
	box211 = new Box(820, 565-347)
	box212 = new Box(850, 565-347)	
	box213 = new Box(820, 565-397)
	box214 = new Box(790, 565-397)
	box215 = new Box(805, 565-447)

	chain = new Chain(ball, {x: 50, y: 400})
}

function draw() {
  rectMode(CENTER);
  background('lightblue');
  
  drawSprites();
 
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box210.display();
  box211.display();
  box212.display();
  box213.display();
  box214.display();
  box215.display();
  chain.display();
  
  rect(ground.position.x, ground.position.y + 10, width + 10, 10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  //console.log(ball.position);
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.applyForce(ball, ball.position, {x:0.06, y:-0.06});
	   
	 }
   }


   function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    chain.fly();
 //   gameState = "launched";
}
