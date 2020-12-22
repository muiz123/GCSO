var car,wall;
var speed,weight;



function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(780,200,50,100)
  car.velocityX=5;
  speed=random(25,31);
  weight=random(400,1500);
}



function draw() {
 background(0);
if(car.isTouching(wall))
{
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22500;
if(deformation>180)
{
  car.shapeColor=color("yellow");
}
if(deformation<180 && deformation>100 )
{
  car.shapeColor=color("green");
}
  if(deformation<100)
{
  car.shapeColor=color("red");
}
}
drawSprites();
}