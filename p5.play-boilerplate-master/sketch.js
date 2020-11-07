const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(600,700);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);  

   for (var i = 0; i <=width; i = i + 80) {
   divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {  
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {   
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {    
       plinkos.push(new Plinko(j,375));
    }
 
}

function draw() {
  background(0);  
  //drawSprites();

 Engine.update(engine);

 for (var j = 0; j < plinkos.length; j++) {    
  plinkos[j].display();
}
for (var l = 0; l < particles.length; l++) { 
  particles[l].display();
}
for (var i = 0; i < divisions.length; i++) {    
  divisions[i].display();
}

ground.display();

if(frameCount%30===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}
}