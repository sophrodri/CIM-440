var seasonsSelect;
var seasonType = ""; // empty quotes because it is going to represent the exact word of the season.

var sunX = 0;
var sunY = 0;


function setup() {
  // put setup code here
  createCanvas(400,400);
  seasonsSelect = createSelect(); // createSelect - html element; a drop down
  seasonsSelect.position(10,10);

  seasonsSelect.option(""); // "" - rest state
  seasonsSelect.option("fall");
  seasonsSelect.option("winter");
  seasonsSelect.option("spring");
  seasonsSelect.option("summer");

  seasonsSelect.changed(function(){
    seasonType = seasonsSelect.value();
  });

sunX = width/2;
sunY = height*2;


}// end of SETUP

function draw() {
  // put drawing code here
background(255);

if(seasonType == "fall") {
  console.log("fall");
}else if (seasonType == "winter") {
  console.log("winter");
}else if (seasonType == "spring") {
  console.log("spring");
}else if (seasonType == "summer") {
  console.log("summer");
  fill("orange");
  stroke("red");
  ellipse(sunX, sunY, width, height);
  // sun is coming up

if(sunY > height){
    sunY = sunY - 1;
  }

}else{
    console.log("blank")
    text("Make a selection", 100,20);
}

// if sunY is greater than the height of the canvas, the sun stops.


}// end of DRAW
