const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var human, bird, tiger, tiger2, ground, backGround;
var human_IMG, bird_IMG, tiger_IMG, ground_IMG, background_IMG;
var engine, world, seed; 
var dropseed;
var tiger_running;
var bird_fly, seed_image,seed_image1;
var invisibleGround;
var invisibleGround1, invisibleground2;
function preload() {
  ground_IMG = loadImage("ground.png");
  background_IMG = loadImage("background.png");
  tiger_running = loadAnimation("tiger1.png","tiger2.png","tiger3.png","tiger4.png","tiger5.png","tiger6.png");
  seed_image = loadImage("seed.png");
  bird_fly = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png","bird6.png","bird7.png","bird8.png","bird9.png","bird10.png","bird11.png","bird12.png","bird13.png","bird14.png")
seed_image1=loadImage("sapling.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  bird = createSprite(300,100,50,50)
  bird.addAnimation("flying", bird_fly);
  bird.scale = 0.5
  tiger = createSprite(700,270,50,50);
  tiger.addAnimation("running", tiger_running);
  tiger.scale = 0.5
  ground = createSprite(400,380,1200,150);
  ground.addImage("ground",ground_IMG);
  ground.velocityX = -1;
  ground.scale = 5.0;

  dropseed=createSprite(bird.x,bird.y,20,20)
  
  dropseed.addImage("seed",seed_image)
  dropseed.scale=0.1
  dropseed.visible=false
  dropseed.setCollider("rectangle",0,0,20,20)
  //dropseed = new DropSeed(bird.x,bird.y)
  invisibleGround=createSprite(400,350,1200,110);
  invisibleGround.visible=false
  invisibleGround1=createSprite(50,200,110,1200);
  invisibleGround1.visible=false;
  invisibleGround2=createSprite(750,200,110,1200);
  invisibleGround2.visible=false;
}

function draw() {
  background(background_IMG);
Engine.update(engine);
  if(ground.x<0){
ground.x = ground.width/2;
  }
dropseed.display();
if(keyDown("SPACE")){
  dropSeed()
}
if(dropseed.isTouching(invisibleGround)){
  dropseed.collide(invisibleGround);
  dropseed.addImage("sapling",seed_image1);
  dropseed.changeImage("sapling",seed_image1);
  dropseed.scale = 0.2;
}


if(tiger.isTouching(invisibleGround1)){
  tiger.velocityX = 2;
}
if(tiger.isTouching(invisibleGround2)){
  tiger.velocityX = -2;
}
if(tiger.isTouching(dropseed)){
  dropseed.destroy();
  dropseed=createSprite(bird.x,bird.y,20,20);
}
  drawSprites();

}

function dropSeed(){

  dropseed.visible=true
  dropseed.velocityY=2;
  

}

