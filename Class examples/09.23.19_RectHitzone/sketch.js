
var hitX = 200;
var hitY= 200;
var hitW = 100;
var hitH = 50;


function setup() {
  // put setup code here

createCanvas(400,400);
}// End of Setuop

function draw() {
  // put drawing code here
background(255);

if(mouseX > hitX && mouseX < hitX + hitW && mouseY > hitY && mouseY < hitY + hitH){
  console.log("in here!");
  fill(0);
} else{
  //if i am not inside of the rectangle, I print "Outside"
  console.log("Outside!");
  fill(255,255,255);
}

rect(hitX,hitY,hitW,hitH);


}
