
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject;
var rope1,rope2,rope3,rope4,rope5;
var world;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
    roofObject= new Roof(350,150,350,30);
    World.add(world,roofObject);

    bobObject1 = new Bob(250,500);
    bobObject2 = new Bob(300,500);
    bobObject3 = new Bob(350,500);
    bobObject4 = new Bob(400,500);
    bobObject5 = new Bob(450,500);

    rope1 = new Rope(bobObject1.body,roofObject.body,-100,0);
    World.add(world,rope1);

    rope2 = new Rope(bobObject2.body,roofObject.body,-50,0);
    World.add(world,rope2);

    rope3 = new Rope(bobObject3.body,roofObject.body,-0,0);
    World.add(world,rope3);

    rope4 = new Rope(bobObject4.body,roofObject.body,+50,0);
    World.add(world,rope4);

    rope5 = new Rope(bobObject5.body,roofObject.body,+100,0);
    World.add(world,rope5);
  
    var render =Render.create({
      element: document.body,
      engine: engine,
      options: {
        width:600,
        height:700,
        wireframe:false
      }
    })
  
	Engine.run(engine);
  //Render.run(render);
  
}


function draw() {
  
  background("white");
  Engine.update(engine);

  roofObject.display();
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  

}

function keyPressed(){
  if(keyCode=== UP_ARROW){
     Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730, y:0 });

  }
  if(keyCode=== LEFT_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-300, y:0 });

 }

}