const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground,box1,box2,box3,box4,box5,box6,ball,polygonImg,canvas;
function preload(){
    polygonImg=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(400,400)
    engine=Engine.create();
    world=engine.world;
Engine.run(engine);
    ground=new Ground();
   // use two stands,one on right and on to left
    box1=new Box(270,300,50,50);
    box2=new Box(270,320,50,50);
    box3=new Box(270,340,50,50);
    box4=new Box(250,310,50,50);
    box5=new Box(250,330,50,50);
    box6=new Box(230,320,50,50);
    //max 10 boxes for 1 and 5 for two
      ball=Bodies.circle(50,200,20);
      World.add(world,ball)
    
     slingshot = new SlingShot(this.ball,{x:100, y:90});

}
function draw(){
    
    background("white");
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    // make text,display everything,fill after box
    imageMode(CENTER);
    image(polygonImg,ball.position.x,ball.position.y,40,40);
    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}