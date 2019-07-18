let myPosX = 25;
let myPosY = 25;
let mySpeed= 3;

let enemyPosX, enemyPosY;
let enemywidth= 50, enemyheight = 50;

let myleft, myright, mytop, mybottom;

let enemyleft, energyright, enemytop, enemybottom;

function setup () {
   createCanvas(500, 500);
   background(0);

   rectMode(CENTER);

   enemyPosX= random( 25, 475);
   enemyPosY= random (100, 475);
}

function draw (){
   background (0);

   fill (0, 0, 255)
   rect (myPosX, myPosY, 50, 50);

   fill(255, 0, 0);
   rect (enemyPosX, enemyPosY, enemywidth, enemyheight);

   if (keyIsDown(LEFT_ARROW)){
       myPosX -= mySpeed;
   }

   if (keyIsDown(RIGHT_ARROW)){
       myPosX += mySpeed;
   }
   if (keyIsDown(UP_ARROW)){
       myPosY -= mySpeed;
   }
   if (keyIsDown(DOWN_ARROW)){
       myPosY += mySpeed;
   }
   if (myPosX <= 25){
       myPosX = 25;
   }
   if (myPosX >= 475){
       myPosX = 475;
   }
   if (myPosY <= 25){
       myPosY = 25;
   }
   if (myPosY >= 475){
       myPosY = 475;
   }


   myLeft= myPosX - 25;
   myRight= myPosX + 25;
   myTop = myPosY - 25;
   myBottom = myPosY + 25;


   enemyLeft = enemyPosX - 25;
   enemyRight= enemyPosX + 25;
   enemyTop =  enemyPosY - 25;
   enemyBottom= enemyPosY + 25;

if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop){

}
else {
   console.log("Collision!")
}

fill (random(255), random(255), random(255));
text("it's a trap!",250,50)



}