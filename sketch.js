var astronaut
function preload(){
  bg= loadImage("Images/iss.png")
  sleep = loadImage("Images/sleep.png")
  brush = loadImage("Images/brush.png")
  gym = loadAnimation("Images/gym1.png","Images/gym2.png")
  eat = loadAnimation("Images/eat1.png","Images/eat2.png")
  drink = loadAnimation("Images/drink1.png","Images/drink2.png")
  bath = loadImage("Images/bath2.png","Images/bath1.png")
}
function setup(){
  createCanvas(600,500);
  


 astronaut = createSprite(290,300)
 astronaut.addAnimation("sleeping",sleep)
 astronaut.scale=0.1
}

function draw() {
  background(bg);  
 
  if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush)
  astronaut.changeAnimation("brushing")
  astronaut.y=350
  astronaut.velocityX=0
  astronaut.velocityY=0
  }
  if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym)
  astronaut.changeAnimation("gymming")
  astronaut.y=300
  astronaut.velocityX=0
  astronaut.velocityY=0
  }
  if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("drinking",drink)
  astronaut.changeAnimation("drinking")
  astronaut.y=310
  astronaut.velocityX=0
  astronaut.velocityY=0
  }
  if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat)
  astronaut.changeAnimation("eating")
  astronaut.y=320
  astronaut.velocityX=0
  astronaut.velocityY=0
  }
  if(keyDown("M")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y=320
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  drawSprites();
}