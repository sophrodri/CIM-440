// use created function within functions we have already used.


function setup() {
  // put setup code here
createCanvas(400,400);

hello();
goodbye("Julian");
goodbye("Mom");

}// end of setup





function draw() {
  // put drawing code here
  background(255);


//if you hover over the hitzone, then you can see the circles
if(circleHitzone(100,100)== true){
  //circleColor(xpos, ypos, r,g,b)
  // order corresponds to parameter order

  //500 times a frame
  // var i = 0 is your start; i < 500 is how many times; i++ = i = i +1 (your counter)
  for(var i = 0; i < 500; i++){
  circleColor(random(width), random(height), random(255), random(255), random(255), random(0,200));
  // cant slow it down with frameRate because the entire interaction slows down. It affects everything. MousePressed etc\
  // use millus to slow down the framerate

  }// end of FOR loop

fill("black");
ellipse(mouseX,mouseY,100,100);
console.log(circleHitzone(100,100);

if(circleHitzone(300,300)==true){\
rect(100,100,100,100);
}

}



console.log(circleHitzone(100,100));



}// end of draw


function hello(){
console.log("hello");

}


function goodbye(message){  // parameter: it is the same as declaring a variable
  console.log("goodbye" + message);
  // goodbye followed by a particular message = more personalized (modulated)


}

function circleColor(xpos, ypos, r,g,b, cSize){
// working with shapes. Make sure that the name doesnt match with a variable/other function.
// make it easier to draw a bunch of circles onto the screen.
  fill(r,g,b);
  ellipse(xpos, ypos, cSize, cSize);
}

function circleHitzone(distX, distY){
  fill(0);
  var curDist = dist(mouseX, mouseY, distX, distY);
  //console.log("curDist" + curDist);
  fill(127);
  stroke(255);
  ellipse(distX,distY,10,10);
  if(curDist < 10){
    return true;

    strokeWeight(5);
  }else{
    return false;
    strokeWeight(1);
    fill(0);
  }
  //return curDist;
}
