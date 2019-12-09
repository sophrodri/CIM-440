let capture;
var cnv;

var whiteButton, rainbowButton, noFilterButton, sunsetButton, greenButton, blueButton, pinkButton, cameraButton;

var currentFilter = 0;

var currentColor;

var titlefont;



function preload(){
white = loadImage("Images/whitefilter.png")//white
rainbow = loadImage("Images/rainbowLine2.png")//rainbow
peach = loadImage("Images/SunsetGradient.png")//peach
blue = loadImage("Images/blue.png")//blue
green = loadImage("Images/GreenGradient.png")//green
pink = loadImage("Images/pink.png")//pink

titlefont = loadFont("Fonts/Canterbury.ttf")
}


function setup() {
  cnv = createCanvas(1690, 1000);//480, 480
  capture = createCapture(VIDEO);
  capture.id = "vid";
  capture.hide();


  noFilterButton = createButton("No Filter");
  noFilterButton.position(450,900);
  noFilterButton.mousePressed(function(){
    currentFilter = 0; // assign image to number
  });

  whiteButton = createButton("White");
  whiteButton.position(550,900);
  whiteButton.mousePressed(function(){
    currentFilter = 1; // assign image to number
  });

  rainbowButton = createButton("Rainbow");
  rainbowButton.position(650,900);
  rainbowButton.mousePressed(function(){
    currentFilter = 2; // assign image to number
  });

  sunsetButton = createButton("Sunset");
  sunsetButton.position(750,900);
  sunsetButton.mousePressed(function(){
    currentFilter = 3; // assign image to number
  });

  blueButton = createButton("Blue");
  blueButton.position(850,900);
  blueButton.mousePressed(function(){
    currentFilter = 4; // assign image to number
  });

  greenButton = createButton("Green");
  greenButton.position(950,900);
  greenButton.mousePressed(function(){
    currentFilter = 5; // assign image to number
  });

  pinkButton = createButton("Pink");
  pinkButton.position(1050,900);
  pinkButton.mousePressed(function(){
    currentFilter = 6; // assign image to number
  });

  cameraButton = createButton("Click here to take a picture!")
  cameraButton.position(1150,890);
  cameraButton.style('color:magenta')
  cameraButton.size(200,50);
  cameraButton.mousePressed(function(){
    saveCanvas(cnv, 'myCanvas', 'jpg');
  });

  textFont(titlefont);

}//end of setup


function draw() {

image(capture, 0, 0, width, width * capture.height / capture.width);
  //filter(INVERT);
//image(FilterSelect[0], 0, 0, width*2, height*2);


if(currentFilter >= 1){
  //draw image
image(currentColor,0, 0, width, height);
}
  // move this into ^

currentColor = white;

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


}

image(currentColor,0,0, currentColor.width,currentColor.height);

noStroke();
textSize(100);
fill("white");
text("photosoph",75,900);

noStroke();
textSize(30);
fill("white");
text("Photobooth by SophRodri",100,950);
}// end of draw



function mousePressed(){
  //saveCanvas(cnv, 'myCanvas', 'jpg');
}
