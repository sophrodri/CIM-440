//Pictures taken from o-mighty.com

  //Tiger top and bottom - https://www.o-mighty.com/products/213/all/10864
  //Red Chain skirt - https://www.o-mighty.com/products/157/all/9504
  //Red Top - https://www.o-mighty.com/products/211/all/11019
  //white tank - https://www.o-mighty.com/products/211/all/11477
  //pink skirt - https://www.o-mighty.com/products/208/all/10687
  //Black Leather skirt - https://www.o-mighty.com/products/157/all/9764

//Backgrounds used
  //hanger: https://kewlgifs4u.tumblr.com/post/27542334812
  //

var currentTop = 0;

var currentBottom = 0;

var TopArray = [];

var BottomArray = [];

//Opening slide
var OpenHitX = [100];
var OpenHitY = [100];
var OpenSize = 700;

var OpenWindow = false;

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

var DressMeSizeW = 170;
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
var millisCounter = 0;

// added style links
var font;

var leopardPng;

var clulessLogo;

var hangers;


function preload(){

  TopArray[0] = loadImage("Images/RedTop.png")
  TopArray[1] = loadImage("Images/TigerTop.png")
  TopArray[2] = loadImage("Images/WhiteTank.png")
  TopArray[3] = loadImage("Images/AngelTop.png")
  TopArray[4] = loadImage("Images/bluetop.png")
  TopArray[5] = loadImage("Images/YellowSquareTop.png")


  BottomArray[0] = loadImage("Images/LeatherBottom.png")
  BottomArray[1] = loadImage("Images/PinkSkirt.png")
  BottomArray[2] = loadImage("Images/PlaidSkirt.png")
  BottomArray[3] = loadImage("Images/TigerBottom.png")
  BottomArray[4] = loadImage("Images/AngelSkirt.png")
  BottomArray[5] = loadImage("Images/BurberrySkirt.png")
  BottomArray[6] = loadImage("Images/whitepants.png")
  BottomArray[7] = loadImage("Images/YellowSquareSkirt.png")



  font = loadFont("ChargenFont/6809 chargen.ttf")
  leopardPng = loadImage("Images/LeopardPrint.png")
  cluelessLogo = loadImage("cluelesslogo.png")
  hangers = loadImage("hangers.gif")


} // end of Preload


function setup() {
  // put setup code here
  createCanvas(700,530)
  textFont(font);


}// end of SETUP


