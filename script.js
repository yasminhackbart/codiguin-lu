const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var boladeisopor
var jett;
var ball = []
var jetts = []

var canvas, angle, tower, ground, cannon;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

 canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);



 
}

function draw() {
  image(backgroundImg,0,0,width,height)
  Engine.update(engine);
//esse é o chão
  rect(ground.position.x, ground.position.y, width * 2, 1);
  
// toda vez que a gente clica gera uma bola
if (keyIsDown(UP_ARROW)) {
boladeisopor = new Boladeisopor(500,100)
  boladeisopor.fogo()
  
  
  ball.push(boladeisopor)

  
}
//mostrar as bolas na tela
for (var i = 0; i < ball.length; i++) {
  
  ball[i].display()
  
}

// gerar os jets
if (jetts.length > 0) {

  if (
    jetts[jetts.length - 1] === undefined ||
    jetts[jetts.lenght - 1].body.position.x < width/2) {
  
    jett = new Jett(1000,85)
    jetts.push(jett)
    
  }
  for (var i = 0; i < jetts.length; i++) {
    if(jetts[i]){
    jetts[i].display()
  
    Matter.Body.setVelocity(jetts[i].body,{x : -10, y : 0})
    }
  }

}else{
 jett = new Jett(windowWidth -10, 85)
    jetts.push(jett)

}
//gera imagem da torre
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
}
