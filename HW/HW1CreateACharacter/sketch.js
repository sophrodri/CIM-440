// Homework for creating a character; introduction to using variables

var pointX = 100;
var pointY= 100;
  // for nose

var Xeye = 150;
var Yeye = 150;
  // x and y coordinates for eyes

var r = 52
var g = 235
var b = 213


// varpoint2; // variable undefinded
// variables have to have direction

function setup() {
  // put setup code here
  createCanvas(500,500);


  // choosing point as the center of my screen
  pointX = width/2;
  pointY= width/2;

  // this establishes this will always be the center point.

  console.log("pointX"+pointY+"pointY"+pointY);


}

function draw() {
  // put drawing code here

background(r,g,b);

noStroke();

ellipse(pointX,pointY,10,10);


fill(255, 255, 255);
ellipse(Xeye,Yeye,100,100);//left eye
ellipse(Xeye+185,Yeye,100,100);//right eye


fill(0,0,0);
ellipse(Xeye,Yeye+11,60,60);// left pupil
ellipse(Xeye+180,Yeye+11,60,60);// right pupil


fill(255,255,255);
ellipse(Xeye-20,Yeye,20,20);
ellipse(Xeye+160,Yeye,20,20);

arc(pointX-10,pointY+50,200,200,0,PI);
noFill();
strokeWeight(20);





















}
