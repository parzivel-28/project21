var canvas;
var music;
var flore1,flore2,flore3,flore4;
var strickerA,strickerB;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces
    flore1=createSprite(70,590,150,30);
    flore1.shapeColor="blue";

    flore2=createSprite(250,590,150,30);
    flore2.shapeColor="red";

    flore3=createSprite(430,590,150,30);
    flore3.shapeColor="green";

    flore4=createSprite(610,590,150,30);
    flore4.shapeColor="yellow";


    //create box sprite and give velocity
    strickerA=createSprite(350,300,20,20);
    strickerA.shapeColor="white";
    strickerA.velocityY=3;
    strickerA.velocityX=3;

    strickerB=createSprite(300,300,20,20);
    strickerB.shapeColor="white";
    strickerB.velocityY=3;
    strickerB.velocityX=-3;
 
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites();


    //add condition to check if box touching surface and make it box
   
    //stricker.bounceOff(EdgeSprites);
   
   
    if(flore1.isTouching(strickerA)){
        strickerA.bounceOff(flore1);
        strickerA.shapeColor="blue";
        
    }
    if(flore2.isTouching(strickerA)){
        strickerA.bounceOff(flore2);
        strickerA.shapeColor="red";
        
    }
    if(flore3.isTouching(strickerA)){
        strickerA.bounceOff(flore3);
        strickerA.shapeColor="green";
       
    } 
    if(flore4.isTouching(strickerA)){
        strickerA.bounceOff(flore4);
        strickerA.shapeColor="yellow";
       
    }
    
    strickerA.bounceOff(edges);  
        
    if(flore1.isTouching(strickerB)){
        strickerB.bounceOff(flore1);
        strickerB.shapeColor="blue";
        
    }
    if(flore2.isTouching(strickerB)){
        strickerB.bounceOff(flore2);
        strickerB.shapeColor="red";
        
    }
    if(flore3.isTouching(strickerB)){
        strickerB.bounceOff(flore3);
        strickerB.shapeColor="green";
       
    } 
    if(flore4.isTouching(strickerB)){
        strickerB.bounceOff(flore4);
        strickerB.shapeColor="yellow";
       
    }
    
    strickerB.bounceOff(edges);  

    if(strickerA.isTouching(strickerB)){
        strickerA.bounce(strickerB);
        music.play();
    }
        
    

    drawSprites();
}
