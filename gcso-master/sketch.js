const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var wall,thickness;
var bullet,speed,weight;
function setup(){
    var canvas = createCanvas(400,400);
    bullet.createSprite(50,200,20,50);
    wall.createSprite(1500,200,60,heigth/2)
    speed=random(223,321);
    weight=(30,52);

    engine = Engine.create();
    world = engine.world;
    speed=random(55,90)
    weight=random(400,1500)
    thickness=random(22,83);
    wall=createSprite(1200,200,thickness,height/2);
    
    bullet.velocityX = speed; 

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();

   
}
function  hasCollied(lbullet, lwall){
    BulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lWall.x;
    if (bulletRightEdge>=wallLeftEdge){
        return true 
    }
    return false  
}
if(hasCollided(bullet, wall))
{
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
        wll.shapeColour=colour(255,0,0);
    }

    if(damage<10)
    {
        wall.shapeColour=colour(0,255,0);

    }


}