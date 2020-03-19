var canvas, backgroundImage, playerCount,form,player, game , database;
var gameState = 0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
 
}


