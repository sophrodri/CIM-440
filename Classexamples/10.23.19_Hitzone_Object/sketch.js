
var button1;
var button2;

function setup() {
  // put setup code here
createCanvas(400,400);
button1 = new hitzoneObject(100,200,50,"red", "Stop button", loadImage("assets/stop.png"));
button2 = new hitzoneObject(200,200,50,"green", "Play button", loadImage("assets/play.png"));
}





function draw() {
  // put drawing code here
  background(255);

button1.display();
button1.check();
console.log("button1 overlay" + button1.overlay);
button2.display();
button2.check();
}// end of Draw




function mousePressed()  {
  if(button1.overlay == true){
    console.log(button1.label);
  }

  if(button2.overlay == true){
    console.log(button2.label);
  }


}// end of MousePressed



class hitzoneObject{
  constructor(tempX, tempY, tempSize, tempColor, tempLabel, tempImage){
    // building blocks for the individual objects
    // similar to passing parameters into a created Function
    // grab the parameters and pass it to variables that are representative to the object we are creating.

    this.x = tempX; // represent the X location for that particular object/
    // individual x location
    this.y = tempY;
    this.boxSize = tempSize;
    this.boxColor = tempColor;
    this.overlay = false;
    this.label = tempLabel;
    this.image = tempImage;
  }//end of constructor





// the function of a specific object!
display(){
fill(this.boxColor);
//rect(this.x, this.y, this.boxSize, this.boxSize); We are building on this object, Replacing rects with image
image(this.image, this.x, this.y, this.boxSize, this.boxSize);
text(this.label, this.x, this.y-20);

// if stays that says if the overlay is true, draw the graphic element that shows you are hovering over the button1

if(this.overlay == true){
  // overlay is true when the mouse is over the button
  fill(127,127)// 127 is gray, 127 is opacity
  rect(this.x, this.y, this.boxSize, this.boxSize);
}
}// end of Display






check(){
// check mouse versus XY and location of button2
if(mouseX> this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y+ this.boxSize)){
  console.log("over button" + this.boxColor);
  this.overlay = true;
}else{
  console.log("off button" + this.boxColor);
  this.overlay = false;

}// end of else

}// end of check

}// end of class hitzoneObject
