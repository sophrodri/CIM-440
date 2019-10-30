// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22

var puppy, dinosaur, sloth;
  // shortcut to make multile variables ^

var pButton, dButton, sButton;

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


function preload() {
  //load media
  imageArray[0] = loadImage("images/puppy.jpg");
  imageArray[1] = loadImage("images/dinosaur.jpg");
  imageArray[2] = loadImage("images/sloth.jpg");

}//end of PRELOAD


function setup() {
  // put setup code here
createCanvas(400,400);

pButton = createButton("puppy");
pButton.mousePressed(function(){
  currentImage = 0;
});

dButton = createButton("dinosaur");
dButton.mousePressed(function(){
  currentImage = 1;
});

sButton = createButton("sloth");
sButton.mousePressed(function(){
  currentImage = 2;
});


}//end of SETUP


function draw() {
  // put drawing code here

background(255);
console.log("currentImage" + currentImage);

  image(imageArray[currentImage],0,0,imageArray[currentImage].width/4,imageArray[currentImage].height/4);


}//end of DRAW
