// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22

var puppy, dinosaur, sloth;
  // shortcut to make multile variables ^

var pButton, dButton, sButton;

var currentImage = 0;
//a number that corresponds to each image

//var currentAnimal; this does not work because puppy has no value at this point of the program





function preload() {
  //load media
  puppy = loadImage("images/puppy.jpg");
  dinosaur = loadImage("images/dinosaur.jpg");
  sloth = loadImage("images/sloth.jpg");

}//end of PRELOAD



function setup() {
  // put setup code here
createCanvas(400,400);

pButton = createButton("puppy");
pButton.mousePressed(function(){
  currentImage = 0; // assign image to number
});

dButton = createButton("dinosaur");
dButton.mousePressed(function(){
  currentImage = 1; // set current image to 0
});

sButton = createButton("sloth");
sButton.mousePressed(function(){
  currentImage = 2; // set current image to 0
});

currentAnimal = puppy; // setup in here, because puppy is not defined
// Current animal is supposed to cut down the line of cold so that you dont have to type the WHOLE image file in Code.

}//end of SETUP


function draw() {
  // put drawing code here

background(255);
console.log("currentImage" + currentImage);

if(currentImage==0){
  //show puppy
  currentAnimal = puppy;

}else if(currentImage==1){
  //show dinosaur
  currentAnimal = dinosaur;

}else if(currentImage==2){
  // show sloth
  currentAnimal = sloth;
}
// if the image is 0 show puppy -> if not (else) if current imgage is 1, show dinosaur

image(currentAnimal,0,0,currentAnimal.width/4,currentAnimal.height/4);

}//end of DRAW
