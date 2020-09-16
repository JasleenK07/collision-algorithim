var mrect,frect;
function setup() {
  createCanvas(1200,800);
 mrect = createSprite(400, 200, 50, 50);
 mrect.shapeColor = "red";
 frect = createSprite (600,300,100,50);
 frect.shapeColor = "red";

 mrect.debug = true;
 frect.debug = true;
}

function draw() {
  background("black");  
  
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
  
  if (mrect.x - frect.x<frect.width/2+mrect.width/2 && 
    frect.x-mrect.x<frect.width/2+mrect.width/2 &&
    mrect.y - frect.y<frect.width/2+mrect.width/2 &&
    frect.y - mrect.y<frect.width/2+mrect.width/2)  {
    mrect.shapeColor = "blue";
    frect.shapeColor = "green";
  }
  else
  {
    mrect.shapeColor = "red";
    frect.shapeColor = "red";
  }
  drawSprites();
}