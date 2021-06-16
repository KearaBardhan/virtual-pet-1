//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{
	//load images here
  dog=loadImage('Dog.png')
  happyDog=loadImage('happydog.png')
}

function setup() {
	createCanvas(500, 500);
  dogSprite=createSprite(250,250)
  dogSprite.scale=0.3;
  dogSprite.addImage(dog)

  database= firebase.database()
  foodStock=database.ref('Food')
  foodStock.on("value", readStock)
  
}


function draw() { 
  background(46,139,87) 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dogSprite.addImage(happyDog)

  }

  drawSprites();
  //add styles here
  textSize(18)
  fill("white")
  text("Note: Press the UP_ARROW key to feed Drago milk!", 50,50)

}

function readStock(y){
  foodS=y.val()
}


function writeStock(x){

  if(x<=0){
    x=0
  } else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })

  
}


