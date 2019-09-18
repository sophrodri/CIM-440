var puppyImage;

var show;
var hide;

var showAndhide = false;
//bullean statements are true / false


function preload(){
// makes sure it loads the media before we get it into setup or draw functions.
puppyImage = loadImage("puppies.jpg");

}//end of preload



function setup() {
  // put setup code here
createCanvas(400,400); // preload allows no refresh on the html

  show = createButton("Show");
  hide = createButton("Hide");

  show.mousePressed(function(){
    showAndhide = true;
  }); // we convert from false to true so that draw checks if its true

  hide.mousePressed(function(){
    showAndhide = false;
  });
  // Why does it not hide because of the background? 

}//end of setup



function draw() {
background(255);

  if(showAndhide == true){
    image(puppyImage,0,0,puppyImage.width/4,puppyImage.height/4);
  }

text("Click Show and Hide to see a Puppy",10,10);


}// end of draw
