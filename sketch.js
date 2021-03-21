var soldire,soldireimg,backgroundimage,box1,box2,box3,box4;
var bullet;
   
function preload(){
soldireimg = loadImage("soldire.jpg");
backgroundimage= loadImage("town.jpg")
}


function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-20);

    soldire = createSprite(displayWidth/2,displayHeight/2,10,10);
    soldire.addImage(soldireimg);
    soldire.scale=0.5;
    
    box1 = createSprite(displayWidth/20,displayHeight/18,10,10);
    box1.scale = 3.5;

    box2 = createSprite(displayWidth-50,displayHeight/17,10,10);
    box2.scale = 3.5;

    box3 = createSprite(displayWidth/20,displayHeight-55,10,10);
    box3.scale = 3.5;

    box4 = createSprite(displayWidth-60,displayHeight-50,10,10);
    box4.scale = 3.5;

   /* zombie= new Zombie(displayWidth,displayHeight);
    zombie2= new Zombie(displayWidth,displayHeight);
    zombie3= new Zombie(displayWidth,displayHeight);
    zombie4= new Zombie(displayWidth,displayHight);
    zombie5= new Zombie(displayWidth,displayHight);
    zombie6= new Zombie(displayWidth,displayHight);
    zombie7= new Zombie(displayWidth,displayHight);
    zombie8= new Zombie(displayWidth,displayHight);
    zombie9= new Zombie(displayWidth,displayHight);
    zombie10= new Zombie(displayWidth,displayHight);*/

    
   
}

function draw(){
    background(backgroundimage);
  
    if(keyDown("space")|| keyWentUp("UP_ARROW")){
        bullet();
    }

    if(keyDown("space")&& keyWentUp("DOWN_ARROW")){
        bullet();
    }

    if(keyDown("space")&& keyWentUp("RIGHT_ARROW")){
        bullet();
    }

    if(keyDown("space")&& keyWentUp("LEFT_ARROW")){
        bullet();
    }
    
    if(keyWentDown(LEFT_ARROW)){
        changePosition(-2,0);

    }
    else if(keyWentDown(RIGHT_ARROW)){
        changePosition(2,0);
        
    }
    else if(keyWentDown(UP_ARROW)){
        changePosition(0,-2);
        
    }
    else if(keyWentDown(DOWN_ARROW)){
        changePosition(0,+2);
    }

  
box1.display();
box2.display();
box3.display();
box4.display();
    
   /* zombie.display();
    zombie2.display();
    zombie3.display();
    zombie4.display();
    zombie5.display();
    zombie6.display();
    zombie7.display();
    zombie8.display();
    zombie9.display();
    zombie10.display();*/
    ZombieLeft();
    //ZombieRight();
   // ZombieUp();
   // ZombieDown();

    drawSprites();
}

function changePosition(x,y){
    soldire.x = soldire.x + x;
    soldire.y = soldire.y + y;
  }

 /* function ZombieRight(){
      if (World.frameCount%65===0){
          var Zombie = new zombie(displayWidth,Math.round(random(0,displayHeight-20)));
          Zombie.display();
      }
      
  }*/

  function ZombieLeft(){
      if (World.frameCount%60===0){
          var Zombie2 = new zombieRight(0,Math.round(random(0,displayHeight-10)));
          Zombie2.display();
        
      }
  }

  /*function ZombieUp(){
    if (World.frameCount%80===0){
        var Zombie = new zombieUp(Math.round(random(0,displayWidth-20)),0);
        Zombie.display();
    }
  
  }*/


 /* function ZombieDown(){
    if (World.frameCount%100===0){
        var Zombie = new zombieDown(Math.round(random(0,displayWidth-20)),displayHeight);
        Zombie.display();
    }
  
  }*/


 
  function bullet(){
      var bullet = createSprite (displayWidth/2,displayHeight/2,10,10);
    bullet.y = soldire.y;
    bullet.x = soldire.x;
    if (keyWentUp(UP_ARROW))
    bullet.velocityY = -4;

    else if (keyWentUp(DOWN_ARROW))
    bullet.velocityY = 4;

    else if (keyWentUp(RIGHT_ARROW))
    bullet.velocityX = -4;


    else if (keyWentUp(LEFT_ARROW))
    bullet.velocityX = 4;


    
    
      
  }