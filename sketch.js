var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var plinkos = [];
var divisions=[]

var divisionHeight=300;
var score = 0;
var turn = 0; 
var gameState="play"
var particles;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


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

    /*if(frameCount%60===0){
      particles=new Particle(random(50,350), 10,10);
      score++;
    }*/
    

    
}
 
function mousePressed(){

  if(gameState!=="end"){

    turn++;
    particles=new Particle(mouseX,10,10,10)
  }
}


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,40,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
  /* if(frameCount%60===0){
    particles.display();
    score++;
  }*/

  if(particles = null){
    particles.display()
      
      if (particles.body.position.y> 760) {

        if (particles.body.position.x,300) {
          score=score+500;
          particle=null;
            if( turn < 5){
              gameState="end"
            } 
        }
        
      }
  }
 
 /* for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
