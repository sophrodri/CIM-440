//These variables area availbale to use througout our entire program.
var pointX = 0;
var pointY= 0;
  // for nose

var Xeye = 150;
var Yeye = 150;
  // x and y coordinates for eyes


var FaceColor = "blue";
// changing blue to the difference color

var colorButton;
// no defining because p5.js already has it in the library







function setup() {
  // put setup code here
createCanvas(1000,1000);


  // choosing point as the center of my screen
  pointX = width/2;
  pointY= width/2;

  // this establishes this will always be the center point.
  // console.log("pointX"+pointY+"pointY"+pointY);


var message = "hello";
// Scope can be very frustrating. once you declare a variable.
// when you decalrea  avaribale in the setup : the Scope of this variable is only available inside the setup function.
  // if used in the draw, or any other function, you will receive on error
    // at the top you create the varible, and you can change it as you go. But you have to be consistent as to where you change it (in declared function).

  console.log(message);

  colorButton = createButton("Click to turn purple"); // in parenthesis put message that corresponds to the message you want to appear on that button
// Color.button is in the setup because the button is permanent = where as draw would constantly refresh the loop
  colorButton.position(20,20);
  // to move button around the screen
  colorButton.mousePressed(function(){ // in order to make the button function
    FaceColor = "purple";
  });
    // a bug: the functions at the bottom dont allow this function to work.

}







function draw() {
  // put drawing code here

    Xeye = mouseX;
    Yeye = mouseY;

//console.log(message); -----> // message not defined. when you decalre a variable in setup, the computer will execute that function and once its fullfilled then it's done.
  // its only in the setup scope.

var drawMessage = "This messagve is in the draw loop";
console.log(drawMessage);
//it matters based of of usage. if u need it in the entire program = setup
  //for specific variable, u can use it only on the draw.

  background(FaceColor);

  // Use if statement to change background colorButton

  if(mouseX < width/2){
    //do something
    console.log("left hand side");
    background("white");
  }

  if(mouseX > width/2){
    console.log("right hand side");
    background("yellow")
  }

  strokeWeight(5);

//change througout the session you are going to nesd a variable in orderto change color.


  fill(255, 255, 255);
  ellipse(Xeye,Yeye,100,100);//left eye
  ellipse(Xeye+185,Yeye,100,100);//right eye


  fill(0,0,0);
  ellipse(Xeye,Yeye+11,60,60);// left pupil
  ellipse(Xeye+180,Yeye+11,60,60);// right pupil

  fill(255,255,255);
  ellipse(Xeye-20,Yeye,20,20);
  ellipse(Xeye+160,Yeye,20,20);


  arc(Xeye+85,Yeye+100,200,200,0,PI);


}// end of draw



function mousePressed(){
  //FaceColor = "red";
}

function mouseReleased(){
  //FaceColor = "blue";
}

function keyPressed(){

console.log("key");
console.log("keyCode"+"keyCode");
  // Key 2 is "49".

// conditional: if condition equals true, then do what is inside curly braces.
  // == means one side equals the other.
    //== is comparing, = is declaring
  if(key == "w"){
    //what you want to happen goes here
    FaceColor = "white";
  }

  if(key == "r"){
    FaceColor = "red";

  }

}// end of keyPressed
