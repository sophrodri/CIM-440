var pointX = 0;
var pointY= 0;
  // for nose

var Xeye = 150;
var Yeye = 150;
  // x and y coordinates for eyes


var FaceColor = "blue";
// changing blue to the difference color


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

    Xeye = mouseX;
    Yeye = mouseY;



  background(FaceColor);

  strokeWeight(5);

//change througout the session you are going to ned a variable in orderto change color.


  fill(255, 255, 255);
  ellipse(Xeye,Yeye,100,100);//left eye
  ellipse(Xeye+185,Yeye,100,100);//right eye


  fill(0,0,0);
  ellipse(Xeye,Yeye+11,60,60);// left pupil
  ellipse(Xeye+180,Yeye+11,60,60);// right pupil

  fill(255,255,255);
  ellipse(Xeye-20,Yeye,20,20);
  ellipse(Xeye+160,Yeye,20,20);


  arc(Xeye-10,Yeye+50,200,200,0,PI);


}// end of draw


function mousePressed(){
  FaceColor = "pink";

}

function mouseReleased(){
  FaceColor = "blue";


}

function keyPressed(){
  FaceColor = "white";

}
