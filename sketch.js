 var background

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function preload(){
  dayTime=loadImage("Day Background.png");
  BadMan1=loadImage("Monster 1.gif");
  happyDay=loadImage("download.png");
}

function setup(){
createCanvas(1600,730);

engine=Engine.create();


gameState=0;

world=engine.world;

ground=new Ground(800,700,1600,50);
//monster1=new monster(1400,700);


}

function draw(){

  Engine.update(engine);
  
  ground.display();
 // monster1.display();

if(gameState===0){
  background=createSprite(800,500);
  background.addImage(happyDay);
  background.scale=6.5;
  
  if(keyDown('SPACE')){
    gameState=1
  }
  
}

if(gameState===1){
 
  background=createSprite(800,300);
  background.addImage(dayTime);
  background.scale=7;
  Monster1();
}

if(gameState===2){
  Monster2();
}

if(gameState===3){
  Monster3();
}


  drawSprites();
  if(gameState===0){
    fill("black");
    textSize(30)
    text("One beautiful morning, Nick and his friends went on a picnic."+
     "They decided to picnic in the most beautiful park in another town."+
     " They took a bus and were ready to go. As they held to another town."+
     " Something strange happened....The sky turned black and a hole was formed in they sky."+ 
     "The hole took the bus to an another dimension where there was a totaly different environment than on the Earth. ",80,300)
    textAlign("Center");
     text("PRESS SPACE TO START", 800,700);
    }

}

function Monster1(){
  if(frameCount%120===0){
monster1=createSprite(1340,600,50,50)
monster1.addImage(BadMan1);
monster1.scale=0.5;
//monster1.velocityX=-2;
  }
}

function Monster2(){
  if(frameCount%60===0){
    monster2=createSprite(1400,600,50,50)
    monster2.velocityX=-2;
    monster2.shapeColor="black";
  }
}


function Monster3(){
  if(frameCount%60===0){
    monster3=createSprite(1470,600,50,50)
    monster3.velocityX=-2;
    monster3.shapeColor="white";
  }
}
