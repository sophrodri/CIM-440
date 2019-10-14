
//Tiger top and bottom - https://www.o-mighty.com/products/213/all/10864

//Red Chain skirt - https://www.o-mighty.com/products/157/all/9504
//Red Top - https://www.o-mighty.com/products/211/all/11019

//white tank - https://www.o-mighty.com/products/211/all/11477
//pink skirt - https://www.o-mighty.com/products/208/all/10687

//Black Leather skirt - https://www.o-mighty.com/products/157/all/9764


var currentTop = 0;

var currentBottom = 0;

var TopArray = [];

var BottomArray = [];

// top buttons
var hitX = [200,447];
var hitY = [195,195];

// bottom buttons
var hitX2 = [200,447];
var hitY2 = [410,410];

var hitSize = 50;

// Dress me Button
var dressMe = false;
var hitX3 = [500];
var hitY3 = [405];

var DressMeSizeW = 150;
var DressMeSizeH = 60;

// Browse button
var browse = false;
var hitX4 = [47];
var hitY4 = [405];

var BrowseButtonSizeW = 150;
var BrowseButtonSizeH = 60;

// Browse button timer
var interval = 1000;
prevMillis = 0;
var startTimer = false;


function preload(){

  TopArray[0] = loadImage("Images/RedTop.png")
  TopArray[1] = loadImage("Images/TigerTop.png")
  TopArray[2] = loadImage("Images/WhiteTank.png")
  BottomArray[0] = loadImage("Images/LeatherBottom.png")
  BottomArray[1] = loadImage("Images/PinkSkirt.png")
  BottomArray[2] = loadImage("Images/PlaidSkirt.png")
  BottomArray[3] = loadImage("Images/TigerBottom.png")

}// end of Preload


function setup() {
  // put setup code here
  createCanvas(700,530)
}// end of SETUP

function draw() {
  // put drawing code here
background("pink");

stroke("grey");
strokeWeight(10);
fill("white");
rect(200, 70, 297, 390);

console.log("currentTop" + currentTop);
console.log("currentBottom" + currentBottom);

  image(TopArray[currentTop],250,75,TopArray[currentTop].width/4,TopArray[currentTop].height/4);
  image(BottomArray[currentBottom],250,250,BottomArray[currentBottom].width/4,BottomArray[currentBottom].height/4);

  strokeWeight(1);
    stroke(0);
    fill(211,211,211);
    rect(hitX[0],hitY[0],hitSize,hitSize);
    rect(hitX[1],hitY[1],hitSize,hitSize);
    rect(hitX2[0],hitY2[0],hitSize,hitSize);
    rect(hitX2[1],hitY2[1],hitSize,hitSize);


    fill(211,211,211);
    rect(hitX3[0],hitY3[0],DressMeSizeW,DressMeSizeH);
    rect(hitX4[0],hitY4[0],BrowseButtonSizeW,BrowseButtonSizeH);

    textSize(32);
    fill(0);
    text("Dress Me", 505, 445);
    text("Browse", 70, 445);


    if(dressMe == true){
      if(currentTop == 0 && currentBottom == 2) {
         console.log("Outfit1");

       }else if (currentTop == 0 && currentBottom == 0) {
         console.log("Outfit2");
         fill("gray");
         strokeWeight(10);
         rect(200, 200, 300, 100);
         textSize(27);
         noStroke();
         fill("black");
         text("Match! Click to restart", 220,260);

       }else if (currentTop == 1 && currentBottom == 3) {
         console.log("Outfit3");
         fill("gray");
         strokeWeight(10);
         rect(200, 200, 300, 100);
         textSize(27);
         noStroke();
         fill("black");
         text("Match! Click to restart", 220,260);

       }else if (currentTop == 2 && currentBottom == 0) {
        console.log("Outfit4");
        fill("gray");
        strokeWeight(10);
        rect(200, 200, 300, 100);
        textSize(27);
        noStroke();
        fill("black");
        text("Match! Click to restart", 220,260);

        }else if (currentTop == 2 && currentBottom == 1) {
       console.log("Outfit5");
       fill("gray");
       strokeWeight(10);
       rect(200, 200, 300, 100);
       textSize(27);
       noStroke();
       fill("black");
       text("Match! Click to restart", 220,260);


       }else if (currentTop == 0 && currentBottom == 2) {
      console.log("Outfit6");
      fill("gray");
      strokeWeight(10);
      rect(200, 200, 300, 100);
      textSize(27);
      noStroke();
      fill("black");
      text("Match! Click to restart", 220,260);

    }else{
      console.log("MisMatch")
      fill("gray");
      strokeWeight(10);
      rect(175, 200, 400, 100);
      textSize(27);
      noStroke();
      fill("black");
      text("MisMatch! Click arrows to try again", 175,260);
    }
    }

    if(browse == true){
    //var startTimer = true;}
    startTimer = true;
    if(millis()-prevMillis > interval){
    prevMillis = millis();
    Math.floor(random(0,TopArray.length));
    Math.floor(random(0,BottomArray.lenght));
    } else if(prevMillis==10000){
    startTimer = false;
    console.log("Timer ended");
  }
}// end of browse


}// end of DRAW

//
function mousePressed(){
  if(mouseX > hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    console.log("Button 0");
    currentTop = currentTop - 1;
    if(currentTop == -1){
      currentTop = 2;
    }
    dressMe = false;
  }// end of if 1

  if(mouseX > hitX[1] && mouseX < hitX[1] + hitSize && mouseY > hitY[1] && mouseY < hitY[1] + hitSize){
      console.log("Button 1");
      currentTop = currentTop + 1
    if(currentTop == 3){
      currentTop = 0;
    }
    dressMe = false;
  } // end of IF 2

  if(mouseX > hitX2[0] && mouseX < hitX2[0] + hitSize && mouseY > hitY2[0] && mouseY < hitY2[0] + hitSize){
      console.log("Button 3");
      currentBottom = currentBottom - 1;
      if(currentBottom == -1){
        currentBottom = 3;
      }
    dressMe = false;
}// end of IF 3

if(mouseX > hitX2[1] && mouseX < hitX2[1] + hitSize && mouseY > hitY2[1] && mouseY < hitY2[1] + hitSize){
    console.log("Button 4");
    currentBottom = currentBottom + 1;
    if(currentBottom == 4){
      currentBottom = 0;
    }
    dressMe = false;
  }// end of IF 4

  if(mouseX > hitX3[0] && mouseX < hitX3[0] + DressMeSizeW && mouseY > hitY3[0] && mouseY < hitY3[0] + DressMeSizeH){
      console.log("DressMeButton");

        dressMe = true;

    }// end of IF 5

  if(mouseX > hitX4[0] && mouseX < hitX4[0] + BrowseButtonSizeW && mouseY > hitY4[0] && mouseY < hitY4[0] + BrowseButtonSizeH){
        console.log("BrowseButton");

        browse = true;

      }// end of IF 5


}// end of MousePressed
