function setup() {
  // put setup code here
  //sets the size of the canvas
createCanvas(500,500);
  //sets the color of the background
  strokeWeight(20);//set stroke weight to 20 pixels

}
// NEVER delete the bra

function draw() {
  // put drawing code here
  fill(0,255,0);//adjust shape color fill
  background("pink");
  background(0);//black
  background(255);//white
  background(200);//gray scale 0-255 grayish white
  background(255,0,0);//full red
  background(0,255,0);//full green
  background(0,0,255);//full blue
    // fore particular colors, look up web colors for specific colors



  stroke(255,0,0);//adjusts outline color
    // once you set the fill and stroke, it will automatically change every shape after it.
  strokeJoin(ROUND);// Round stroke corners

  ellipse(50,50,100,100);//(x,y,w,h) ELLIPSE A // shapes start from coordinate 0,0 on canvas
  strokeJoin(BEVEL);
  rect(140,25,70,70);

}
