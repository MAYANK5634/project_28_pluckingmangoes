
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,treeimg;
var boy,boyimg;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var ground;

function preload()
{
	treeimg = loadImage("tree.png")
	boyimg = loadImage("boy.png")
}

function setup() {
	createCanvas(1080,650);

    engine = Engine.create();
	world = engine.world;

 ground = new GROUND();
 stone = new STONE(100,460,50);
 mango1 = new MANGO(700,200,34);
 mango2 = new MANGO(855,325,35);
 mango3 = new MANGO(800,260,35);
 mango4 = new MANGO(710,320,36);
 mango5 = new MANGO(730,260,35);

 attach = new LAUNCHER(stone.body,{x:100,y:465})

 tree= createSprite(775,368)
 tree.addImage(treeimg);
 tree.scale = 0.42;

 boy = createSprite(160,550);
 boy.addImage(boyimg);
 boy.scale = 0.125;

 Engine.run(engine);
  
}


 function draw() {
  rectMode(CENTER);
  background("lightblue");

 fill("black");
 textSize(18);

 detectollision(stone,mango1);
 detectollision(stone,mango2);
 detectollision(stone,mango3);
 detectollision(stone,mango4);
 detectollision(stone,mango5);

  
  drawSprites();

  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  ground.display();

 
}
function mouseDragged(){

Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

attach.fly();

}
function detectollision(lstone,lmango){

	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
	
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<=lmango.r+lstone.r){

 Matter.Body.setStatic(lmango.body,false);

	}
}
function keyPressed() {
	if (keyCode ===   "SPACE") {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	attach.attach(stoneObj.body);
	}
  }



function keyPressed(){

if(keyCode==="SPACE"){

Matter.Body.setPosition(stone.body,{x:100,y:460});
attach.Launch(stone.body);

}
}
