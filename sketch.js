var player;
var hurdles;
var invisibleground1;
var invisibleground2;
var invisibleground3;
var body1 = 0;
var body2 = 0;
var body3 = 0;
var body4 = 0;
var playersfinished = 0;
var game;
var form;
var distance2;
var playercount = 0;
var player1, player2, player3, player4;
var players;
var gameState = 0;
var a = [];
var playerGameState = 0;
var ground;
var database = firebase.database();
var rank = 0;
var person;
var index = 0;
var allplayers;
var xposition; 
var x;
var yposition;
var fincount = 0; 

function preload(){


}

function setup(){
    createCanvas(1450, displayHeight );
  
    player = new Player();
    game = new Game();
    hurdles = new Hurdles();
    playercount = 0;
    ground = new Ground();
    form = new Form();
   
}

function draw(){
    
    camera.position.x =  player.distance -100;
    camera.position.y =  displayHeight/2;

       
    
    background("blue");
    ground.display();
    if (gameState === 0){
        game.start();

    }
    if (gameState === 1 && playerGameState === 0){
        game.play();

    }

    if (playerGameState === 2){
        Player.getallplayerinfo();
        var ind = 0;

        for(var plr in allplayers){
            if (allplayers[plr]["rank"] != 0) {
                text(" Player " + allplayers[plr]["name"] + "  Rank : " + allplayers[plr]["rank"], 3100,50 + allplayers[plr]["rank"]*40);
            }
            ind = ind + 1; 
         }
        //text(" Player:      " + player.name + "         Rank:  " +  playersfinished, 3100,20 + 500 * playersfinished);

    }
    

    if (gameState === 2){
        game.end();

    }

    form.display(); 
    hurdles.display();

    if (hurdles.sprites){
    for (var i = 0; i < hurdles.sprites.length; i++) {
        hurdles.sprites[i].draw();
        
    }
    }
    person = window["player" + player.index];

    if (player.index != null && person != null){
       person.position.x = player.distance+40;
       //person.y = player.distance2;
       person.velocityY = person.velocityY + 0.9;
  
        person.collide(body4);
        person.collide(body3);
        person.collide(body2);
        person.collide(body1);
    
    
    }
   
    drawSprites();
    
}


function keyPressed() {
    if (keyCode === UP_ARROW && playerGameState === 0) {
        person.velocityY = -10;
      
    }
    if (keyCode === RIGHT_ARROW && playerGameState === 0) {
        player.distance = player.distance + 20;
        player.updateplayerinfo();
        
    }
}