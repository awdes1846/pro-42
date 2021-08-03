var issImg,spacebgImg,spacecraft1Img,spacecraft2Img,spacecraft3Img,spacecraft4Img;
var iss,spacecraft;

function preload(){
  issImg=loadImage("images/iss.png");
  spacebgImg=loadImage("images/spacebg.jpg");
  spacecraft1Img=loadImage("images/spacecraft1.png");
  spacecraft2Img=loadImage("images/spacecraft2.png");
  spacecraft3Img=loadImage("images/spacecraft3.png");
  spacecraft4Img=loadImage("images/spacecraft4.png")
}
function setup() {
  createCanvas(1515,725);
 
  iss=createSprite(700, 300, 50, 50);
  iss.addImage(issImg)
  iss.scale=1.3;
  spacecraft=createSprite(600, 600, 60, 60);
  spacecraft.addImage(spacecraft1Img)
  spacecraft.scale=0.4;


}

function draw() {
  background(spacebgImg);
  if(keyDown(RIGHT_ARROW)){
  spacecraft.addImage(spacecraft4Img)
  spacecraft.x=spacecraft.x+5
  }  
  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(spacecraft3Img)
    spacecraft.x=spacecraft.x-5
    }  
    if(keyDown(UP_ARROW)){
      spacecraft.addImage(spacecraft2Img)
      spacecraft.y=spacecraft.y-5
      }  
      if(keyDown(DOWN_ARROW)){
        spacecraft.addImage(spacecraft2Img)
        spacecraft.y=spacecraft.y+5
        } 
        if(spacecraft.isTouching(iss)){
        text(20);
        fill("white");
        text("Docking is succesfull",700,700);

        } 
      
  drawSprites();
}