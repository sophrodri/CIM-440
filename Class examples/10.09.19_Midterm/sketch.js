//Pictures taken from o-mighty.com

  //Tiger top and bottom - https://www.o-mighty.com/products/213/all/10864
  //Red Chain skirt - https://www.o-mighty.com/products/157/all/9504
  //Red Top - https://www.o-mighty.com/products/211/all/11019
  //white tank - https://www.o-mighty.com/products/211/all/11477
  //pink skirt - https://www.o-mighty.com/products/208/all/10687
  //Black Leather skirt - https://www.o-mighty.com/products/157/all/9764
  //hanger: https://kewlgifs4u.tumblr.com/post/27542334812

var currentTop = 0;

var currentBottom = 0;

var TopArray = [];

var BottomArray = [];

//Opening slide
var OpenHitX = [0];
var OpenHitY = [0];
var OpenSizeW = 1920;
var OpenSizeH = 1080;

var OpenWindow = false;

// top buttons
var hitX = [600,1200];
var hitY = [400,400];

// bottom buttons
var hitX2 = [600,1200];
var hitY2 = [800,800];

var hitSize = 150;

// Dress me Button
var dressMe = false;
var hitX3 = [1350];
var hitY3 = [800];

var DressMeSizeW = 390;
var DressMeSizeH = 150;

// Browse button
var browse = false;
var hitX4 = [210];
var hitY4 = [800];

var BrowseButtonSizeW = 390;
var BrowseButtonSizeH = 150;

// Browse button timer
var interval = 1000;
prevMillis = 0;
var startTimer = false;
var millisCounter = 0;

// added style links
var font;

var leopardPng;

var clulessLogo;


function preload(){

  TopArray[0] = loadImage("Images/RedTop.png")
  TopArray[1] = loadImage("Images/TigerTop.png")
  TopArray[2] = loadImage("Images/WhiteTank.png")
  TopArray[3] = loadImage("Images/AngelTop.png")
  TopArray[4] = loadImage("Images/BlueTop.png")
  TopArray[5] = loadImage("Images/YellowSquareTop.png")


  BottomArray[0] = loadImage("Images/LeatherBottom.png")
  BottomArray[1] = loadImage("Images/PinkSkirt.png")
  BottomArray[2] = loadImage("Images/PlaidSkirt.png")
  BottomArray[3] = loadImage("Images/TigerBottom.png")
  BottomArray[4] = loadImage("Images/AngelSkirt.png")
  BottomArray[5] = loadImage("Images/BurberrySkirt.png")
  BottomArray[6] = loadImage("Images/WhitePants.png")
  BottomArray[7] = loadImage("Images/YellowSquareSkirt.png")
  BottomArray[8] = loadImage("Images/YellowSkirt.png")



  font = loadFont("ChargenFont/6809 chargen.ttf")
  leopardPng = loadImage("Images/LeopardPrint.png")
  cluelessLogo = loadImage("Images/cluelesslogo.png")



} // end of Preload


function setup() {
  // put setup code here
  createCanvas(1960,1080)
  textFont(font);


}// end of SETUP



