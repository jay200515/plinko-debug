const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;



var particles = [];
var particle;
var turn = 0;
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var gameState = PLAY;
var PLAY = 1;
var END = 0;





function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);

 for(var k = 0; k <=width; k = k + 80){
   divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
 }

 for (var j = 75; j <= width; j=j+50)
 {
   plinkos.push(new Plinkos(j, 75));
 }
 
 for (var j = 50; j <= width-10; j=j+50)
 {
   plinkos.push(new Plinkos(j, 175));
 }

 for (var j = 75; j <= width; j=j+50)
 {
   plinkos.push(new Plinkos(j, 275));
 }

 for (var j = 50; j <= width-10; j=j+50)
 {
   plinkos.push(new Plinkos(j, 375));
 }



}


function draw() {
  background(255,255,255);  
  textSize(20)
  Engine.update(engine);
  ground.display();

  for(var i = 0; i < plinkos.length; i++){
    plinkos [i].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 10));
    score++;
  }

  for (var j = 0; j < particles.length; j++) {
   particles[j].display();
 }

  for(var k = 0; k < divisions.length; k ++){
  divisions[k].display();
 }

if(particle = null)
 {
   particle.display();
   if(particle.body.position.y > 760)
   {
     if(particle.body.position < 300)
     {
       score = score+500;
       particle = null;
       if(count>= 5) gamesTATE = "END";
     }
   }
 }
 
 }


 function MousePressed(){
   if(gameState == "END")
   {
     count++;
     particle=new Particle(mouseX, 10, 10, 10);
   }
 }

 