var seasonsSelect;
var seasonType = ""; // empty quotes because it is going to represent the exact word of the season.

var sunX = 0;
var sunY = 0;

//ARRAYS FOR WINTER SNOW FLAKES
var snowX = [];
var snowY = [];
var snowamount = 100;

// ARRAYS FOR LEAVES
var leafX =[];
var leafY = [];
var leafamount = 100;
//var leafImage;


//function preload(){
  //leafImage = loadImage("")
//}




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

//forloop allows you to cycle through arrays
  // var i = 0 is our start variable
  // i < 100 is going to set our limit
  // i++ is our iterator. i++ is the same as i=i+1;
for(var i = 0; i < snowamount; i++){
  snowX[i] = random(0,width); // chose a number from 0 - width or 1 to 399
  snowY[i] = random(0,-500);
}// END of For
  console.log("snowX"+snowX);
  console.log("snowY"+snowY);

for(var i = 0; i < leafamount; i++){
  leafX[i]=random(0,width);
  leafY[i]=random(0,-500);
}// end of FOR
 console.log("leafX" + leafX);
 console.log("leafY" + leafY);
}// end of SETUP









function draw() {
  // put drawing code here
background(255);

if(seasonType == "fall") {
  console.log("fall");
  for(var l = 0; l<leafamount; l++){
    //image(leafImage, leafX[l], leafY[l], 20,20);
  if(leafY[l]<height-20){
      leafY[l]++;
      leafX[l]= leafX[l]+sin(radians(frameCount));// swaying leaves from left to right. Up and down sin loop
    }// end of IF

  }// end of FOR
console.log("sin(radians(frameCount))"+sin(radians(frameCount)));




}else if (seasonType == "winter") {
  console.log("winter");
  for(var x = 0; x<snowamount; x++){
    snowY[x]++;//snowY i = snowY i + 1
    // index 0 - 99, move the Y coordinate by 1. Y coordinate because it is falling down
    snowY[x] = snowY[x] +5;// increases the speed of the snowflake;
    ellipse(snowX[x], snowY[x],10,10);
    if(snowY[x] > height){
      //snowY[x]=0;
      snowY[x] = random(0,-500); // continuous snowing
      snowX[x] = random(0,width);
    }// end of If
  }// end of FOR


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
