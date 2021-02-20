var backgroundImg,balloonImg,balloon;

function preload() {
  backgroundImg=loadImage("Images/back.png");
  balloonImg=loadAnimation("Images/Hot-1.png","Images/Hot-2.png","Images/Hot-3.png")
}
function setup() {
  database=firebase.database()
  createCanvas(1420,675);

  balloon=createSprite(200,500,20,20)
  balloon.addAnimation("ballon",balloonImg);
  balloon.scale=0.6

}

function draw() {
  background(backgroundImg);  

  if(keyDown(LEFT_ARROW)){
      changePosition(-2,0);
}
  else if(keyDown(RIGHT_ARROW)){
      changePosition(2,0);
}
  else if(keyDown(UP_ARROW)){
      changePosition(0,-2);
      balloon.scale=balloon.scale-0.0015
}
  else if(keyDown(DOWN_ARROW)){
      changePosition(0,+2);
      balloon.scale=balloon.scale+0.0015
}

  drawSprites();
}
function changePosition(x,y){
  balloon.x = balloon.x + x;
  balloon.y = balloon.y + y;
}