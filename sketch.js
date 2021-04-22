
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boyimg,boy;
var mangoimg,mango1,mango2,mango3,mango4,mango5
var stoneimg,stone1;
var  treeimg,tree
var launcher1
var launchForce=100


function preload()
{
 boyimg=loadImage("boy.png")
mangoimg=loadImage("mango.png")
stoneimg=loadImage("stone.png")
treeimg=loadImage("tree.png")


	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,200,20);
	tree=new Tree(700,700,100,100)
stone1=new Stone(20,20,40,50);
    mango1=new Mango(500,300,20,20);
mango2=new Mango(100,300,20,20);
mango3=new Mango(200,200,20,20);
mango4=new Mango(400,300,20,20);
mango5=new Mango(100,200,20,20);
launcher1= new launcher(stone1.body,{x:235,y:420})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone1.display();
mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()
tree.display()
boy.display()
ground.display()
detectcollision(stone1,mango1)
detectcollision(stone1,mango2)
detectcollision(stone1,mango3)
detectcollision(stone1,mango4)
detectcollision(stone1,mango5)
  drawSprites();
 
}


function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body,
		{x:235,y:420})
		launcher1.attach(stone.body)
	}
}
function mouseDragged(){
    Matter.Body.setPosition(boy.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
launcher1.fly()
}
function detectcollision(lstone,lmango){
mposition=lmango.body.position
mstone=lstone.body.position
var distance=dist(mstone.x,mstone.y,mposition.x,mposition.y)
if(distance<=lmango.r+lstone.r){
	Matter.Body.setPosition(lmango.body,false)
}


}
