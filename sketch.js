const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground1,ground2,ground3
var engine, world
var polygen
var gameState



function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
    world = engine.world;
    gameState="onSling"


  polygen=new Polygen(200,10,45,45)
  ground1=new Ground(480,380,230,10)
  //ground2=new Ground(400,600,250,20)
  //ground3=new Ground(700,400,250,20)
  box1=new Box(390,355,30,40)
  box2=new Box(420,355,30,40)
  box3=new Box(450,355,30,40)
  box4=new Box(480,355,30,40)
  box5=new Box(510,355,30,40)
  box6=new Box(540,355,30,40)
  box7=new Box(570,355,30,40)
  //sec
  box8=new Box(410,315,30,40)
  box9=new Box(435,315,30,40)
  box10=new Box(465,315,30,40)
  box11=new Box(496,315,30,40)
  box12=new Box(520,315,30,40)
  box13=new Box(540,315,30,40)
  //third
  box14=new Box(415,275,30,40)
  box15=new Box(445,275,30,40)
  box16=new Box(475,275,30,40)
  box17=new Box(515,275,30,40)
  box18=new Box(542,275,30,40)
  //fourth 
  box19=new Box(430,235,30,40)
  box20=new Box(463,235,30,40)
  box21=new Box(500,235,30,40)
  box22=new Box(530,235,30,40)
  //five
  box23=new Box(453,195,30,40)
  box24=new Box(486,195,30,40)
  box25=new Box(515,195,30,40)
  //six
  box26=new Box(469,150,30,40)
  box27=new Box(499,150,30,40)
  //seven
  box28=new Box(482,110,30,40)



  slingShot = new SlingShot(polygen.body,{x:200,y:190});



}

function draw() {
  background(100); 
  Engine.update(engine); 
  ground1.display();
  //ground2.display();
  //ground3.display();
  polygen.display();
  slingShot.display();
   //fill(200)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  
  
  
}

function mouseDragged(){
  if (gameState !="launched"){
  Matter.Body.setPosition(polygen.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingShot.fly();
  gameState="launched"
}

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(polygen.body);
    gameState="onSling"
  }
}