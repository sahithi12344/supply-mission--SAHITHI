var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,edges
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

	helicopterSprite=createSprite(width/2, 200, 10,10,{isStatic:false});
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("green")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5, { isStatic:true,restitution:0.4} );
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color("purple");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color("purple");

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color("purple");

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	 edges = createEdgeSprites();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(keyCode === DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false)
	packageSprite.collide(boxBase)
	packageSprite.collide(boxleftSprite)
	packageSprite.bounce=boxleftSprite
	packageSprite.bounce=boxBase
	packageSprite.visible=true;
	
}


if(packageSprite.isTouching(boxBase)||packageSprite.isTouching(boxleftSprite)){
	fill("red")
	text("MISSION COMPLETED",200,100)
	fill("green")
	text("MISSION COMPLETED",400,200)
	fill("orange")
	text("MISSION COMPLETED",600,300)
	fill("blue")
	text("MISSION COMPLETED",100,300)
	fill("lightgreen")
	text("MISSION COMPLETED",200,400)
	fill("white")
	text("MISSION COMPLETED",300,600)
	fill("black")
	text("MISSION COMPLETED",200,700)
	fill("pink")
	text("successfull",500,100)

	Textsize(30)
		Matter.Body.setStatic(helicopterSprite,true)
	
		text("successfull",400,400)
		textSize(10)
	
}
  drawSprites();
  
  keycode();
 
}

function keycode(){
	if(keyCode === LEFT_ARROW){
		helicopterSprite.x = helicopterSprite.x-20
		packageSprite.x = helicopterSprite.x
		packageSprite.visible=false;
		helicopterSprite.bounce(edges)
	}
	if(keyCode === RIGHT_ARROW){
	  helicopterSprite.x = helicopterSprite.x+19
	  packageSprite.x = helicopterSprite.x
	  packageSprite.visible=false;
	  helicopterSprite.bounce(edges)
	}
	 


}
