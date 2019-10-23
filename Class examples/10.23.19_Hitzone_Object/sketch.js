
var button1;


function setup() {
  // put setup code here
createCanvas(400,400);
button1 = new hitzoneObject(100,200,50,"red");
button2 = new hitzoneObject(200,200,50,"green");
}

function draw() {
  // put drawing code here
  background(255);

button1.display();
button1.check();
console.log("button1 overlay" + button1.overlay);
button2.display();
button2.check();
}


class hitzoneObject{
  constructor(tempX, tempY, tempSize, tempColor){
    // building blocks for the individual objects
    // similar to passing parameters into a created Function
    // grab the parameters and pass it to variables that are representative to the object we are creating.

    this.x = tempX; // represent the X location for that particular object/
    // individual x location
    this.y = tempY;
    this.boxSize = tempSize;
    this.boxColor = tempColor;
    this.overlay = false;
  }//end of constructor

// the function of a specific object!
display(){
fill(this.boxColor);
rect(this.x, this.y, this.boxSize, this.boxSize);

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