function draw() {

    // opening Window
    fill("white");
    rect(OpenHitX[0],OpenHitY[0],OpenSize,OpenSize);
    image(hangers,0,0,hangers.width*2,hangers.height*2);

    textSize(50);
    fill("white");
    text("Welcome",100,150);
    text("to the",100,250);


    fill("pink");
    text("Clueless Closet...",100,350);

    fill("light pink");
    textSize(30);
    text("Click anywhere to start",100,400);



if(OpenWindow == true){
    //var startTimer = true;}

    image(leopardPng,0,0,leopardPng.width,leopardPng.height);
    image(cluelessLogo,250,-5,cluelessLogo.width/2,cluelessLogo.height/2);
    image(cluelessLogo,250,460,cluelessLogo.width/2,cluelessLogo.height/2);

//background gray window
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
    fill(0);
    triangle(30, 75, 58, 20, 86, 75);

    fill(211,211,211);
    rect(hitX3[0],hitY3[0],DressMeSizeW,DressMeSizeH);
    rect(hitX4[0],hitY4[0],BrowseButtonSizeW,BrowseButtonSizeH);

    textSize(30);
    fill(0);
    text("Dress Me", 510, 445);
    text("Browse", 60, 445);

    if(dressMe == true){
      if(currentTop == 0 && currentBottom == 2) {
         console.log("Outfit1");
         fill(192, 255, 0);
         strokeWeight(10);
         rect(150, 200, 400, 100);
         textSize(40);
         noStroke();
         fill("black");
         text("Match!", 270,250);
         textSize(20);
         text("Click an arrow to restart.", 200,270);

       }else if (currentTop == 0 && currentBottom == 0) {
         console.log("Outfit2");
         fill(192, 255, 0);
         strokeWeight(10);
         rect(150, 200, 400, 100);
         textSize(40);
         noStroke();
         fill("black");
         text("Match!", 270,250);
         textSize(20);
         text("Click an arrow to restart.", 200,270);

       }else if (currentTop == 1 && currentBottom == 3) {
         console.log("Outfit3");
         fill(192, 255, 0);
         strokeWeight(10);
         rect(150, 200, 400, 100);
         textSize(40);
         noStroke();
         fill("black");
         text("Match!", 270,250);
         textSize(20);
         text("Click an arrow to restart.", 200,270);

       }else if (currentTop == 2 && currentBottom == 0) {
        console.log("Outfit4");
        fill(192, 255, 0);
        strokeWeight(10);
        rect(150, 200, 400, 100);
        textSize(40);
        noStroke();
        fill("black");
        text("Match!", 270,250);
        textSize(20);
        text("Click an arrow to restart.", 200,270);

        }else if (currentTop == 2 && currentBottom == 1) {
       console.log("Outfit5");
       fill(192, 255, 0);
       strokeWeight(10);
       rect(150, 200, 400, 100);
       textSize(40);
       noStroke();
       fill("black");
       text("Match!", 270,250);
       textSize(20);
       text("Click an arrow to restart.", 200,270);

     }else if (currentTop == 3 && currentBottom == 4) {
      console.log("Outfit5");
      fill(192, 255, 0);
      strokeWeight(10);
      rect(150, 200, 400, 100);
      textSize(40);
      noStroke();
      fill("black");
      text("Match!", 270,250);
      textSize(20);
      text("Click an arrow to restart.", 200,270);

    }else if (currentTop == 2 && currentBottom == 6) {
     console.log("Outfit5");
     fill(192, 255, 0);
     strokeWeight(10);
     rect(150, 200, 400, 100);
     textSize(40);
     noStroke();
     fill("black");
     text("Match!", 270,250);
     textSize(20);
     text("Click an arrow to restart.", 200,270);


   }else if (currentTop == 5 && currentBottom == 7) {
      console.log("Outfit5");
      fill(192, 255, 0);
      strokeWeight(10);
      rect(150, 200, 400, 100);
      textSize(40);
      noStroke();
      fill("black");
      text("Match!", 270,250);
      textSize(20);
      text("Click an arrow to restart.", 200,270);

    }else if (currentTop == 4 && currentBottom == 6) {
       console.log("Outfit5");
       fill(192, 255, 0);
       strokeWeight(10);
       rect(150, 200, 400, 100);
       textSize(40);
       noStroke();
       fill("black");
       text("Match!", 270,250);
       textSize(20);
       text("Click an arrow to restart.", 200,270);

     }else if (currentTop == 5 && currentBottom == 6) {
        console.log("Outfit5");
        fill(192, 255, 0);
        strokeWeight(10);
        rect(150, 200, 400, 100);
        textSize(40);
        noStroke();
        fill("black");
        text("Match!", 270,250);
        textSize(20);
        text("Click an arrow to restart.", 200,270);




      }else{

      fill("red");
      strokeWeight(10);
      rect(150, 200, 400, 100);
      textSize(40);
      noStroke();
      fill("white");
      text("MisMatch!", 240,250);
      textSize(20);
      text("Click an arrow to restart.", 205,270);

    }
  }// end of IF

    if(browse == true){
    //var startTimer = true;}

    if(millis()-prevMillis > interval){
    prevMillis = millis();
    currentTop = Math.floor(random(0,TopArray.length));
    currentBottom = Math.floor(random(0,BottomArray.length));
    millisCounter++; //millisCounter = millisCounter + 1;
    }

    if(millisCounter == 10){
      browse = false;
      millisCounter = 0;

    }

}// end of browse

}// end of If Open Window
}// end of DRAW

//
function mousePressed(){

  if(mouseX > OpenHitX[0] && mouseX < OpenHitX[0] + OpenSize && mouseY > OpenHitY[0] && mouseY < OpenHitY[0] + OpenSize){
  console.log("Click to Closet");
  OpenWindow = true;
  }




  if(mouseX > hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    console.log("Button 0");
    currentTop = currentTop - 1;
    if(currentTop == -1){
      currentTop = 5;
    }
    dressMe = false;
  }// end of if 1

  if(mouseX > hitX[1] && mouseX < hitX[1] + hitSize && mouseY > hitY[1] && mouseY < hitY[1] + hitSize){
      console.log("Button 1");
      currentTop = currentTop + 1
    if(currentTop == 6){
      currentTop = 0;
    }
    dressMe = false;
  } // end of IF 2

  if(mouseX > hitX2[0] && mouseX < hitX2[0] + hitSize && mouseY > hitY2[0] && mouseY < hitY2[0] + hitSize){
      console.log("Button 3");
      currentBottom = currentBottom - 1;
      if(currentBottom == -1){
        currentBottom = 7;
      }
    dressMe = false;
}// end of IF 3

if(mouseX > hitX2[1] && mouseX < hitX2[1] + hitSize && mouseY > hitY2[1] && mouseY < hitY2[1] + hitSize){
    console.log("Button 4");
    currentBottom = currentBottom + 1;
    if(currentBottom == 8){
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
        prevMillis = millis();


      }// end of IF 5

}// end of MousePressed
