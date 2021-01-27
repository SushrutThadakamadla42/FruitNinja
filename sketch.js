var sword, swordImage;
var PLAY = 1;
var END = 0;
var gamestate = 1;
var score;
var fruitsG, enemyG;
var fruit1,fruit2,fruit3,fruit4;
var enemyImage;
var gameoverImage;

function preload(){
  swordImage = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  enemyImage = loadAnimation("alien1.png","alien2.png");
  gameOverImage = loadImage("gameover.png");
}

function setup(){
  createCanvas(600,600);
  
  sword = createSprite(300,300,20,20);
  sword.addImage("sword",swordImage);
  sword.addImage("gameover",gameOverImage);
  sword.scale = 0.8;
  sword.setCollider("rectangle",-5,-5,40,190);
  
  
  score = 0;
  
  fruitG = new Group();
  enemyG = new Group();
}

function draw(){
background("teal");
  fill("white");
  text("score: " + score,540,30);
  
  if(gamestate === 1){
  sword.x = mouseX;
  sword.y = mouseY;
    
  fruit();
  enemy();
    
     if(fruitG.isTouching(sword)){
  fruitG.destroyEach();
  score++;
  }
    if(enemyG.isTouching(sword)){
    gamestate = 0;
  }
  }
  
  
  
  //sword.debug = true;
  
 
  
  if(gamestate === 0){
    fruitG.destroyEach();
    enemyG.destroyEach();
    fruitG.setVelocityXEach = 0;
    enemyG.setVelocityXEach = 0;
    sword.changeImage("gameover",gameOverImage);
    sword.x = 300;
    sword.y = 300;
  }
  
  drawSprites();
}

function fruit(){
 if(frameCount%80 === 0){
   var fruit = createSprite(600,200,20,20);
   rand = Math.round(random(0.5,4.49));
   if(rand === 1){
     fruit.addImage(fruit1);
   } else if (rand === 2){
     fruit.addImage(fruit2);
   } else if (rand === 3){
     fruit.addImage(fruit3);
   } else if (rand === 4){
     fruit.addImage(fruit4);
   }
   
   fruit.y = Math.round(random(50,550));
   fruit.velocityX = -7;
   fruit.setLifetime = 100;
   fruit.scale = 0.5;
   
   fruitG.add(fruit);
 }
}

function enemy(){
  if(frameCount%200 === 0){
    var enemy = createSprite(600,300,20,20);
    enemy.addAnimation("enemy",enemyImage);
    enemy.y = Math.round(random(100,500));
    enemy.velocityX = -8;
    enemy.lifetime = 80;
    enemy.scale = 0.5;
    enemyG.add(enemy);
  }
}

