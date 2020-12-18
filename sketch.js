var player;
var goal1;
var player_image;
var obstacle_image1,obstacle_image2,obstacle_image3,obstacle_image4,obstacle_image5,obstacle_image6;
var goalGroup,goal_image;
var score=0;
var obstacleGroup1,obstacleGroup2,obstacleGroup3,obstacleGroup4,obstacleGroup6;

function preload(){
    player_image = loadImage("images2/player_image.png");
    obstacle_image1 = loadImage("images2/image1_4.png");
    obstacle_image2 = loadImage("images2/image1_5.png");
    obstacle_image3 = loadImage("images2/image1_6.png");
    obstacle_image4 = loadImage("images2/image1_3.png");
    obstacle_image5 = loadImage("images2/image1_1.png");
    obstacle_image6 = loadImage("images2/image1_2.png");
    goal_image = loadImage("images2/goal.png");
}

function setup(){
    createCanvas(500,500)
   player = createSprite(450,450,10,20);
   player.addImage(player_image);
   player.scale=0.06;

    goal1 = createSprite(40,20,20,20);  
    goal1.lifetime=500;
    goal1.addImage(goal_image);
    goal1.velocityX=2;
    goal1.scale=0.05;
    goalGroup=new Group();
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

    if(goalGroup.isTouching(player)){
        goalGroup.destroyEach();
    }
    if(frameCount%300==0){
        goal1.x=Math.round(random(50,400));
        goal1.y=Math.round(random(50,400));
        goal1.visible=true;
    }

    if(keyWentDown("UP_ARROW")){
        player.y=player.y-30;
    }
    if(keyWentDown("DOWN_ARROW")){
        player.y=player.y+30;
    }
    if(keyWentDown("LEFT_ARROW")){
        player.x=player.x-30;
    }
    if(keyWentDown("RIGHT_ARROW")){
        player.x=player.x+30;
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
    // size(11);
    fill(255,255,255);
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
               obstacle.addImage(obstacle_image1);
               obstacle.scale=0.03;
           }
           if(rand == 2){
               obstacle.shapeColor="purple";
               obstacleGroup2.add(obstacle);
               obstacle.addImage(obstacle_image2);
               obstacle.scale=0.03;
           }
           if(rand == 3){
               obstacle.shapeColor="yellow";
               obstacleGroup3.add(obstacle);
               obstacle.addImage(obstacle_image4);
               obstacle.scale=0.03;
           }
           if(rand == 4){
               obstacle.shapeColor="pink";
               obstacleGroup4.add(obstacle);
               obstacle.addImage(obstacle_image3);
               obstacle.scale=0.01;
           }
           if(rand == 5){
               obstacle.shapeColor="orange";
               obstacleGroup5.add(obstacle);
               obstacle.addImage(obstacle_image5);
               obstacle.scale=0.03;
           }
           if(rand == 6){
               obstacle.shapeColor="green";
               obstacleGroup6.add(obstacle);
               obstacle.addImage(obstacle_image6);
               obstacle.scale=0.09;
           }
         //  obstacleGroup.add(obstacle);
       }
    }
}

function spawnGoal(){
    if(frameCount % 170 == 0){
        var goal = createSprite(225,225,20,20);
        // goal.shapeColor=rgb(255,255,255);
        goal.addImage(goal_image);
        goal.scale=0.05;
        goal.velocityX=5;
        goal.x=Math.round(random(10,400));
        goal.y=Math.round(random(10,400));
        goal.lifetime=500;
        goalGroup.add(goal);
        
    }
}