function draw() {

    // opening Window
    background("pink");

    strokeWeight(350);
    stroke(218,82,144);
    //noFill();
    fill(218,82,144)

    rect(OpenHitX,OpenHitY,OpenSizeW,OpenSizeH);

    noStroke();
    strokeWeight(5);
    textSize(150);
    fill("white");
    text("Welcome to the",200,250);

    image(cluelessLogo,200,270,cluelessLogo.width*2.5,cluelessLogo.height*2.5);
    fill("white");
    text("Closet...",200,750);

    fill(144,238,144);
    textSize(75);
    text("Click anywhere to start!",460,940);




if(OpenWindow == true){
    //var startTimer = true;}

    image(leopardPng,-20,-20,leopardPng.width*1.75,leopardPng.height*1.75);
    noStroke();
    fill(211,211,211);
    //rect(0,0,700,40);
  //  image(cluelessLogo,250,-5,cluelessLogo.width/2,cluelessLogo.height/2);
  //  image(cluelessLogo,250,460,cluelessLogo.width/2,cluelessLogo.height/2);

//background gray window
    stroke("grey");
    strokeWeight(10);
    fill("white");
    rect(750, 80, 450, 860);

    console.log("currentTop" + currentTop);
    console.log("currentBottom" + currentBottom);

    image(TopArray[currentTop],750,80,TopArray[currentTop].width/1.75,TopArray[currentTop].height/1.75);
    image(BottomArray[currentBottom],750,500,BottomArray[currentBottom].width/1.75,BottomArray[currentBottom].height/1.75);

    strokeWeight(1);
    stroke(0);
    fill(173, 216, 230);
    rect(hitX[0],hitY[0],hitSize,hitSize);
    rect(hitX[1],hitY[1],hitSize,hitSize);
    rect(hitX2[0],hitY2[0],hitSize,hitSize);
    rect(hitX2[1],hitY2[1],hitSize,hitSize);

    fill(211,211,211);
    rect(hitX3[0],hitY3[0],DressMeSizeW,DressMeSizeH);
    rect(hitX4[0],hitY4[0],BrowseButtonSizeW,BrowseButtonSizeH);

    textSize(70);
    fill(0);
    text("Dress Me", 1365, 900);
    text("Browse", 270, 900);

    if(dressMe == true){
      if(currentTop == 0 && currentBottom == 2) {
         console.log("Outfit1");
         fill(192, 255, 0);
         strokeWeight(10);
         rect(475, 400, 1000, 200);
         textSize(95);
         noStroke();
         fill("black");
         text("Match!", 800,510);
         textSize(50);
         text("Click a blue square to restart.", 550,560);

       }else if (currentTop == 0 && currentBottom == 0) {
         console.log("Outfit2");
         fill(192, 255, 0);
         strokeWeight(10);
         rect(475, 400, 1000, 200);
         textSize(95);
         noStroke();
         fill("black");
         text("Match!", 800,510);
         textSize(50);
         text("Click a blue square to restart.", 550,560);


       }else if (currentTop == 1 && currentBottom == 3) {
         console.log("Outfit3");
         fill(192, 255, 0);
         strokeWeight(10);
         rect(475, 400, 1000, 200);
         textSize(95);
         noStroke();
         fill("black");
         text("Match!", 800,510);
         textSize(50);
         text("Click a blue square to restart.", 550,560);


       }else if (currentTop == 2 && currentBottom == 0) {
        console.log("Outfit4");
        fill(192, 255, 0);
        strokeWeight(10);
        rect(475, 400, 1000, 200);
        textSize(95);
        noStroke();
        fill("black");
        text("Match!", 800,510);
        textSize(50);
        text("Click a blue square to restart.", 550,560);


        }else if (currentTop == 2 && currentBottom == 1) {
       console.log("Outfit5");
       fill(192, 255, 0);
       strokeWeight(10);
       rect(475, 400, 1000, 200);
       textSize(95);
       noStroke();
       fill("black");
       text("Match!", 800,510);
       textSize(50);
       text("Click a blue square to restart.", 550,560);

     }else if (currentTop == 3 && currentBottom == 4) {
      console.log("Outfit6");
      fill(192, 255, 0);
      strokeWeight(10);
      rect(475, 400, 1000, 200);
      textSize(95);
      noStroke();
      fill("black");
      text("Match!", 800,510);
      textSize(50);
      text("Click a blue square to restart.", 550,560);


    }else if (currentTop == 2 && currentBottom == 6) {
     console.log("Outfit7");
     fill(192, 255, 0);
     strokeWeight(10);
     rect(475, 400, 1000, 200);
     textSize(95);
     noStroke();
     fill("black");
     text("Match!", 800,510);
     textSize(50);
     text("Click a blue square to restart.", 550,560);


   }else if (currentTop == 5 && currentBottom == 7) {
      console.log("Outfit8");
      fill(192, 255, 0);
      strokeWeight(10);
      rect(475, 400, 1000, 200);
      textSize(95);
      noStroke();
      fill("black");
      text("Match!", 800,510);
      textSize(50);
      text("Click a blue square to restart.", 550,560);

    }else if (currentTop == 4 && currentBottom == 6) {
       console.log("Outfit9");
       fill(192, 255, 0);
       strokeWeight(10);
       rect(475, 400, 1000, 200);
       textSize(95);
       noStroke();
       fill("black");
       text("Match!", 800,510);
       textSize(50);
       text("Click a blue square to restart.", 550,560);

     }else if (currentTop == 5 && currentBottom == 6) {
        console.log("Outfit10");
        fill(192, 255, 0);
        strokeWeight(10);
        rect(475, 400, 1000, 200);
        textSize(95);
        noStroke();
        fill("black");
        text("Match!", 800,510);
        textSize(50);
        text("Click a blue square to restart.", 550,560);

      }else if (currentTop == 1 && currentBottom == 6) {
         console.log("Outfit11");
         fill(192, 255, 0);
         strokeWeight(10);
         rect(475, 400, 1000, 200);
         textSize(95);
         noStroke();
         fill("black");
         text("Match!", 800,510);
         textSize(50);
         text("Click a blue square to restart.", 550,560);

      }else if (currentTop == 5 && currentBottom == 8) {
          console.log("Outfit12");
          fill(192, 255, 0);
          strokeWeight(10);
          rect(475, 400, 1000, 200);
          textSize(95);
          noStroke();
          fill("black");
          text("Match!", 800,510);
          textSize(50);
          text("Click a blue square to restart.", 550,560);

      }else if (currentTop == 1 && currentBottom == 0) {
            console.log("Outfit13");
            fill(192, 255, 0);
            strokeWeight(10);
            rect(475, 400, 1000, 200);
            textSize(95);
            noStroke();
            fill("black");
            text("Match!", 800,510);
            textSize(50);
            text("Click a blue square to restart.", 550,560);

      }else if (currentTop == 2 && currentBottom == 4) {
              console.log("Outfit14");
              fill(192, 255, 0);
              strokeWeight(10);
              rect(475, 400, 1000, 200);
              textSize(95);
              noStroke();
              fill("black");
              text("Match!", 800,510);
              textSize(50);
              text("Click a blue square to restart.", 550,560);

      }else if (currentTop == 3 && currentBottom == 0) {
                    console.log("Outfit15");
                    fill(192, 255, 0);
                    strokeWeight(10);
                    rect(475, 400, 1000, 200);
                    textSize(95);
                    noStroke();
                    fill("black");
                    text("Match!", 800,510);
                    textSize(50);
                    text("Click a blue square to restart.", 550,560);

                  }else if (currentTop == 4 && currentBottom == 0) {
                          console.log("Outfit16");
                          fill(192, 255, 0);
                          strokeWeight(10);
                          rect(475, 400, 1000, 200);
                          textSize(95);
                          noStroke();
                          fill("black");
                          text("Match!", 800,510);
                          textSize(50);
                          text("Click a blue square to restart.", 550,560);

                        }else if (currentTop == 3 && currentBottom == 6) {
                                console.log("Outfit16");
                                fill(192, 255, 0);
                                strokeWeight(10);
                                rect(475, 400, 1000, 200);
                                textSize(95);
                                noStroke();
                                fill("black");
                                text("Match!", 800,510);
                                textSize(50);
                                text("Click a blue square to restart.", 550,560);
      }else{

      fill("red");
      strokeWeight(10);
      rect(475, 400, 1000, 200);
      textSize(95);
      noStroke();
      fill("white");
      text("MisMatch!", 700,510);
      textSize(50);
      text("Click a blue square to restart.", 550,560);

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
      millisCounter = 0;}

}// end of browse

}// end of If Open Window

}



function mousePressed(){
  if(mouseX > OpenHitX[0] && mouseX < OpenHitX[0] + OpenSizeW && mouseY > OpenHitY[0] && mouseY < OpenHitY[0] + OpenSizeH){
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
        currentBottom = 8;
      }
    dressMe = false;
  }// end of IF 3

  if(mouseX > hitX2[1] && mouseX < hitX2[1] + hitSize && mouseY > hitY2[1] && mouseY < hitY2[1] + hitSize){
    console.log("Button 4");
    currentBottom = currentBottom + 1;
    if(currentBottom == 9){
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
        dressMe = false;
        browse = true;
        prevMillis = millis();

    }// end of IF 5
  }
