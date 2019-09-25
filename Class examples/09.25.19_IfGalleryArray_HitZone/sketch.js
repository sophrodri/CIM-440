// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22


var currentImage = 0;
//a number that corresponds to each image

var imageArray = [];
//Array is  variable that holds mutliple values.
//Values can be numbers, true/false, words.
// aray for your HITX values
// allows you to create loops

  // How to count arrays:
  // Example Array{1,2,3}
    // You start at 0 - Arrray[0] = value 1. The computer sees "1" as the 0 value.

var hitX = [100,200];
var hitY = [300,300];

var hitSize = 50;


function preload() {
  //load media
  imageArray[0] = loadImage("images/puppy.jpg");
  imageArray[1] = loadImage("images/dinosaur.jpg");
  imageArray[2] = loadImage("images/sloth.jpg");
  imageArray[3] = loadImage("images/Palms.jpg");
  imageArray[4] = loadImage("images/PinkFlower.jpg");
  imageArray[5] = loadImage("images/bird.jpg");
  imageArray[6] = loadImage("images/forest.jpeg")

}//end of PRELOAD


function setup() {
  // put setup code here
createCanvas(400,400);
}//end of SETUP


function draw() {
  // put drawing code here

background(255);
console.log("currentImage" + currentImage);

  image(imageArray[currentImage],0,0,imageArray[currentImage].width/8,imageArray[currentImage].height/8);


  rect(hitX[0],hitY[0],hitSize,hitSize);
  rect(hitX[1],hitY[1],hitSize,hitSize);

}//end of DRAW


function mousePressed(){
  if(mouseX > hitX[0] && mouseX < hitX[0]+hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    // left hand and right hand boundary
  console.log("Button 0")
  currentImage = currentImage + 1;

  // if we know we need to cycle throuh the indices, what would we do to currentImage. Add currentImage+1

    if(currentImage == 7){
      currentImage = 0;

    }// end of CurrentImage == 3
  }// end of button Hitzone 1


  if(mouseX > hitX[1] && mouseX < hitX[1]+hitSize && mouseY > hitY[1] && mouseY < hitY[1] + hitSize){
    // left hand and right hand boundary
  console.log("Button 1")
  currentImage = currentImage - 1;

  // if we know we need to cycle throuh the indices, what would we do to currentImage. Add currentImage+1
// there can be no -1 indices
    if(currentImage == -1){
      currentImage = 6;

    }// end of CurrentImage == 0
  }// end of button Hitzone 2

}// end of MOUSEPRESSED
