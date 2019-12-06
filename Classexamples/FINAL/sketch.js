let capture;
var cnv;


var whiteButton, rainbowButton;

var currentFilter = 0;

var currentColor;

function preload(){
white = loadImage("Images/whitefilter.png")
rainbow = loadImage("Images/rainbowLine2.png")
peach = loadImage("Images/SunsetGradient.png")
blue = loadImage("Images/blue.png")
green = loadImage("Images/GreenGradient.png")
pink = loadImage("Images/pink.png")

}

function setup() {
  cnv = createCanvas(1900, 1000);//480, 480
  capture = createCapture(VIDEO);
  capture.id = "vid";
  capture.hide();

  noFilterButton = createButton("No Filter");
  noFilterButton.position(300,475);
  noFilterButton.mousePressed(function(){
    currentFilter = 0; // assign image to number
  });


  whiteButton = createButton("White");
  whiteButton.position(300,500);
  whiteButton.mousePressed(function(){
    currentFilter = 1; // assign image to number
  });

  rainbowButton = createButton("Rainbow");
  rainbowButton.position(370,500);
  rainbowButton.mousePressed(function(){
    currentFilter = 2; // assign image to number
  });

  sunsetButton = createButton("Sunset");
  sunsetButton.position(300,550);
  sunsetButton.mousePressed(function(){
    currentFilter = 3; // assign image to number
  });

  blueButton = createButton("Blue");
  blueButton.position(470,500);
  blueButton.mousePressed(function(){
    currentFilter = 4; // assign image to number
  });

  greenButton = createButton("Green");
  greenButton.position(470,550);
  greenButton.mousePressed(function(){
    currentFilter = 5; // assign image to number
  });

  pinkButton = createButton("Pink");
  pinkButton.position(400,550);
  pinkButton.mousePressed(function(){
    currentFilter = 6; // assign image to number
  });

  cameraButton = createButton("Click here to take a picture!")
  cameraButton.position(300,600);
  cameraButton.mousePressed(function(){
    saveCanvas(cnv, 'myCanvas', 'jpg');
  });

  currentColor = white;

}//end of setup


function draw() {

image(capture, 0, 0, width, width * capture.height / capture.width);
  //filter(INVERT);
//image(FilterSelect[0], 0, 0, width*2, height*2);

//
if(currentFilter >= 1){
  //draw image
  image(currentColor,0, 0, width, height);

}
  // move this into ^

console.log("currentFilter" + currentFilter);

if(currentFilter==1){
  //show white filter
  currentColor = white;

}else if(currentFilter==2){
  currentColor = rainbow;

}else if(currentFilter==3){
  currentColor = peach;

}else if(currentFilter==4){
  currentColor = blue;

}else if(currentFilter==5){
  currentColor = green;

}else if (currentFilter==6){
  currentColor = pink;

//}else if (currentFilter==-1,7){

}
}

image(currentColor,0,0, currentColor.width/4,currentColor.height/4);

function mousePressed(){
  //saveCanvas(cnv, 'myCanvas', 'jpg');

}
