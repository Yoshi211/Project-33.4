var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var count = 0;
var countt = 0;  
var particle;

var gameState = "play";

var divisionHeight=300;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(1,400,20,height);
  ground1 = new Ground(799,400,20,height);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");

  textSize(25)
  fill("white");
  text("1000",12,525);

  textSize(25)
  fill("white");
  text("1000",730,525);

  textSize(25)
  fill("white");
  text("100",100,525);

  textSize(25)
  fill("white");
  text("100",660,525);

  textSize(25)
  fill("white");
  text("50",190,525);

  textSize(25)
  fill("white");
  text("50",590,525);

  textSize(25)
  fill("white");
  text("10",265,525);

  textSize(25)
  fill("white");
  text("10",510,525);

  textSize(25)
  fill("white");
  text("50",345,525);

  textSize(25)
  fill("white");
  text("50",420,525);

  textSize(20)
  fill("white");
  text("Score : " + score,20,30);

  countt = 10 - count;
  textSize(20)
  fill("white");
  text("Tries Left: " + countt,670,30);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(150,650), 10,10));
  //    score++;    
  //  }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle != null){
    particle.display();
    if(particle.body.position.y > 760){
      if(particle.body.position.x < 80 || particle.body.position.x > 720){
        score = score + 1000;
        particle = null;
      }
    }
  }

  if(particle != null){
    particle.display();
    if(particle.body.position.y > 760){
      if(particle.body.position.x < 150 && particle.body.position.x > 80 || particle.body.position.x < 700 && particle.body.position.x > 650){
        score = score + 100;
        particle = null;
      }
    }
  }

  if(particle != null){
    particle.display();
    if(particle.body.position.y > 760){
      if(particle.body.position.x < 230 && particle.body.position.x > 150 || particle.body.position.x > 550 && particle.body.position.x < 650 || particle.body.position.x > 310 && particle.body.position.x < 400 || particle.body.position.x < 480 && particle.body.position.x > 400){
        score = score + 50;
        particle = null;
      }
    }
  }

  if(particle != null){
    particle.display();
    if(particle.body.position.y > 760){
      if(particle.body.position.x > 230 && particle.body.position.x < 310 || particle.body.position.x > 480 && particle.body.position.x < 550){
        score = score + 10;
        particle = null;
      }
    }
  }

  if(count === 10){
    gameState = "end";
    textSize(50);
    fill("white");
    text("Game Over",300,350);
  }

  ground.display();
  ground1.display();
}

function mousePressed(){
  if(gameState === "play"){
    particle = new Particle(random(20,780),10,10);
    count++;
  }
}
