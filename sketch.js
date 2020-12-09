var player;
var goal1;
var player_image;
var goalGroup;
var score=0;
var obstacleGroup1,obstacleGroup2,obstacleGroup3,obstacleGroup4,obstacleGroup6;

function preload(){
    player_image = loadImage("images/image1.jpg");
}

function setup(){
    createCanvas(500,500)
   player = createSprite(450,450,10,20);
   player.shapeColor=rgb(66, 38, 204);//blue
   player.addImage(player_image);
   player.scale=0.17;

   goal1 = createSprite(40,20,20,20);
   goal1.shapeColor=rgb(255,255,255);//white
   goal1.lifetime=500;

   goalGroup = new Group();
    goalGroup.add(goal1);
    obstacleGroup1=new Group();
    obstacleGroup2=new Group();
    obstacleGroup3=new Group();
    obstacleGroup4=new Group();
    obstacleGroup5=new Group();
    obstacleGroup6=new Group();
   obstacles();
}

function draw(){
    background(0,0,0);
    spawnGoal();

    if(keyWentDown("UP_ARROW")){
        player.y=player.y-20;
    }
    if(keyWentDown("DOWN_ARROW")){
        player.y=player.y+20;
    }
    if(keyWentDown("LEFT_ARROW")){
        player.x=player.x-20;
    }
    if(keyWentDown("RIGHT_ARROW")){
        player.x=player.x+20;
    }
    if(player.isTouching(goalGroup)){
        // goalGroup.destroyEach();
        score=score+20;
    }
    // if(player.isTouching(obstacleGroup1)){
    //     //slow down
    // }
    if(player.isTouching(obstacleGroup2)){
        score=score-20;
    }
    if(player.isTouching(obstacleGroup3)){
        score=score+20;    
    }
    // if(player.isTouching(obstacleGroup4)){
    //     //makes faster
    // }
    // if(player.isTouching(obstacleGroup5)){
    //     //takes one life
    // }
    // if(player.isTouching(obstacleGroup6)){
    //     //gives one life
    // }
    text("Score: "+score+"!!!!",100,20);
    drawSprites();
}   

function obstacles(){
    for(var i = 50; i < 450; i=i+50){
       for(var j = 10; j < 500; j=j+50){
           var obstacle = createSprite(j,i,10,10);
           var rand = Math.round(random(1,6));
           if(rand == 1){
               obstacle.shapeColor="red";
               obstacleGroup1.add(obstacle);
           }
           if(rand == 2){
               obstacle.shapeColor="purple";
               obstacleGroup2.add(obstacle);
           }
           if(rand == 3){
               obstacle.shapeColor="yellow";
               obstacleGroup3.add(obstacle);
           }
           if(rand == 4){
               obstacle.shapeColor="pink";
               obstacleGroup4.add(obstacle);
           }
           if(rand == 5){
               obstacle.shapeColor="orange";
               obstacleGroup5.add(obstacle);
           }
           if(rand == 6){
               obstacle.shapeColor="green";
               obstacleGroup6.add(obstacle);
           }
         //  obstacleGroup.add(obstacle);
       }
    }
}

function spawnGoal(){
    if(frameCount % 300 == 0){
        var goal = createSprite(225,225,20,20);
        goal.shapeColor=rgb(255,255,255);
        goal.x=Math.round(random(50,400));
        goal.y=Math.round(random(50,400));
        goal.lifetime=500;
        goalGroup.add(goal);
    }
}
