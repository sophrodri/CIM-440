let capture;
var cnv;


var whiteButton, rainbowButton;

var currentFilter = 0;

var currentColor;

function preload(){
white = loadImage("Images/whitefilter.png")
rainbow = loadImage("Images/rainbowLine2.png")

}

function setup() {
  cnv = createCanvas(600, 600);//480, 480
  capture = createCapture(VIDEO);
  capture.id = "vid";
  capture.hide();

  whiteButton = createButton("White");
  whiteButton.position(300,500);
  whiteButton.mousePressed(function(){
    currentFilter = 0; // assign image to number
  });

  rainbowButton = createButton("Rainbow");
  rainbowButton.position(370,500);
  rainbowButton.mousePressed(function(){
    currentFilter = 1; // assign image to number
  });

}//end of setup


function draw() {

image(capture, 0, 0, width, width * capture.height / capture.width);
  //filter(INVERT);
//image(FilterSelect[0], 0, 0, width*2, height*2);
  //image(rainbowfilter,0, 0, width, height);

console.log("currentFilter" + currentFilter);

if(currentFilter==0){
  //show white filter
  currentColor = white;

}else if(currentFilter==1){
  //apply rainbow filter
  currentColor = rainbow;

}
}
