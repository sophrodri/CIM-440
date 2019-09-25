//Distance Hitzone: when u place ur cursor over the particular atom, something will happen.

// if the mouse cursor gets close to this coordinate, we want an affect
var hitX = 100;
var hitY = 100;
var threshold = 20;
var hitDistance = 0;
var changeBackground = "white"
// if u start a variable in another function and want to use it somewhere else.. put it at the top of the screen and just take out var from the function where the variable is being used.





function setup() {
  // put setup code here
createCanvas(400,400);

//Creating our own button from scratch.
  // 1. Attach some kind of shape/graphic to that particular hit zone
    //2. Establishing a threshold on top (the active zone for the hitzone)

}//END OF SETUP



function draw() {
  // put drawing code here
  background(changeBackground);

ellipse(hitX,hitY,threshold*2, threshold*2); // 20 pixels to the left and right of the threshold = 40 pixels from the hitpoint (calc for diameter)
hitDistance = dist(mouseX,mouseY,hitX,hitY);
  //calculating distance between cursor and specific hitzone
console.log("hitDistance"+hitDistance);


// HOVER STATE
if(hitDistance <= threshold){
  //do something if hitDisntance is less than or equal to threshold (20)
    // when hover over button it's gray
  fill(127);
  text("click me", hitX, hitY)
} else{
  // if top is fault, then execute code in else statement
  fill(255);
}

}//END OF DRAW
//if(hitDistance > threshold){
  //do something if hitDisntance is greater than threshold.
  //fill(255);
    //hover away from button = back to no fill

function mousePressed(){
  // CLICK STATE
  if(hitDistance <= threshold){
    //do something if hitDisntance is less than or equal to threshold (20)
    changeBackground = "blue";
  } else{
    // if top is fault, then execute code in else statement
    changeBackground = "white";
  }
}
