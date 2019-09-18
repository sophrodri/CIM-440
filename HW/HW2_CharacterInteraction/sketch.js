//var pointX =150;
//var pointY =151;

var Xeye = 150;
var Yeye = 150;

var FaceColor = "magenta";

var eyeFill = "white";
var pupilColor = "blue";


function setup() {
  // put setup code here
createCanvas(1000,1000);

Xeye = width/2
Yeye = width/2
  console.log("Xeye"+Yeye+"Xeye"+Yeye)

}

function draw() {
  // put drawing code here

background(FaceColor);
strokeWeight(10);

  Xeye = mouseX;
  Yeye = mouseY;

  fill(eyeFill);
  ellipse(Xeye,Yeye,100,100);//left eye
  ellipse(Xeye+185,Yeye,100,100);//right eye


  fill(pupilColor);
  ellipse(Xeye,Yeye+11,60,60);// left pupil
  ellipse(Xeye+180,Yeye+11,60,60);// right pupil

  fill("white")
  ellipse(Xeye-20,Yeye,20,20);
  ellipse(Xeye+160,Yeye,20,20);

  fill("pink");
  arc(Xeye+85,Yeye+100,200,200,0,PI);


}//end of draw


function mousePressed() {
 FaceColor = "blue";
}

function mouseReleased() {
FaceColor = "magenta";
}

function keyPressed() {

console.log("key");
console.log("keyCode"+"keyCode");

  if(key == "s"){
    pupilColor = "magenta";}

  


}//end of keyPressed
